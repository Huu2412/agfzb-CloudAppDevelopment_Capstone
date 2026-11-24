# Full-Stack Capstone Project: Cars Dealership Application

## Project Overview
This capstone project is a full-stack web application developed for **Cars Dealership**, a national car retailer in the U.S. The application allows users to view dealership branches, read reviews, and submit their own reviews.

## Technologies Used
- **Frontend**: React.js, Bootstrap
- **Backend**: Django (Python), Node.js
- **Database**: SQLite, MongoDB
- **Containerization**: Docker, Kubernetes
- **Cloud Deployment**: IBM Cloud Code Engine
- **CI/CD**: GitHub Actions
- **Sentiment Analysis**: IBM Watson NLU

## Features
- Browse car dealerships by state
- View dealership reviews with sentiment analysis
- Submit reviews for dealerships
- User authentication (Register/Login/Logout)
- Admin panel for managing dealerships and reviews
- Responsive design with Bootstrap

## Project Structure
```
.
├── server/
│   ├── frontend/           # React frontend application
│   │   ├── static/         # Static HTML pages (About, Contact)
│   │   └── src/
│   │       └── components/ # React components
│   ├── djangoapp/          # Django backend application
│   └── database/           # Node.js + MongoDB microservice
├── .github/
│   └── workflows/          # CI/CD pipeline
└── README.md
```

## Getting Started

### Prerequisites
- Python 3.8+
- Node.js 14+
- Docker
- IBM Cloud account

### Installation
1. Clone the repository
2. Install Python dependencies: `pip install -r requirements.txt`
3. Run Django migrations: `python manage.py migrate`
4. Start the development server: `python manage.py runserver`

## Deployment
The application is deployed on IBM Cloud Code Engine using Docker containers.

## Author
IBM Full Stack Developer Capstone Project