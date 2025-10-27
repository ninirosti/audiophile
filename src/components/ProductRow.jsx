// src/components/ProductRow.jsx
import { Link } from "react-router-dom";

export default function ProductRow({
  badge,
  title,
  description,
  image,
  slug, // dynamic link slug (e.g. "zx9", "xx99-mark-two")
  reverse = false, // flips image/text order
}) {
  const isDisabled = !slug;

  // shared button styles (used for both <Link> and fallback <span>)
  const btnStyle = {
    display: "inline-block",
    padding: "0.8rem 1.6rem",
    background: "#D87D4A",
    color: "#fff",
    borderRadius: 4,
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: 600,
    letterSpacing: 1,
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? 0.6 : 1,
  };

  return (
    <section style={{ padding: "3rem 1.5rem" }}>
      <div
        style={{
          maxWidth: 1110,
          margin: "0 auto",
          display: "grid",
          gap: 32,
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
        }}
      >
        {/* IMAGE */}
        <div style={{ order: reverse ? 2 : 1 }}>
          <div
            style={{
              background: "#f3f3f3",
              borderRadius: 12,
              padding: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={image} alt={title} style={{ width: "100%", maxWidth: 420, objectFit: "contain" }} />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div style={{ order: reverse ? 1 : 2 }}>
          {badge && (
            <p
              style={{
                letterSpacing: 8,
                color: "#D87D4A",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: 8,
              }}
            >
              {badge}
            </p>
          )}

          <h2
            style={{
              margin: "12px 0 16px",
              lineHeight: 1.2,
              textTransform: "uppercase",
            }}
          >
            {title}
          </h2>

          <p style={{ color: "#6b6b6b", marginBottom: 24 }}>{description}</p>

          {/* CTA (Link styled as a button). If no slug, show a disabled-looking span */}
          {isDisabled ? (
            <span style={btnStyle} aria-disabled="true">
              See Product
            </span>
          ) : (
            <Link to={`/product/${slug}`} style={btnStyle}>
              See Product
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
