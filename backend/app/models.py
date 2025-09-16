from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

# Product model: represents an item in the store
class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)  # Unique product ID
    name = Column(String, nullable=False)               # Product name
    description = Column(String, nullable=True)         # Product description
    price = Column(Float, nullable=False)               # Product price
    image_url = Column(String, nullable=True)           # URL to product image

    # Relationship to cart items (not required for basic queries)
    cart_items = relationship("CartItem", back_populates="product")

# CartItem model: represents a product added to the cart
class CartItem(Base):
    __tablename__ = "cart_items"

    id = Column(Integer, primary_key=True, index=True)      # Unique cart item ID
    session_id = Column(String, index=True, nullable=False) # Session ID for guest cart
    product_id = Column(Integer, ForeignKey("products.id")) # Reference to product
    quantity = Column(Integer, nullable=False, default=1)   # How many of this product

    # Relationship to product
    product = relationship("Product", back_populates="cart_items")