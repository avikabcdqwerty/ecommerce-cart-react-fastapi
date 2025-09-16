# Simple Ecommerce Website

This project lets users browse products and add items to a shopping cart. No login is needed, and the cart stays during your session.

## Features

- View product catalog and details
- Add products to your cart
- See all items in your cart, update quantities, or remove them
- Cart persists for your session (guest users supported)

## Project Structure

```
.
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── database.py
│   │   ├── crud.py
│   │   └── routes/
│   │       ├── __init__.py
│   │       ├── products.py
│   │       └── cart.py
│   ├── requirements.txt
│   ├── README.md
│   └── .gitkeep
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── .gitkeep
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductCatalog.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── CartView.jsx
│   │   │   ├── CartItem.jsx
│   │   │   └── .gitkeep
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── ProductPage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   └── .gitkeep
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── cartService.js
│   │   │   └── .gitkeep
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── .gitkeep
│   ├── package.json
│   ├── README.md
│   └── .gitkeep
├── README.md
└── .gitkeep
```

## How to Run

### 1. Start the Backend (API)

- Make sure you have Python 3.9+ installed.
- Go to the `backend` folder and install dependencies:

  ```bash
  cd backend
  pip install -r requirements.txt
  ```

- Run the FastAPI server:

  ```bash
  uvicorn app.main:app --reload
  ```

- The API will be at [http://localhost:8000](http://localhost:8000).

### 2. Start the Frontend (React)

- Make sure you have Node.js and npm installed.
- Go to the `frontend` folder and install dependencies:

  ```bash
  cd frontend
  npm install
  ```

- Run the React app:

  ```bash
  npm start
  ```

- The app will open at [http://localhost:3000](http://localhost:3000).

### 3. Using the App

- Browse products on the home page.
- Click a product to see details and add it to your cart.
- View your cart, update quantities, or remove items.
- Cart stays during your session, even if you refresh or visit other pages.

## Customization

- If your backend runs on a different URL, set the environment variable in `frontend/.env`:

  ```
  REACT_APP_API_URL=http://your-backend-url
  ```

## More Info

- Backend details: [backend/README.md](backend/README.md)
- Frontend details: [frontend/README.md](frontend/README.md)

---

Enjoy shopping!