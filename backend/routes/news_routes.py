from fastapi import APIRouter, Depends, HTTPException, status, Query
from typing import Optional, List
from datetime import datetime
from auth import get_current_active_user, get_admin_user, get_current_user_optional
from database import news_collection
from models import News, NewsCreate, NewsUpdate, User, NewsCategory
from utils import validate_and_process_image, sanitize_content, create_slug, truncate_text

router = APIRouter(prefix="/api/news", tags=["news"])

@router.post("/", response_model=News)
async def create_news(
    news: NewsCreate,
    current_user: User = Depends(get_admin_user)
):
    """Create a new news article - admin only"""
    news_dict = news.dict()
    
    # Sanitize content
    news_dict["content"] = sanitize_content(news_dict["content"])
    news_dict["summary"] = sanitize_content(news_dict["summary"])
    
    # Process featured image if provided
    if news_dict.get("featured_image"):
        processed_image = validate_and_process_image(news_dict["featured_image"])
        if not processed_image:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid image format"
            )
        news_dict["featured_image"] = processed_image
    
    news_dict["created_by"] = current_user.id
    new_news = News(**news_dict)
    
    await news_collection.insert_one(new_news.dict())
    return new_news

@router.get("/", response_model=List[News])
async def get_news(
    category: Optional[NewsCategory] = None,
    published_only: bool = True,
    limit: int = Query(default=20, le=50),
    skip: int = Query(default=0, ge=0),
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get news articles with optional filtering"""
    filter_query = {}
    
    # If not admin, only show published articles
    if not current_user or current_user.role != "admin":
        filter_query["published"] = True
    elif published_only:
        filter_query["published"] = True
    
    if category:
        filter_query["category"] = category
    
    news_cursor = news_collection.find(filter_query).sort("created_at", -1).skip(skip).limit(limit)
    news_list = []
    
    async for news_data in news_cursor:
        news_list.append(News(**news_data))
    
    return news_list

@router.get("/featured", response_model=List[News])
async def get_featured_news(
    limit: int = Query(default=5, le=10),
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get featured news articles (most recent published)"""
    filter_query = {"published": True, "featured_image": {"$ne": None}}
    
    news_cursor = news_collection.find(filter_query).sort("created_at", -1).limit(limit)
    news_list = []
    
    async for news_data in news_cursor:
        news_list.append(News(**news_data))
    
    return news_list

@router.get("/{news_id}", response_model=News)
async def get_news_article(
    news_id: str,
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get a specific news article"""
    news_data = await news_collection.find_one({"id": news_id})
    if not news_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="News article not found"
        )
    
    news_article = News(**news_data)
    
    # Check if user can view unpublished articles
    if not news_article.published and (not current_user or current_user.role != "admin"):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="News article not found"
        )
    
    # Increment view count
    await news_collection.update_one(
        {"id": news_id},
        {"$inc": {"views": 1}}
    )
    
    return news_article

@router.put("/{news_id}", response_model=News)
async def update_news(
    news_id: str,
    news_update: NewsUpdate,
    current_user: User = Depends(get_admin_user)
):
    """Update a news article - admin only"""
    update_data = news_update.dict(exclude_unset=True)
    
    # Sanitize content if provided
    if "content" in update_data:
        update_data["content"] = sanitize_content(update_data["content"])
    if "summary" in update_data:
        update_data["summary"] = sanitize_content(update_data["summary"])
    
    # Process featured image if provided
    if update_data.get("featured_image"):
        processed_image = validate_and_process_image(update_data["featured_image"])
        if not processed_image:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid image format"
            )
        update_data["featured_image"] = processed_image
    
    if update_data:
        update_data["updated_at"] = datetime.utcnow()
        result = await news_collection.update_one(
            {"id": news_id},
            {"$set": update_data}
        )
        
        if result.matched_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="News article not found"
            )
    
    updated_news_data = await news_collection.find_one({"id": news_id})
    return News(**updated_news_data)

@router.delete("/{news_id}")
async def delete_news(
    news_id: str,
    current_user: User = Depends(get_admin_user)
):
    """Delete a news article - admin only"""
    result = await news_collection.delete_one({"id": news_id})
    
    if result.deleted_count == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="News article not found"
        )
    
    return {"message": "News article deleted successfully"}

@router.post("/{news_id}/publish")
async def publish_news(
    news_id: str,
    current_user: User = Depends(get_admin_user)
):
    """Publish/unpublish a news article - admin only"""
    news_data = await news_collection.find_one({"id": news_id})
    if not news_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="News article not found"
        )
    
    new_status = not news_data.get("published", False)
    
    await news_collection.update_one(
        {"id": news_id},
        {"$set": {"published": new_status, "updated_at": datetime.utcnow()}}
    )
    
    action = "published" if new_status else "unpublished"
    return {"message": f"News article {action} successfully"}

@router.get("/category/{category}", response_model=List[News])
async def get_news_by_category(
    category: NewsCategory,
    limit: int = Query(default=20, le=50),
    skip: int = Query(default=0, ge=0),
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get news articles by category"""
    filter_query = {"category": category}
    
    # If not admin, only show published articles
    if not current_user or current_user.role != "admin":
        filter_query["published"] = True
    
    news_cursor = news_collection.find(filter_query).sort("created_at", -1).skip(skip).limit(limit)
    news_list = []
    
    async for news_data in news_cursor:
        news_list.append(News(**news_data))
    
    return news_list
