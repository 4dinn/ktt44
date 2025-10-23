import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="container">Загрузка товара...</div>;
  if (error) return <div className="container">Ошибка: {error}</div>;
  if (!product) return <div className="container">Товар не найден</div>;

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", color: "#00bcd4" }}>{product.title}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "250px",
            height: "250px",
            objectFit: "contain",
            background: "#fff",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        />
        <StarRating value={product.rating?.rate ?? 0} />
        <p style={{ color: "#ccc", marginTop: "10px", textAlign: "center" }}>
          {product.description}
        </p>
        <p style={{ color: "#00e676", fontSize: "20px", fontWeight: "bold" }}>
          ${product.price}
        </p>
        <button
          onClick={() => navigate(-1)}
          style={{
            marginTop: "20px",
            background: "#00bcd4",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ⬅ Назад
        </button>
      </div>
    </div>
  );
}
