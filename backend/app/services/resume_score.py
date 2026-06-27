def calculate_score(candidate):

    score = 0

    # Skills (40 marks)
    score += min(len(candidate["skills"]) * 4, 40)

    # Education (20 marks)
    if len(candidate["education"]) > 0:
        score += 20

    # Experience (20 marks)
    if len(candidate["experience"]) > 0:
        score += 20

    # Name + Email + Phone (20 marks)
    if candidate["name"]:
        score += 5

    if candidate["email"]:
        score += 10

    if candidate["phone"]:
        score += 5

    return score