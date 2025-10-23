import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h2>404 — Страница не найдена</h2>
      <p>Похоже, вы заблудились 😅</p>
      <Link to="/products">
        <button
          className="btn"
          style={{
            background: "#00bcd4",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          На главную
        </button>
      </Link>
    </div>
  );
}
