# controllers.py
from flask import jsonify, request , Blueprint
from server.config.db import db
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

# Create a Blueprint for the controllers.
user_blueprint = Blueprint('userEndpoints', __name__)

# Initialize Bcrypt
bcrypt = Bcrypt()

@user_blueprint.route('/api/register', methods=['POST'])
def register():
    data = request.json

    # List of mandatory fields
    required_fields = [
        "name", "email", "phone", "dOB", "gender",
        "address", "username", "password", "confirmPassword",
        "aadhaar", "RFID_UID"
    ]

    # Check if all fields are present
    missing_fields = [field for field in required_fields if field not in data or not data[field]]

    if missing_fields:
        return jsonify({"message": f"Please fill in the following fields: {', '.join(missing_fields)}"}), 400

    # Check if username and Email already exists in the 'user' collection
    user_collection = db.db.user
    existing_user = user_collection.find_one({
        '$or': [{'username': data['username']}, {'email': data['email']}]
    })

    if existing_user:
        if existing_user['username'] == data['username']:
            return jsonify({"message": "Username already exists!"}), 400
        if existing_user['email'] == data['email']:
            return jsonify({"message": "Email already exists!"}), 400

    # checking password and confirm password is same or not
    if data['password'] != data['confirmPassword']:
        return jsonify({"error" : "Password not matched!"}), 400

    # password hashing
    hashed_pw = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    hashed_cpw = bcrypt.generate_password_hash(data['confirmPassword']).decode('utf-8')
    data['password'] = hashed_pw
    data['confirmPassword'] = hashed_cpw


    # Store data in the 'user' collection of the MongoDB database
    savedResult = user_collection.insert_one(data)
    return jsonify({'success' : True, 'message': 'Member Registered Successfully!',
                    'user_data' : f"Member Id : {savedResult.inserted_id}"}), 200

@user_blueprint.route('/api/login', methods=['POST'])
def login():
    data = request.json

    # List of mandatory fields
    required_fields = [
        "username", "password"
    ]
    missing_fields = [field for field in required_fields if field not in data or not data[field]]
    if missing_fields:
        return jsonify({"message": f"Please fill in the following fields: {', '.join(missing_fields)}"}), 400

    # 1. Retrieve the user from the database
    user_collection = db.db.user
    user = user_collection.find_one({'username': data['username']})
    if not user:
        return jsonify({"message": "User not found!"}), 404

    # 2. Compare the provided password with the stored hashed password
    if bcrypt.check_password_hash(user['password'], data['password']):
        # Authentication successful
        user_dto = {
            "id": str(user['_id']),
            "name": user['name'],
            "username": user['username'],
            "email": user['email'],
            "phone": user['phone'],
            "gender": user['gender'],
            "dob": user['dOB'],
            "aadhaar": user['aadhaar'],
            "address": user['address']
        }
        # 3. Token generation
        access_token = create_access_token(identity={'username': user['username'], '_id': str(user['_id'])})
        return jsonify({'success': True ,'message': 'Login successful!',
                        'access_token' : access_token, 'user_data': user_dto}), 200
    else:
        return jsonify({'message': 'Invalid password!'}), 401


@user_blueprint.route('/api/get-family-members', methods=['GET'])
@jwt_required()
def getFamilyMembers():
    current_user = get_jwt_identity()

    # find user details in database
    user_collection = db.db.user
    user = user_collection.find_one({'username': current_user['username']})

    if not user:
        return jsonify({"message": "User not found!"}), 404

    # Extract familyMembers array from user
    family_members = user.get('familyMembers', [])
    print(family_members)

    return jsonify({'success': True, 'family_members': family_members}), 201

