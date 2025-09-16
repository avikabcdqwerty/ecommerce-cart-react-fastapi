import React, { useEffect, useState } from "react";
import { getCart, updateCartItem, removeCartItem, clearCart } from "../services/api";
import { getSessionId } from "../services/cartService";
import CartItem from "./CartItem";

// This component shows all items in the shopping cart
function CartView() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clearing, setClearing] = useState(false);

  // Fetch cart items from backend when component loads
  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line
  }, []);

  const fetchCart = () => {
    setLoading(true);
    getCart(getSessionId())
      .then((cart) => {
        setItems(cart.items || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  // Update quantity for a cart item
  const handleUpdate = (cartItemId, quantity) => {
    updateCartItem(cartItemId, quantity).then(fetchCart);
  };

  // Remove an item from the cart
  const handleRemove = (cartItemId) => {
    removeCartItem(cartItemId).then(fetchCart);
  };

  // Clear the whole cart
  const handleClearCart = () => {
    setClearing(true);
    clearCart(getSessionId()).then(() => {
      setItems([]);
      setClearing(false);
    });
  };

  // Calculate total price
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (loading) return <div>Loading cart...</div>;

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <div>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdate={handleUpdate}
              onRemove={handleRemove}
            />
          ))}
          <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
            Total: ${total.toFixed(2)}
          </div>
          <button
            onClick={handleClearCart}
            disabled={clearing}
            style={{ marginTop: "1rem" }}
          >
            {clearing ? "Clearing..." : "Clear Cart"}
          </button>
        </div>
      )}
    </div>
  );
}

export default CartView;