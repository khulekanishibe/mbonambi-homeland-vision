# Mbonambi Homeland Vision Project

## Project Overview

This project is a full-stack web application designed for the Mbonambi Community Trust. It features a modern React frontend for user interaction and a robust FastAPI backend for data management and API services. The application aims to provide a platform for community management, event coordination, news dissemination, and resource sharing for the Mbonambi people.

## Technologies Used

### Frontend

*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A superset of JavaScript that adds static typing.
*   **Vite**: A fast build tool for modern web projects.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **Shadcn UI**: A collection of reusable components built with Radix UI and Tailwind CSS.
*   **React Router DOM**: For declarative routing in React applications.
*   **React i18next**: For internationalization and localization.
*   **Framer Motion**: For animations.
*   **GSAP**: For advanced animations.
*   **Spline**: For 3D web experiences.

### Backend

*   **FastAPI**: A modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.
*   **Uvicorn**: An ASGI server for FastAPI.
*   **PyMongo / Motor**: Python driver for MongoDB, with Motor providing asynchronous support.
*   **Passlib**: For password hashing.
*   **Python-dotenv**: For managing environment variables.
*   **Pillow**: For image processing.

## Project Structure

The project is organized into two main parts:

*   `frontend/` (root directory): Contains the React application.
*   `backend/`: Contains the FastAPI application.

### Key Directories

*   `src/`: Frontend source code.
    *   `src/pages/`: Main application pages (e.g., Home, Trust Overview, Events, Gallery, Get Involved).
    *   `src/components/`: Reusable React components.
    *   `src/hooks/`: Custom React hooks.
    *   `src/lib/`: Utility functions.
    *   `src/locales/`: Internationalization (i18n) translation files.
*   `backend/`: Backend source code.
    *   `backend/routes/`: API endpoint definitions for different modules (auth, events, news, gallery, newsletter, resources).
    *   `backend/models.py`: Pydantic models for data validation and serialization.
    *   `backend/database.py`: Database connection and operations (MongoDB).
    *   `backend/auth.py`: Authentication and authorization logic.
    *   `backend/utils.py`: Utility functions for the backend (e.g., image processing, content sanitization).
    *   `backend/server.py`: Main FastAPI application entry point.
*   `public/`: Static assets for the frontend (images, videos, fonts).

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   Node.js (LTS version recommended) & npm
*   Python 3.9+
*   MongoDB instance (local or cloud-hosted)

### 1. Clone the Repository

```sh
git clone <YOUR_GIT_URL>
cd mbonambi-homeland-vision
```

### 2. Backend Setup

Navigate to the `backend` directory, create a virtual environment, install dependencies, and set up environment variables.

```sh
cd backend
python -m venv venv
./venv/Scripts/activate  # On Windows
source venv/bin/activate # On macOS/Linux

pip install -r requirements.txt
```

Create a `.env` file in the `backend/` directory with your MongoDB connection string and CORS origins:

```
MONGO_URI="mongodb://localhost:27017/mbonambi_db"
SECRET_KEY="YOUR_SUPER_SECRET_KEY" # Generate a strong random key
ALGORITHM="HS256"
ACCESS_TOKEN_EXPIRE_MINUTES=30
CORS_ORIGINS="http://localhost:3000,http://localhost:5173" # Add your frontend development URLs
```

Run the backend server:

```sh
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

The backend API will be accessible at `http://localhost:8001/api`.

### 3. Frontend Setup

Open a new terminal, navigate to the project root (where `package.json` is located), and install frontend dependencies.

```sh
# If you are still in the backend directory
cd .. 

npm install
```

Run the frontend development server:

```sh
npm run dev
```

The frontend application will typically be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## API Endpoints

The backend provides the following API modules:

*   `/api/auth`: User registration, login, user management.
*   `/api/events`: Event creation, retrieval, updates, and RSVP management.
*   `/api/news`: News article creation, retrieval, updates, and publishing.
*   `/api/gallery`: Photo gallery item management.
*   `/api/newsletter`: Newsletter subscription and subscriber management.
*   `/api/resources`: Community resource sharing and management.

Detailed API documentation (Swagger UI) will be available at `http://localhost:8001/docs` when the backend server is running.

## Deployment

This project can be deployed using various methods. The current setup is integrated with Lovable for easy deployment.

### Using Lovable

Simply open your [Lovable Project](https://lovable.dev/projects/0b08bfd2-e30b-4af2-920e-1cb38f6e893a) and click on Share -> Publish.

### General Deployment Considerations

For self-hosting, you would typically:
*   Deploy the FastAPI backend to a server (e.g., using Gunicorn/Uvicorn with Nginx/Caddy, or a platform like Render, Heroku).
*   Build the React frontend (`npm run build`) and serve the static files using a web server (Nginx, Apache) or a static site hosting service (Netlify, Vercel).
*   Ensure your MongoDB instance is accessible from your deployed backend.
*   Configure environment variables for production, especially `SECRET_KEY` and `CORS_ORIGINS`.

## Contributing

Contributions are welcome! Please follow standard Git workflow: fork the repository, create a new branch for your features or bug fixes, and submit a pull request.

## License

[Add your license information here, e.g., MIT License]

## Contact

For questions or support, please contact [Your Contact Information or Project Email].