import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // use import, not "src/..."

export default function Header() {
  return (
    <header style={{ background: "#000" }}>
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
        {/* fixed height = 97px per Figma */}
        <div
          style={{
            maxWidth: "1110px",
            margin: "0 auto",
            height: "97px", // ← exact header height
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <img src={logo} alt="audiophile" style={{ height: "25px", width: "auto" }} />

          <nav
            style={{
              display: "flex",
              gap: "32px",
              textTransform: "uppercase",
              fontSize: "13px",
              letterSpacing: "2px",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/headphones" style={{ color: "#fff", textDecoration: "none" }}>
              Headphones
            </Link>
            <Link to="/speakers" style={{ color: "#fff", textDecoration: "none" }}>
              Speakers
            </Link>
            <Link to="/earphones" style={{ color: "#fff", textDecoration: "none" }}>
              Earphones
            </Link>
          </nav>

          <div style={{ fontSize: "18px", color: "#fff", lineHeight: 1 }}>🛒</div>
        </div>
      </div>
    </header>
  );
}
