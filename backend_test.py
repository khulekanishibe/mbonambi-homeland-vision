
import requests
import json
import time
import uuid
import base64
from datetime import datetime, timedelta

# Base URL for API
BASE_URL = "http://localhost:8001/api"

# Test data
admin_user = {
    "email": f"admin_{uuid.uuid4()}@example.com",
    "username": f"admin_{uuid.uuid4()}",
    "full_name": "Admin User",
    "phone": "1234567890",
    "password": "Admin123!",
    "bio": "Admin user for testing",
    "skills": ["management", "leadership"]
}

regular_user = {
    "email": f"user_{uuid.uuid4()}@example.com",
    "username": f"user_{uuid.uuid4()}",
    "full_name": "Regular User",
    "phone": "0987654321",
    "password": "User123!",
    "bio": "Regular user for testing",
    "skills": ["community", "volunteer"]
}

# Store tokens and IDs
admin_token = None
user_token = None
created_event_id = None
created_news_id = None
created_resource_id = None
created_gallery_id = None

# Test results
test_results = {}

def print_test_result(test_name, success, message=""):
    """Print test result in a formatted way"""
    result = "✅ PASSED" if success else "❌ FAILED"
    print(f"{test_name}: {result}")
    if message:
        print(f"  {message}")
    test_results[test_name] = {"success": success, "message": message}

def test_root_endpoint():
    """Test the root API endpoint"""
    try:
        response = requests.get(f"{BASE_URL}")
        success = response.status_code == 200
        message = response.json() if success else f"Status code: {response.status_code}"
        print_test_result("Root API Endpoint", success, message)
        return success
    except Exception as e:
        print_test_result("Root API Endpoint", False, str(e))
        return False

def test_health_endpoint():
    """Test the health check endpoint"""
    try:
        response = requests.get(f"{BASE_URL}/health")
        success = response.status_code == 200
        message = response.json() if success else f"Status code: {response.status_code}"
        print_test_result("Health Check Endpoint", success, message)
        return success
    except Exception as e:
        print_test_result("Health Check Endpoint", False, str(e))
        return False

def test_user_registration(user_data):
    """Test user registration"""
    try:
        response = requests.post(f"{BASE_URL}/auth/register", json=user_data)
        success = response.status_code == 200
        message = response.json() if success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("User Registration", success, message)
        return success, response.json() if success else None
    except Exception as e:
        print_test_result("User Registration", False, str(e))
        return False, None

def test_user_login(email, password):
    """Test user login"""
    try:
        login_data = {"email": email, "password": password}
        response = requests.post(f"{BASE_URL}/auth/login", json=login_data)
        success = response.status_code == 200
        message = "Login successful" if success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("User Login", success, message)
        return success, response.json().get("access_token") if success else None
    except Exception as e:
        print_test_result("User Login", False, str(e))
        return False, None

def test_get_current_user(token):
    """Test getting current user info"""
    try:
        headers = {"Authorization": f"Bearer {token}"}
        response = requests.get(f"{BASE_URL}/auth/me", headers=headers)
        success = response.status_code == 200
        message = response.json() if success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get Current User", success, message)
        return success, response.json() if success else None
    except Exception as e:
        print_test_result("Get Current User", False, str(e))
        return False, None

def test_get_all_users(admin_token):
    """Test getting all users (admin only)"""
    try:
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/auth/users", headers=headers)
        success = response.status_code == 200
        message = f"Found {len(response.json())} users" if success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get All Users (Admin)", success, message)
        return success
    except Exception as e:
        print_test_result("Get All Users (Admin)", False, str(e))
        return False

def test_get_all_users_as_regular(user_token):
    """Test getting all users as regular user (should fail)"""
    try:
        headers = {"Authorization": f"Bearer {user_token}"}
        response = requests.get(f"{BASE_URL}/auth/users", headers=headers)
        # This should fail with 403 Forbidden
        success = response.status_code == 403
        message = f"Correctly denied access: {response.status_code}" if success else f"Unexpected status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get All Users (Regular User - Should Fail)", success, message)
        return success
    except Exception as e:
        print_test_result("Get All Users (Regular User - Should Fail)", False, str(e))
        return False

def test_update_user(token, update_data):
    """Test updating user info"""
    try:
        headers = {"Authorization": f"Bearer {token}"}
        response = requests.put(f"{BASE_URL}/auth/me", json=update_data, headers=headers)
        success = response.status_code == 200
        message = response.json() if success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Update User Info", success, message)
        return success
    except Exception as e:
        print_test_result("Update User Info", False, str(e))
        return False

