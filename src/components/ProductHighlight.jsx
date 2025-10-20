// src/components/ProductHighlight.jsx
import { Link } from "react-router-dom";

export default function ProductHighlight({
  title,
  description,
  bg = "#fef1e8",
  image,
  slug, // ← add this so the CTA knows where to go
}) {
  return (
    <section
      style={{
        background: bg,
        padding: 24,
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
      }}
    >
      <div>
        <h2 style={{ marginBottom: 8 }}>{title}</h2>
        <p style={{ marginBottom: 12 }}>{description}</p>

        {/* CTA links to /product/:slug */}
        <Link to={slug ? `/product/${slug}` : "#"} style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "0.6rem 1rem",
              background: "#000",
              color: "#fff",
              border: 0,
              borderRadius: 6,
              cursor: "pointer",
            }}
            disabled={!slug}
            aria-disabled={!slug}
            title={slug ? "See product" : "No product link"}
          >
            See Product
          </button>
        </Link>
      </div>

      {image && <img src={image} alt={title} style={{ width: 200, borderRadius: 8, display: "block" }} />}
    </section>
  );
}
