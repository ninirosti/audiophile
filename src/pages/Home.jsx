import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductHighlight from "../components/ProductHighlight";

export default function Home() {
  return (
    <main style={{ padding: "1.5rem", display: "grid", gap: 24 }}>
      <Hero />

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        <CategoryCard title="Headphones" />
        <CategoryCard title="Speakers" />
        <CategoryCard title="Earphones" />
      </div>

      <ProductHighlight title="ZX9 Speaker" description="Upgrade your sound system with the all new ZX9." bg="#d87d4a" />
      <ProductHighlight title="ZX7 Speaker" description="Stream high-quality sound effortlessly." bg="#eaeaea" />
      <ProductHighlight title="YX1 Earphones" description="Compact yet powerful in-ear experience." bg="#f5f5f5" />
    </main>
  );
}