def generate_test_image():
    """Generate a base64 encoded test image"""
    # Create a 1x1 pixel red image
    pixel_data = bytes([255, 0, 0])  # RGB for red
    
    # Encode as base64
    base64_data = base64.b64encode(pixel_data).decode('utf-8')
    return f"data:image/jpeg;base64,{base64_data}"

def test_events_management(admin_token, user_token):
    """Test events management endpoints"""
    global created_event_id
    
    # Test data
    event_data = {
        "title": f"Test Event {uuid.uuid4()}",
        "description": "This is a test event created by the automated test script",
        "date": (datetime.utcnow() + timedelta(days=7)).isoformat(),
        "location": "Test Location",
        "category": "meeting",
        "max_attendees": 50,
        "image": generate_test_image()
    }
    
    # Test creating event as admin
    try:
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.post(f"{BASE_URL}/events", json=event_data, headers=headers)
        admin_create_success = response.status_code == 200
        admin_create_message = response.json() if admin_create_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Create Event as Admin", admin_create_success, admin_create_message)
        
        if admin_create_success:
            created_event_id = response.json().get("id")
        else:
            created_event_id = None
    except Exception as e:
        print_test_result("Create Event as Admin", False, str(e))
        admin_create_success = False
        created_event_id = None
    
    # Test creating event as regular user (should fail)
    try:
        headers = {"Authorization": f"Bearer {user_token}"}
        response = requests.post(f"{BASE_URL}/events", json=event_data, headers=headers)
        # This should fail with 403 Forbidden
        user_create_success = response.status_code == 403
        user_create_message = f"Correctly denied access: {response.status_code}" if user_create_success else f"Unexpected status code: {response.status_code}, Response: {response.text}"
        print_test_result("Create Event as Regular User (Should Fail)", user_create_success, user_create_message)
    except Exception as e:
        print_test_result("Create Event as Regular User (Should Fail)", False, str(e))
        user_create_success = False
    
    # Test getting all events (public endpoint)
    try:
        response = requests.get(f"{BASE_URL}/events")
        get_events_success = response.status_code == 200
        get_events_message = f"Found {len(response.json())} events" if get_events_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get All Events", get_events_success, get_events_message)
    except Exception as e:
        print_test_result("Get All Events", False, str(e))
        get_events_success = False
    
    # Test getting a specific event
    if created_event_id:
        try:
            response = requests.get(f"{BASE_URL}/events/{created_event_id}")
            get_event_success = response.status_code == 200
            get_event_message = response.json() if get_event_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Get Specific Event", get_event_success, get_event_message)
        except Exception as e:
            print_test_result("Get Specific Event", False, str(e))
            get_event_success = False
    else:
        get_event_success = False
        print_test_result("Get Specific Event", False, "No event ID available")
    
    # Test updating an event as admin
    if created_event_id:
        try:
            headers = {"Authorization": f"Bearer {admin_token}"}
            update_data = {"title": f"Updated Event {uuid.uuid4()}", "max_attendees": 100}
            response = requests.put(f"{BASE_URL}/events/{created_event_id}", json=update_data, headers=headers)
            update_event_success = response.status_code == 200
            update_event_message = response.json() if update_event_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Update Event as Admin", update_event_success, update_event_message)
        except Exception as e:
            print_test_result("Update Event as Admin", False, str(e))
            update_event_success = False
    else:
        update_event_success = False
        print_test_result("Update Event as Admin", False, "No event ID available")
    
    # Test RSVP to event as regular user
    if created_event_id:
        try:
            headers = {"Authorization": f"Bearer {user_token}"}
            rsvp_data = {"event_id": created_event_id, "notes": "Looking forward to it!"}
            response = requests.post(f"{BASE_URL}/events/{created_event_id}/rsvp", json=rsvp_data, headers=headers)
            rsvp_success = response.status_code == 200
            rsvp_message = response.json() if rsvp_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("RSVP to Event", rsvp_success, rsvp_message)
        except Exception as e:
            print_test_result("RSVP to Event", False, str(e))
            rsvp_success = False
    else:
        rsvp_success = False
        print_test_result("RSVP to Event", False, "No event ID available")
    
    # Test getting event attendees as admin
    if created_event_id:
        try:
            headers = {"Authorization": f"Bearer {admin_token}"}
            response = requests.get(f"{BASE_URL}/events/{created_event_id}/attendees", headers=headers)
            get_attendees_success = response.status_code == 200
            get_attendees_message = f"Found {len(response.json())} attendees" if get_attendees_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Get Event Attendees as Admin", get_attendees_success, get_attendees_message)
        except Exception as e:
            print_test_result("Get Event Attendees as Admin", False, str(e))
            get_attendees_success = False
    else:
        get_attendees_success = False
        print_test_result("Get Event Attendees as Admin", False, "No event ID available")
    
    # Test getting event attendees as regular user (should fail)
    if created_event_id:
        try:
            headers = {"Authorization": f"Bearer {user_token}"}
            response = requests.get(f"{BASE_URL}/events/{created_event_id}/attendees", headers=headers)
            # This should fail with 403 Forbidden
            get_attendees_user_success = response.status_code == 403
            get_attendees_user_message = f"Correctly denied access: {response.status_code}" if get_attendees_user_success else f"Unexpected status code: {response.status_code}, Response: {response.text}"
            print_test_result("Get Event Attendees as Regular User (Should Fail)", get_attendees_user_success, get_attendees_user_message)
        except Exception as e:
            print_test_result("Get Event Attendees as Regular User (Should Fail)", False, str(e))
            get_attendees_user_success = False
    else:
        get_attendees_user_success = False
        print_test_result("Get Event Attendees as Regular User (Should Fail)", False, "No event ID available")
    
    # Test getting user's RSVPs
    try:
        headers = {"Authorization": f"Bearer {user_token}"}
        response = requests.get(f"{BASE_URL}/events/my-events/rsvps", headers=headers)
        get_rsvps_success = response.status_code == 200
        get_rsvps_message = f"Found {len(response.json())} RSVPs" if get_rsvps_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get User's RSVPs", get_rsvps_success, get_rsvps_message)
    except Exception as e:
        print_test_result("Get User's RSVPs", False, str(e))
        get_rsvps_success = False
    
    # Test canceling RSVP
    if created_event_id and rsvp_success:
        try:
            headers = {"Authorization": f"Bearer {user_token}"}
            response = requests.delete(f"{BASE_URL}/events/{created_event_id}/rsvp", headers=headers)
            cancel_rsvp_success = response.status_code == 200
            cancel_rsvp_message = response.json() if cancel_rsvp_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Cancel RSVP", cancel_rsvp_success, cancel_rsvp_message)
        except Exception as e:
            print_test_result("Cancel RSVP", False, str(e))
            cancel_rsvp_success = False
    else:
        cancel_rsvp_success = False
        print_test_result("Cancel RSVP", False, "No event ID available or RSVP failed")
    
    # Test deleting an event as admin
    if created_event_id:
        try:
            headers = {"Authorization": f"Bearer {admin_token}"}
            response = requests.delete(f"{BASE_URL}/events/{created_event_id}", headers=headers)
            delete_event_success = response.status_code == 200
            delete_event_message = response.json() if delete_event_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Delete Event as Admin", delete_event_success, delete_event_message)
        except Exception as e:
            print_test_result("Delete Event as Admin", False, str(e))
            delete_event_success = False
    else:
        delete_event_success = False
        print_test_result("Delete Event as Admin", False, "No event ID available")
    
    return admin_create_success and user_create_success and get_events_success and get_event_success

