export default function ProductRow({
  badge, // "NEW PRODUCT" (optional)
  title,
  description,
  image,
  reverse = false, // flips image/text order
  onClick, // SEE PRODUCT handler (optional)
}) {
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
        {/* Image */}
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

        {/* Text */}
        <div style={{ order: reverse ? 1 : 2 }}>
          {badge && <p style={{ letterSpacing: 8, color: "#D87D4A", margin: 0 }}>{badge}</p>}
          <h2 style={{ margin: "12px 0 16px", lineHeight: 1.1 }}>{title}</h2>
          <p style={{ color: "#6b6b6b", marginBottom: 16 }}>{description}</p>
          <button
            onClick={onClick}
            style={{
              padding: "0.7rem 1.4rem",
              background: "#D87D4A",
              color: "#fff",
              border: 0,
              borderRadius: 4,
              letterSpacing: 1,
            }}
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
    </section>
  );
}
