import Hero from "../components/Hero";
import ProductHighlight from "../components/ProductHighlight";
import Categories from "../components/Categories"; // 👈 add this import

import zx9Img from "../assets/zx9.png";
import zx7Img from "../assets/zx7.png";
import yx1Img from "../assets/yx1.png";

export default function Home() {
  return (
    <main style={{ padding: "1.5rem", display: "grid", gap: 24 }}>
      <Hero />

      {/* 👇 Categories in the middle of Home */}
      <Categories />

      {/* Product Highlights */}
      <div style={{ maxWidth: 1110, margin: "0 auto", width: "100%" }}>
        <ProductHighlight title="ZX9 Speaker" description="Upgrade your sound system with the all new ZX9." bg="#d87d4a" image={zx9Img} />
        <ProductHighlight title="ZX7 Speaker" description="Stream high-quality sound effortlessly." bg="#eaeaea" image={zx7Img} />
        <ProductHighlight title="YX1 Earphones" description="Compact yet powerful in-ear experience." bg="#f5f5f5" image={yx1Img} />
      </div>
    </main>
  );
}
