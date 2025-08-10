from fastapi import FastAPI
from backend.api.route_chat import router as chat_router
from backend.api.route_user import router as user_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router, prefix="/chat", tags=["chat"])
app.include_router(user_router, prefix="/user", tags=["user"])

@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}