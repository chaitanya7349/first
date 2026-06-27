from fastapi import FastAPI
from app.database.database import engine
from app.database.models import Base
from app.api.resume import router as resume_router

app = FastAPI(
    title="AI Recruitment System",
    description="MCA Final Year Project by Chaitanya",
    version="1.0.0"
)
app.include_router(resume_router)
Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {
        "project": "AI Recruitment System",
        "developer": "Chaitanya",
        "message": "Backend is running successfully!"
    }