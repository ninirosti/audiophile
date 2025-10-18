export default function ProductHighlight({ title, description, bg = "#fef1e8" }) {
  return (
    <section style={{ background: bg, padding: 24, borderRadius: 8 }}>
      <h2 style={{ marginBottom: 8 }}>{title}</h2>
      <p style={{ marginBottom: 12 }}>{description}</p>
      <button style={{ padding: "0.6rem 1rem", background: "#000", color: "#fff", border: 0 }}>See Product</button>
    </section>
  );
}
