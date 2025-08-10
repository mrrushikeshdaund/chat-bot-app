from dotenv import load_dotenv
import os
from groq import Groq

load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

client = Groq(api_key=api_key)

async def get_chat_response(user_input: str) -> dict:
    messages = [
        {
            "role": "user",
            "content": user_input
        }
    ]

    stream = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=messages,
        temperature=0.7,
        max_tokens=1024,
        top_p=1,
        stream=True
    )

    bot_response = ""
    for chunk in stream:
        bot_response += chunk.choices[0].delta.content or ""

    return {"data": bot_response}
