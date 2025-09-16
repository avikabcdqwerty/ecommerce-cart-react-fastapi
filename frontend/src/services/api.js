// Handles API requests to FastAPI backend

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

// ----------- Product APIs -----------

// Get all products
export async function getProducts() {
  const res = await fetch(`${API_URL}/products/`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}

// Get a single product by ID
export async function getProduct(productId) {
  const res = await fetch(`${API_URL}/products/${productId}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return await res.json();
}

// ----------- Cart APIs -----------

// Get cart items for a session
export async function getCart(sessionId) {
  const res = await fetch(`${API_URL}/cart/?session_id=${sessionId}`);
  if (!res.ok) throw new Error("Failed to fetch cart");
  return await res.json();
}

// Add item to cart
export async function addToCart({ session_id, product_id, quantity }) {
  const res = await fetch(`${API_URL}/cart/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ session_id, product_id, quantity }),
  });
  if (!res.ok) throw new Error("Failed to add to cart");
  return await res.json();
}

// Update cart item quantity
export async function updateCartItem(cartItemId, quantity) {
  const res = await fetch(`${API_URL}/cart/${cartItemId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity }),
  });
  if (!res.ok) throw new Error("Failed to update cart item");
  return await res.json();
}

// Remove item from cart
export async function removeCartItem(cartItemId) {
  const res = await fetch(`${API_URL}/cart/${cartItemId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to remove cart item");
  return await res.json();
}

// Clear all items from cart
export async function clearCart(sessionId) {
  const res = await fetch(`${API_URL}/cart/?session_id=${sessionId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to clear cart");
  return await res.json();
}