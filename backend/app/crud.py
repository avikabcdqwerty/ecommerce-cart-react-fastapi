from sqlalchemy.orm import Session
from app import models, schemas

# ----------- Product CRUD -----------

def get_products(db: Session, skip: int = 0, limit: int = 100):
    # Get a list of products for the catalog
    return db.query(models.Product).offset(skip).limit(limit).all()

def get_product(db: Session, product_id: int):
    # Get a single product by its ID
    return db.query(models.Product).filter(models.Product.id == product_id).first()

# ----------- Cart CRUD -----------

def get_cart_items(db: Session, session_id: str):
    # Get all cart items for a user's session
    return (
        db.query(models.CartItem)
        .filter(models.CartItem.session_id == session_id)
        .all()
    )

def get_cart_item(db: Session, session_id: str, product_id: int):
    # Get a specific cart item for a product in the user's cart
    return (
        db.query(models.CartItem)
        .filter(
            models.CartItem.session_id == session_id,
            models.CartItem.product_id == product_id
        )
        .first()
    )

def add_to_cart(db: Session, item: schemas.CartItemCreate):
    # Add a product to the cart, or update quantity if already exists
    db_item = get_cart_item(db, item.session_id, item.product_id)
    if db_item:
        db_item.quantity += item.quantity
    else:
        db_item = models.CartItem(
            session_id=item.session_id,
            product_id=item.product_id,
            quantity=item.quantity
        )
        db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def update_cart_item(db: Session, cart_item_id: int, quantity: int):
    # Update the quantity of a cart item
    db_item = db.query(models.CartItem).filter(models.CartItem.id == cart_item_id).first()
    if db_item:
        db_item.quantity = quantity
        db.commit()
        db.refresh(db_item)
    return db_item

def remove_cart_item(db: Session, cart_item_id: int):
    # Remove an item from the cart
    db_item = db.query(models.CartItem).filter(models.CartItem.id == cart_item_id).first()
    if db_item:
        db.delete(db_item)
        db.commit()
    return db_item

def clear_cart(db: Session, session_id: str):
    # Remove all items from the cart for a session
    db.query(models.CartItem).filter(models.CartItem.session_id == session_id).delete()
    db.commit()