def test_news_management(admin_token, user_token):
    """Test news management endpoints"""
    global created_news_id
    
    # Test data
    news_data = {
        "title": f"Test News {uuid.uuid4()}",
        "content": "This is a test news article created by the automated test script",
        "summary": "Test news summary",
        "category": "community_news",
        "tags": ["test", "community"],
        "featured_image": generate_test_image(),
        "published": True
    }
    
    # Test creating news as admin
    try:
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.post(f"{BASE_URL}/news", json=news_data, headers=headers)
        admin_create_success = response.status_code == 200
        admin_create_message = response.json() if admin_create_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Create News as Admin", admin_create_success, admin_create_message)
        
        if admin_create_success:
            created_news_id = response.json().get("id")
        else:
            created_news_id = None
    except Exception as e:
        print_test_result("Create News as Admin", False, str(e))
        admin_create_success = False
        created_news_id = None
    
    # Test creating news as regular user (should fail)
    try:
        headers = {"Authorization": f"Bearer {user_token}"}
        response = requests.post(f"{BASE_URL}/news", json=news_data, headers=headers)
        # This should fail with 403 Forbidden
        user_create_success = response.status_code == 403
        user_create_message = f"Correctly denied access: {response.status_code}" if user_create_success else f"Unexpected status code: {response.status_code}, Response: {response.text}"
        print_test_result("Create News as Regular User (Should Fail)", user_create_success, user_create_message)
    except Exception as e:
        print_test_result("Create News as Regular User (Should Fail)", False, str(e))
        user_create_success = False
    
    # Test getting all news (public endpoint)
    try:
        response = requests.get(f"{BASE_URL}/news")
        get_news_success = response.status_code == 200
        get_news_message = f"Found {len(response.json())} news articles" if get_news_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get All News", get_news_success, get_news_message)
    except Exception as e:
        print_test_result("Get All News", False, str(e))
        get_news_success = False
    
    # Test getting featured news
    try:
        response = requests.get(f"{BASE_URL}/news/featured")
        get_featured_success = response.status_code == 200
        get_featured_message = f"Found {len(response.json())} featured news articles" if get_featured_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get Featured News", get_featured_success, get_featured_message)
    except Exception as e:
        print_test_result("Get Featured News", False, str(e))
        get_featured_success = False
    
    # Test getting a specific news article
    if created_news_id:
        try:
            response = requests.get(f"{BASE_URL}/news/{created_news_id}")
            get_news_article_success = response.status_code == 200
            get_news_article_message = response.json() if get_news_article_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Get Specific News Article", get_news_article_success, get_news_article_message)
        except Exception as e:
            print_test_result("Get Specific News Article", False, str(e))
            get_news_article_success = False
    else:
        get_news_article_success = False
        print_test_result("Get Specific News Article", False, "No news ID available")
    
    # Test updating a news article as admin
    if created_news_id:
        try:
            headers = {"Authorization": f"Bearer {admin_token}"}
            update_data = {"title": f"Updated News {uuid.uuid4()}", "tags": ["updated", "test"]}
            response = requests.put(f"{BASE_URL}/news/{created_news_id}", json=update_data, headers=headers)
            update_news_success = response.status_code == 200
            update_news_message = response.json() if update_news_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Update News as Admin", update_news_success, update_news_message)
        except Exception as e:
            print_test_result("Update News as Admin", False, str(e))
            update_news_success = False
    else:
        update_news_success = False
        print_test_result("Update News as Admin", False, "No news ID available")
    
    # Test publish/unpublish news
    if created_news_id:
        try:
            headers = {"Authorization": f"Bearer {admin_token}"}
            response = requests.post(f"{BASE_URL}/news/{created_news_id}/publish", headers=headers)
            publish_news_success = response.status_code == 200
            publish_news_message = response.json() if publish_news_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Publish/Unpublish News", publish_news_success, publish_news_message)
        except Exception as e:
            print_test_result("Publish/Unpublish News", False, str(e))
            publish_news_success = False
    else:
        publish_news_success = False
        print_test_result("Publish/Unpublish News", False, "No news ID available")
    
    # Test getting news by category
    try:
        response = requests.get(f"{BASE_URL}/news/category/community_news")
        get_news_category_success = response.status_code == 200
        get_news_category_message = f"Found {len(response.json())} news articles in category" if get_news_category_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get News by Category", get_news_category_success, get_news_category_message)
    except Exception as e:
        print_test_result("Get News by Category", False, str(e))
        get_news_category_success = False
    
    # Test deleting a news article as admin
    if created_news_id:
        try:
            headers = {"Authorization": f"Bearer {admin_token}"}
            response = requests.delete(f"{BASE_URL}/news/{created_news_id}", headers=headers)
            delete_news_success = response.status_code == 200
            delete_news_message = response.json() if delete_news_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Delete News as Admin", delete_news_success, delete_news_message)
        except Exception as e:
            print_test_result("Delete News as Admin", False, str(e))
            delete_news_success = False
    else:
        delete_news_success = False
        print_test_result("Delete News as Admin", False, "No news ID available")
    
    return admin_create_success and user_create_success and get_news_success

