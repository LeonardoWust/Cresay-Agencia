import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";
import logo2 from "../../imports/logo2.png";
import logo3 from "../../imports/logo3.png";

function SocialLink({
  label,
  href,
  delay = 0,
}: {
  label: string;
  href: string;
  delay?: number;
}) {
  const [hovered, setHovered] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="social-link-anim"
      style={{
        color: hovered ? "#fff" : "#ffffff59",
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        textDecoration: "none",
        fontFamily: "Inter, sans-serif",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        willChange: "transform, opacity",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}ms,
                     transform 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}ms,
                     color 0.2s ease`,
      }}
    >
      {label}
      <span style={{ fontSize: 10, opacity: 0.5 }}>↗</span>
    </a>
  );
}

export function Footer() {
  const { ref: wrapRef, isVisible }            = useScrollReveal(0.1);
  const { ref: divRef, isVisible: divVisible } = useScrollReveal(0.05);
  const [emailHovered, setEmailHovered]        = useState(false);

  return (
    <footer
      id="contato"
      style={{
        background: "#000",
        borderTop: "1px solid #ffffff0f",
        padding: "80px 32px 48px",
      }}
    >
      <div
        ref={wrapRef as React.RefObject<HTMLDivElement>}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* CTA phrase */}
        <a
          href="https://wa.link/wemhpo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "#fff",
            color: "#000",
            textDecoration: "none",
            padding: "12px 24px",
            borderRadius: 100,
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.04em",
            margin: "0 0 24px",
            willChange: "transform, opacity",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#000">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.529 5.845L.057 23.485a.5.5 0 0 0 .611.611l5.638-1.471A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.929 0-3.73-.518-5.271-1.415l-.378-.222-3.908 1.019 1.02-3.909-.222-.378A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Fale Conosco!
        </a>
        <p
          style={{
            color: "#ffffff33",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            margin: "0 0 32px",
            fontFamily: "Inter, sans-serif",
            willChange: "transform, opacity",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          Vamos trabalhar juntos
        </p>

        {/* Orbit icon */}
        <img
          src={logo3}
          alt=""
          aria-hidden="true"
          style={{
            width: 52,
            height: 52,
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
            opacity: isVisible ? 0.6 : 0,
            marginBottom: 20,
            willChange: "opacity",
            transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1) 80ms",
          }}
        />

        {/* Brand logo */}
        <img
          src={logo2}
          alt="Cresay — A equipe que faz acontecer"
          style={{
            height: 80,
            width: "auto",
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
            marginBottom: 40,
            willChange: "opacity, transform",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1) 160ms, transform 0.6s cubic-bezier(0.4,0,0.2,1) 160ms",
          }}
        />

        {/* Email contact */}
        <a
          href="mailto:cresayequipe@gmail.com"
          onMouseEnter={() => setEmailHovered(true)}
          onMouseLeave={() => setEmailHovered(false)}
          style={{
            color: emailHovered ? "#fff" : "#ffffff66",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.01em",
            textDecoration: "none",
            fontFamily: "Inter, sans-serif",
            transition: "color 0.25s ease, opacity 0.6s cubic-bezier(0.4,0,0.2,1) 240ms, transform 0.6s cubic-bezier(0.4,0,0.2,1) 240ms",
            marginBottom: 56,
            display: "block",
            willChange: "transform, opacity",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(12px)",
          }}
        >
          cresayequipe@gmail.com
        </a>

        {/* Divider */}
        <div
          ref={divRef as React.RefObject<HTMLDivElement>}
          className={`footer-divider-anim ${divVisible ? "is-visible" : "is-hidden"}`}
          style={{
            width: "100%",
            height: 1,
            background: "#ffffff0f",
            marginBottom: 40,
            transformOrigin: "left",
          }}
        />

        {/* Social + copyright row */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            <SocialLink label="Instagram" href="https://www.instagram.com/cresayagencia/?hl=pt-br" delay={0} />
          </div>

          <p
            style={{
              color: "#ffffff33",
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: "0.04em",
              margin: 0,
              fontFamily: "Inter, sans-serif",
              willChange: "opacity",
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.5s ease 400ms",
            }}
          >
            © {new Date().getFullYear()} Cresay. Todos os direitos reservados.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #contato > div > div:last-child {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center;
            gap: 16px !important;
          }
        }
      `}</style>
    </footer>
  );
}