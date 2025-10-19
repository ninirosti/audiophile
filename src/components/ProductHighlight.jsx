export default function ProductHighlight({ title, description, bg = "#fef1e8", image }) {
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
        <button
          style={{
            padding: "0.6rem 1rem",
            background: "#000",
            color: "#fff",
            border: 0,
          }}
        >
          See Product
        </button>
      </div>

      {/* 👇 only show image if passed */}
      {image && <img src={image} alt={title} style={{ width: "200px", borderRadius: "8px" }} />}
    </section>
  );
}
