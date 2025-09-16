import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

// Main React app component, sets up routing
function App() {
  return (
    <Router>
      <div style={{ padding: "1rem", maxWidth: "900px", margin: "0 auto" }}>
        {/* Simple navigation bar */}
        <nav style={{ marginBottom: "2rem" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>
            Home
          </Link>
          <Link to="/cart">Cart</Link>
        </nav>
        {/* Route definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;