# controllers.py
from flask import jsonify, Blueprint

# Create a Blueprint for the controllers.
user_blueprint = Blueprint('userEndpoints', __name__)

@user_blueprint.route('/api/register', methods=['GET'])
def register():
    # This is where you might fetch or manipulate data.
    return jsonify({'message': 'This is Register Endpoint'})

@user_blueprint.route('/api/login', methods=['GET'])
def login():
    return jsonify({'message': 'This is Login Endpoint'})
