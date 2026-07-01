from jose import JWTError, jwt
from datetime import datetime, timedelta

# Secret key (change this in production)
SECRET_KEY = "ai_recruitment_secret_key"

# JWT Algorithm
ALGORITHM = "HS256"

# Token expiry (30 minutes)
ACCESS_TOKEN_EXPIRE_MINUTES = 30


# Create JWT token
def create_access_token(data: dict):

    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return encoded_jwt


# Verify JWT token
def verify_access_token(token: str):

    try:

        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        return payload

    except JWTError:
        return None