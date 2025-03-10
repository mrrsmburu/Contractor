from flask import Flask
from flask_cors import CORS
from config import Config
from database import db
from routes import init_routes

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    # Load configuration
    app.config.from_object(Config)
    
    # Initialize SQLAlchemy (no create_all here)
    db.init_app(app)
    
    # Register routes
    init_routes(app)
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)