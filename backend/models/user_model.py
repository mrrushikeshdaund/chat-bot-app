from pydantic import BaseModel
from typing import Optional

class UserModel(BaseModel):
    username: str
    email: str
    password: str
    full_name: str = None
    is_active: bool = True
    is_verified: bool = False
    created_at: str = None
    _id: str = None  # MongoDB ObjectId will be converted to string

class LoginUserModel(BaseModel):
    username: str
    password: str

class LoginResponse(BaseModel):
    message: str
    data: Optional[UserModel]