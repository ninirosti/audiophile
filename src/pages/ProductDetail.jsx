// src/pages/ProductDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

// --- Mini DB (add/adjust as you like) ---
const DB = {
  // Headphones
  "xx99-mark-two": {
    title: "XX99 Mark II Headphones",
    price: 2999,
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It refines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features: ["Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.", "The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliance, 17-hour battery life, cutting-edge technology, and a modern design aesthetic."],
    boxItems: [
      { qty: 1, item: "Headphone Unit" },
      { qty: 2, item: "Replacement Earcups" },
      { qty: 1, item: "User Manual" },
      { qty: 1, item: "3.5mm 5m Audio Cable" },
      { qty: 1, item: "Travel Bag" },
    ],
    image: new URL("../assets/xx99-mark-two.png", import.meta.url).href,
  },
  "xx99-mark-one": {
    title: "XX99 Mark I Headphones",
    price: 1799,
    description: "As the gold standard for headphones, the XX99 Mark I offers accurate, natural sound and comfortable design for long sessions.",
    features: ["Perfect for essential audio work with detailed response and low distortion. Robust build and ergonomic design with plush cushions for day-long comfort.", "Swivel earcups and replaceable pads make these a reliable studio companion."],
    boxItems: [
      { qty: 1, item: "Headphone Unit" },
      { qty: 1, item: "User Manual" },
      { qty: 1, item: "3.5mm Audio Cable" },
    ],
    image: new URL("../assets/xx99-mark-one.png", import.meta.url).href,
  },
  xx59: {
    title: "XX59 Headphones",
    price: 899,
    description: "Great everyday sound with a lightweight build and excellent value.",
    features: ["Balanced sound signature in a compact, comfy form factor.", "Durable materials with swivel cups for portable use."],
    boxItems: [{ qty: 1, item: "Headphone Unit" }],
    image: new URL("../assets/xx59.png", import.meta.url).href,
  },

  // Speakers
  zx9: {
    title: "ZX9 Speaker",
    price: 4500,
    description: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    features: ["Powerful low-end and crisp highs in a compact cabinet.", "Wireless connectivity with multi-room support."],
    boxItems: [
      { qty: 2, item: "Speaker Unit" },
      { qty: 2, item: "Speaker Cable" },
      { qty: 1, item: "User Manual" },
    ],
    image: new URL("../assets/zx9.png", import.meta.url).href,
  },
  zx7: {
    title: "ZX7 Speaker",
    price: 3500,
    description: "Stream high-quality sound effortlessly with versatile inputs and elegant design.",
    features: ["Room-filling sound with refined clarity.", "Multiple inputs and wireless streaming."],
    boxItems: [
      { qty: 2, item: "Speaker Unit" },
      { qty: 1, item: "User Manual" },
    ],
    image: new URL("../assets/zx7.png", import.meta.url).href,
  },

  // Earphones
  yx1: {
    title: "YX1 Earphones",
    price: 599,
    description: "Compact yet powerful in-ear experience with excellent isolation and comfort.",
    features: ["High-fidelity drivers tuned for detail.", "Tangle-free cable and multiple tip sizes for a secure fit."],
    boxItems: [
      { qty: 1, item: "Earphones" },
      { qty: 3, item: "Ear Tips (S/M/L)" },
      { qty: 1, item: "Carry Pouch" },
    ],
    image: new URL("../assets/yx1.png", import.meta.url).href,
  },
};

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = DB[slug];
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <main style={{ padding: "2rem", maxWidth: 1110, margin: "0 auto" }}>
        <p>Product not found.</p>
        <button onClick={() => navigate(-1)} style={{ color: "#6b6b6b" }}>
          Go back
        </button>
      </main>
    );
  }

  return (
    <main style={{ padding: "1.5rem" }}>
      {/* Back link */}
      <div style={{ maxWidth: 1110, margin: "0 auto" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "transparent",
            border: 0,
            color: "#6b6b6b",
            cursor: "pointer",
            padding: 0,
          }}
        >
          Go Back
        </button>
      </div>

      {/* Header: image + summary */}
      <section
        style={{
          maxWidth: 1110,
          margin: "1rem auto",
          display: "grid",
          gap: 32,
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
        }}
      >
        {/* Image box (540 × 560) */}
        <div
          style={{
            width: 540,
            maxWidth: "100%",
            height: 560,
            borderRadius: 8,
            background: "#F1F1F1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={product.image} alt={product.title} style={{ maxWidth: "85%", maxHeight: "85%", objectFit: "contain" }} />
        </div>

        {/* Text */}
        <div>
          <p style={{ color: "#D87D4A", letterSpacing: 6, margin: 0 }}>NEW PRODUCT</p>
          <h1 style={{ margin: "12px 0" }}>{product.title.toUpperCase()}</h1>
          <p style={{ color: "#6b6b6b" }}>{product.description}</p>

          <p style={{ fontWeight: 700, marginTop: 16 }}>$ {product.price.toLocaleString()}</p>

          {/* Qty + Add to cart (stub) */}
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 12 }}>
            <div style={{ display: "flex", border: "1px solid #eee", borderRadius: 6 }}>
              <button style={{ padding: "0.6rem 0.9rem", border: 0, background: "transparent" }} onClick={() => setQty((q) => Math.max(1, q - 1))}>
                -
              </button>
              <div style={{ padding: "0.6rem 1rem", minWidth: 32, textAlign: "center" }}>{qty}</div>
              <button style={{ padding: "0.6rem 0.9rem", border: 0, background: "transparent" }} onClick={() => setQty((q) => q + 1)}>
                +
              </button>
            </div>

            <button
              onClick={() => alert(`Added ${qty} to cart (stub)`)}
              style={{
                padding: "0.8rem 1.4rem",
                background: "#D87D4A",
                color: "#fff",
                border: 0,
                borderRadius: 6,
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: 1,
                cursor: "pointer",
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES + IN THE BOX */}
      <section style={{ padding: "1.5rem 1.5rem 3rem" }}>
        <div
          style={{
            maxWidth: 1110,
            margin: "0 auto",
            display: "grid",
            gap: 32,
            gridTemplateColumns: "2fr 1fr",
          }}
        >
          {/* FEATURES */}
          <div>
            <h3>FEATURES</h3>
            {product.features?.map((para, i) => (
              <p key={i} style={{ color: "#6b6b6b" }}>
                {para}
              </p>
            ))}
          </div>

          {/* IN THE BOX */}
          <div>
            <h3>IN THE BOX</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {product.boxItems?.map(({ qty, item }) => (
                <li key={item} style={{ marginBottom: 8, color: "#6b6b6b" }}>
                  <strong style={{ color: "#D87D4A" }}>{qty}x</strong> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
