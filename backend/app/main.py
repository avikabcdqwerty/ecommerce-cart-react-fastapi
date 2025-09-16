from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import routers for products and cart
from app.routes.products import router as products_router
from app.routes.cart import router as cart_router

# Create FastAPI app
app = FastAPI(
    title="Simple Ecommerce API",
    description="Browse products and manage your shopping cart.",
    version="1.0.0"
)

# Allow frontend (like React) to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, set this to your frontend's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register product routes (for catalog and details)
app.include_router(products_router, prefix="/products", tags=["Products"])

# Register cart routes (for cart operations)
app.include_router(cart_router, prefix="/cart", tags=["Cart"])

# Simple root endpoint to check if API is running
@app.get("/")
def read_root():
    return {"message": "Welcome to the Simple Ecommerce API!"}