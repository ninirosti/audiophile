import ProductRow from "../components/ProductRow";
import xx99MarkTwo from "../assets/xx99-mark-twoo.png";
import xx99MarkOne from "../assets/xx99-mark-one.png";
import xx59 from "../assets/xx59.png";

export default function Headphones() {
  return (
    <main>
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
          <h1 style={{ margin: 0 }}>HEADPHONES</h1>
        </div>
      </div>

      <ProductRow badge="NEW PRODUCT" title="XX99 MARK II HEADPHONES" description="The new XX99 Mark II offers pristine audio with premium drivers, balanced depth, and studio-quality precision." image={xx99MarkTwo} />

      <ProductRow title="XX99 MARK I HEADPHONES" description="A classic with accurate, natural sound and a comfortable design for long studio or on-the-go sessions." image={xx99MarkOne} reverse />

      <ProductRow title="XX59 HEADPHONES" description="Great everyday sound with a lightweight build and excellent value." image={xx59} />
    </main>
  );
}
