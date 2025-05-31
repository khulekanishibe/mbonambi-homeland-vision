from fastapi import APIRouter, Depends, HTTPException, status, Query
from typing import Optional, List
from datetime import datetime
from auth import get_current_active_user, get_admin_user, get_current_user_optional
from database import events_collection, rsvps_collection
from models import Event, EventCreate, EventUpdate, RSVP, RSVPCreate, User, EventCategory
from utils import validate_and_process_image

router = APIRouter(prefix="/api/events", tags=["events"])

@router.post("/", response_model=Event)
async def create_event(
    event: EventCreate,
    current_user: User = Depends(get_admin_user)
):
    """Create a new event - admin only"""
    event_dict = event.dict()
    
    # Process image if provided
    if event_dict.get("image"):
        processed_image = validate_and_process_image(event_dict["image"])
        if not processed_image:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid image format"
            )
        event_dict["image"] = processed_image
    
    event_dict["created_by"] = current_user.id
    new_event = Event(**event_dict)
    
    await events_collection.insert_one(new_event.dict())
    return new_event

@router.get("/", response_model=List[Event])
async def get_events(
    category: Optional[EventCategory] = None,
    upcoming_only: bool = True,
    limit: int = Query(default=50, le=100),
    skip: int = Query(default=0, ge=0),
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get events with optional filtering"""
    filter_query = {"is_active": True}
    
    if category:
        filter_query["category"] = category
    
    if upcoming_only:
        filter_query["date"] = {"$gte": datetime.utcnow()}
    
    events_cursor = events_collection.find(filter_query).sort("date", 1).skip(skip).limit(limit)
    events = []
    
    async for event_data in events_cursor:
        events.append(Event(**event_data))
    
    return events

@router.get("/{event_id}", response_model=Event)
async def get_event(
    event_id: str,
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get a specific event"""
    event_data = await events_collection.find_one({"id": event_id, "is_active": True})
    if not event_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Event not found"
        )
    
    return Event(**event_data)

@router.put("/{event_id}", response_model=Event)
async def update_event(
    event_id: str,
    event_update: EventUpdate,
    current_user: User = Depends(get_admin_user)
):
    """Update an event - admin only"""
    update_data = event_update.dict(exclude_unset=True)
    
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
        result = await events_collection.update_one(
            {"id": event_id, "is_active": True},
            {"$set": update_data}
        )
        
        if result.matched_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Event not found"
            )
    
    updated_event_data = await events_collection.find_one({"id": event_id})
    return Event(**updated_event_data)

@router.delete("/{event_id}")
async def delete_event(
    event_id: str,
    current_user: User = Depends(get_admin_user)
):
    """Delete (deactivate) an event - admin only"""
    result = await events_collection.update_one(
        {"id": event_id, "is_active": True},
        {"$set": {"is_active": False}}
    )
    
    if result.matched_count == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Event not found"
        )
    
    return {"message": "Event deleted successfully"}

@router.post("/{event_id}/rsvp", response_model=RSVP)
async def rsvp_to_event(
    event_id: str,
    rsvp_data: RSVPCreate,
    current_user: User = Depends(get_current_active_user)
):
    """RSVP to an event"""
    # Check if event exists
    event_data = await events_collection.find_one({"id": event_id, "is_active": True})
    if not event_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Event not found"
        )
    
    event = Event(**event_data)
    
    # Check if user already RSVP'd
    existing_rsvp = await rsvps_collection.find_one({
        "event_id": event_id,
        "user_id": current_user.id
    })
    
    if existing_rsvp:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Already RSVP'd to this event"
        )
    
    # Check max attendees limit
    if event.max_attendees:
        current_attendees = await rsvps_collection.count_documents({"event_id": event_id})
        if current_attendees >= event.max_attendees:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Event is full"
            )
    
    # Create RSVP
    rsvp = RSVP(
        event_id=event_id,
        user_id=current_user.id,
        user_name=current_user.full_name,
        user_email=current_user.email,
        notes=rsvp_data.notes
    )
    
    await rsvps_collection.insert_one(rsvp.dict())
    
    # Update event attendee count
    await events_collection.update_one(
        {"id": event_id},
        {"$inc": {"attendee_count": 1}}
    )
    
    return rsvp

@router.delete("/{event_id}/rsvp")
async def cancel_rsvp(
    event_id: str,
    current_user: User = Depends(get_current_active_user)
):
    """Cancel RSVP to an event"""
    result = await rsvps_collection.delete_one({
        "event_id": event_id,
        "user_id": current_user.id
    })
    
    if result.deleted_count == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="RSVP not found"
        )
    
    # Update event attendee count
    await events_collection.update_one(
        {"id": event_id},
        {"$inc": {"attendee_count": -1}}
    )
    
    return {"message": "RSVP cancelled successfully"}

@router.get("/{event_id}/attendees", response_model=List[RSVP])
async def get_event_attendees(
    event_id: str,
    current_user: User = Depends(get_current_active_user)
):
    """Get event attendees - admin only"""
    if current_user.role != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    rsvps_cursor = rsvps_collection.find({"event_id": event_id})
    rsvps = []
    
    async for rsvp_data in rsvps_cursor:
        rsvps.append(RSVP(**rsvp_data))
    
    return rsvps

@router.get("/my-events/rsvps", response_model=List[RSVP])
async def get_my_rsvps(
    current_user: User = Depends(get_current_active_user)
):
    """Get current user's RSVPs"""
    rsvps_cursor = rsvps_collection.find({"user_id": current_user.id})
    rsvps = []
    
    async for rsvp_data in rsvps_cursor:
        rsvps.append(RSVP(**rsvp_data))
    
    return rsvps
