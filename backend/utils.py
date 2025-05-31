import base64
import uuid
from PIL import Image
from io import BytesIO
from typing import Optional

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
