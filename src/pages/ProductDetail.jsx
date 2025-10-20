import { useParams, Link } from "react-router-dom";

const DB = {
  "xx99-mark-two": {
    title: "XX99 Mark II Headphones",
    price: 2999, // $2,999 for the mock; change as you like
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It refines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: new URL("../assets/xx99-mark-two.png", import.meta.url).href,
  },
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = DB[slug];

  if (!product) {
    return (
      <main style={{ padding: "2rem", maxWidth: 1110, margin: "0 auto" }}>
        <p>Product not found.</p>
        <Link to="/">Go home</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "1.5rem" }}>
      <div style={{ maxWidth: 1110, margin: "0 auto" }}>
        <Link to="/" style={{ color: "#6b6b6b" }}>
          Go Back
        </Link>
      </div>

      <section style={{ maxWidth: 1110, margin: "1rem auto", display: "grid", gap: 32, gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
        {/* image box like your mock */}
        <div style={{ width: 540, maxWidth: "100%", height: 560, borderRadius: 8, background: "#F1F1F1", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={product.image} alt={product.title} style={{ maxWidth: "85%", maxHeight: "85%", objectFit: "contain" }} />
        </div>

        <div>
          <p style={{ color: "#D87D4A", letterSpacing: 6, margin: 0 }}>NEW PRODUCT</p>
          <h1 style={{ margin: "12px 0" }}>{product.title.toUpperCase()}</h1>
          <p style={{ color: "#6b6b6b" }}>{product.description}</p>
          <p style={{ fontWeight: 700, marginTop: 16 }}>$ {product.price.toLocaleString()}</p>

          {/* simple qty + button (no cart yet) */}
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 12 }}>
            <div style={{ display: "flex", border: "1px solid #eee", borderRadius: 6 }}>
              <button
                style={{ padding: "0.6rem 0.9rem", border: 0, background: "transparent" }}
                onClick={() => {
                  const el = document.getElementById("qty");
                  el.textContent = Math.max(1, Number(el.textContent) - 1);
                }}
              >
                -
              </button>
              <div id="qty" style={{ padding: "0.6rem 1rem", minWidth: 32, textAlign: "center" }}>
                1
              </div>
              <button
                style={{ padding: "0.6rem 0.9rem", border: 0, background: "transparent" }}
                onClick={() => {
                  const el = document.getElementById("qty");
                  el.textContent = Number(el.textContent) + 1;
                }}
              >
                +
              </button>
            </div>

            <button onClick={() => alert("Added to cart (stub)")} style={{ padding: "0.8rem 1.4rem", background: "#D87D4A", color: "#fff", border: 0, borderRadius: 6, textTransform: "uppercase", fontWeight: 700, letterSpacing: 1 }}>
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
