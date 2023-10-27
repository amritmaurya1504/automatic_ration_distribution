from flask import Flask, jsonify
from server.controllers.user_controller import user_blueprint
from server.config.db import db

app = Flask(__name__)

@app.route('/')
def hello_world():
    return jsonify({'message': 'Automatic Ration Distribution System Server!'})

app.register_blueprint(user_blueprint)

if __name__ == '__main__':
    app.run(debug=True)
