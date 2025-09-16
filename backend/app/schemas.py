from pydantic import BaseModel, Field
from typing import Optional, List

# Schema for a product (used for responses)
class ProductBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    image_url: Optional[str] = None

class ProductCreate(ProductBase):
    pass  # For creating a product (admin use, not needed for basic user story)

class Product(ProductBase):
    id: int

    class Config:
        orm_mode = True  # Allows reading data from ORM models

# Schema for a cart item (used for responses)
class CartItemBase(BaseModel):
    product_id: int
    quantity: int = Field(..., gt=0)  # Quantity must be greater than 0

class CartItemCreate(CartItemBase):
    session_id: str  # Needed to identify the user's cart

class CartItemUpdate(BaseModel):
    quantity: int = Field(..., gt=0)

class CartItem(CartItemBase):
    id: int
    session_id: str
    product: Product  # Nested product info

    class Config:
        orm_mode = True

# Schema for returning the whole cart
class Cart(BaseModel):
    items: List[CartItem]