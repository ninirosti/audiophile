// src/pages/Speakers.jsx
import ProductRow from "../components/ProductRow";
import zx9 from "../assets/speakerspg.png";
import zx7 from "../assets/zxspeaker.png";

export default function Speakers() {
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
          <h1 style={{ margin: 0 }}>SPEAKERS</h1>
        </div>
      </div>

      {/* ZX9 */}
      <ProductRow badge="NEW PRODUCT" title="ZX9 SPEAKER" description="Our flagship speaker with room-filling sound, deep bass, and precise imaging—plus modern wireless connectivity." image={zx9} />

      {/* ZX7 (reversed layout) */}
      <ProductRow title="ZX7 SPEAKER" description="Clean, effortless sound with adaptable components and a compact footprint for any living space or studio." image={zx7} reverse />
      {/* Categories + InfoSection + Footer are rendered by Layout */}
    </main>
  );
}
