import { useEffect, useState } from "react";
import logo3 from "../../imports/logo3.png";

/* Split heading text into word spans with staggered fadeUp */
function AnimatedHeading({ loaded }: { loaded: boolean }) {
  const line1 = ["Fazemos", "marcas"];
  const line2 = ["crescerem."];
  const baseDelay = 200;
  const stagger = 65;

  const wordStyle = (wordIndex: number): React.CSSProperties => ({
    display: "inline-block",
    willChange: "transform, opacity",
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${baseDelay + wordIndex * stagger}ms,
                 transform 0.7s cubic-bezier(0.4,0,0.2,1) ${baseDelay + wordIndex * stagger}ms`,
  });

  return (
    <h1
      style={{
        color: "#fff",
        fontSize: "clamp(48px, 8vw, 88px)",
        fontWeight: 900,
        lineHeight: 1.05,
        letterSpacing: "-0.04em",
        margin: "0 0 28px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {line1.map((word, i) => (
        <span key={i} style={wordStyle(i)}>
          {word}{i < line1.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
      <br />
      {line2.map((word, i) => (
        <span key={i} style={wordStyle(line1.length + i)}>
          {word}
        </span>
      ))}
    </h1>
  );
}

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const handleSeeWork = () => {
    const el = document.querySelector("#trabalhos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const fadeStyle = (
    delay: number,
    duration = 600,
    extraFrom = "translateY(20px)",
    extraTo = "translateY(0)"
  ): React.CSSProperties => ({
    willChange: "transform, opacity",
    opacity: loaded ? 1 : 0,
    transform: loaded ? extraTo : extraFrom,
    transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms,
                 transform ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
  });

  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "120px 32px 80px",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(#ffffff06 1px, transparent 1px), linear-gradient(90deg, #ffffff06 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          textAlign: "center",
          maxWidth: 900,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            color: "#ffffff66",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 32,
            fontFamily: "Inter, sans-serif",
            ...fadeStyle(100, 500),
          }}
        >
          Agência de Marketing Digital
        </p>

        {/* Main heading */}
        <AnimatedHeading loaded={loaded} />

        {/* Sub heading */}
        <p
          style={{
            color: "#ffffff80",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 400,
            letterSpacing: "0.01em",
            marginBottom: 52,
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.6,
            ...fadeStyle(500, 600),
          }}
        >
          Cresay — Agência de Marketing Digital
        </p>

        {/* CTA block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            ...fadeStyle(700, 500),
          }}
        >
          {/* Orbit brand icon */}
          <img
            src={logo3}
            alt=""
            aria-hidden="true"
            style={{
              width: 44,
              height: 44,
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
              opacity: 0.7,
            }}
          />

          {/* CTA button */}
          <button
            onClick={handleSeeWork}
            style={{
              background: "transparent",
              border: "1px solid #ffffff99",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "16px 40px",
              fontFamily: "Inter, sans-serif",
              transition: "background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease",
              willChange: "transform",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#000";
              e.currentTarget.style.borderColor = "#fff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "#ffffff99";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Ver nossos trabalhos
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          willChange: "opacity",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 1.1s",
        }}
      >
        <span
          style={{
            color: "#ffffff66",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Rolar
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "#ffffff40",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}