def test_resources_management(admin_token, user_token):
    """Test resources management endpoints"""
    global created_resource_id
    
    # Test data
    resource_data = {
        "title": f"Test Resource {uuid.uuid4()}",
        "description": "This is a test resource created by the automated test script",
        "category": "skills",
        "contact_info": "test@example.com",
        "availability": "Weekdays",
        "price": "Free",
        "image": generate_test_image()
    }
    
    # Test creating resource as regular user
    try:
        headers = {"Authorization": f"Bearer {user_token}"}
        response = requests.post(f"{BASE_URL}/resources", json=resource_data, headers=headers)
        user_create_success = response.status_code == 200
        user_create_message = response.json() if user_create_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Create Resource as Regular User", user_create_success, user_create_message)
        
        if user_create_success:
            created_resource_id = response.json().get("id")
        else:
            created_resource_id = None
    except Exception as e:
        print_test_result("Create Resource as Regular User", False, str(e))
        user_create_success = False
        created_resource_id = None
    
    # Test getting all resources (public endpoint)
    try:
        response = requests.get(f"{BASE_URL}/resources")
        get_resources_success = response.status_code == 200
        get_resources_message = f"Found {len(response.json())} resources" if get_resources_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get All Resources", get_resources_success, get_resources_message)
    except Exception as e:
        print_test_result("Get All Resources", False, str(e))
        get_resources_success = False
    
    # Test getting a specific resource
    if created_resource_id:
        try:
            response = requests.get(f"{BASE_URL}/resources/{created_resource_id}")
            get_resource_success = response.status_code == 200
            get_resource_message = response.json() if get_resource_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Get Specific Resource", get_resource_success, get_resource_message)
        except Exception as e:
            print_test_result("Get Specific Resource", False, str(e))
            get_resource_success = False
    else:
        get_resource_success = False
        print_test_result("Get Specific Resource", False, "No resource ID available")
    
    # Test getting resources by category
    try:
        response = requests.get(f"{BASE_URL}/resources/category/skills")
        get_resources_category_success = response.status_code == 200
        get_resources_category_message = f"Found {len(response.json())} resources in category" if get_resources_category_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get Resources by Category", get_resources_category_success, get_resources_category_message)
    except Exception as e:
        print_test_result("Get Resources by Category", False, str(e))
        get_resources_category_success = False
    
    # Test getting user's resources
    try:
        headers = {"Authorization": f"Bearer {user_token}"}
        response = requests.get(f"{BASE_URL}/resources/my-resources", headers=headers)
        get_my_resources_success = response.status_code == 200
        get_my_resources_message = f"Found {len(response.json())} user resources" if get_my_resources_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get User's Resources", get_my_resources_success, get_my_resources_message)
    except Exception as e:
        print_test_result("Get User's Resources", False, str(e))
        get_my_resources_success = False
    
    # Test updating a resource as owner
    if created_resource_id:
        try:
            headers = {"Authorization": f"Bearer {user_token}"}
            update_data = {"title": f"Updated Resource {uuid.uuid4()}", "price": "Negotiable"}
            response = requests.put(f"{BASE_URL}/resources/{created_resource_id}", json=update_data, headers=headers)
            update_resource_success = response.status_code == 200
            update_resource_message = response.json() if update_resource_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Update Resource as Owner", update_resource_success, update_resource_message)
        except Exception as e:
            print_test_result("Update Resource as Owner", False, str(e))
            update_resource_success = False
    else:
        update_resource_success = False
        print_test_result("Update Resource as Owner", False, "No resource ID available")
    
    # Test updating a resource as admin (not owner)
    if created_resource_id:
        try:
            headers = {"Authorization": f"Bearer {admin_token}"}
            update_data = {"title": f"Admin Updated Resource {uuid.uuid4()}"}
            response = requests.put(f"{BASE_URL}/resources/{created_resource_id}", json=update_data, headers=headers)
            update_resource_admin_success = response.status_code == 200
            update_resource_admin_message = response.json() if update_resource_admin_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Update Resource as Admin (Not Owner)", update_resource_admin_success, update_resource_admin_message)
        except Exception as e:
            print_test_result("Update Resource as Admin (Not Owner)", False, str(e))
            update_resource_admin_success = False
    else:
        update_resource_admin_success = False
        print_test_result("Update Resource as Admin (Not Owner)", False, "No resource ID available")
    
    # Test deleting a resource as owner
    if created_resource_id:
        try:
            headers = {"Authorization": f"Bearer {user_token}"}
            response = requests.delete(f"{BASE_URL}/resources/{created_resource_id}", headers=headers)
            delete_resource_success = response.status_code == 200
            delete_resource_message = response.json() if delete_resource_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Delete Resource as Owner", delete_resource_success, delete_resource_message)
        except Exception as e:
            print_test_result("Delete Resource as Owner", False, str(e))
            delete_resource_success = False
    else:
        delete_resource_success = False
        print_test_result("Delete Resource as Owner", False, "No resource ID available")
    
    return user_create_success and get_resources_success and get_resource_success

