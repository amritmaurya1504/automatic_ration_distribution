from flask import Flask, jsonify

import server.config.app_config
from server.controllers.user_controller import user_blueprint
from server.config.db import db
from flask_jwt_extended import JWTManager

app = Flask(__name__)

# Initialize JWT
app.config['JWT_SECRET_KEY'] = server.config.app_config.Config.JWT_SECRET_KEY
jwt = JWTManager(app)


@app.route('/')
def hello_world():
    return jsonify({'message': 'Automatic Ration Distribution System Server!'})

app.register_blueprint(user_blueprint)

if __name__ == '__main__':
    app.run(debug=True)
