// Manages cart state and persistence in session storage

const SESSION_KEY = "ecommerce_session_id";

// Get or create a session ID for the cart
export function getSessionId() {
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    // Generate a random session ID (simple for demo)
    sessionId = "sess_" + Math.random().toString(36).substr(2, 12);
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

// Optionally, you can add more cart-related helpers here