def test_gallery_management(admin_token, user_token):
    """Test gallery management endpoints"""
    global created_gallery_id
    
    # Test data
    gallery_data = {
        "title": f"Test Gallery Item {uuid.uuid4()}",
        "description": "This is a test gallery item created by the automated test script",
        "image": generate_test_image(),
        "category": "general",
        "tags": ["test", "community"]
    }
    
    # Test creating gallery item as admin
    try:
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.post(f"{BASE_URL}/gallery", json=gallery_data, headers=headers)
        admin_create_success = response.status_code == 200
        admin_create_message = response.json() if admin_create_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Create Gallery Item as Admin", admin_create_success, admin_create_message)
        
        if admin_create_success:
            created_gallery_id = response.json().get("id")
        else:
            created_gallery_id = None
    except Exception as e:
        print_test_result("Create Gallery Item as Admin", False, str(e))
        admin_create_success = False
        created_gallery_id = None
    
    # Test creating gallery item as regular user (should fail)
    try:
        headers = {"Authorization": f"Bearer {user_token}"}
        response = requests.post(f"{BASE_URL}/gallery", json=gallery_data, headers=headers)
        # This should fail with 403 Forbidden
        user_create_success = response.status_code == 403
        user_create_message = f"Correctly denied access: {response.status_code}" if user_create_success else f"Unexpected status code: {response.status_code}, Response: {response.text}"
        print_test_result("Create Gallery Item as Regular User (Should Fail)", user_create_success, user_create_message)
    except Exception as e:
        print_test_result("Create Gallery Item as Regular User (Should Fail)", False, str(e))
        user_create_success = False
    
    # Test getting all gallery items (public endpoint)
    try:
        response = requests.get(f"{BASE_URL}/gallery")
        get_gallery_success = response.status_code == 200
        get_gallery_message = f"Found {len(response.json())} gallery items" if get_gallery_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get All Gallery Items", get_gallery_success, get_gallery_message)
    except Exception as e:
        print_test_result("Get All Gallery Items", False, str(e))
        get_gallery_success = False
    
    # Test getting a specific gallery item
    if created_gallery_id:
        try:
            response = requests.get(f"{BASE_URL}/gallery/{created_gallery_id}")
            get_gallery_item_success = response.status_code == 200
            get_gallery_item_message = response.json() if get_gallery_item_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Get Specific Gallery Item", get_gallery_item_success, get_gallery_item_message)
        except Exception as e:
            print_test_result("Get Specific Gallery Item", False, str(e))
            get_gallery_item_success = False
    else:
        get_gallery_item_success = False
        print_test_result("Get Specific Gallery Item", False, "No gallery ID available")
    
    # Test getting gallery items by category
    try:
        response = requests.get(f"{BASE_URL}/gallery/category/general")
        get_gallery_category_success = response.status_code == 200
        get_gallery_category_message = f"Found {len(response.json())} gallery items in category" if get_gallery_category_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get Gallery Items by Category", get_gallery_category_success, get_gallery_category_message)
    except Exception as e:
        print_test_result("Get Gallery Items by Category", False, str(e))
        get_gallery_category_success = False
    
    # Test deleting a gallery item as admin
    if created_gallery_id:
        try:
            headers = {"Authorization": f"Bearer {admin_token}"}
            response = requests.delete(f"{BASE_URL}/gallery/{created_gallery_id}", headers=headers)
            delete_gallery_success = response.status_code == 200
            delete_gallery_message = response.json() if delete_gallery_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("Delete Gallery Item as Admin", delete_gallery_success, delete_gallery_message)
        except Exception as e:
            print_test_result("Delete Gallery Item as Admin", False, str(e))
            delete_gallery_success = False
    else:
        delete_gallery_success = False
        print_test_result("Delete Gallery Item as Admin", False, "No gallery ID available")
    
    return admin_create_success and user_create_success and get_gallery_success

