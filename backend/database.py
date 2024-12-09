# import os
# from supabase import create_client, Client

# url: str = os.environ.get("SUPABASE_DB_URL")
# key: str = os.environ.get("SUPABASE_DB_PASS")
# supabase: Client = create_client(url, key)







from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("SUPABASE_DB_URL")
# print("===" * 30)
print(DATABASE_URL)
# print("===" * 30)

engine = create_engine(DATABASE_URL)
# print("+++" * 30)

# print("vor session")
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine) 
# print("in session ")
Base = declarative_base()
# print("In basedajkhfasdhf")