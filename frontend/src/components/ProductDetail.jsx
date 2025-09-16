import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct, addToCart } from "../services/api";
import { getSessionId } from "../services/cartService";

// This component shows details for a single product and lets you add it to the cart
function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState("");

  // Fetch product details from backend
  useEffect(() => {
    getProduct(productId)
      .then((data) => setProduct(data))
      .catch(() => setError("Product not found"));
  }, [productId]);

  // Handle add to cart button
  const handleAddToCart = async () => {
    setAdding(true);
    setError("");
    try {
      await addToCart({
        session_id: getSessionId(),
        product_id: product.id,
        quantity: quantity,
      });
      navigate("/cart");
    } catch (e) {
      setError("Could not add to cart.");
    }
    setAdding(false);
  };

  if (error) return <div>{error}</div>;
  if (!product) return <div>Loading product...</div>;

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
      {product.image_url && (
        <img
          src={product.image_url}
          alt={product.name}
          style={{ width: "100%", height: "220px", objectFit: "cover" }}
        />
      )}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        <b>${product.price.toFixed(2)}</b>
      </p>
      <div style={{ margin: "1rem 0" }}>
        <label>
          Quantity:{" "}
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={{ width: "60px" }}
          />
        </label>
      </div>
      <button
        onClick={handleAddToCart}
        disabled={adding}
        style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
      >
        {adding ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductDetail;