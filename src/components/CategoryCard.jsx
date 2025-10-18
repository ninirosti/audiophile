export default function CategoryCard({ title }) {
  return (
    <div style={{ background: "#f3f3f3", padding: 24, textAlign: "center", borderRadius: 8 }}>
      <div style={{ width: 96, height: 96, margin: "0 auto 12px", background: "#ddd", borderRadius: "50%" }} />
      <h3>{title}</h3>
      <a href="#" style={{ display: "inline-block", marginTop: 8, textTransform: "uppercase", fontSize: 12 }}>
        Shop →
      </a>
    </div>
  );
}
