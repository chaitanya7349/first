def match_resume(candidate, job_skills):

    candidate_skills = [
        skill.lower()
        for skill in candidate.get("skills", [])
    ]

    job_skills = [
        skill.lower()
        for skill in job_skills
    ]

    matched = []
    missing = []

    for skill in job_skills:

        if skill in candidate_skills:
            matched.append(skill)

        else:
            missing.append(skill)

    if len(job_skills) == 0:
        score = 0

    else:
        score = int(
            (len(matched) / len(job_skills)) * 100
        )

    return {
        "match_score": score,
        "matched_skills": matched,
        "missing_skills": missing
    }