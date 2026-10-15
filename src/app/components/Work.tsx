import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import carrossel1 from "../../imports/carrossel1.png";
import carrossel3 from "../../imports/carrossel3.png";
import carrossel4 from "../../imports/carrossel4.png";
import fotoandamento from "../../imports/fotoandamento.png";

const projects = [
  {
    id: 1,
    name: "Bailaço & Banda Primeira Dama",
    category: "Cobertura de Show",
    link: "https://photos.app.goo.gl/aYtV8HG28Yrh5n2N7",
    showLink: true,
    images: [
      carrossel1,
    ],
    year: "2024",
  },
  {
    id: 2,
    name: "Ensaio de Fotos",
    category: "Mídia Social",
    link: "https://photos.app.goo.gl/ixtzJ57aD4girNf39",
    showLink: true,
    images: [
      carrossel4,
    ],
    year: "2024",
  },
  {
    id: 3,
    name: "Coleção Renovo",
    category: "Cobertura de Evento",
    link: "https://photos.app.goo.gl/LjCjeYkM37wZovTA7",
    showLink: true,
    images: [
      carrossel3,
    ],
    year: "2023",
  },
  {
    id: 4,
    name: "Em Andamento",
    category: "Produções para Imobiliárias & Concessionárias",
    link: "#",
    showLink: false,
    images: [
      fotoandamento,
    ],
    year: "2023",
  },
];

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
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
      {/* Single image */}
      <div style={{ overflow: "hidden", position: "relative", height: 280 }}>
        <ImageWithFallback
          src={project.images[0]}
          alt={project.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            display: "block",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            filter: "brightness(0.85)",
            willChange: "transform",
          }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: "24px 24px 28px" }}>
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
          {project.category}
        </p>
        <h3
          style={{
            color: "#fff",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            margin: 0,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {project.name}
        </h3>

        {/* Arrow */}
        {project.showLink && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 20,
              display: "inline-flex",
              alignItems: "center",
              gap: hovered ? 12 : 8,
              color: hovered ? "#ffffffcc" : "#ffffff4d",
              fontSize: 13,
              fontFamily: "Inter, sans-serif",
              textDecoration: "none",
              transition: "color 0.25s ease, gap 0.25s ease",
            }}
          >
            <span>Ver projeto</span>
            <span style={{ fontSize: 16 }}>→</span>
          </a>
        )}
      </div>
    </div>
  );
}

export function Work() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);

  return (
    <section
      id="trabalhos"
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
              Portfólio
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
              Trabalhos Selecionados
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
            Uma seleção dos projetos que mais nos orgulhamos.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
            gap: 20,
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 80} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #trabalhos .work-header { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}