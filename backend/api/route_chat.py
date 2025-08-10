from fastapi import APIRouter
from backend.services.chat_service import get_chat_response
from backend.models.chat_model import ChatModel

router = APIRouter()

@router.post("/")
async def chat(chat_model: ChatModel):
    response = await get_chat_response(chat_model.message)
    return {"response": response}