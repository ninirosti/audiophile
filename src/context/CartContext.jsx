import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const CartContext = createContext(null);
const initial = { items: [] }; // item = {id, name, price, image, qty}

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.payload ?? state;
    case "ADD": {
      const { item, qty } = action.payload;
      const exists = state.items.find((i) => i.id === item.id);
      const items = exists ? state.items.map((i) => (i.id === item.id ? { ...i, qty: i.qty + qty } : i)) : [...state.items, { ...item, qty }];
      return { ...state, items };
    }
    case "SET_QTY": {
      const { id, qty } = action.payload;
      return { ...state, items: state.items.map((i) => (i.id === id ? { ...i, qty } : i)).filter((i) => i.qty > 0) };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    const raw = localStorage.getItem("cart:v1");
    if (raw) dispatch({ type: "INIT", payload: JSON.parse(raw) });
  }, []);
  useEffect(() => localStorage.setItem("cart:v1", JSON.stringify(state)), [state]);

  const total = useMemo(() => state.items.reduce((s, i) => s + i.price * i.qty, 0), [state.items]);
  const count = useMemo(() => state.items.reduce((n, i) => n + i.qty, 0), [state.items]);

  const value = useMemo(
    () => ({
      items: state.items,
      total,
      count,
      addItem: (item, qty = 1) => dispatch({ type: "ADD", payload: { item, qty } }),
      setQty: (id, qty) => dispatch({ type: "SET_QTY", payload: { id, qty } }),
      remove: (id) => dispatch({ type: "REMOVE", payload: id }),
      clear: () => dispatch({ type: "CLEAR" }),
    }),
    [state.items, total, count]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
