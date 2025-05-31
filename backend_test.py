
import requests
import json
import time
import uuid
from datetime import datetime, timedelta

# Base URL for API
BASE_URL = "http://localhost:8001/api"

# Test data
admin_user = {
    "email": f"admin_{uuid.uuid4()}@example.com",
    "password": "Admin123!",
    "first_name": "Admin",
    "last_name": "User",
    "phone": "1234567890"
}

regular_user = {
    "email": f"user_{uuid.uuid4()}@example.com",
    "password": "User123!",
    "first_name": "Regular",
    "last_name": "User",
    "phone": "0987654321"
}

# Store tokens
admin_token = None
user_token = None

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
        success = response.status_code == 201
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
        response = requests.post(f"{BASE_URL}/auth/login", data=login_data)
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

def test_events_management(admin_token, user_token):
    """Test events management endpoints"""
    # Test data
    event_data = {
        "title": f"Test Event {uuid.uuid4()}",
        "description": "This is a test event created by the automated test script",
        "location": "Test Location",
        "start_date": (datetime.now() + timedelta(days=7)).isoformat(),
        "end_date": (datetime.now() + timedelta(days=8)).isoformat(),
        "image_url": "https://example.com/image.jpg",
        "is_featured": True
    }
    
    # Test creating event as admin
    try:
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.post(f"{BASE_URL}/events", json=event_data, headers=headers)
        admin_create_success = response.status_code == 201
        admin_create_message = response.json() if admin_create_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Create Event as Admin", admin_create_success, admin_create_message)
        
        if admin_create_success:
            event_id = response.json().get("id")
        else:
            event_id = None
    except Exception as e:
        print_test_result("Create Event as Admin", False, str(e))
        admin_create_success = False
        event_id = None
    
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
    
    # Test RSVP to event as regular user
    if event_id:
        try:
            headers = {"Authorization": f"Bearer {user_token}"}
            rsvp_data = {"status": "attending"}
            response = requests.post(f"{BASE_URL}/events/{event_id}/rsvp", json=rsvp_data, headers=headers)
            rsvp_success = response.status_code == 200
            rsvp_message = response.json() if rsvp_success else f"Status code: {response.status_code}, Response: {response.text}"
            print_test_result("RSVP to Event", rsvp_success, rsvp_message)
        except Exception as e:
            print_test_result("RSVP to Event", False, str(e))
            rsvp_success = False
    
    return admin_create_success and user_create_success and get_events_success

def test_news_management(admin_token, user_token):
    """Test news management endpoints"""
    # Test data
    news_data = {
        "title": f"Test News {uuid.uuid4()}",
        "content": "This is a test news article created by the automated test script",
        "image_url": "https://example.com/news-image.jpg",
        "is_published": True
    }
    
    # Test creating news as admin
    try:
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.post(f"{BASE_URL}/news", json=news_data, headers=headers)
        admin_create_success = response.status_code == 201
        admin_create_message = response.json() if admin_create_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Create News as Admin", admin_create_success, admin_create_message)
        
        if admin_create_success:
            news_id = response.json().get("id")
        else:
            news_id = None
    except Exception as e:
        print_test_result("Create News as Admin", False, str(e))
        admin_create_success = False
        news_id = None
    
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
    
    return admin_create_success and user_create_success and get_news_success

def test_resources_marketplace(admin_token, user_token):
    """Test resources marketplace endpoints"""
    # Test data
    resource_data = {
        "title": f"Test Resource {uuid.uuid4()}",
        "description": "This is a test resource created by the automated test script",
        "category": "skills",
        "contact_info": "test@example.com",
        "image_url": "https://example.com/resource-image.jpg"
    }
    
    # Test creating resource as regular user
    try:
        headers = {"Authorization": f"Bearer {user_token}"}
        response = requests.post(f"{BASE_URL}/resources", json=resource_data, headers=headers)
        user_create_success = response.status_code == 201
        user_create_message = response.json() if user_create_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Create Resource as Regular User", user_create_success, user_create_message)
    except Exception as e:
        print_test_result("Create Resource as Regular User", False, str(e))
        user_create_success = False
    
    # Test getting all resources (public endpoint)
    try:
        response = requests.get(f"{BASE_URL}/resources")
        get_resources_success = response.status_code == 200
        get_resources_message = f"Found {len(response.json())} resources" if get_resources_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Get All Resources", get_resources_success, get_resources_message)
    except Exception as e:
        print_test_result("Get All Resources", False, str(e))
        get_resources_success = False
    
    return user_create_success and get_resources_success

def test_gallery_management(admin_token, user_token):
    """Test gallery management endpoints"""
    # Test data
    gallery_item_data = {
        "title": f"Test Gallery Item {uuid.uuid4()}",
        "description": "This is a test gallery item created by the automated test script",
        "image_url": "https://example.com/gallery-image.jpg"
    }
    
    # Test creating gallery item as admin
    try:
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.post(f"{BASE_URL}/gallery", json=gallery_item_data, headers=headers)
        admin_create_success = response.status_code == 201
        admin_create_message = response.json() if admin_create_success else f"Status code: {response.status_code}, Response: {response.text}"
        print_test_result("Create Gallery Item as Admin", admin_create_success, admin_create_message)
    except Exception as e:
        print_test_result("Create Gallery Item as Admin", False, str(e))
        admin_create_success = False
    
    # Test creating gallery item as regular user (should fail)
    try:
        headers = {"Authorization": f"Bearer {user_token}"}
        response = requests.post(f"{BASE_URL}/gallery", json=gallery_item_data, headers=headers)
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
    
    return admin_create_success and user_create_success and get_gallery_success

def test_newsletter_subscription():
    """Test newsletter subscription endpoint"""
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
        return subscribe_success
    except Exception as e:
        print_test_result("Newsletter Subscription", False, str(e))
        return False

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
    
    # Test content management
    print("\n--- Testing Content Management ---\n")
    
    # Test events management
    print("\n-- Events Management --\n")
    events_success = test_events_management(admin_token, user_token)
    
    # Test news management
    print("\n-- News Management --\n")
    news_success = test_news_management(admin_token, user_token)
    
    # Test resources marketplace
    print("\n-- Resources Marketplace --\n")
    resources_success = test_resources_marketplace(admin_token, user_token)
    
    # Test gallery management
    print("\n-- Gallery Management --\n")
    gallery_success = test_gallery_management(admin_token, user_token)
    
    # Test newsletter subscription
    print("\n-- Newsletter Subscription --\n")
    newsletter_success = test_newsletter_subscription()
    
    # Print summary
    print("\n=== Test Summary ===\n")
    
    all_passed = all([
        root_success, health_success,
        admin_reg_success, admin_login_success, admin_info_success,
        user_reg_success, user_login_success, user_info_success,
        events_success, news_success, resources_success, gallery_success, newsletter_success
    ])
    
    if all_passed:
        print("✅ All tests passed successfully!")
    else:
        print("❌ Some tests failed. See details above.")
    
    return all_passed

if __name__ == "__main__":
    run_all_tests()
