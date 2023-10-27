# config.py
import os

class Config:
    DEBUG = True  # Set to False in production
    # MongoDB Database Details
    MONGO_DBNAME = 'ration_distribution'  # You should replace this with your actual MongoDB database name.
    MONGO_URI = 'mongodb://localhost:27017/ration_distribution'  # Also, replace this with your actual MongoDB URI.

    # You can add other configuration variables here...

# You can also add different configuration classes for different environments (prod, dev, test)
