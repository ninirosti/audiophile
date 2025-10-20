// src/pages/Earphones.jsx
import ProductRow from "../components/ProductRow";
import yx1 from "../assets/yx1.png"; // replace with final asset if needed

export default function Earphones() {
  return (
    <main>
      {/* Top banner */}
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
          <h1 style={{ margin: 0 }}>EARPHONES</h1>
        </div>
      </div>

      {/* YX1 row */}
      <ProductRow badge="NEW PRODUCT" title="YX1 WIRELESS EARPHONES" description="Tailor your listening experience with bespoke dynamic drivers. Enjoy incredible high-fidelity sound and active noise cancellation in a compact design." image={yx1} />
      {/* Categories + InfoSection + Footer come from Layout */}
    </main>
  );
}
