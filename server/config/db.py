# db.py
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure
from server.config import app_config

# Creating a MongoDB client
client = MongoClient(app_config.Config.MONGO_URI)

try:
    # The ismaster command is cheap and does not require auth.
    client.admin.command('ismaster')
    print("MongoDB connection successful")
except ConnectionFailure:
    print("MongoDB connection failed")

# Specify the database to be used
db = client[app_config.Config.MONGO_DBNAME]
