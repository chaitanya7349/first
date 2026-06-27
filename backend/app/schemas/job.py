from pydantic import BaseModel

class JobDescription(BaseModel):
    resume_id:int
    skills: list[str]