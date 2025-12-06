import base64
import uuid
import os
import aioboto3
from PIL import Image
from io import BytesIO
from typing import Optional
from fastapi import UploadFile

def validate_and_process_image(image_data: str, max_size: tuple = (800, 600)) -> Optional[str]:
    """
    Validate and process base64 image data
    Returns processed base64 image or None if invalid
    """
    try:
        # Remove data URL prefix if present
        if image_data.startswith('data:image'):
            image_data = image_data.split(',')[1]
        
        # Decode base64
        image_bytes = base64.b64decode(image_data)
        
        # Open and validate image
        image = Image.open(BytesIO(image_bytes))
        
        # Convert to RGB if necessary
        if image.mode not in ('RGB', 'RGBA'):
            image = image.convert('RGB')
        
        # Resize if too large
        if image.size[0] > max_size[0] or image.size[1] > max_size[1]:
            image.thumbnail(max_size, Image.Resampling.LANCZOS)
        
        # Convert back to base64
        output_buffer = BytesIO()
        image.save(output_buffer, format='JPEG', quality=85)
        processed_image = base64.b64encode(output_buffer.getvalue()).decode()
        
        return f"data:image/jpeg;base64,{processed_image}"
        
    except Exception as e:
        print(f"Image processing error: {e}")
        return None

def generate_unique_filename(extension: str = "") -> str:
    """Generate a unique filename"""
    unique_id = str(uuid.uuid4())
    return f"{unique_id}{extension}"

def validate_email_format(email: str) -> bool:
    """Basic email validation"""
    import re
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def sanitize_content(content: str) -> str:
    """Basic content sanitization"""
    # Remove potentially harmful scripts
    import re
    content = re.sub(r'<script.*?</script>', '', content, flags=re.DOTALL | re.IGNORECASE)
    content = re.sub(r'javascript:', '', content, flags=re.IGNORECASE)
    return content.strip()

def create_slug(title: str) -> str:
    """Create URL-friendly slug from title"""
    import re
    slug = title.lower()
    slug = re.sub(r'[^\w\s-]', '', slug)
    slug = re.sub(r'[-\s]+', '-', slug)
    return slug.strip('-')

def truncate_text(text: str, length: int = 150) -> str:
    """Truncate text to specified length with ellipsis"""
    if len(text) <= length:
        return text
    return text[:length].rstrip() + "..."

async def upload_file_to_s3(file: UploadFile, folder: str = "uploads") -> str:
    """
    Upload a file to AWS S3 and return the public URL
    
    Args:
        file: The uploaded file
        folder: The folder path in S3 (e.g., 'documents', 'tenders')
    
    Returns:
        The public URL of the uploaded file
    """
    # Read file content
    content = await file.read()
    
    # Generate unique filename
    file_extension = os.path.splitext(file.filename)[1]
    unique_filename = generate_unique_filename(file_extension)
    s3_key = f"{folder}/{unique_filename}"
    
    # Get AWS credentials from environment
    aws_access_key = os.getenv("AWS_ACCESS_KEY_ID")
    aws_secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")
    s3_bucket = os.getenv("S3_BUCKET_NAME")
    aws_region = os.getenv("AWS_REGION", "af-south-1")
    
    if not all([aws_access_key, aws_secret_key, s3_bucket]):
        raise ValueError("AWS credentials not configured")
    
    # Upload to S3
    session = aioboto3.Session(
        aws_access_key_id=aws_access_key,
        aws_secret_access_key=aws_secret_key,
        region_name=aws_region
    )
    
    async with session.client('s3') as s3_client:
        await s3_client.put_object(
            Bucket=s3_bucket,
            Key=s3_key,
            Body=content,
            ContentType=file.content_type or 'application/octet-stream',
            ACL='public-read'
        )
    
    # Return public URL
    s3_url = f"https://{s3_bucket}.s3.{aws_region}.amazonaws.com/{s3_key}"
    return s3_url
