// src/components/Hero.jsx
import { Link } from "react-router-dom";

export default function Hero({
  title = "XX99 MARK II HEADPHONES",
  subtitle = "NEW PRODUCT",
  description = "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  image, // optional hero image
  slug = "xx99-mark-two", // where the CTA should go
}) {
  return (
    <header
      style={{
        background: "#0E0E0E",
        color: "#fff",
        padding: "4rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1110,
          margin: "0 auto",
          display: "grid",
          gap: 24,
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Left: copy */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <p style={{ letterSpacing: 6, color: "#8c8c8c", margin: 0 }}>{subtitle}</p>
          <h1 style={{ margin: "12px 0 16px", lineHeight: 1.1 }}>{title}</h1>
          <p style={{ color: "#cfcfcf", marginBottom: 16 }}>{description}</p>

          <Link to={`/product/${slug}`} style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "0.9rem 1.6rem",
                background: "#D87D4A",
                color: "#fff",
                border: 0,
                borderRadius: 6,
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: 1,
                cursor: "pointer",
              }}
            >
              See Product
            </button>
          </Link>
        </div>

        {/* Right: image */}
        {image && (
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              maxWidth: 520,
              justifySelf: "end",
              display: "block",
              pointerEvents: "none", // 👈 prevents covering the button
            }}
          />
        )}
      </div>
    </header>
  );
}
