// src/pages/Headphones.jsx
import ProductRow from "../components/ProductRow";
import xx99MarkTwo from "../assets/xx99-mark-two.png";
import xx99MarkOne from "../assets/xx99-mark-one.png";
import xx59 from "../assets/xx59.png";

export default function Headphones() {
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
          <h1 style={{ margin: 0, textTransform: "uppercase" }}>Headphones</h1>
        </div>
      </div>

      {/* Product Rows */}
      <ProductRow badge="NEW PRODUCT" title="XX99 Mark II Headphones" description="The new XX99 Mark II offers pristine audio with premium drivers, balanced depth, and studio-quality precision." image={xx99MarkTwo} slug="xx99-mark-two" />

      <ProductRow title="XX99 Mark I Headphones" description="A classic with accurate, natural sound and a comfortable design for long sessions." image={xx99MarkOne} reverse slug="xx99-mark-one" />

      <ProductRow title="XX59 Headphones" description="Great everyday sound with a lightweight build and excellent value." image={xx59} slug="xx59" />
    </main>
  );
}
