from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app import schemas, crud
from app.database import get_db

# Create a router for cart endpoints
router = APIRouter()

@router.get("/", response_model=schemas.Cart)
def get_cart(session_id: str, db: Session = Depends(get_db)):
    """
    Get all items in the cart for a user's session.
    """
    items = crud.get_cart_items(db, session_id=session_id)
    return {"items": items}

@router.post("/", response_model=schemas.CartItem)
def add_item_to_cart(item: schemas.CartItemCreate, db: Session = Depends(get_db)):
    """
    Add a product to the cart. If it already exists, increase the quantity.
    """
    db_item = crud.add_to_cart(db, item)
    return db_item

@router.put("/{cart_item_id}", response_model=schemas.CartItem)
def update_cart_item(cart_item_id: int, update: schemas.CartItemUpdate, db: Session = Depends(get_db)):
    """
    Update the quantity of a cart item.
    """
    db_item = crud.update_cart_item(db, cart_item_id, update.quantity)
    if not db_item:
        raise HTTPException(status_code=404, detail="Cart item not found")
    return db_item

@router.delete("/{cart_item_id}", response_model=schemas.CartItem)
def remove_cart_item(cart_item_id: int, db: Session = Depends(get_db)):
    """
    Remove an item from the cart.
    """
    db_item = crud.remove_cart_item(db, cart_item_id)
    if not db_item:
        raise HTTPException(status_code=404, detail="Cart item not found")
    return db_item

@router.delete("/", response_model=dict)
def clear_cart(session_id: str, db: Session = Depends(get_db)):
    """
    Remove all items from the cart for a session.
    """
    crud.clear_cart(db, session_id)
    return {"message": "Cart cleared"}