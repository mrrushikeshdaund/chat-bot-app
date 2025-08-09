from fastapi import APIRouter
from app.services.chat_service import get_chat_response
from app.models.chat_model import ChatModel

router = APIRouter()

@router.post("/")
def chat(chat_model: ChatModel):
    response = get_chat_response(chat_model.message)
    return {"response": response}