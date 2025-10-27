// src/pages/Speakers.jsx
import ProductRow from "../components/ProductRow";
import zx9Img from "../assets/zx9.png";
import zx7Img from "../assets/zx7.png";

export default function Speakers() {
  return (
    <main>
      {/* Page header */}
      <div
        style={{
          background: "#0E0E0E",
          color: "#fff",
          padding: "3rem 1.5rem",
          textAlign: "center",
          letterSpacing: 6,
          marginBottom: "2rem",
        }}
      >
        <div style={{ maxWidth: 1110, margin: "0 auto" }}>
          <h1 style={{ margin: 0 }}>SPEAKERS</h1>
        </div>
      </div>

      {/* ZX9 */}
      <ProductRow
        badge="NEW PRODUCT"
        title="ZX9 SPEAKER"
        description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
        image={zx9Img}
        slug="zx9" // 👈 links to /product/zx9
      />

      {/* ZX7 */}
      <ProductRow
        title="ZX7 SPEAKER"
        description="Stream high-quality sound effortlessly with versatile inputs and elegant design."
        image={zx7Img}
        reverse
        slug="zx7" // 👈 links to /product/zx7
      />
    </main>
  );
}
