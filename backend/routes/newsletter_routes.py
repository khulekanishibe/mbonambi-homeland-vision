from fastapi import APIRouter, Depends, HTTPException, status, Query
from typing import List
from auth import get_admin_user, get_current_user_optional
from database import newsletter_collection
from models import NewsletterSubscribe, NewsletterSubscriber, User
from utils import validate_email_format

router = APIRouter(prefix="/api/newsletter", tags=["newsletter"])

@router.post("/subscribe", response_model=dict)
async def subscribe_to_newsletter(
    subscription: NewsletterSubscribe,
    current_user = Depends(get_current_user_optional)
):
    """Subscribe to newsletter"""
    # Validate email format
    if not validate_email_format(subscription.email):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid email format"
        )
    
    # Check if already subscribed
    existing_subscription = await newsletter_collection.find_one({
        "email": subscription.email,
        "is_active": True
    })
    
    if existing_subscription:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already subscribed"
        )
    
    # Create subscription
    new_subscriber = NewsletterSubscriber(
        email=subscription.email,
        name=subscription.name
    )
    
    await newsletter_collection.insert_one(new_subscriber.dict())
    
    return {"message": "Successfully subscribed to newsletter"}

@router.post("/unsubscribe")
async def unsubscribe_from_newsletter(
    email: str,
    current_user = Depends(get_current_user_optional)
):
    """Unsubscribe from newsletter"""
    result = await newsletter_collection.update_one(
        {"email": email, "is_active": True},
        {"$set": {"is_active": False}}
    )
    
    if result.matched_count == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Subscription not found"
        )
    
    return {"message": "Successfully unsubscribed from newsletter"}

@router.get("/subscribers", response_model=List[NewsletterSubscriber])
async def get_newsletter_subscribers(
    limit: int = Query(default=100, le=500),
    skip: int = Query(default=0, ge=0),
    current_user: User = Depends(get_admin_user)
):
    """Get newsletter subscribers - admin only"""
    subscribers_cursor = newsletter_collection.find({
        "is_active": True
    }).sort("subscribed_at", -1).skip(skip).limit(limit)
    
    subscribers = []
    async for subscriber_data in subscribers_cursor:
        subscribers.append(NewsletterSubscriber(**subscriber_data))
    
    return subscribers

@router.get("/subscribers/count")
async def get_subscriber_count(
    current_user: User = Depends(get_admin_user)
):
    """Get total number of active subscribers - admin only"""
    count = await newsletter_collection.count_documents({"is_active": True})
    return {"total_subscribers": count}

@router.delete("/subscribers/{subscriber_id}")
async def remove_subscriber(
    subscriber_id: str,
    current_user: User = Depends(get_admin_user)
):
    """Remove a subscriber - admin only"""
    result = await newsletter_collection.update_one(
        {"id": subscriber_id},
        {"$set": {"is_active": False}}
    )
    
    if result.matched_count == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Subscriber not found"
        )
    
    return {"message": "Subscriber removed successfully"}
