# Backend - Simple Ecommerce API

This backend lets users browse products and add items to a shopping cart. It is built with FastAPI and uses SQLite for easy setup.

## Features

- View product catalog and details
- Add products to cart (no login needed)
- View, update, and remove items in your cart
- Cart persists for your session

## Getting Started

### 1. Install dependencies

Make sure you have Python 3.9+ installed.

```bash
cd backend
pip install -r requirements.txt
```

### 2. Create the database

The database will be created automatically when you run the app for the first time.

If you want to create tables manually, you can use:

```python
# In Python shell
from app.database import engine, Base
Base.metadata.create_all(bind=engine)
```

### 3. Run the FastAPI server

```bash
uvicorn app.main:app --reload
```

The API will be available at [http://localhost:8000](http://localhost:8000).

### 4. API Endpoints

- **GET /products/** - List all products
- **GET /products/{product_id}** - Get details for a product
- **GET /cart/?session_id=YOUR_SESSION** - View your cart
- **POST /cart/** - Add item to cart
- **PUT /cart/{cart_item_id}** - Update quantity of a cart item
- **DELETE /cart/{cart_item_id}** - Remove item from cart
- **DELETE /cart/?session_id=YOUR_SESSION** - Clear your cart

> The `session_id` is a string that identifies your cart. The frontend will generate and use this for guest users.

## Project Structure

```
backend/
  app/
    __init__.py
    main.py
    models.py
    schemas.py
    database.py
    crud.py
    routes/
      __init__.py
      products.py
      cart.py
  requirements.txt
  README.md
```

## Notes

- This backend is for demo and learning purposes.
- For production, use a stronger database and secure CORS settings.

---