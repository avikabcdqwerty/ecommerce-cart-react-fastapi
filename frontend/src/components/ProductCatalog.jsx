import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { Link } from "react-router-dom";

// This component shows a list of products with their details
function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from backend when component loads
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading products...</div>;

  return (
    <div>
      <h2>Product Catalog</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "220px",
              background: "#fafafa",
            }}
          >
            {product.image_url && (
              <img
                src={product.image_url}
                alt={product.name}
                style={{ width: "100%", height: "120px", objectFit: "cover" }}
              />
            )}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>
              <b>${product.price.toFixed(2)}</b>
            </p>
            {/* Link to product detail page */}
            <Link to={`/product/${product.id}`}>
              <button style={{ width: "100%" }}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;