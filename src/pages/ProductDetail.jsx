// src/pages/ProductDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const { addItem } = useCart(); // ✅ get addItem directly

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    console.warn(
      "Product not found for slug:",
      slug,
      "Known slugs:",
      products.map((p) => p.slug)
    );
    return (
      <main style={{ padding: "2rem", maxWidth: 1110, margin: "0 auto" }}>
        <p>Product not found.</p>
        <button onClick={() => navigate(-1)} style={{ color: "#6b6b6b" }}>
          Go back
        </button>
      </main>
    );
  }

  const onAdd = () => {
    // ✅ add to cart only — stay on this page
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image }, qty);
    // no navigate("/cart")
    // optional: show a tiny confirmation
    // alert(`${qty} × ${product.name} added to cart`);
  };

  return (
    <main style={{ padding: "1.5rem" }}>
      <div style={{ maxWidth: 1110, margin: "0 auto" }}>
        <button onClick={() => navigate(-1)} style={{ background: "transparent", border: 0, color: "#6b6b6b", cursor: "pointer", padding: 0 }}>
          Go Back
        </button>
      </div>

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
        <div style={{ width: 540, maxWidth: "100%", height: 560, borderRadius: 8, background: "#F1F1F1", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={product.image} alt={product.name} style={{ maxWidth: "85%", maxHeight: "85%", objectFit: "contain" }} />
        </div>

        <div>
          <p style={{ color: "#D87D4A", letterSpacing: 6, margin: 0 }}>NEW PRODUCT</p>
          <h1 style={{ margin: "12px 0" }}>{product.name.toUpperCase()}</h1>
          <p style={{ color: "#6b6b6b" }}>{product.description}</p>

          <p style={{ fontWeight: 700, marginTop: 16 }}>$ {product.price.toLocaleString()}</p>

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

            <button onClick={onAdd} style={{ padding: "0.8rem 1.4rem", background: "#D87D4A", color: "#fff", border: 0, borderRadius: 6, textTransform: "uppercase", fontWeight: 700, letterSpacing: 1, cursor: "pointer" }}>
              Add to cart
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: "1.5rem 1.5rem 3rem" }}>
        <div style={{ maxWidth: 1110, margin: "0 auto", display: "grid", gap: 32, gridTemplateColumns: "2fr 1fr" }}>
          <div>
            <h3>FEATURES</h3>
            {product.features?.map((para, i) => (
              <p key={i} style={{ color: "#6b6b6b" }}>
                {para}
              </p>
            ))}
          </div>
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
