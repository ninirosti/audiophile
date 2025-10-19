import heroImg from "../assets/xx99-mark-two.png";

export default function Hero() {
  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        padding: "3rem 1.5rem",
        height: "536px",
      }}
    >
      <div
        style={{
          maxWidth: "1110px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <div style={{ maxWidth: "500px" }}>
          <p style={{ opacity: 0.7, textTransform: "uppercase", letterSpacing: "2px" }}>New Product</p>
          <h2 style={{ fontSize: "2.5rem", margin: "0.5rem 0", lineHeight: 1.2 }}>
            XX99 Mark II <br /> Headphones
          </h2>
          <p style={{ maxWidth: 520, marginBottom: "1.5rem" }}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button
            style={{
              padding: "0.75rem 1.25rem",
              background: "#d87d4a",
              color: "#fff",
              border: "none",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            See Product
          </button>
        </div>

        {/* RIGHT: IMAGE */}
        <div style={{ flex: "1", textAlign: "right" }}>
          <img src={heroImg} alt="XX99 Mark II Headphones" style={{ maxWidth: "450px", height: "auto" }} />
        </div>
      </div>
    </section>
  );
}
