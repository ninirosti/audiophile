import Hero from "../components/Hero";
import ProductHighlight from "../components/ProductHighlight";
import Categories from "../components/Categories";

import heroImg from "../assets/xx99-mark-two.png";
import zx9Img from "../assets/zx9.png";
import zx7Img from "../assets/zx7.png";
import yx1Img from "../assets/yx1.png";

export default function Home() {
  return (
    <main style={{ padding: "1.5rem", display: "grid", gap: 24 }}>
      <Hero image={heroImg} slug="xx99-mark-two" />

      <Categories />

      <div style={{ maxWidth: 1110, margin: "0 auto", width: "100%" }}>
        <ProductHighlight title="ZX9 Speaker" description="Upgrade your sound system with the all new ZX9." bg="#d87d4a" image={zx9Img} slug="zx9" />
        <ProductHighlight title="ZX7 Speaker" description="Stream high-quality sound effortlessly." bg="#eaeaea" image={zx7Img} slug="zx7" />
        <ProductHighlight title="YX1 Earphones" description="Compact yet powerful in-ear experience." bg="#f5f5f5" image={yx1Img} slug="yx1" />
      </div>
    </main>
  );
}
