// src/pages/Earphones.jsx
import { Link } from "react-router-dom";
import yx1Img from "../assets/yx1.png";

export default function Earphones() {
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
          <h1 style={{ margin: 0 }}>EARPHONES</h1>
        </div>
      </div>

      {/* YX1 hero row */}
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
          {/* Image block */}
          <div>
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
              <img src={yx1Img} alt="YX1 Wireless Earphones" style={{ width: "100%", maxWidth: 420, objectFit: "contain" }} />
            </div>
          </div>

          {/* Text + CTA */}
          <div>
            <p
              style={{
                letterSpacing: 8,
                color: "#D87D4A",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: 8,
              }}
            >
              New Product
            </p>

            <h2 style={{ margin: "12px 0 16px", lineHeight: 1.2, textTransform: "uppercase" }}>YX1 Wireless Earphones</h2>

            <p style={{ color: "#6b6b6b", marginBottom: 24 }}>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>

            {/* Link styled as a button */}
            <Link
              to="/product/yx1"
              style={{
                display: "inline-block",
                padding: "0.8rem 1.6rem",
                background: "#D87D4A",
                color: "#fff",
                borderRadius: 4,
                textDecoration: "none",
                textTransform: "uppercase",
                fontWeight: 600,
                letterSpacing: 1,
                cursor: "pointer",
              }}
            >
              See Product
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
