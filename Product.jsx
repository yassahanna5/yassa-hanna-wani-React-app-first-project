import { useState } from "react";
import Productsinfo from "./Productsinfo";

export default function Product() {
  const [products, setProducts] = useState([
    { id: 1, name: "Dell", price: 10000 },
    { id: 2, name: "iPhone", price: 40000 },
    { id: 3, name: "Oppo", price: 20000 },
    { id: 4, name: "Samsung", price: 50000 },
    { id: 5, name: "Huawei", price: 250000 },
    { id: 6, name: "Redmi", price: 110000 },
    { id: 7, name: "Lenovo", price: 18000 },
    { id: 8, name: "Asus", price: 22000 },
    { id: 9, name: "MacBook", price: 60000 },
    { id: 10, name: "Realme", price: 15000 },
  ]);

  function deleteprod(id) {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  }

  return (
    <div
      style={{
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        🛒 My Ecommerce
      </h1>

      {products.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <Productsinfo
              key={product.id}
              product={product}
              deleteprod={deleteprod}
            />
          ))}
        </div>
      ) : (
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "red",
            marginTop: "50px",
          }}
        >
          ❌ Products not found
        </p>
      )}
    </div>
  );
}
