import { useRef, useEffect, useState } from "react";

// ── Imagens locais dos 3 blocos ─────────────────────────────────────────────
import imgBlock1 from "../../imports/quemsomos2.jpg";
import imgBlock2 from "../../imports/IMG_2182 (1).jpg";
import imgBlock3 from "../../imports/quemsomos1.png";

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        // Re-trigger on every enter AND reset on every exit
        setVisible(entry.isIntersecting);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const bodyText: React.CSSProperties = {
  color: "#ffffffcc",
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.9,
  fontFamily: "Inter, sans-serif",
  margin: 0,
};

const photoStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  display: "block",
  borderRadius: 10,
};

/* ── Directional reveal helper ── */
function revealStyle(
  visible: boolean,
  direction: "left" | "right" | "up",
  delay = 0
): React.CSSProperties {
  const from =
    direction === "left"
      ? "translateX(-24px)"
      : direction === "right"
      ? "translateX(24px)"
      : "translateY(24px)";
  return {
    willChange: "transform, opacity",
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0,0)" : from,
    transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms,
                 transform 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
  };
}

export function QuemSomos() {
  const title = useReveal(0.2);
  const b1 = useReveal(0.15);
  const b2 = useReveal(0.15);
  const b3 = useReveal(0.15);

  return (
    <section
      id="quem-somos"
      style={{ background: "#000", padding: "80px 24px" }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        {/* Section title — fadeUp 700ms */}
        <div
          ref={title.ref}
          style={{
            textAlign: "center",
            marginBottom: 64,
            ...revealStyle(title.visible, "up"),
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              margin: 0,
              fontFamily: "Inter, sans-serif",
            }}
          >
            Hoje, quem é a Cresay?
          </h2>
        </div>

        {/* Block 1 — text LEFT → image RIGHT */}
        <div
          ref={b1.ref}
          className="qs-block"
          style={{ display: "flex", alignItems: "center", gap: 60, marginBottom: 80 }}
        >
          {/* Text: slides in from left */}
          <div
            className="qs-text-col"
            style={{ flex: 1, ...revealStyle(b1.visible, "left", 0) }}
          >
            <p style={bodyText}>
              A Cresay é uma empresa focada em transformar ideias em resultados através do audiovisual e do digital. Atuamos com produção de eventos, cobertura de casamentos, criação de vídeos estratégicos para redes sociais e gestão completa de perfis digitais.
            </p>
          </div>

          {/* Image: slides in from right */}
          <div
            className="qs-img-col qs-img-wrap"
            style={{
              flex: 1,
              height: 340,
              flexShrink: 0,
              ...revealStyle(b1.visible, "right", 120),
            }}
          >
            <div className="qs-img-inner" style={{ width: "100%", height: "100%" }}>
              <img
                src={imgBlock1}
                alt="Equipe Cresay em evento"
                style={{
                  ...photoStyle,
                  objectFit: "cover",
                  objectPosition: "center 30%",
                }}
              />
            </div>
          </div>
        </div>

        {/* Block 2 — image LEFT → text RIGHT */}
        <div
          ref={b2.ref}
          className="qs-block"
          style={{ display: "flex", alignItems: "center", gap: 60, marginBottom: 80 }}
        >
          {/* Image: slides in from left */}
          <div
            className="qs-img-col qs-img-wrap"
            style={{
              flex: 1,
              height: 340,
              flexShrink: 0,
              ...revealStyle(b2.visible, "left", 0),
            }}
          >
            <div className="qs-img-inner" style={{ width: "100%", height: "100%" }}>
              <img
                src={imgBlock2}
                alt="Fotógrafo Cresay em evento"
                style={photoStyle}
              />
            </div>
          </div>

          {/* Text: slides in from right */}
          <div
            className="qs-text-col"
            style={{ flex: 1, ...revealStyle(b2.visible, "right", 120) }}
          >
            <p style={bodyText}>
              Nosso trabalho vai além de apenas produzir conteúdo — buscamos posicionar marcas, fortalecer presença online e gerar conexão real com o público. Unimos criatividade, estratégia e execução para entregar materiais que não só impactam visualmente, mas também trazem resultado.
            </p>
          </div>
        </div>

        {/* Block 3 — image LEFT → text RIGHT */}
        <div
          ref={b3.ref}
          className="qs-block"
          style={{ display: "flex", alignItems: "center", gap: 60 }}
        >
          {/* Image: slides in from left */}
          <div
            className="qs-img-col qs-img-wrap"
            style={{
              flex: 1,
              height: 340,
              flexShrink: 0,
              ...revealStyle(b3.visible, "left", 0),
            }}
          >
            <div className="qs-img-inner" style={{ width: "100%", height: "100%" }}>
              <img
                src={imgBlock3}
                alt="Cresay fotografando em estúdio"
                style={{
                  ...photoStyle,
                  objectFit: "cover",
                  objectPosition: "55% 90%",
                }}
              />
            </div>
          </div>

          {/* Text: slides in from right */}
          <div
            className="qs-text-col"
            style={{ flex: 1, ...revealStyle(b3.visible, "right", 120) }}
          >
            <p style={bodyText}>
              Seja em eventos, produções comerciais ou no dia a dia das redes sociais, a Cresay se posiciona como uma parceira de crescimento, ajudando empresas e profissionais a se destacarem no mercado com conteúdo de alto nível.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .qs-block {
            flex-direction: column !important;
            gap: 28px !important;
            margin-bottom: 48px !important;
          }
          .qs-img-col {
            height: 220px !important;
            width: 100% !important;
            order: -1 !important;
          }
          .qs-text-col {
            order: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}