
from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.database.models import Resume
from app.services.resume_parser import extract_text
from app.services.ai_parser import parse_resume
from app.schemas.job import JobDescription
from app.services.job_matcher import match_resume
from app.services.resume_score import calculate_score

import os
import shutil
import uuid

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload-resume")
async def upload_resume(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    # Get file extension
    extension = os.path.splitext(file.filename)[1]

    # Generate unique filename
    unique_filename = f"{uuid.uuid4()}{extension}"

    # Create full file path
    file_path = os.path.join(UPLOAD_FOLDER, unique_filename)

    # Save uploaded file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract resume text
    resume_text = extract_text(file_path)

    # Parse resume
    candidate = parse_resume(resume_text)

    # Save metadata to database
    resume = Resume(
        original_filename=file.filename,
        stored_filename=unique_filename,
        file_path=file_path,
        extracted_text=resume_text
    )

    db.add(resume)
    db.commit()
    db.refresh(resume)

    return {
        "message": "Resume uploaded successfully",
        "resume_id": resume.id,
        "filename": resume.original_filename,
        "preview": resume_text[:300],
        "candidate": candidate
    }


@router.post("/match-resume")
def match_resume_api(
    job: JobDescription,
    db: Session = Depends(get_db)
):
    # Find resume in database
    resume = db.query(Resume).filter(Resume.id == job.resume_id).first()

    if not resume:
        return {
            "error": "Resume not found"
        }

    # Parse stored resume text
    candidate = parse_resume(resume.extracted_text)
    score = calculate_score(candidate)

    # Match skills
    result = match_resume(candidate, job.skills)

    return {
        "candidate": candidate,
        "result": result
    }
@router.get("/candidates")
def get_candidates(db: Session = Depends(get_db)):

    resumes = db.query(Resume).all()

    candidates = []

    for resume in resumes:

        candidate = parse_resume(resume.extracted_text)
        score = calculate_score(candidate)

        candidates.append({
    "resume_id": resume.id,
    "name": candidate["name"],
    "email": candidate["email"],
    "phone": candidate["phone"],
    "skills": candidate["skills"],
    "education": candidate["education"],
    "experience": candidate["experience"],
    "score": score,
    "uploaded_at": resume.uploaded_at
})

    return {
        "total_candidates": len(candidates),
        "candidates": candidates
    }

