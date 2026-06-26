from fastapi import FastAPI
app=FastAPI(title="AI Recruitment System",
            description="MCA Final Year Project by Chaitanya",
            version="1.0.0")
@app.get("/")
def home():
    return {
        "project":"AI Recruitment System",
        "developer":"Chaitanya",
        "message":"Backend is running successfully!"
    }
    