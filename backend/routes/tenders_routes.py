from fastapi import APIRouter, Depends, HTTPException, status, Query, UploadFile, File
from typing import Optional, List
from auth import get_admin_user, get_current_user_optional
from database import tenders_collection
from models import Tender, TenderCreate, TenderUpdate, User, TenderStatus
from utils import sanitize_content, upload_file_to_s3

router = APIRouter(prefix="/api/tenders", tags=["tenders"])

@router.post("/", response_model=Tender)
async def create_tender(
    tender: TenderCreate,
    current_user: User = Depends(get_admin_user)
):
    """Create a new tender - Admin only"""
    tender_dict = tender.dict()
    
    # Sanitize content
    tender_dict["description"] = sanitize_content(tender_dict["description"])
    
    tender_dict["created_by"] = current_user.id
    new_tender = Tender(**tender_dict)
    
    await tenders_collection.insert_one(new_tender.dict())
    return new_tender

@router.post("/upload")
async def upload_tender_document(
    file: UploadFile = File(...),
    current_user: User = Depends(get_admin_user)
):
    """Upload a tender document file to S3 - Admin only"""
    try:
        file_url = await upload_file_to_s3(file, "tenders")
        return {"file_url": file_url}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"File upload failed: {str(e)}"
        )

@router.get("/", response_model=List[Tender])
async def get_tenders(
    status_filter: Optional[TenderStatus] = Query(None, alias="status"),
    limit: int = Query(default=50, le=100),
    skip: int = Query(default=0, ge=0),
    search: Optional[str] = None,
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get tenders with optional filtering - Public access"""
    filter_query = {"is_active": True}
    
    if status_filter:
        filter_query["status"] = status_filter
    
    if search:
        filter_query["$or"] = [
            {"title": {"$regex": search, "$options": "i"}},
            {"reference_number": {"$regex": search, "$options": "i"}},
            {"description": {"$regex": search, "$options": "i"}}
        ]
    
    tenders_cursor = tenders_collection.find(filter_query).sort("closing_date", -1).skip(skip).limit(limit)
    tenders = []
    
    async for tender_data in tenders_cursor:
        tenders.append(Tender(**tender_data))
    
    return tenders

@router.get("/{tender_id}", response_model=Tender)
async def get_tender(
    tender_id: str,
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get a specific tender - Public access"""
    tender_data = await tenders_collection.find_one({
        "id": tender_id,
        "is_active": True
    })
    
    if not tender_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Tender not found"
        )
    
    return Tender(**tender_data)

@router.put("/{tender_id}", response_model=Tender)
async def update_tender(
    tender_id: str,
    tender_update: TenderUpdate,
    current_user: User = Depends(get_admin_user)
):
    """Update a tender - Admin only"""
    tender_data = await tenders_collection.find_one({
        "id": tender_id,
        "is_active": True
    })
    
    if not tender_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Tender not found"
        )
    
    update_data = tender_update.dict(exclude_unset=True)
    
    # Sanitize content if provided
    if "description" in update_data:
        update_data["description"] = sanitize_content(update_data["description"])
    
    if update_data:
        await tenders_collection.update_one(
            {"id": tender_id},
            {"$set": update_data}
        )
    
    updated_tender_data = await tenders_collection.find_one({"id": tender_id})
    return Tender(**updated_tender_data)

@router.delete("/{tender_id}")
async def delete_tender(
    tender_id: str,
    current_user: User = Depends(get_admin_user)
):
    """Delete (deactivate) a tender - Admin only"""
    tender_data = await tenders_collection.find_one({
        "id": tender_id,
        "is_active": True
    })
    
    if not tender_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Tender not found"
        )
    
    await tenders_collection.update_one(
        {"id": tender_id},
        {"$set": {"is_active": False}}
    )
    
    return {"message": "Tender deleted successfully"}

@router.put("/{tender_id}/award", response_model=Tender)
async def award_tender(
    tender_id: str,
    awarded_to: str,
    award_value_zar: float,
    current_user: User = Depends(get_admin_user)
):
    """Award a tender to a supplier - Admin only"""
    tender_data = await tenders_collection.find_one({
        "id": tender_id,
        "is_active": True
    })
    
    if not tender_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Tender not found"
        )
    
    await tenders_collection.update_one(
        {"id": tender_id},
        {"$set": {
            "status": TenderStatus.AWARDED,
            "awarded_to": awarded_to,
            "award_value_zar": award_value_zar
        }}
    )
    
    updated_tender_data = await tenders_collection.find_one({"id": tender_id})
    return Tender(**updated_tender_data)
