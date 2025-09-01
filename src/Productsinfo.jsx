export default function Productsinfo({ product, deleteprod }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontSize: "20px",
          color: "#222",
          marginBottom: "10px",
        }}
      >
        {product.name}
      </h3>

      <p
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: "15px",
        }}
      >
        💲 {product.price}
      </p>

      <button
        style={{
          backgroundColor: "#e63946",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "14px",
        }}
        onClick={() => deleteprod(product.id)}
      >
        Delete
      </button>
    </div>
  );
}
