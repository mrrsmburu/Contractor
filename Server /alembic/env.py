from alembic import context
from sqlalchemy import engine_from_config, pool
import os
from app import create_app, db  # Import db directly from app if database.py is removed
from config import Config

# Alembic Config object
config = context.config

# Set the SQLAlchemy URL dynamically from Config
base_dir = os.path.abspath(os.path.dirname(__file__))  # alembic/ directory
parent_dir = os.path.dirname(base_dir)  # backend/ directory
config.set_main_option('sqlalchemy.url', Config.SQLALCHEMY_DATABASE_URI)

# Python logging
import logging
logging.basicConfig()
logging.getLogger('alembic').setLevel(logging.INFO)

# Connectable for SQLAlchemy
connectable = engine_from_config(
    config.get_section(config.config_ini_section),
    prefix='sqlalchemy.',
    poolclass=pool.NullPool
)

def run_migrations_offline():
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=None,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )
    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online():
    app = create_app()
    with app.app_context():
        with connectable.connect() as connection:
            context.configure(
                connection=connection,
                target_metadata=db.metadata
            )
            with context.begin_transaction():
                context.run_migrations()

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()