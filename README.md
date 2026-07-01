# AI Recruitment System

An AI-powered Recruitment System that automates resume screening, candidate ranking, and job matching using NLP and Machine Learning techniques.

## Features

- Upload Resume (PDF)
- Resume Parsing
- Upload Job Description
- Extract Required Skills
- AI Candidate Ranking
- Resume Scoring
- Candidate Search
- Candidate Details Page
- Download Resume
- Dashboard Analytics
- Duplicate Resume Detection

## Tech Stack

### Frontend
- React.js
- Axios
- React Router
- React Icons

### Backend
- FastAPI
- Python
- SQLAlchemy
- SQLite

### AI & NLP
- Resume Parsing
- Skill Extraction
- Candidate Matching
- Resume Scoring

## Project Structure

```
AI-Recruitment-System
│
├── backend
│   ├── app
│   ├── uploads
│   ├── requirements.txt
│   └── recruitment.db
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```

## Installation

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Project Workflow

1. Upload Resume
2. Resume Parsing
3. Upload Job Description
4. Extract Required Skills
5. Match Candidate Skills
6. Calculate Resume Score
7. Rank Candidates
8. View Candidate Details
9. Download Resume

## Future Enhancements

- Admin Login
- Email Notifications
- Interview Scheduling
- Cloud Database
- Resume Recommendation
- AI Interview Assistant

## Developer

**Chaitanya**

MCA Final Year Project

AI Recruitment System
---

# Application Screenshots

## Dashboard

![Dashboard](screenshots/dashboard.png)

---

## Upload Resume

![Upload Resume](screenshots/upload-resume.png)

---

## Upload Job

![Upload Job](screenshots/upload-job.png)

---

## Candidates

![Candidates](screenshots/candidates.png)

---

## Candidate Ranking

![Candidate Ranking](screenshots/ranking.png)

---

## Candidate Details

![Candidate Details](screenshots/candidate-details.png)