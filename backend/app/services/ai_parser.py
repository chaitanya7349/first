import re

SKILLS = [
    "Python",
    "Java",
    "C",
    "C++",
    "SQL",
    "MySQL",
    "FastAPI",
    "Flask",
    "Django",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Git",
    "Docker"
]


def parse_resume(text):
    return {
        "name": extract_name(text),
        "email": extract_email(text),
        "phone": extract_phone(text),
        "skills": extract_skills(text),
        "education": extract_education(text),
        "experience": extract_experience(text)
    }


def extract_name(text):
    lines = text.strip().split("\n")

    for line in lines:
        line = line.strip()

        if len(line) > 2 and len(line.split()) <= 4:
            return line

    return ""


def extract_email(text):
    match = re.search(
        r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}",
        text
    )

    return match.group() if match else ""


def extract_phone(text):
    match = re.search(
        r"\b\d{10}\b",
        text
    )

    return match.group() if match else ""


def extract_skills(text):

    found = []

    lower = text.lower()

    for skill in SKILLS:

        if skill.lower() in lower:
            found.append(skill)

    return found
EDUCATION = [
    "B.Tech",
    "M.Tech",
    "BCA",
    "MCA",
    "B.Sc",
    "M.Sc",
    "B.E",
    "M.E",
    "MBA",
    "Diploma",
    "PhD"
]


def extract_education(text):

    found = []

    lower_text = text.lower()

    for degree in EDUCATION:

        if degree.lower() in lower_text:
            found.append(degree)

    return found
import re

def extract_experience(text):

    pattern = r'(\d+)\+?\s*(?:years?|yrs?)'

    matches = re.findall(pattern, text, re.IGNORECASE)

    if matches:
        return matches

    return []