from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from contextlib import asynccontextmanager
import os
from dotenv import load_dotenv

# Import database and routes
from .database import create_indexes
from routes.auth_routes import router as auth_router
from routes.events_routes import router as events_router
from routes.news_routes import router as news_router
from routes.resources_routes import router as resources_router
from routes.gallery_routes import router as gallery_router
from routes.newsletter_routes import router as newsletter_router

# Load environment variables
load_dotenv()

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan events"""
    # Startup
    await create_indexes()
    print("Database indexes created")
    yield
    # Shutdown
    print("Application shutting down")

# Create FastAPI app
app = FastAPI(
    title="Mbonambi Community Trust API",
    description="Community management platform for Mbonambi Community Trust",
    version="1.0.0",
    lifespan=lifespan
)

# CORS configuration
CORS_ORIGINS = os.getenv("CORS_ORIGINS", "http://localhost:8080,http://localhost:3000,http://localhost:5173").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth_router)
app.include_router(events_router)
app.include_router(news_router)
app.include_router(resources_router)
app.include_router(gallery_router)
app.include_router(newsletter_router)

@app.get("/api")
async def root():
    """Root endpoint"""
    return {
        "message": "Mbonambi Community Trust API",
        "version": "1.0.0",
        "status": "active"
    }

@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "message": "Community management platform is running"
    }

@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    """Global exception handler"""
    print(f"Global exception handler caught: {exc}")
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error"}
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "server:app",
        host="0.0.0.0",
        port=8001,
        reload=True
    )
