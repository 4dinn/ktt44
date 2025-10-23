import React from "react";

export default function StarRating({ value }) {
  const rounded = Math.round(Number(value) || 0);
  const stars = Array.from({ length: 5 }, (_, i) => (i < rounded ? "★" : "☆"));
  return (
    <div className="stars" aria-label={`Rating: ${rounded} out of 5`}>
      <span style={{ fontSize: 18, color: "#FFD700" }}>{stars.join(" ")}</span>
    </div>
  );
}