def test_newsletter_subscription():
    """Test newsletter subscription endpoints"""
    # Test data
    subscriber_data = {
        "email": f"subscriber_{uuid.uuid4()}@example.com",
        "name": "Test Subscriber"
    }
    
    # Test subscribing to newsletter
    try:
        response = requests.post(f"{BASE_URL}/newsletter/subscribe", json=subscriber_data)
        subscribe_success = response.status_code == 200
        subscribe_message = response.json() if subscribe_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Newsletter Subscription", subscribe_success, subscribe_message)
    except Exception as e:
        print_test_result("Newsletter Subscription", False, str(e))
        subscribe_success = False
    
    # Test unsubscribing from newsletter
    try:
        response = requests.post(f"{BASE_URL}/newsletter/unsubscribe", json={"email": subscriber_data["email"]})
        unsubscribe_success = response.status_code == 200
        unsubscribe_message = response.json() if unsubscribe_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Newsletter Unsubscription", unsubscribe_success, unsubscribe_message)
    except Exception as e:
        print_test_result("Newsletter Unsubscription", False, str(e))
        unsubscribe_success = False
    
    # Test getting subscribers as admin
    try:
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/newsletter/subscribers", headers=headers)
        get_subscribers_success = response.status_code == 200
        get_subscribers_message = f"Found {len(response.json())} subscribers" if get_subscribers_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get Newsletter Subscribers as Admin", get_subscribers_success, get_subscribers_message)
    except Exception as e:
        print_test_result("Get Newsletter Subscribers as Admin", False, str(e))
        get_subscribers_success = False
    
    # Test getting subscribers as regular user (should fail)
    try:
        headers = {"Authorization": f"Bearer {user_token}"}
        response = requests.get(f"{BASE_URL}/newsletter/subscribers", headers=headers)
        # This should fail with 403 Forbidden
        get_subscribers_user_success = response.status_code == 403
        get_subscribers_user_message = f"Correctly denied access: {response.status_code}" if get_subscribers_user_success else f"Unexpected status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get Newsletter Subscribers as Regular User (Should Fail)", get_subscribers_user_success, get_subscribers_user_message)
    except Exception as e:
        print_test_result("Get Newsletter Subscribers as Regular User (Should Fail)", False, str(e))
        get_subscribers_user_success = False
    
    # Test getting subscriber count as admin
    try:
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/newsletter/subscribers/count", headers=headers)
        get_count_success = response.status_code == 200
        get_count_message = response.json() if get_count_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get Subscriber Count as Admin", get_count_success, get_count_message)
    except Exception as e:
        print_test_result("Get Subscriber Count as Admin", False, str(e))
        get_count_success = False
    
    return subscribe_success and unsubscribe_success and get_subscribers_success and get_subscribers_user_success

