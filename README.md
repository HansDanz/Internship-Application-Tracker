# Internship-Application-Tracker
A full-stack web application for tracking internship and job applications with status progression and CRUD functionality. Doubles as a Self-directed learning project to learn React, FastAPI, SQL, and Docker

---

## Overview

This project helps students track their internship applications and manage the progress of each application from preparation to final decision.

---

## Tech Stack

Frontend:
- React

Backend:
- FastAPI

Database:
- SQLite
- SQLAlchemy ORM

Other Tools:
- Python
- JavaScript
- REST APIs

---

## Features

- Add new job applications
- Edit application details
- Delete applications
- Track status progression
- Status transitions (Prepping Application → Applied → Interview → Accepted / Rejected)

---

## Demo Video

[![Watch the video](https://img.youtube.com/vi/EMFvrXlyrl8/0.jpg)](https://www.youtube.com/watch?v=EMFvrXlyrl8)

---

## Architecture

React Frontend  
→ Fetch API requests  
→ FastAPI Backend  
→ SQLAlchemy ORM  
→ SQLite Database

This architecture separates the frontend interface from the backend API and database layer.

---

## Usage Procedure

1. Clone the repository:
```
git clone https://github.com/HansDanz/Internship-Application-Tracker.git
cd Internship-Application-Tracker
```

2. Install Docker Desktop

3. Build the Docker images:
```
docker compose build
```

4. Start the application:
```
docker compose up -d
```

5. Access the app:
- Frontend (Vite): http://localhost:5173
- Backend API (FastAPI): http://localhost:8000

6. Stop the app:
```
docker compose down
```
