# Frontend - Simple Ecommerce Website

This is the React frontend for the Simple Ecommerce app. It lets users browse products, view details, and add items to a shopping cart.

## Features

- See a list of products with details
- View individual product pages
- Add products to your cart
- See all items in your cart, update quantities, or remove them
- Cart stays during your session (no login needed)

## Getting Started

### 1. Install dependencies

Make sure you have Node.js and npm installed.

```bash
cd frontend
npm install
```

### 2. Run the frontend

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### 3. Connect to the backend

By default, the frontend expects the backend API at `http://localhost:8000`.
If your backend runs somewhere else, set the environment variable:

```
REACT_APP_API_URL=http://your-backend-url
```

You can add this to a `.env` file in the `frontend` folder.

## Project Structure

```
frontend/
  public/
    index.html
    .gitkeep
  src/
    components/
      ProductCatalog.jsx
      ProductDetail.jsx
      CartView.jsx
      CartItem.jsx
      .gitkeep
    pages/
      Home.jsx
      ProductPage.jsx
      CartPage.jsx
      .gitkeep
    services/
      api.js
      cartService.js
      .gitkeep
    App.jsx
    index.js
    .gitkeep
  package.json
  README.md
```

## Notes

- This frontend is for demo and learning purposes.
- For production, use HTTPS and secure your backend.

---