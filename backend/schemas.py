from pydantic import BaseModel

class ItemCreate(BaseModel): 
    customer_id: int
    email: str
    password: str 
    sms_charge: int

class ItemResponse(ItemCreate):  # Inherits from ItemCreate
    class Config:
        from_attributes = True  # Enables compatibility with SQLAlchemy ORM