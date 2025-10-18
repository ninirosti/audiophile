import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        background: "#000",
        color: "#fff",
        padding: "35px 165px", // top/bottom = 35px, left/right = 165px
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Replace this with your logo image */}
      <img src="src/assets/logo.png" alt="audiophile logo" style={{ height: "25px" }} />

      {/* Navigation */}
      <nav style={{ display: "flex", gap: "32px", textTransform: "uppercase", fontSize: "14px", letterSpacing: "2px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/headphones" style={{ color: "white", textDecoration: "none" }}>
          Headphones
        </Link>
        <Link to="/speakers" style={{ color: "white", textDecoration: "none" }}>
          Speakers
        </Link>
        <Link to="/earphones" style={{ color: "white", textDecoration: "none" }}>
          Earphones
        </Link>
      </nav>

      {/* Cart icon placeholder */}
      <div style={{ fontSize: "20px" }}>🛒</div>
    </header>
  );
}
