from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import models
import schemas
import crud
from database import engine, SessionLocal

# Create the database tables if they don't exist yet.
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency to get DB session.
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Function to populate dummy data if the table is empty
def populate_dummy_data(db: Session):
    # Check if the table is empty
    if not db.query(models.Item).first():
        dummy_items = [
            schemas.ItemCreate(customer_id=123, email="himan@gmail.com", password="12345",sms_charge=10), 
            schemas.ItemCreate(customer_id=345, email="gg@gmail.com", password="23455",sms_charge=10),
            schemas.ItemCreate(customer_id=586, email="ssh@gmail.com", password="2345",sms_charge=10),
        ]
        # Update or insert each dummy item
        for dummy in dummy_items:
                crud.create_item(db, dummy)
        db.commit()  # Commit changes to the database


# Startup Event to Populate Dummy Data
@app.on_event("startup")
def startup_event():
    db = SessionLocal()
    try:
        populate_dummy_data(db)
        print("Dummy data added successfully!")
    finally:
        db.close()

@app.get("/")
async def read_root():
    return {"message": "Welcome to the FastAPI with Supabase!"}

@app.get("/items/", response_model=list[schemas.ItemResponse])
async def get_items(db: Session = Depends(get_db)): 
    items = crud.get_items(db)
    print("Raw items from database:", items)
    return crud.get_items(db)

@app.post("/items/", response_model=schemas.ItemResponse)
async def create_item(item: schemas.ItemCreate, db: Session = Depends(get_db)):
    return crud.create_item(db=db, item=item)
