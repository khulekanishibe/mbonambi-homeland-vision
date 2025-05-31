from fastapi import APIRouter, Depends, HTTPException, status, Query
from typing import Optional, List
from auth import get_current_active_user, get_admin_user, get_current_user_optional
from database import gallery_collection
from models import Gallery, GalleryCreate, User
from utils import validate_and_process_image, sanitize_content

router = APIRouter(prefix="/api/gallery", tags=["gallery"])

@router.post("/", response_model=Gallery)
async def create_gallery_item(
    gallery_item: GalleryCreate,
    current_user: User = Depends(get_admin_user)
):
    """Create a new gallery item - admin only"""
    gallery_dict = gallery_item.dict()
    
    # Sanitize content
    gallery_dict["description"] = sanitize_content(gallery_dict["description"])
    
    # Process image
    processed_image = validate_and_process_image(gallery_dict["image"])
    if not processed_image:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid image format"
        )
    gallery_dict["image"] = processed_image
    
    gallery_dict["created_by"] = current_user.id
    new_gallery_item = Gallery(**gallery_dict)
    
    await gallery_collection.insert_one(new_gallery_item.dict())
    return new_gallery_item

@router.get("/", response_model=List[Gallery])
async def get_gallery_items(
    category: Optional[str] = None,
    limit: int = Query(default=20, le=50),
    skip: int = Query(default=0, ge=0),
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get gallery items with optional filtering"""
    filter_query = {}
    
    if category:
        filter_query["category"] = category
    
    gallery_cursor = gallery_collection.find(filter_query).sort("created_at", -1).skip(skip).limit(limit)
    gallery_items = []
    
    async for gallery_data in gallery_cursor:
        gallery_items.append(Gallery(**gallery_data))
    
    return gallery_items

@router.get("/{gallery_id}", response_model=Gallery)
async def get_gallery_item(
    gallery_id: str,
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get a specific gallery item"""
    gallery_data = await gallery_collection.find_one({"id": gallery_id})
    if not gallery_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Gallery item not found"
        )
    
    return Gallery(**gallery_data)

@router.delete("/{gallery_id}")
async def delete_gallery_item(
    gallery_id: str,
    current_user: User = Depends(get_admin_user)
):
    """Delete a gallery item - admin only"""
    result = await gallery_collection.delete_one({"id": gallery_id})
    
    if result.deleted_count == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Gallery item not found"
        )
    
    return {"message": "Gallery item deleted successfully"}

@router.get("/category/{category}", response_model=List[Gallery])
async def get_gallery_by_category(
    category: str,
    limit: int = Query(default=20, le=50),
    skip: int = Query(default=0, ge=0),
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get gallery items by category"""
    filter_query = {"category": category}
    
    gallery_cursor = gallery_collection.find(filter_query).sort("created_at", -1).skip(skip).limit(limit)
    gallery_items = []
    
    async for gallery_data in gallery_cursor:
        gallery_items.append(Gallery(**gallery_data))
    
    return gallery_items
