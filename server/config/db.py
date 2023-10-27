# db.py
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure
from server.config import db_config

# Creating a MongoDB client
client = MongoClient(db_config.Config.MONGO_URI)

try:
    # The ismaster command is cheap and does not require auth.
    client.admin.command('ismaster')
    print("MongoDB connection successful")
except ConnectionFailure:
    print("MongoDB connection failed")

# Specify the database to be used
db = client[db_config.Config.MONGO_DBNAME]
