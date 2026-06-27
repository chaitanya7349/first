from sqlalchemy import Column, Integer, String, DateTime, Text
from datetime import datetime
from .database import Base


class Resume(Base):
    __tablename__ = "resumes"

    id = Column(Integer, primary_key=True, index=True)

    original_filename = Column(String, nullable=False)

    stored_filename = Column(String, nullable=False)

    file_path = Column(String, nullable=False)

    uploaded_at = Column(DateTime, default=datetime.utcnow)

    status = Column(String, default="Uploaded")
    extracted_text = Column(Text)


class Candidate(Base):
    __tablename__ = "candidates"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)
    email = Column(String)
    phone = Column(String)

    skills = Column(String)

    education = Column(String)

    experience = Column(String)

    resume_path = Column(String)