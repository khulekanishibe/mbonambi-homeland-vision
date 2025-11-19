from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime
import uuid
from enum import Enum

class UserRole(str, Enum):
    ADMIN = "admin"
    MEMBER = "member"
    PUBLIC = "public"

class EventCategory(str, Enum):
    MEETING = "meeting"
    WORKSHOP = "workshop"
    COMMUNITY_EVENT = "community_event"
    CELEBRATION = "celebration"
    LAND_RIGHTS = "land_rights"
    DEVELOPMENT = "development"

class NewsCategory(str, Enum):
    LAND_RIGHTS = "land_rights"
    DEVELOPMENT = "development"
    COMMUNITY_NEWS = "community_news"
    ANNOUNCEMENTS = "announcements"
    SUCCESS_STORIES = "success_stories"

class ResourceCategory(str, Enum):
    SKILLS = "skills"
    TOOLS = "tools"
    SERVICES = "services"
    MATERIALS = "materials"
    KNOWLEDGE = "knowledge"

class DocumentCategory(str, Enum):
    FINANCIAL_STATEMENT = "financial_statement"
    ANNUAL_REPORT = "annual_report"
    QUARTERLY_REPORT = "quarterly_report"
    GOVERNANCE_POLICY = "governance_policy"
    MEETING_MINUTES = "meeting_minutes"
    PROGRAMME_POLICY = "programme_policy"
    APPLICATION_FORM = "application_form"
    OTHER = "other"

class ProgrammeTheme(str, Enum):
    EDUCATION = "education"
    SMME_SUPPORT = "smme_support"
    WELFARE = "welfare"
    SPORTS_CULTURE = "sports_culture"
    LAND_HOUSING = "land_housing"
    NPO_SUPPORT = "npo_support"

class TenderStatus(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
    AWARDED = "awarded"

# User Models
class UserBase(BaseModel):
    email: EmailStr
    username: str
    full_name: str
    phone: Optional[str] = None
    bio: Optional[str] = None
    skills: Optional[List[str]] = []
    role: UserRole = UserRole.MEMBER

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    phone: Optional[str] = None
    bio: Optional[str] = None
    skills: Optional[List[str]] = None

class User(UserBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    is_active: bool = True
    profile_image: Optional[str] = None

class UserInDB(User):
    hashed_password: str

# Auth Models
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

# Event Models
class EventBase(BaseModel):
    title: str
    description: str
    date: datetime
    location: str
    category: EventCategory
    max_attendees: Optional[int] = None
    image: Optional[str] = None

class EventCreate(EventBase):
    pass

class EventUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    date: Optional[datetime] = None
    location: Optional[str] = None
    category: Optional[EventCategory] = None
    max_attendees: Optional[int] = None
    image: Optional[str] = None

class Event(EventBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str
    attendee_count: int = 0
    is_active: bool = True

# RSVP Models
class RSVPCreate(BaseModel):
    event_id: str
    notes: Optional[str] = None

class RSVP(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    event_id: str
    user_id: str
    user_name: str
    user_email: str
    notes: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

# News Models
class NewsBase(BaseModel):
    title: str
    content: str
    summary: str
    category: NewsCategory
    tags: Optional[List[str]] = []
    featured_image: Optional[str] = None
    published: bool = False

class NewsCreate(NewsBase):
    pass

class NewsUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    summary: Optional[str] = None
    category: Optional[NewsCategory] = None
    tags: Optional[List[str]] = None
    featured_image: Optional[str] = None
    published: Optional[bool] = None

class News(NewsBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str
    views: int = 0

# Resource Models
class ResourceBase(BaseModel):
    title: str
    description: str
    category: ResourceCategory
    contact_info: str
    availability: str
    price: Optional[str] = None
    image: Optional[str] = None

class ResourceCreate(ResourceBase):
    pass

class ResourceUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    category: Optional[ResourceCategory] = None
    contact_info: Optional[str] = None
    availability: Optional[str] = None
    price: Optional[str] = None
    image: Optional[str] = None

class Resource(ResourceBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str
    user_name: str
    is_active: bool = True

# Gallery Models
class GalleryBase(BaseModel):
    title: str
    description: str
    image: str
    category: Optional[str] = "general"
    tags: Optional[List[str]] = []

class GalleryCreate(GalleryBase):
    pass

class Gallery(GalleryBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str

# Newsletter Models
class NewsletterSubscribe(BaseModel):
    email: EmailStr
    name: Optional[str] = None

class NewsletterSubscriber(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    name: Optional[str] = None
    subscribed_at: datetime = Field(default_factory=datetime.utcnow)
    is_active: bool = True

# Document Models (Transparency Portal)
class DocumentBase(BaseModel):
    title: str
    description: str
    category: DocumentCategory
    file_url: str
    programme_theme: Optional[ProgrammeTheme] = None
    tags: Optional[List[str]] = []

class DocumentCreate(DocumentBase):
    pass

class DocumentUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    category: Optional[DocumentCategory] = None
    file_url: Optional[str] = None
    programme_theme: Optional[ProgrammeTheme] = None
    tags: Optional[List[str]] = None

class Document(DocumentBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str
    is_active: bool = True

# Tender Models (Procurement Portal)
class TenderBase(BaseModel):
    title: str
    reference_number: str
    description: str
    document_url: str
    opening_date: datetime
    closing_date: datetime
    status: TenderStatus = TenderStatus.OPEN
    awarded_to: Optional[str] = None
    award_value_zar: Optional[float] = None

class TenderCreate(TenderBase):
    pass

class TenderUpdate(BaseModel):
    title: Optional[str] = None
    reference_number: Optional[str] = None
    description: Optional[str] = None
    document_url: Optional[str] = None
    opening_date: Optional[datetime] = None
    closing_date: Optional[datetime] = None
    status: Optional[TenderStatus] = None
    awarded_to: Optional[str] = None
    award_value_zar: Optional[float] = None

class Tender(TenderBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str
    is_active: bool = True
