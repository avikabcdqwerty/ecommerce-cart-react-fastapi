import React, { useState } from "react";

// This component shows a single cart item with quantity and price
function CartItem({ item, onUpdate, onRemove }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [updating, setUpdating] = useState(false);

  // Handle quantity change
  const handleChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  // Update quantity in cart
  const handleUpdate = () => {
    setUpdating(true);
    onUpdate(item.id, quantity);
    setUpdating(false);
  };

  // Remove item from cart
  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #eee",
        padding: "1rem 0",
      }}
    >
      {item.product.image_url && (
        <img
          src={item.product.image_url}
          alt={item.product.name}
          style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "1rem" }}
        />
      )}
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: "bold" }}>{item.product.name}</div>
        <div>${item.product.price.toFixed(2)} x {item.quantity}</div>
        <div>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleChange}
            style={{ width: "50px" }}
          />
          <button
            onClick={handleUpdate}
            disabled={updating || quantity < 1}
            style={{ marginLeft: "0.5rem" }}
          >
            Update
          </button>
          <button
            onClick={handleRemove}
            style={{ marginLeft: "0.5rem", color: "red" }}
          >
            Remove
          </button>
        </div>
      </div>
      <div style={{ fontWeight: "bold", marginLeft: "1rem" }}>
        ${(item.product.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}

export default CartItem;