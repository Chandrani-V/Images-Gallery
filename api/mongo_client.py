from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path="./.env.local")

MONGO_URL=os.environ.get("MONGO_URL","mongo")
MONGO_USERNAME= os.environ.get("MONGO_USERNAME","root")
MONGO_PASSWORD=os.environ.get("MONGO_PASSWORD","")
MONGO_PORT=os.environ.get("MONGO_PORT",27017)


mongo_client =MongoClient(
    host=MONGO_URL,
    username=MONGO_USERNAME,
    password=MONGO_PASSWORD,
    port=MONGO_PORT
)

def insert_test_document():
    #inserts 
    db=mongo_client.test  # test id db name if not present mongo will creare one
    test_collection=db.test_collection
    test_collection.insert_one({"name":"Chandrani"})
    print(res)