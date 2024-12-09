from sqlalchemy import Column, Integer, String
from database import Base

class Item(Base):
    __tablename__ = "items"
    customer_id = Column(Integer,primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String) 
    sms_charge = Column(Integer)