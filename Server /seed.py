from app import create_app
from database import db
from models import Contact

def seed_database():
    app = create_app()
    with app.app_context():
        if Contact.query.count() == 0:
            sample_contacts = [
                Contact(name="John Doe", email="john.doe@example.com", phone="123-456-7890", message="Residential project."),
                Contact(name="Jane Smith", email="jane.smith@example.com", phone="098-765-4321", message="Commercial build.")
            ]
            db.session.add_all(sample_contacts)
            db.session.commit()
            print("Database seeded with sample contacts.")
        else:
            print("Database already contains data; skipping seed.")

if __name__ == '__main__':
    seed_database()