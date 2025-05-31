from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017/mbonambi_community")

# Async MongoDB client
client = AsyncIOMotorClient(MONGO_URL)
database = client.get_database()

# Collections
users_collection = database.users
events_collection = database.events
news_collection = database.news
resources_collection = database.resources
gallery_collection = database.gallery
rsvps_collection = database.rsvps
newsletter_collection = database.newsletter_subscribers

# Sync client for initial setup
sync_client = MongoClient(MONGO_URL)
sync_db = sync_client.get_database()

async def create_indexes():
    """Create database indexes for better performance"""
    # User indexes
    await users_collection.create_index("email", unique=True)
    await users_collection.create_index("username", unique=True)
    
    # Event indexes
    await events_collection.create_index("date")
    await events_collection.create_index("category")
    
    # News indexes
    await news_collection.create_index("created_at")
    await news_collection.create_index("category")
    await news_collection.create_index("published")
    
    # Resource indexes
    await resources_collection.create_index("category")
    await resources_collection.create_index("created_at")
    
    # Gallery indexes
    await gallery_collection.create_index("created_at")
    await gallery_collection.create_index("category")
