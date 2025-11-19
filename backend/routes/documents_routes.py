from fastapi import APIRouter, Depends, HTTPException, status, Query, UploadFile, File
from typing import Optional, List
from auth import get_admin_user, get_current_user_optional
from database import documents_collection
from models import Document, DocumentCreate, DocumentUpdate, User, DocumentCategory, ProgrammeTheme
from utils import sanitize_content, upload_file_to_s3

router = APIRouter(prefix="/api/documents", tags=["documents"])

@router.post("/", response_model=Document)
async def create_document(
    document: DocumentCreate,
    current_user: User = Depends(get_admin_user)
):
    """Create a new document - Admin only"""
    document_dict = document.dict()
    
    # Sanitize content
    document_dict["description"] = sanitize_content(document_dict["description"])
    
    document_dict["created_by"] = current_user.id
    new_document = Document(**document_dict)
    
    await documents_collection.insert_one(new_document.dict())
    return new_document

@router.post("/upload")
async def upload_document(
    file: UploadFile = File(...),
    current_user: User = Depends(get_admin_user)
):
    """Upload a document file to S3 - Admin only"""
    try:
        file_url = await upload_file_to_s3(file, "documents")
        return {"file_url": file_url}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"File upload failed: {str(e)}"
        )

@router.get("/", response_model=List[Document])
async def get_documents(
    category: Optional[DocumentCategory] = None,
    programme_theme: Optional[ProgrammeTheme] = None,
    limit: int = Query(default=50, le=100),
    skip: int = Query(default=0, ge=0),
    search: Optional[str] = None,
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get documents with optional filtering - Public access"""
    filter_query = {"is_active": True}
    
    if category:
        filter_query["category"] = category
    
    if programme_theme:
        filter_query["programme_theme"] = programme_theme
    
    if search:
        filter_query["$or"] = [
            {"title": {"$regex": search, "$options": "i"}},
            {"description": {"$regex": search, "$options": "i"}}
        ]
    
    documents_cursor = documents_collection.find(filter_query).sort("created_at", -1).skip(skip).limit(limit)
    documents = []
    
    async for document_data in documents_cursor:
        documents.append(Document(**document_data))
    
    return documents

@router.get("/{document_id}", response_model=Document)
async def get_document(
    document_id: str,
    current_user: Optional[User] = Depends(get_current_user_optional)
):
    """Get a specific document - Public access"""
    document_data = await documents_collection.find_one({
        "id": document_id,
        "is_active": True
    })
    
    if not document_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Document not found"
        )
    
    return Document(**document_data)

@router.put("/{document_id}", response_model=Document)
async def update_document(
    document_id: str,
    document_update: DocumentUpdate,
    current_user: User = Depends(get_admin_user)
):
    """Update a document - Admin only"""
    document_data = await documents_collection.find_one({
        "id": document_id,
        "is_active": True
    })
    
    if not document_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Document not found"
        )
    
    update_data = document_update.dict(exclude_unset=True)
    
    # Sanitize content if provided
    if "description" in update_data:
        update_data["description"] = sanitize_content(update_data["description"])
    
    if update_data:
        await documents_collection.update_one(
            {"id": document_id},
            {"$set": update_data}
        )
    
    updated_document_data = await documents_collection.find_one({"id": document_id})
    return Document(**updated_document_data)

@router.delete("/{document_id}")
async def delete_document(
    document_id: str,
    current_user: User = Depends(get_admin_user)
):
    """Delete (deactivate) a document - Admin only"""
    document_data = await documents_collection.find_one({
        "id": document_id,
        "is_active": True
    })
    
    if not document_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Document not found"
        )
    
    await documents_collection.update_one(
        {"id": document_id},
        {"$set": {"is_active": False}}
    )
    
    return {"message": "Document deleted successfully"}
