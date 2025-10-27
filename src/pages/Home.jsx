import NewProductsSlider from "../components/NewProductsSlider";
import Categories from "../components/Categories";
import ProductHighlight from "../components/ProductHighlight";

// assets
import heroImg from "../assets/xx99-mark-two.png";
import zx9Img from "../assets/zx9.png";
import zx7Img from "../assets/zx7.png";
import yx1Img from "../assets/yx1.png";

export default function Home() {
  const slides = [
    {
      badge: "NEW PRODUCT",
      title: "XX99 MARK II HEADPHONES",
      description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
      image: heroImg,
      slug: "xx99-mark-two",
      bg: "#0E0E0E",
      ctaLabel: "See Product",
    },
    {
      badge: "NEW PRODUCT",
      title: "ZX9 SPEAKER",
      description: "Upgrade your sound system with the all new ZX9.",
      image: zx9Img,
      slug: "zx9",
      bg: "#1A1A1A",
    },
    {
      badge: "NEW PRODUCT",
      title: "ZX7 SPEAKER",
      description: "Stream high-quality sound effortlessly.",
      image: zx7Img,
      slug: "zx7",
      bg: "#111",
    },
    {
      badge: "NEW PRODUCT",
      title: "YX1 EARPHONES",
      description: "Compact yet powerful in-ear experience.",
      image: yx1Img,
      slug: "yx1",
      bg: "#0E0E0E",
    },
  ];

  return (
    <main style={{ display: "grid", gap: 48 }}>
      {/* Hero slider */}
      <section aria-label="Featured new products">
        <NewProductsSlider slides={slides} auto interval={5000} />
      </section>

      {/* Categories */}
      <section style={{ padding: "0 24px" }}>
        <div style={{ maxWidth: 1110, margin: "0 auto" }}>
          <Categories />
        </div>
      </section>

      {/* Product Highlights */}
      <section style={{ padding: "0 24px 64px" }}>
        <div style={{ maxWidth: 1110, margin: "0 auto", display: "grid", gap: 24 }}>
          <ProductHighlight title="ZX9 Speaker" description="Upgrade your sound system with the all new ZX9." bg="#d87d4a" image={zx9Img} slug="zx9" />
          <ProductHighlight title="ZX7 Speaker" description="Stream high-quality sound effortlessly." bg="#eaeaea" image={zx7Img} slug="zx7" />
          <ProductHighlight title="YX1 Earphones" description="Compact yet powerful in-ear experience." bg="#f5f5f5" image={yx1Img} slug="yx1" />
        </div>
      </section>
    </main>
  );
}
