import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// ── Tab icons (inline SVG paths) ─────────────────────────────────────────────

const IconGestao = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const IconMidia = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const IconCriativos = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="2.5" />
    <path d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
    <path d="M5 16l4-4 3 3 3-3 4 4" />
  </svg>
);

const IconPaginas = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const IconDados = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const IconVendas = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const IconProducao = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="15" height="13" rx="2" />
    <path d="M17 9l4-2v10l-4-2V9z" />
    <path d="M7 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────

const tabs = [
  {
    id: "gestao",
    label: "GESTÃO",
    Icon: IconGestao,
    title: "Consultoria de Growth Marketing",
    description:
      "Gestão do projeto e desenvolvimento de estratégias para o crescimento da sua empresa, buscando o maior retorno sobre os valores investidos.",
    bullets: [
      "Especialistas treinados, desenvolvidos e geridos pela Cresay",
      "Atendimento constante, ágil e eficaz",
      "Estratégias personalizadas para o seu mercado",
    ],
    image:
      "https://images.unsplash.com/photo-1601277161746-88c97f548738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneSUyMHRlYW0lMjBtZWV0aW5nJTIwZGFya3xlbnwxfHx8fDE3NzY0NzA2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "midia",
    label: "MÍDIA",
    Icon: IconMidia,
    title: "Gestão de Mídia Paga",
    description:
      "Campanhas de tráfego pago estratégicas no Google, Meta e demais plataformas, otimizadas para gerar o máximo de resultado com o menor custo.",
    bullets: [
      "Gestão de Google Ads, Meta Ads e TikTok Ads",
      "Otimização contínua de ROI e ROAS",
      "Relatórios de desempenho em tempo real",
    ],
    image:
      "https://images.unsplash.com/photo-1656164631610-f104326810c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBhaWQlMjBhZHMlMjBkaWdpdGFsJTIwY2FtcGFpZ258ZW58MXx8fHwxNzc2NDcwNjYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "criativos",
    label: "CRIATIVOS",
    Icon: IconCriativos,
    title: "Produção de Criativos",
    description:
      "Criação de peças visuais e vídeos estratégicos para anúncios, focados em performance, conversão e fortalecimento da identidade da marca.",
    bullets: [
      "Criativos 100% focados em conversão",
      "Produção em escala com constância",
      "A/B testing contínuo para otimização",
    ],
    image:
      "https://images.unsplash.com/photo-1765539160785-e7953620488f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvbnRlbnQlMjBwcm9kdWN0aW9uJTIwc3R1ZGlvJTIwZGFya3xlbnwxfHx8fDE3NzY0NzA2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "paginas",
    label: "PÁGINAS",
    Icon: IconPaginas,
    title: "Landing Pages & Sites",
    description:
      "Desenvolvimento de páginas de alta conversão, sites institucionais e e-commerces com design premium e foco total em resultado.",
    bullets: [
      "Design premium alinhado à identidade da marca",
      "Otimização para SEO e velocidade de carregamento",
      
    ],
    image:
      "https://images.unsplash.com/flagged/photo-1590183030142-efad5a97612f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBsYW5kaW5nJTIwcGFnZSUyMGxhcHRvcCUyMGRhcmslMjBwcmVtaXVtfGVufDF8fHx8MTc3NjgyMjk5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    objectPosition: "center center",
  },
  {
    id: "dados",
    label: "DADOS",
    Icon: IconDados,
    title: "Inteligência de Dados",
    description:
      "Estruturação de dashboards, rastreamento e análise de dados para tomada de decisões estratégicas baseadas em resultados reais.",
    bullets: [
      "Dashboards personalizados em tempo real",
      "Rastreamento completo de conversões",
      "Análise de funil e atribuição de resultados",
    ],
    image:
      "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwZGFyayUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzYzODg2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "vendas",
    label: "VENDAS",
    Icon: IconVendas,
    title: "Estratégia de Vendas",
    description:
      "Consultoria e estruturação do processo comercial para maximizar a conversão de leads em clientes e aumentar o ticket médio.",
    bullets: [
      "Estruturação do funil comercial completo",
      "Treinamento e capacitação do time de vendas",
      "Scripts, playbooks e processos de conversão",
    ],
    image:
      "https://images.unsplash.com/photo-1568202342559-29abe43a68fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGdyb3d0aCUyMGJ1c2luZXNzJTIwcmVzdWx0cyUyMGRhcmslMjBtaW5pbWFsfGVufDF8fHx8MTc3NjQ3MDY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "producao",
    label: "PRODUÇÃO",
    Icon: IconProducao,
    title: "Produção Audiovisual & Web",
    description:
      "Time criativo completo para dar vida à sua marca: do roteiro ao produto final. Film makers, editores de vídeo e desenvolvedores web trabalhando em sincronia para entregas de alto impacto.",
    bullets: [
      "Film makers e diretores de fotografia profissionais",
      "Editores de vídeo especializados em conteúdo para redes sociais e campanhas",
      "Desenvolvedores web full-stack para sites, landing pages e aplicações",
    ],
    image:
      "https://images.unsplash.com/photo-1563199592-687f283ab0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMHZpZGVvJTIwc3R1ZGlvJTIwZGFya3xlbnwxfHx8fDE3NzY0NzQxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { ref: headRef, isVisible: headVisible } = useScrollReveal(0.1);

  const current = tabs[activeTab];

  const handleTabChange = (index: number) => {
    if (index === activeTab || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(index);
      setAnimating(false);
    }, 200);
  };

  return (
    <section
      id="servicos"
      style={{
        background: "#000",
        padding: "120px 32px",
        borderTop: "1px solid #ffffff0f",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          style={{
            marginBottom: 64,
            willChange: "transform, opacity",
            transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(28px)",
          }}
        >
          <p
            style={{
              color: "#ffffff4d",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              margin: "0 0 14px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            O que fazemos
          </p>
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(32px, 4.5vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              margin: "0 0 18px",
              fontFamily: "Inter, sans-serif",
              maxWidth: 640,
            }}
          >
            Nossas Soluções de Marketing
          </h2>
          <p
            style={{
              color: "#ffffff55",
              fontSize: 15,
              fontWeight: 400,
              maxWidth: 520,
              lineHeight: 1.65,
              fontFamily: "Inter, sans-serif",
              margin: 0,
            }}
          >
            Soluções para <strong style={{ color: "#ffffffaa", fontWeight: 600 }}>vender</strong> mais, para{" "}
            <strong style={{ color: "#ffffffaa", fontWeight: 600 }}>mais pessoas</strong>, com{" "}
            <strong style={{ color: "#ffffffaa", fontWeight: 600 }}>mais eficiência</strong>.
          </p>
        </div>

        {/* ── Tabs bar ── */}
        <div
          style={{
            display: "flex",
            gap: 0,
            borderBottom: "1px solid #ffffff14",
            marginBottom: 56,
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {tabs.map((tab, i) => {
            const isActive = i === activeTab;
            return (
              <div
                key={tab.id}
                role="button"
                tabIndex={0}
                onClick={() => handleTabChange(i)}
                onKeyDown={(e) => e.key === "Enter" && handleTabChange(i)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 24px 16px",
                  background: "transparent",
                  border: "none",
                  borderBottom: isActive ? "2px solid #fff" : "2px solid transparent",
                  color: isActive ? "#fff" : "#ffffff44",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                  flexShrink: 0,
                  marginBottom: -1,
                  userSelect: "none",
                }}
              >
                <span style={{ opacity: isActive ? 1 : 0.5, transition: "opacity 0.2s ease" }}>
                  <tab.Icon />
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tab.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── Content panel ── */}
        <div
          id="servicos-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(10px)" : "translateY(0)",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
        >
          {/* Left: text */}
          <div>
            <h3
              style={{
                color: "#fff",
                fontSize: "clamp(22px, 2.5vw, 32px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                margin: "0 0 20px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {current.title}
            </h3>

            <p
              style={{
                color: "#ffffff77",
                fontSize: 15,
                fontWeight: 400,
                lineHeight: 1.7,
                margin: "0 0 32px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {current.description}
            </p>

            {/* Bullets or Roles Grid */}
            {current.id === "producao" ? (
              <div
                id="producao-roles"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 10,
                  margin: "0 0 40px",
                }}
              >
                {[
                  { label: "Film Maker", icon: "🎬" },
                  { label: "Story Maker", icon: "📖" },
                  { label: "Diretor", icon: "🎥" },
                  { label: "Roteirista", icon: "✍️" },
                  { label: "Edição de Vídeo", icon: "🎞️" },
                  { label: "Fotógrafo", icon: "📷" },
                  { label: "Edição de Fotos", icon: "🖼️" },
                  { label: "Desenvolvedor Web", icon: "💻" },
                  { label: "Designer", icon: "🎨" },
                ].map((role) => (
                  <div
                    key={role.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 14px",
                      border: "1px solid #ffffff14",
                      background: "#ffffff08",
                      borderRadius: 6,
                    }}
                  >
                    <span style={{ fontSize: 14, lineHeight: 1 }}>{role.icon}</span>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#ffffffcc",
                        letterSpacing: "0.02em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {role.label}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {current.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      color: "#ffffffbb",
                      fontSize: 14,
                      fontFamily: "Inter, sans-serif",
                      lineHeight: 1.55,
                    }}
                  >
                    {/* Checkmark */}
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        border: "1px solid #ffffff33",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}
            <a
              href="#contato"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#fff",
                color: "#000",
                border: "none",
                padding: "14px 28px",
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#ffffffdd";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
              }}
            >
              Saiba mais sobre essa solução
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right: image */}
          <div
            style={{
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid #ffffff0f",
              aspectRatio: "4 / 3",
            }}
          >
            <ImageWithFallback
              src={current.image}
              alt={current.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: current.objectPosition || "center center",
                display: "block",
                filter: "brightness(1.05) contrast(1.05) saturate(1.1)",
              }}
            />
          </div>
        </div>

        {/* Responsive grid override */}
        <style>{`
          @media (max-width: 768px) {
            #servicos-grid { grid-template-columns: 1fr !important; }
            #servicos-grid > div:last-child { display: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}