import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { money } from "../utils/currency";

const SHIPPING = 50;
const VAT_RATE = 0.2; // 20%

export default function Checkout() {
  const { items, total, clear } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    payMethod: "emoney", // "emoney" | "cod"
    emoneyNumber: "",
    emoneyPin: "",
  });
  const [showDone, setShowDone] = useState(false);

  const vat = Math.round(total * VAT_RATE);
  const grand = total + (items.length ? SHIPPING : 0);

  const onChange = (e) => {
    const { name, value, type } = e.target;
    setForm((f) => ({ ...f, [name]: type === "radio" ? e.target.value : value }));
  };

  const validEmail = (v) => /\S+@\S+\.\S+/.test(v);
  const canSubmit = items.length && form.name && validEmail(form.email) && form.address && form.city && form.country && (form.payMethod === "cod" || (form.emoneyNumber && form.emoneyPin));

  const handlePay = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setShowDone(true);
  };

  const finish = () => {
    clear();
    setShowDone(false);
    navigate("/");
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 bg-neutral-50 min-h-[calc(100vh-120px)]">
      <button onClick={() => navigate(-1)} className="mb-6 text-sm text-neutral-500 hover:text-neutral-700">
        Go Back
      </button>

      <div className="grid gap-8 md:grid-cols-[1fr_380px]">
        {/* LEFT: FORM */}
        <form onSubmit={handlePay} className="rounded-xl bg-white p-6 shadow">
          <h1 className="mb-6 text-2xl font-bold uppercase tracking-wide">Checkout</h1>

          {/* Billing */}
          <SectionTitle>Billing Details</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" name="name" value={form.name} onChange={onChange} placeholder="Alexei Ward" />
            <Field label="Email Address" name="email" type="email" value={form.email} onChange={onChange} placeholder="alexei@mail.com" error={form.email && !validEmail(form.email) ? "Enter a valid email" : ""} />
            <Field label="Phone Number" name="phone" value={form.phone} onChange={onChange} placeholder="+1 202-555-0136" />
          </div>

          {/* Shipping */}
          <SectionTitle className="mt-6">Shipping Info</SectionTitle>
          <div className="grid gap-4">
            <Field label="Address" name="address" value={form.address} onChange={onChange} placeholder="1137 Williams Avenue" />
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="ZIP Code" name="zip" value={form.zip} onChange={onChange} placeholder="10001" />
              <Field label="City" name="city" value={form.city} onChange={onChange} placeholder="New York" />
            </div>
            <Field label="Country" name="country" value={form.country} onChange={onChange} placeholder="United States" />
          </div>

          {/* Payment */}
          <SectionTitle className="mt-6">Payment Details</SectionTitle>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <span className="mt-2 text-sm text-neutral-600">Payment Method</span>
            <div className="space-y-3">
              <RadioCard name="payMethod" value="emoney" checked={form.payMethod === "emoney"} onChange={onChange} label="e-Money" />
              <RadioCard name="payMethod" value="cod" checked={form.payMethod === "cod"} onChange={onChange} label="Cash on Delivery" />
            </div>
          </div>

          {form.payMethod === "emoney" ? (
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field label="e-Money Number" name="emoneyNumber" value={form.emoneyNumber} onChange={onChange} placeholder="238521993" />
              <Field label="e-Money PIN" name="emoneyPin" value={form.emoneyPin} onChange={onChange} placeholder="6891" />
            </div>
          ) : (
            <p className="mt-4 rounded-md bg-neutral-50 p-4 text-sm text-neutral-600">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives. Please make sure your address details are correct.</p>
          )}

          <p className="mt-6 text-sm text-neutral-500">
            By continuing & paying, you agree to our{" "}
            <Link to="#" className="underline">
              Terms
            </Link>
            .
          </p>
        </form>

        {/* RIGHT: SUMMARY */}
        <aside className="h-fit rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest">Summary</h2>

          <div className="mb-4 space-y-3">
            {items.map((it) => (
              <div key={it.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* hard cap thumbnail even if CSS fails */}
                  <img src={it.image} alt="" className="h-14 w-14 rounded bg-neutral-100 object-contain" style={{ width: 56, height: 56, objectFit: "contain", borderRadius: 8, background: "#f3f4f6" }} />
                  <div>
                    <div className="text-sm font-semibold leading-tight">{it.name}</div>
                    <div className="text-xs text-neutral-500">{money(it.price)}</div>
                  </div>
                </div>
                <div className="text-xs text-neutral-500">x{it.qty}</div>
              </div>
            ))}
          </div>

          <Row label="Total" value={money(total)} />
          <Row label="Shipping" value={money(items.length ? SHIPPING : 0)} />
          <Row label="VAT (Included)" value={money(Math.round(total * VAT_RATE))} />

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-neutral-500">Grand Total</span>
            <span className="text-lg font-bold text-[#D87D4A]">{money(grand)}</span>
          </div>

          <button className={`mt-4 w-full rounded-md py-3 text-sm font-semibold uppercase text-white ${canSubmit ? "bg-[#D87D4A] hover:opacity-90" : "bg-neutral-300 cursor-not-allowed"}`} disabled={!canSubmit} onClick={handlePay}>
            Continue & Pay
          </button>
        </aside>
      </div>

      {/* ORDER CONFIRMATION */}
      {showDone && <OrderSuccess amount={grand} items={items} onClose={finish} />}
    </main>
  );
}