def test_error_handling():
    """Test error handling for invalid requests"""
    # Test invalid login
    try:
        login_data = {"email": "nonexistent@example.com", "password": "wrongpassword"}
        response = requests.post(f"{BASE_URL}/auth/login", json=login_data)
        invalid_login_success = response.status_code == 401
        invalid_login_message = f"Correctly returned 401: {response.text}" if invalid_login_success else f"Unexpected status code: {response.status_code}, Response: {response.text}"
        print_test_result("Invalid Login Credentials", invalid_login_success, invalid_login_message)
    except Exception as e:
        print_test_result("Invalid Login Credentials", False, str(e))
        invalid_login_success = False
    
    # Test invalid token
    try:
        headers = {"Authorization": "Bearer invalidtoken"}
        response = requests.get(f"{BASE_URL}/auth/me", headers=headers)
        invalid_token_success = response.status_code == 401
        invalid_token_message = f"Correctly returned 401: {response.text}" if invalid_token_success else f"Unexpected status code: {response.status_code}, Response: {response.text}"
        print_test_result("Invalid Token", invalid_token_success, invalid_token_message)
    except Exception as e:
        print_test_result("Invalid Token", False, str(e))
        invalid_token_success = False
    
    # Test invalid resource ID
    try:
        response = requests.get(f"{BASE_URL}/resources/nonexistentid")
        invalid_id_success = response.status_code == 404
        invalid_id_message = f"Correctly returned 404: {response.text}" if invalid_id_success else f"Unexpected status code: {response.status_code}, Response: {response.text}"
        print_test_result("Invalid Resource ID", invalid_id_success, invalid_id_message)
    except Exception as e:
        print_test_result("Invalid Resource ID", False, str(e))
        invalid_id_success = False
    
    # Test invalid email format for newsletter
    try:
        subscriber_data = {"email": "invalidemail", "name": "Test Subscriber"}
        response = requests.post(f"{BASE_URL}/newsletter/subscribe", json=subscriber_data)
        invalid_email_success = response.status_code == 400
        invalid_email_message = f"Correctly returned 400: {response.text}" if invalid_email_success else f"Unexpected status code: {response.status_code}, Response: {response.text}"
        print_test_result("Invalid Email Format", invalid_email_success, invalid_email_message)
    except Exception as e:
        print_test_result("Invalid Email Format", False, str(e))
        invalid_email_success = False
    
    return invalid_login_success and invalid_token_success and invalid_id_success and invalid_email_success

