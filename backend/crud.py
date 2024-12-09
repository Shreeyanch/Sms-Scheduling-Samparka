from sqlalchemy.orm import Session
import models
import schemas

def get_items(db: Session):
    return db.query(models.Item).all()

def create_item(db: Session, item: schemas.ItemCreate):
    db_item = models.Item(customer_id=item.customer_id,email=item.email, password=item.password,sms_charge=item.sms_charge)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item