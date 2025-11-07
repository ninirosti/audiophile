// src/components/CartModal.jsx
import { useEffect } from "react";
import { useCart } from "../context/CartContext";

const money = (n) => new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export default function CartModal({ open, onClose, onCheckout }) {
  const { items, total, setQty, clear } = useCart();
  const count = items.reduce((n, i) => n + i.qty, 0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  // --- styles (inline so nothing can override them)
  const overlay = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    zIndex: 9999, // higher than your header's 100
  };
  const panel = {
    position: "fixed",
    top: 80, // adjust if your header is taller/shorter
    right: 24,
    width: 420,
    maxWidth: "95vw",
    borderRadius: 12,
    background: "#fff",
    padding: 24,
    boxShadow: "0 20px 48px rgba(0,0,0,0.22)",
    zIndex: 10000,
  };
  const row = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 0",
    borderTop: "1px solid #f2f2f2",
  };
  const thumb = {
    width: 56,
    height: 56,
    borderRadius: 8,
    background: "#F1F1F1",
    objectFit: "contain",
  };
  const stepper = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#F1F1F1",
    padding: "6px 10px",
  };
  const totalRow = {
    marginTop: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const btnCheckout = {
    marginTop: 16,
    width: "100%",
    background: "#D87D4A",
    color: "#fff",
    padding: "12px 0",
    border: 0,
    borderRadius: 6,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1,
    cursor: "pointer",
  };

  return (
    <div style={overlay} onClick={onClose}>
      <div style={panel} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>Cart ({count})</div>
          {items.length > 0 && (
            <button onClick={clear} style={{ fontSize: 12, color: "#6b6b6b", textDecoration: "underline", background: "transparent", border: 0, cursor: "pointer" }}>
              Remove all
            </button>
          )}
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div style={{ padding: "40px 0", textAlign: "center", color: "#6b6b6b", fontSize: 14 }}>Your cart is empty.</div>
        ) : (
          <>
            {items.map((it, idx) => (
              <div key={it.id} style={{ ...row, borderTop: idx === 0 ? "none" : "1px solid #f2f2f2" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <img src={it.image} alt="" style={thumb} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.1 }}>{it.name}</div>
                    <div style={{ fontSize: 12, color: "#6b6b6b" }}>{money(it.price)}</div>
                  </div>
                </div>
                <div style={stepper}>
                  <button onClick={() => it.qty > 1 && setQty(it.id, it.qty - 1)} disabled={it.qty <= 1} style={{ opacity: it.qty <= 1 ? 0.4 : 1, background: "transparent", border: 0, cursor: "pointer" }} aria-label="Decrease">
                    –
                  </button>
                  <span style={{ width: 24, textAlign: "center" }}>{it.qty}</span>
                  <button onClick={() => setQty(it.id, it.qty + 1)} style={{ opacity: 0.7, background: "transparent", border: 0, cursor: "pointer" }} aria-label="Increase">
                    +
                  </button>
                </div>
              </div>
            ))}

            {/* Total */}
            <div style={totalRow}>
              <span style={{ fontSize: 12, color: "#6b6b6b", textTransform: "uppercase", letterSpacing: 2 }}>Total</span>
              <span style={{ fontSize: 18, fontWeight: 800 }}>{money(total)}</span>
            </div>

            {/* Actions */}
            <button style={btnCheckout} onClick={onCheckout}>
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
