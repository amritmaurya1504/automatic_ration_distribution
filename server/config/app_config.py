# config.py
import os

class Config:
    DEBUG = True  # Set to False in production
    # MongoDB Database Details
    MONGO_DBNAME = 'ration_distribution'
    MONGO_URI = 'mongodb://localhost:27017/ration_distribution'
    JWT_SECRET_KEY = 'ciZWCvvoTCu4KxpbXl0suGMETT8hWCzkwXRmc260YmAsGSLFg6'