/* ===== helpers ===== */
function SectionTitle({ children, className = "" }) {
  return <p className={`mb-3 text-xs font-bold uppercase tracking-widest text-[#D87D4A] ${className}`}>{children}</p>;
}
function Field({ label, name, value, onChange, placeholder, type = "text", error = "" }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold tracking-wide text-neutral-700">{label}</span>
      <input className={`w-full rounded border px-3 py-2 outline-none ${error ? "border-red-400 focus:border-red-500" : "border-neutral-200 focus:border-neutral-400"}`} name={name} value={value} onChange={onChange} placeholder={placeholder} type={type} />
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
function RadioCard({ name, value, checked, onChange, label }) {
  return (
    <label className={`flex cursor-pointer items-center gap-3 rounded border p-3 ${checked ? "border-[#D87D4A]" : "border-neutral-200 hover:border-neutral-300"}`}>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
      <span className="text-sm">{label}</span>
    </label>
  );
}
function Row({ label, value }) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <span className="text-xs uppercase tracking-widest text-neutral-500">{label}</span>
      <span className="text-base font-semibold">{value}</span>
    </div>
  );
}
function OrderSuccess({ amount, items, onClose }) {
  const count = items.reduce((n, i) => n + i.qty, 0);
  const first = items[0];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
        <h3 className="mb-2 text-xl font-bold">Thank you for your order</h3>
        <p className="mb-4 text-sm text-neutral-600">You will receive an email confirmation shortly.</p>

        <div className="mb-4 grid gap-4 md:grid-cols-[1fr_auto]">
          <div className="rounded bg-neutral-50 p-4">
            <div className="flex items-center gap-3 border-b pb-3">
              <img src={first.image} alt="" className="h-14 w-14 rounded bg-neutral-100 object-contain" style={{ width: 56, height: 56, objectFit: "contain", borderRadius: 8, background: "#f3f4f6" }} />
              <div className="flex-1">
                <div className="text-sm font-semibold leading-tight">{first.name}</div>
                <div className="text-xs text-neutral-500">{money(first.price)}</div>
              </div>
              <div className="text-xs text-neutral-500">x{first.qty}</div>
            </div>
            {count > first.qty && <div className="pt-3 text-center text-xs text-neutral-500">and {count - first.qty} other item(s)</div>}
          </div>

          <div className="rounded bg-black p-4 text-white">
            <div className="text-xs uppercase tracking-widest text-neutral-300">Grand Total</div>
            <div className="text-lg font-bold">{money(amount)}</div>
          </div>
        </div>

        <button className="mt-1 w-full rounded-md bg-[#D87D4A] py-3 text-sm font-semibold uppercase text-white hover:opacity-90" onClick={onClose}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
