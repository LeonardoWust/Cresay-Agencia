import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import magnusImg from "../../imports/magnus.jpg";

const websites = [
  {
    id: 1,
    name: "Squad Magnus",
    category: "Landing Page",
    description: "Site de alta conversão para personal trainer, com foco em captação de alunos e apresentação de planos.",
    url: "https://squad-magnus.com.br/",
    image: magnusImg,
    year: "2025",
    tags: ["Landing Page", "Fitness", "Conversão"],
  },
];

function WebsiteCard({
  site,
  delay,
}: {
  site: (typeof websites)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref as React.RefObject<HTMLAnchorElement>}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        textDecoration: "none",
        background: "#000",
        border: `1px solid ${hovered ? "#ffffff33" : "#ffffff1a"}`,
        willChange: "transform, opacity",
        transition: `
          opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${isVisible ? 0 : delay}ms,
          transform 0.3s ease,
          border-color 0.3s ease
        `,
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(28px)",
      }}
    >
      {/* Screenshot */}
      <div style={{ overflow: "hidden", position: "relative", height: 320 }}>
        {/* Browser chrome bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 36,
            background: "#111",
            borderBottom: "1px solid #ffffff0f",
            display: "flex",
            alignItems: "center",
            padding: "0 14px",
            gap: 8,
            zIndex: 2,
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffffff1a", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffffff1a", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffffff1a", display: "inline-block" }} />
          <div
            style={{
              flex: 1,
              margin: "0 8px",
              height: 20,
              borderRadius: 4,
              background: "#ffffff08",
              display: "flex",
              alignItems: "center",
              paddingLeft: 10,
            }}
          >
            <span style={{ color: "#ffffff33", fontSize: 10, fontFamily: "Inter, sans-serif" }}>
              {site.url.replace("https://", "")}
            </span>
          </div>
        </div>

        {/* Screenshot image */}
        <ImageWithFallback
          src={site.image}
          alt={site.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
            transition: "transform 0.6s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            filter: "brightness(0.9)",
            willChange: "transform",
            paddingTop: 36,
          }}
        />

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered ? "#00000033" : "transparent",
            transition: "background 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 36,
          }}
        >
          {hovered && (
            <div
              style={{
                background: "#ffffff0f",
                border: "1px solid #ffffff33",
                borderRadius: 4,
                padding: "10px 22px",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "Inter, sans-serif",
                backdropFilter: "blur(8px)",
              }}
            >
              Visitar Site →
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "24px 24px 28px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div>
            <p
              style={{
                color: "#fff",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                margin: "0 0 10px",
                fontFamily: "Inter, sans-serif",
                opacity: hovered ? 1 : 0.35,
                transition: "opacity 0.2s ease",
              }}
            >
              {site.category}
            </p>
            <h3
              style={{
                color: "#fff",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                margin: "0 0 10px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {site.name}
            </h3>
            <p
              style={{
                color: "#ffffff59",
                fontSize: 13,
                fontFamily: "Inter, sans-serif",
                margin: "0 0 16px",
                lineHeight: 1.6,
                maxWidth: 480,
              }}
            >
              {site.description}
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {site.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    border: "1px solid #ffffff1a",
                    borderRadius: 2,
                    padding: "4px 10px",
                    color: "#ffffff59",
                    fontSize: 11,
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.08em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 20,
            display: "inline-flex",
            alignItems: "center",
            gap: hovered ? 12 : 8,
            color: hovered ? "#ffffffcc" : "#ffffff4d",
            fontSize: 13,
            fontFamily: "Inter, sans-serif",
            transition: "color 0.25s ease, gap 0.25s ease",
          }}
        >
          <span>Ver site</span>
          <span style={{ fontSize: 16 }}>→</span>
        </div>
      </div>
    </a>
  );
}

export function WebsiteShowcase() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);

  return (
    <section
      id="sites"
      style={{
        background: "#000",
        padding: "120px 32px",
        borderTop: "1px solid #ffffff0f",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          style={{
            marginBottom: 64,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 20,
            willChange: "transform, opacity",
            transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(28px)",
          }}
        >
          <div>
            <p
              style={{
                color: "#ffffff4d",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                margin: "0 0 12px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Sites Desenvolvidos
            </p>
            <h2
              style={{
                color: "#fff",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                margin: 0,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Sites que Entregamos
            </h2>
          </div>
          <p
            style={{
              color: "#ffffff59",
              fontSize: 14,
              fontWeight: 400,
              maxWidth: 280,
              lineHeight: 1.6,
              fontFamily: "Inter, sans-serif",
              margin: 0,
            }}
          >
            Desenvolvemos sites de alta performance com foco em conversão e identidade visual.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 560px), 1fr))",
            gap: 20,
          }}
        >
          {websites.map((site, i) => (
            <WebsiteCard key={site.id} site={site} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
