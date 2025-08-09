from typing import List
from backend.models.user_model import UserModel,LoginUserModel,LoginResponse
from backend.services.user_service import register_user, get_all_user, login_user
from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.post("/register", response_model=UserModel)
async def register_user_endpoint(user_data: UserModel):
    return await register_user(user_data.dict())

@router.get("/getAllUsers", response_model=List[UserModel])
async def get_all_users_endpoint():
    users = await get_all_user()
    if not users:
        return []
    return users

@router.post("/login", response_model=LoginResponse)
async def login_user_endpoint(login_details: LoginUserModel):
    db_user = await login_user(login_details.dict())

    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {
        "message": "Login successful",
        "data": db_user
    }