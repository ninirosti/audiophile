import { Link } from "react-router-dom";

export default function ProductHighlight({ title, description, bg = "#fef1e8", image, slug }) {
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

        {/* 👇 navigate to /product/:slug */}
        <Link to={`/product/${slug}`} style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "0.6rem 1rem",
              background: "#000",
              color: "#fff",
              border: 0,
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            See Product
          </button>
        </Link>
      </div>

      {image && <img src={image} alt={title} style={{ width: 200, borderRadius: 8, pointerEvents: "none" }} />}
    </section>
  );
}
