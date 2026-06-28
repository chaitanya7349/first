from app.services.ai_parser import parse_resume
from app.services.job_matcher import match_resume
from app.services.resume_score import calculate_score


def rank_candidates(resumes, job_skills):

    ranked = []

    for resume in resumes:

        candidate = parse_resume(resume.extracted_text)

        match = match_resume(candidate, job_skills)

        resume_score = calculate_score(candidate)

        final_score = int(
            (resume_score + match["match_score"]) / 2
        )

        ranked.append({
            "resume_id": resume.id,
            "name": candidate["name"],
            "email": candidate["email"],
            "resume_score": resume_score,
            "job_match": match["match_score"],
            "final_score": final_score,
            "matched_skills": match["matched_skills"],
            "missing_skills": match["missing_skills"]
        })

    ranked.sort(
        key=lambda x: x["final_score"],
        reverse=True
    )

    for i, candidate in enumerate(ranked):
        candidate["rank"] = i + 1

    return ranked