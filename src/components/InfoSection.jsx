export default function InfoSection({ title = "BRINGING YOU THE", highlight = "BEST", tail = "AUDIO GEAR", text = `Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.`, image, imageAlt = "Person wearing headphones" }) {
  return (
    <section style={{ padding: "4rem 1.5rem" }}>
      <div
        style={{
          maxWidth: 1110,
          margin: "0 auto",
          display: "flex",
          gap: 32,
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 460px", minWidth: 280 }}>
          <h2 style={{ fontSize: 32, lineHeight: 1.2, margin: 0 }}>
            {title} <span style={{ color: "#D87D4A" }}>{highlight}</span> {tail}
          </h2>
          <p style={{ marginTop: 16, color: "#6b6b6b", maxWidth: 520 }}>{text}</p>
        </div>

        {image && (
          <img
            src={image}
            alt={imageAlt}
            style={{
              flex: "0 1 420px",
              width: "420px",
              maxWidth: "100%",
              borderRadius: 12,
              display: "block",
            }}
          />
        )}
      </div>
    </section>
  );
}