def run_all_tests():
    """Run all tests in sequence"""
    global admin_token, user_token
    
    print("\n=== Testing Mbonambi Community Trust Backend API ===\n")
    
    # Test basic endpoints
    root_success = test_root_endpoint()
    health_success = test_health_endpoint()
    
    if not root_success or not health_success:
        print("\n❌ Basic endpoint tests failed. Stopping further tests.")
        return
    
    # Test user registration and login
    print("\n--- Testing Authentication ---\n")
    
    # Register admin user (first user should be admin)
    admin_reg_success, admin_data = test_user_registration(admin_user)
    if not admin_reg_success:
        print("\n❌ Admin user registration failed. Stopping further tests.")
        return
    
    # Login as admin
    admin_login_success, admin_token = test_user_login(admin_user["email"], admin_user["password"])
    if not admin_login_success or not admin_token:
        print("\n❌ Admin login failed. Stopping further tests.")
        return
    
    # Get admin user info
    admin_info_success, admin_info = test_get_current_user(admin_token)
    if not admin_info_success:
        print("\n❌ Getting admin info failed. Stopping further tests.")
        return
    
    # Verify admin role
    if admin_info.get("role") != "admin":
        print(f"\n❌ First user should be admin but has role: {admin_info.get('role')}")
        return
    
    # Register regular user
    user_reg_success, user_data = test_user_registration(regular_user)
    if not user_reg_success:
        print("\n❌ Regular user registration failed. Stopping further tests.")
        return
    
    # Login as regular user
    user_login_success, user_token = test_user_login(regular_user["email"], regular_user["password"])
    if not user_login_success or not user_token:
        print("\n❌ Regular user login failed. Stopping further tests.")
        return
    
    # Get regular user info
    user_info_success, user_info = test_get_current_user(user_token)
    if not user_info_success:
        print("\n❌ Getting user info failed. Stopping further tests.")
        return
    
    # Verify regular user role
    if user_info.get("role") != "member":
        print(f"\n❌ Second user should be member but has role: {user_info.get('role')}")
        return
    
    # Test user management
    get_all_users_success = test_get_all_users(admin_token)
    get_all_users_regular_success = test_get_all_users_as_regular(user_token)
    
    # Test updating user info
    update_user_success = test_update_user(user_token, {"full_name": "Updated User Name", "bio": "Updated bio"})
    
    # Test content management
    print("\n--- Testing Content Management ---\n")
    
    # Test events management
    print("\n-- Events Management --\n")
    events_success = test_events_management(admin_token, user_token)
    
    # Test news management
    print("\n-- News Management --\n")
    news_success = test_news_management(admin_token, user_token)
    
    # Test resources management
    print("\n-- Resources Management --\n")
    resources_success = test_resources_management(admin_token, user_token)
    
    # Test gallery management
    print("\n-- Gallery Management --\n")
    gallery_success = test_gallery_management(admin_token, user_token)
    
    # Test newsletter subscription
    print("\n-- Newsletter Subscription --\n")
    newsletter_success = test_newsletter_subscription()
    
    # Test error handling
    print("\n-- Error Handling --\n")
    error_handling_success = test_error_handling()
    
    # Print summary
    print("\n=== Test Summary ===\n")
    
    all_passed = all([
        root_success, health_success,
        admin_reg_success, admin_login_success, admin_info_success,
        user_reg_success, user_login_success, user_info_success,
        get_all_users_success, get_all_users_regular_success, update_user_success,
        events_success, news_success, resources_success, gallery_success, newsletter_success,
        error_handling_success
    ])
    
    if all_passed:
        print("✅ All tests passed successfully!")
    else:
        print("❌ Some tests failed. See details above.")
    
    return all_passed

if __name__ == "__main__":
    run_all_tests()
