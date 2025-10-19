import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer style={{ background: "#0d0d0d", color: "#fff" }}>
      <div
        style={{
          maxWidth: 1110,
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        {/* TOP ROW */}
        <div
          style={{
            display: "flex",
            gap: 24,
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Left: logo + blurb */}
          <div style={{ maxWidth: 540, flex: "1 1 420px" }}>
            <img src={logo} alt="audiophile" style={{ height: 25, width: "auto", marginBottom: 24 }} />
            <p
              style={{
                color: "#9CA3AF", // soft gray
                fontSize: 14,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility – we’re open 7 days a week.
            </p>
          </div>

          {/* Right: nav (top) + socials (bottom) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 24,
              minWidth: 420,
              flex: "1 1 420px",
            }}
          >
            {/* Nav */}
            <nav
              style={{
                display: "flex",
                gap: 32,
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: 13,
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

            {/* Socials */}
            <div style={{ display: "flex", gap: 16 }}>
              {/* Facebook */}
              <a href="https://www.facebook.com" aria-label="Facebook" style={{ display: "inline-flex" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H8.1v-2.9h2.34V9.41c0-2.3 1.37-3.57 3.47-3.57.99 0 2.03.18 2.03.18v2.25h-1.14c-1.12 0-1.47.7-1.47 1.41v1.7h2.5l-.4 2.9h-2.1V22c4.78-.75 8.44-4.92 8.44-9.94Z" />
                </svg>
              </a>
              {/* Twitter/X (classic bird for simplicity) */}
              <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" style={{ display: "inline-flex" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24">
                  <path d="M18.244 2H21l-6.435 7.364L22 22h-6.373l-4.986-6.68L5.13 22H2l6.877-7.871L2 2h6.49l4.49 6.062L18.244 2Zm-2.23 17.36h1.24L8.06 4.542H6.76L16.014 19.36Z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/" aria-label="Instagram" style={{ display: "inline-flex" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 7.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div style={{ marginTop: 40 }}>
          <p style={{ color: "#9CA3AF", fontSize: 14, margin: 0 }}>Copyright 2021. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
