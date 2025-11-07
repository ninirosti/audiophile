// src/components/Header.jsx
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import CartModal from "./CartModal";

import cartIcon from "../assets/cart.png";
import logo from "../assets/logo.png";
import usFlag from "../assets/us.png";
import geFlag from "../assets/ge.png";

export default function Header() {
  const navigate = useNavigate();
  const { count } = useCart(); // 🛒 badge count
  const [cartOpen, setCartOpen] = useState(false);

  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentFlag, setCurrentFlag] = useState(usFlag);
  const langRef = useRef(null);

  // 🔹 Restore persisted language
  useEffect(() => {
    const saved = localStorage.getItem("langFlag");
    if (saved === "ge") setCurrentFlag(geFlag);
    if (saved === "us") setCurrentFlag(usFlag);
  }, []);

  // 🔹 Close dropdowns and modal on outside click / Esc
  useEffect(() => {
    function handleDocClick(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangMenuOpen(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") {
        setLangMenuOpen(false);
        setCartOpen(false);
      }
    }
    document.addEventListener("mousedown", handleDocClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // 🔹 Language functions
  const toggleLangMenu = () => setLangMenuOpen((s) => !s);
  const changeLang = (flagKey) => {
    const flagMap = { us: usFlag, ge: geFlag };
    setCurrentFlag(flagMap[flagKey]);
    localStorage.setItem("langFlag", flagKey);
    setLangMenuOpen(false);
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
      {/* 🔸 LOGO */}
      <button
        type="button"
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

      {/* 🔸 NAVIGATION */}
      <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
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

      {/* 🔸 CART + LANGUAGE */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* 🛒 Cart button */}
        <button
          type="button"
          onClick={() => setCartOpen(true)}
          aria-label="Open cart"
          style={{
            background: "transparent",
            border: 0,
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img src={cartIcon} alt="Cart" style={{ height: 20 }} />
          {count > 0 && (
            <span
              aria-live="polite"
              style={{
                position: "absolute",
                top: -6,
                right: -8,
                background: "#D87D4A",
                color: "#fff",
                borderRadius: "999px",
                fontSize: 11,
                lineHeight: "16px",
                height: 16,
                minWidth: 16,
                padding: "0 4px",
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              {count}
            </span>
          )}
        </button>

        {/* 🌐 Language menu */}
        <div ref={langRef} style={{ position: "relative" }}>
          <button
            type="button"
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
                type="button"
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
                <img src={usFlag} alt="English" style={{ height: 16 }} /> ENG
              </button>
              <button
                type="button"
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
                <img src={geFlag} alt="Georgian" style={{ height: 16 }} /> GEO
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 🧾 Cart Modal */}
      <CartModal
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={() => {
          setCartOpen(false);
          navigate("/checkout"); // ✅ go directly to checkout
        }}
      />
    </header>
  );
}
