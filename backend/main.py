from fastapi import FastAPI
from backend.api.route_chat import router as chat_router
from backend.api.route_user import router as user_router

app = FastAPI()

app.include_router(chat_router, prefix="/chat", tags=["chat"])
app.include_router(user_router, prefix="/user", tags=["user"])

@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}