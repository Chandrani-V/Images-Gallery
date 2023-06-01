from flask import Flask 
#flask is a module, every single .py file is module

app=Flask(__name__)

@app.route("/")
def hello():
    return "Hi"

if __name__=="__main__":
    app.run()