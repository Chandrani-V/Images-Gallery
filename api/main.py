import requests
from flask import Flask,request
from dotenv import load_dotenv
import os
#flask is a module, every single .py file is module

load_dotenv(dotenv_path="./.env.local")
UNSPLASH_URL='https://api.unsplash.com/photos/random'
UNSPLASH_KEY=os.environ.get("UNSPLASH_KEY","")

if not UNSPLASH_KEY:
    raise EnvironmentError("Please add UNSPLASH KEY to .env.local")

app=Flask(__name__)

@app.route("/new-image")
def new_image():
    word=request.args.get("query")
    headers={
        "Authorization": "Client-ID "+ UNSPLASH_KEY,
        "Accept-Version":"v1"
    }
    params={ "query":word }
    response=requests.get(url=UNSPLASH_URL,headers=headers,params=params)
    return response.json()

if __name__=="__main__":
    app.run()