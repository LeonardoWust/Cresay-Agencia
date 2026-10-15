import { useScrollReveal } from "./useScrollReveal";

const stats = [
  { number: "120+", label: "Projetos entregues" },
  { number: "10+",  label: "Clientes ativos"    },
];

export function About() {
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollReveal(0.2);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.15);

  return (
    <section
      id="sobre"
      style={{
        background: "#111111",
        padding: "80px 32px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Quote — fadeUp 700ms */}
        <div
          ref={quoteRef as React.RefObject<HTMLDivElement>}
          className="reveal-item"
          style={{
            willChange: "transform, opacity",
            opacity: quoteVisible ? 1 : 0,
            transform: quoteVisible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <p
            style={{
              color: "#ffffffd9",
              fontSize: "clamp(18px, 3vw, 26px)",
              fontStyle: "italic",
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: "0.01em",
              fontFamily: "Inter, sans-serif",
              margin: 0,
            }}
          >
            "Não fazemos apenas marketing — criamos conexões reais entre marcas e pessoas.
            <br />
            Estratégia, criatividade e resultado em cada projeto."
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef as React.RefObject<HTMLDivElement>}
          style={{
            marginTop: 40,
            display: "flex",
            justifyContent: "center",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                willChange: "transform, opacity",
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 100}ms,
                             transform 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 100}ms`,
              }}
            >
              <p
                style={{
                  color: "#fff",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  margin: 0,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {stat.number}
              </p>
              <p
                style={{
                  color: "#ffffff66",
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  margin: "6px 0 0",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
