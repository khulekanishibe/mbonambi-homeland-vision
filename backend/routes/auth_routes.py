from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from datetime import timedelta
from auth import (
    authenticate_user, create_access_token, get_password_hash,
    get_user_by_email, get_user_by_username, get_current_active_user,
    ACCESS_TOKEN_EXPIRE_MINUTES
)
from database import users_collection
from models import UserCreate, LoginRequest, Token, User, UserUpdate, UserRole
from utils import validate_email_format

router = APIRouter(prefix="/api/auth", tags=["authentication"])
security = HTTPBearer()

@router.post("/register", response_model=dict)
async def register_user(user: UserCreate):
    """Register a new user with self-registration"""
    # Validate email format
    if not validate_email_format(user.email):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid email format"
        )
    
    # Check if user already exists
    existing_user = await get_user_by_email(user.email)
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    existing_username = await get_user_by_username(user.username)
    if existing_username:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already taken"
        )
    
    # Create new user
    hashed_password = get_password_hash(user.password)
    
    # Check if this is the first user (make them admin)
    user_count = await users_collection.count_documents({})
    role = UserRole.ADMIN if user_count == 0 else UserRole.MEMBER
    
    user_dict = user.dict()
    user_dict.pop("password")
    user_dict["hashed_password"] = hashed_password
    user_dict["role"] = role
    
    from models import User as UserModel
    new_user = UserModel(**user_dict)
    
    await users_collection.insert_one(new_user.dict())
    
    return {
        "message": "User registered successfully",
        "user_id": new_user.id,
        "role": role
    }

@router.post("/login", response_model=Token)
async def login_user(login_data: LoginRequest):
    """Login user and return access token"""
    user = await authenticate_user(login_data.email, login_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/me", response_model=User)
async def get_current_user_info(current_user: User = Depends(get_current_active_user)):
    """Get current user information"""
    return current_user

@router.put("/me", response_model=User)
async def update_current_user(
    user_update: UserUpdate,
    current_user: User = Depends(get_current_active_user)
):
    """Update current user information"""
    update_data = user_update.dict(exclude_unset=True)
    
    if update_data:
        await users_collection.update_one(
            {"id": current_user.id},
            {"$set": update_data}
        )
        
        # Get updated user
        updated_user_data = await users_collection.find_one({"id": current_user.id})
        return User(**updated_user_data)
    
    return current_user

@router.get("/users", response_model=list[User])
async def get_all_users(current_user: User = Depends(get_current_active_user)):
    """Get all users - admin only"""
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    users_cursor = users_collection.find({})
    users = []
    async for user_data in users_cursor:
        users.append(User(**user_data))
    
    return users

@router.post("/logout")
async def logout_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """Logout user (client should remove token)"""
    return {"message": "Logged out successfully"}
