import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function NewProductsSlider({ slides = [], auto = true, interval = 5000, height = 560, imgBox = 440 }) {
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);
  const [i, setI] = useState(0);
  const [hover, setHover] = useState(false);
  const [tick, setTick] = useState(0); // 0 → 100 for progress
  const wrapRef = useRef(null);

  // autoplay + progress
  useEffect(() => {
    if (!auto || hover || safeSlides.length <= 1) return;
    let elapsed = 0;
    const step = 50; // ms
    const t = setInterval(() => {
      elapsed += step;
      setTick(Math.min(100, (elapsed / interval) * 100));
      if (elapsed >= interval) {
        elapsed = 0;
        setTick(0);
        setI((p) => (p + 1) % safeSlides.length);
      }
    }, step);
    return () => clearInterval(t);
  }, [auto, hover, interval, safeSlides.length]);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // swipe
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let startX = 0;
    const down = (e) => (startX = e.touches?.[0]?.clientX ?? 0);
    const move = (e) => {
      if (!startX) return;
      const dx = (e.touches?.[0]?.clientX ?? 0) - startX;
      if (Math.abs(dx) > 60) {
        dx < 0 ? next() : prev();
        startX = 0;
      }
    };
    el.addEventListener("touchstart", down, { passive: true });
    el.addEventListener("touchmove", move, { passive: true });
    return () => {
      el.removeEventListener("touchstart", down);
      el.removeEventListener("touchmove", move);
    };
  }, []);

  if (!safeSlides.length) return null;

  const prev = () => {
    setTick(0);
    setI((p) => (p - 1 + safeSlides.length) % safeSlides.length);
  };
  const next = () => {
    setTick(0);
    setI((p) => (p + 1) % safeSlides.length);
  };

  return (
    <section
      ref={wrapRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        background: safeSlides[i].bg ?? "#0E0E0E",
        color: safeSlides[i].darkText ? "#0E0E0E" : "#fff",
      }}
    >
      {/* content frame */}
      <div
        style={{
          maxWidth: 1110,
          margin: "0 auto",
          padding: "48px 24px",
          minHeight: height,
          display: "grid",
          gap: 24,
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
        }}
      >
        {/* slides stack with fade */}
        <div style={{ position: "relative" }}>
          {safeSlides.map((s, idx) => (
            <SlideText key={idx} active={idx === i} badge={s.badge} title={s.title} subtitle={s.subtitle} description={s.description} slug={s.slug} ctaBg={s.ctaBg} ctaColor={s.ctaColor} ctaLabel={s.ctaLabel} />
          ))}
        </div>

        {/* image stack with fade */}
        <div style={{ position: "relative", justifySelf: "end" }}>
          {safeSlides.map((s, idx) => (
            <SlideImage key={idx} active={idx === i} src={s.image} alt={s.title} box={imgBox} />
          ))}
        </div>
      </div>

      {/* arrows */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: 18,
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <GhostBtn aria-label="Previous" onClick={prev}>
          ‹
        </GhostBtn>
        <GhostBtn aria-label="Next" onClick={next}>
          ›
        </GhostBtn>

        {/* dots */}
        <div style={{ display: "flex", gap: 8 }}>
          {safeSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setI(idx);
                setTick(0);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                border: 0,
                cursor: "pointer",
                background: idx === i ? "#D87D4A" : "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>
      </div>

      {/* progress */}
      {auto && safeSlides.length > 1 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 3,
            background: "rgba(255,255,255,0.15)",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${tick}%`,
              background: "#D87D4A",
              transition: "width 50ms linear",
            }}
          />
        </div>
      )}

      {/* responsive */}
      <style>{`
        @media (max-width: 900px) {
          section > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* --- parts --- */

function SlideText({ active, badge, title, subtitle, description, slug, ctaBg, ctaColor, ctaLabel }) {
  return (
    <div
      style={{
        position: active ? "relative" : "absolute",
        inset: 0,
        opacity: active ? 1 : 0,
        transition: "opacity 400ms ease",
        pointerEvents: active ? "auto" : "none",
      }}
    >
      {badge && <p style={{ letterSpacing: 6, opacity: 0.8, margin: 0, marginBottom: 12 }}>{badge}</p>}
      <h1 style={{ margin: "0 0 10px", fontSize: 44, lineHeight: 1.1 }}>{title}</h1>
      {subtitle && <h3 style={{ margin: "0 0 10px" }}>{subtitle}</h3>}
      {description && <p style={{ maxWidth: 480, opacity: 0.9, margin: "0 0 16px" }}>{description}</p>}

      {slug && (
        <Link
          to={`/product/${slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: 44,
            padding: "0 18px", // <<< smaller pill
            borderRadius: 999,
            background: ctaBg ?? "#D87D4A",
            color: ctaColor ?? "#fff",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: 0.4,
            textTransform: "uppercase",
          }}
        >
          {ctaLabel ?? "See product"}
        </Link>
      )}
    </div>
  );
}

function SlideImage({ active, src, alt, box }) {
  if (!src) return null;
  return (
    <div
      style={{
        position: active ? "relative" : "absolute",
        right: 0,
        top: 0,
        opacity: active ? 1 : 0,
        transition: "opacity 400ms ease",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: box,
          height: box,
          maxWidth: "100%",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}

function GhostBtn({ children, ...rest }) {
  return (
    <button
      {...rest}
      style={{
        background: "rgba(255,255,255,0.14)",
        color: "#fff",
        border: 0,
        width: 38,
        height: 38,
        borderRadius: 10,
        cursor: "pointer",
        fontSize: 20,
        lineHeight: "38px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        outlineOffset: 2,
      }}
    >
      {children}
    </button>
  );
}
