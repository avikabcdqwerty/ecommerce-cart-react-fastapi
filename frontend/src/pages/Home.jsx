import React from "react";
import ProductCatalog from "../components/ProductCatalog";

// This is the landing page that shows the product catalog
function Home() {
  return (
    <div>
      <h1>Welcome to Simple Ecommerce</h1>
      <ProductCatalog />
    </div>
  );
}

export default Home;