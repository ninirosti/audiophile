import { Link } from "react-router-dom";

export default function CategoryCard({ title, image, href = "#" }) {
  const imgOk = Boolean(image);

  return (
    <div
      style={{
        background: "#f3f3f3",
        padding: 24,
        textAlign: "center",
        borderRadius: 12,
      }}
    >
      {imgOk ? (
        <img
          src={image}
          alt={title}
          style={{
            width: 120,
            height: 120,
            objectFit: "contain",
            margin: "0 auto 16px",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "#ddd",
            margin: "0 auto 16px",
          }}
        />
      )}

      <h3 style={{ margin: "0 0 12px", fontSize: 22 }}>{title}</h3>

      {/* 👇 React Router Link instead of <a> */}
      <Link to={href} style={{ textTransform: "uppercase", fontWeight: 600 }}>
        Shop →
      </Link>
    </div>
  );
}
