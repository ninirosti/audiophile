// src/pages/CartPage.jsx
import { useCart } from "../context/CartContext";
import { money } from "../utils/currency";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { items, total, setQty, remove, clear } = useCart();

  if (!items.length) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="mb-6 text-2xl font-bold">Your Cart</h1>
        <p className="mb-6 text-neutral-600">Your cart is empty.</p>
        <Link to="/" className="text-[#D87D4A] underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  const count = items.reduce((n, i) => n + i.qty, 0);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Cart ({count})</h1>
        <button type="button" className="text-sm text-neutral-500 hover:text-neutral-700" onClick={clear} title="Remove all items from cart">
          Remove all
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_320px]">
        {/* Items */}
        <div className="divide-y">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded bg-neutral-100 object-contain" />
                <div>
                  <div className="font-semibold leading-tight">{item.name}</div>
                  <div className="text-sm text-neutral-500">{money(item.price)}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-neutral-100 px-3 py-2">
                  <button type="button" aria-label={`Decrease ${item.name} quantity`} title="Decrease" onClick={() => setQty(item.id, Math.max(0, item.qty - 1))}>
                    –
                  </button>
                  <span className="w-6 text-center">{item.qty}</span>
                  <button type="button" aria-label={`Increase ${item.name} quantity`} title="Increase" onClick={() => setQty(item.id, item.qty + 1)}>
                    +
                  </button>
                </div>
                <button type="button" className="text-xs text-neutral-400 hover:text-neutral-700" onClick={() => remove(item.id)} title="Remove item">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <aside className="h-fit rounded-lg bg-white p-6 shadow md:sticky md:top-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-neutral-500">Total</span>
            <span className="text-lg font-bold">{money(total)}</span>
          </div>
          <button type="button" className="mt-4 w-full rounded-md bg-[#D87D4A] py-3 text-center text-sm font-semibold uppercase text-white hover:opacity-90">
            Checkout
          </button>
          <div className="mt-4 text-center">
            <Link to="/" className="text-sm text-[#D87D4A] underline">
              Continue shopping
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
