
from  backend.database.mongodb_connect import database
from bson import ObjectId

async def register_user(user_data: dict) -> dict:
    user_collection = database['users']
    result = await user_collection.insert_one(user_data)
    return {"user_id": str(result.inserted_id), **user_data}


async def get_all_user():
    return await database['users'].find().to_list(length=None)

async def login_user(login_details: dict):
    userData = await database["users"].find_one({
        "username": login_details["username"],
        "password": login_details["password"]
    })

    if userData:
        if "_id" in userData and isinstance(userData["_id"], ObjectId):
            userData["_id"] = str(userData["_id"])
        return userData  # only the user data
    else:
        return None