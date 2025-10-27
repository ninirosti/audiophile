// src/components/Header.jsx
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// PNGs in src/assets
import cartIcon from "../assets/cart.png";
import logo from "../assets/logo.png";
import usFlag from "../assets/us.png";
import geFlag from "../assets/ge.png";

export default function Header() {
  const navigate = useNavigate();

  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentFlag, setCurrentFlag] = useState(usFlag);
  const menuRef = useRef(null);

  // Restore persisted language flag
  useEffect(() => {
    const saved = localStorage.getItem("langFlag");
    if (saved === "ge") setCurrentFlag(geFlag);
    if (saved === "us") setCurrentFlag(usFlag);
  }, []);

  // Close menu on outside click or Esc
  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (langMenuOpen && !menuRef.current.contains(e.target)) {
        setLangMenuOpen(false);
      }
    }
    function onEsc(e) {
      if (e.key === "Escape") setLangMenuOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [langMenuOpen]);

  const toggleLangMenu = () => setLangMenuOpen((s) => !s);

  const changeLang = (flagKey) => {
    const flagMap = { us: usFlag, ge: geFlag };
    setCurrentFlag(flagMap[flagKey]);
    localStorage.setItem("langFlag", flagKey);
    setLangMenuOpen(false);
    // If later you wire up i18n, trigger language change here too.
  };

  const linkBase = {
    color: "#fff",
    textDecoration: "none",
    letterSpacing: 2,
    fontSize: 13,
    textTransform: "uppercase",
  };

  const activeStyle = ({ isActive }) => ({
    ...linkBase,
    borderBottom: isActive ? "2px solid #D87D4A" : "2px solid transparent",
    paddingBottom: 4,
  });

  return (
    <header
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "1.25rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* LOGO -> go home (no reload) */}
      <button
        onClick={() => navigate("/")}
        aria-label="Go to homepage"
        style={{
          background: "transparent",
          border: 0,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: 0,
        }}
      >
        <img src={logo} alt="audiophile" style={{ height: 24 }} />
      </button>

      {/* NAV */}
      <nav
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <NavLink to="/" style={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/headphones" style={activeStyle}>
          Headphones
        </NavLink>
        <NavLink to="/speakers" style={activeStyle}>
          Speakers
        </NavLink>
        <NavLink to="/earphones" style={activeStyle}>
          Earphones
        </NavLink>
      </nav>

      {/* CART + FLAGS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          position: "relative",
        }}
        ref={menuRef}
      >
        {/* Cart */}
        <button
          onClick={() => alert("Cart clicked")}
          aria-label="Open cart"
          style={{
            background: "transparent",
            border: 0,
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={cartIcon} alt="" style={{ height: 20 }} />
        </button>

        {/* Language selector */}
        <button
          onClick={toggleLangMenu}
          aria-haspopup="menu"
          aria-expanded={langMenuOpen}
          style={{
            background: "transparent",
            border: "1px solid #333",
            borderRadius: 6,
            padding: 2,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={currentFlag} alt="Language" style={{ height: 20 }} />
        </button>

        {langMenuOpen && (
          <div
            role="menu"
            style={{
              position: "absolute",
              top: "2.4rem",
              right: 0,
              background: "#fff",
              color: "#000",
              borderRadius: 8,
              padding: "0.5rem 0.6rem",
              boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minWidth: 120,
            }}
          >
            <button
              role="menuitem"
              onClick={() => changeLang("us")}
              style={{
                background: "transparent",
                border: 0,
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                padding: "6px 8px",
              }}
            >
              <img src={usFlag} alt="" style={{ height: 16 }} />
              ENG
            </button>

            <button
              role="menuitem"
              onClick={() => changeLang("ge")}
              style={{
                background: "transparent",
                border: 0,
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                padding: "6px 8px",
              }}
            >
              <img src={geFlag} alt="" style={{ height: 16 }} />
              GEO
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
