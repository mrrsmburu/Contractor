from flask import request, jsonify
from models import Contact, db

def init_routes(app):
    @app.route('/api/contact', methods=['POST'])
    def contact():
        data = request.json
        if not data or not all(k in data for k in ('name', 'email', 'message')):
            return jsonify({"error": "Missing required fields"}), 400
        
        contact_entry = Contact(
            name=data['name'],
            email=data['email'],
            phone=data.get('phone', ''),
            message=data['message']
        )
        
        db.session.add(contact_entry)
        db.session.commit()
        
        print("Contact Form Submission:", data)
        return jsonify({"message": "Message received", "id": contact_entry.id}), 200

    # @app.route('/api/health', methods=['GET'])
    # def health():
    #     return jsonify({"status": "healthy", "message": "API is running"}), 200