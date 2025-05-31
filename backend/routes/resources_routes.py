from fastapi import APIRouter, Depends, HTTPException, status, Query
from typing import Optional, List
from auth import get_current_active_user, get_current_user_optional
from database import resources_collection
from models import Resource, ResourceCreate, ResourceUpdate, User, ResourceCategory
from utils import validate_and_process_image, sanitize_content

router = APIRouter(prefix="/api/resources", tags=["resources"])

@router.post("/", response_model=Resource)
async def create_resource(
    resource: ResourceCreate,
    current_user: User = Depends(get_current_active_user)
):
    """Create a new resource"""
    resource_dict = resource.dict()
    
    # Sanitize content
    resource_dict["description"] = sanitize_content(resource_dict["description"])
    
    # Process image if provided
    if resource_dict.get("image"):
        processed_image = validate_and_process_image(resource_dict["image"])
        if not processed_image:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid image format"
            )
        resource_dict["image"] = processed_image
    
    resource_dict["created_by"] = current_user.id
    resource_dict["user_name"] = current_user.full_name
    new_resource = Resource(**resource_dict)
    
    await resources_collection.insert_one(new_resource.dict())
    return new_resource

@router.get("/", response_model=List[Resource])
async def get_resources(
    category: Optional[ResourceCategory] = None,
    limit: int = Query(default=20, le=50),
    skip: int = Query(default=0, ge=0),
    search: Optional[str] = None,
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get resources with optional filtering"""
    filter_query = {"is_active": True}
    
    if category:
        filter_query["category"] = category
    
    if search:
        filter_query["$or"] = [
            {"title": {"$regex": search, "$options": "i"}},
            {"description": {"$regex": search, "$options": "i"}}
        ]
    
    resources_cursor = resources_collection.find(filter_query).sort("created_at", -1).skip(skip).limit(limit)
    resources = []
    
    async for resource_data in resources_cursor:
        resources.append(Resource(**resource_data))
    
    return resources

@router.get("/my-resources", response_model=List[Resource])
async def get_my_resources(
    current_user: User = Depends(get_current_active_user)
):
    """Get current user's resources"""
    resources_cursor = resources_collection.find({
        "created_by": current_user.id,
        "is_active": True
    }).sort("created_at", -1)
    
    resources = []
    async for resource_data in resources_cursor:
        resources.append(Resource(**resource_data))
    
    return resources

@router.get("/{resource_id}", response_model=Resource)
async def get_resource(
    resource_id: str,
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get a specific resource"""
    resource_data = await resources_collection.find_one({
        "id": resource_id,
        "is_active": True
    })
    
    if not resource_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Resource not found"
        )
    
    return Resource(**resource_data)

@router.put("/{resource_id}", response_model=Resource)
async def update_resource(
    resource_id: str,
    resource_update: ResourceUpdate,
    current_user: User = Depends(get_current_active_user)
):
    """Update a resource - owner or admin only"""
    # Check if resource exists
    resource_data = await resources_collection.find_one({
        "id": resource_id,
        "is_active": True
    })
    
    if not resource_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Resource not found"
        )
    
    # Check permissions
    if resource_data["created_by"] != current_user.id and current_user.role != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    update_data = resource_update.dict(exclude_unset=True)
    
    # Sanitize content if provided
    if "description" in update_data:
        update_data["description"] = sanitize_content(update_data["description"])
    
    # Process image if provided
    if update_data.get("image"):
        processed_image = validate_and_process_image(update_data["image"])
        if not processed_image:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid image format"
            )
        update_data["image"] = processed_image
    
    if update_data:
        await resources_collection.update_one(
            {"id": resource_id},
            {"$set": update_data}
        )
    
    updated_resource_data = await resources_collection.find_one({"id": resource_id})
    return Resource(**updated_resource_data)

@router.delete("/{resource_id}")
async def delete_resource(
    resource_id: str,
    current_user: User = Depends(get_current_active_user)
):
    """Delete (deactivate) a resource - owner or admin only"""
    # Check if resource exists
    resource_data = await resources_collection.find_one({
        "id": resource_id,
        "is_active": True
    })
    
    if not resource_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Resource not found"
        )
    
    # Check permissions
    if resource_data["created_by"] != current_user.id and current_user.role != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    await resources_collection.update_one(
        {"id": resource_id},
        {"$set": {"is_active": False}}
    )
    
    return {"message": "Resource deleted successfully"}

@router.get("/category/{category}", response_model=List[Resource])
async def get_resources_by_category(
    category: ResourceCategory,
    limit: int = Query(default=20, le=50),
    skip: int = Query(default=0, ge=0),
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get resources by category"""
    filter_query = {"category": category, "is_active": True}
    
    resources_cursor = resources_collection.find(filter_query).sort("created_at", -1).skip(skip).limit(limit)
    resources = []
    
    async for resource_data in resources_cursor:
        resources.append(Resource(**resource_data))
    
    return resources

@router.get("/user/{user_id}", response_model=List[Resource])
async def get_user_resources(
    user_id: str,
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get resources by a specific user"""
    resources_cursor = resources_collection.find({
        "created_by": user_id,
        "is_active": True
    }).sort("created_at", -1)
    
    resources = []
    async for resource_data in resources_cursor:
        resources.append(Resource(**resource_data))
    
    return resources
