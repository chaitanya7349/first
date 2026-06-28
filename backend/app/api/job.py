from fastapi import APIRouter, UploadFile, File
from app.services.resume_parser import extract_text
from app.services.ai_parser import extract_skills
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.database.models import Resume
from app.services.ranking import rank_candidates
from app.schemas.job import JobDescription

import os
import shutil
import uuid

router = APIRouter()

UPLOAD_FOLDER = "uploads/jobs"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload-job")
async def upload_job(file: UploadFile = File(...)):

    extension = os.path.splitext(file.filename)[1]

    unique_filename = f"{uuid.uuid4()}{extension}"

    file_path = os.path.join(UPLOAD_FOLDER, unique_filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = extract_text(file_path)

    skills = extract_skills(text)

    return {
    "filename": file.filename,
    "skills": skills,
    "preview": text[:300]
}
@router.post("/rank-candidates")
def rank_all_candidates(
    job: JobDescription,
    db: Session = Depends(get_db)
):

    resumes = db.query(Resume).all()

    ranking = rank_candidates(
        resumes,
        job.skills
    )

    return {
        "total_candidates": len(ranking),
        "ranking": ranking
    }