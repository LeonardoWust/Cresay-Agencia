import { useState, useEffect, useRef, useCallback } from "react";
import { useScrollReveal } from "./useScrollReveal";

// ─── Dados da equipe ────────────────────────────────────────────────────────
const members = [
  {
    id: 1,
    name: "Isabela Moura",
    role: "CEO & Estrategista",
    bio: "Com mais de 12 anos de experiência em marketing digital, Isabela lidera a Cresay com visão estratégica e um olhar aguçado para tendências de mercado. É conhecida por transformar desafios complexos em histórias de marca simples e poderosas.",
    linkedin: "https://linkedin.com",
    initials: "IM",
    image: "src/imports/image-9.png",
  },
  {
    id: 2,
    name: "Rafael Teixeira",
    role: "Diretor Criativo",
    bio: "Rafael traduz ideias em identidades visuais que ficam na memória. Seu olhar estético aguçado e referências globais fazem de cada projeto uma peça única, capaz de comunicar sem precisar falar.",
    linkedin: "https://linkedin.com",
    initials: "RT",
    image: "src/imports/imsadage-1.png",
  },
  {
    id: 3,
    name: "Camila Santos",
    role: "Head de Conteúdo",
    bio: "Camila transforma briefings em narrativas que engajam de verdade. Jornalista por formação e estrategista por vocação, ela lidera a produção de conteúdo para redes sociais, blogs e campanhas integradas.",
    linkedin: "https://linkedin.com",
    initials: "CS",
    image:
      "https://images.unsplash.com/photo-1724645429135-151152545a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY3JlYXRpdmUlMjBkaXJlY3RvciUyMGZhc2hpb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzU5MjQxNDd8MA&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: 4,
    name: "Bruno Alves",
    role: "Designer & Motion",
    bio: "Bruno dá vida ao que antes era estático. Especialista em motion design e animação, ele cria peças que se movem com propósito — do reel ao anúncio — com uma identidade visual coesa e marcante.",
    linkedin: "https://linkedin.com",
    initials: "BA",
    image:
      "https://images.unsplash.com/photo-1633625510483-c177f4308f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMGRlc2lnbmVyJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzc1ODA4NzU2fDA&ixlib=rb-4.1.0&q=80&w=800",
  },
];

// ─── Imagem com fallback ─────────────────────────────────────────────────────
function MemberImage({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1e1e1e",
          fontSize: 40,
          fontWeight: 700,
          color: "#444",
        }}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center 20%",
        display: "block",
      }}
    />
  );
}

// ─── Componente principal ────────────────────────────────────────────────────
export function Team() {
  const DURATION = 480;

  const [current, setCurrent] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imgKey, setImgKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Scroll reveal for the header */
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2);
  /* Scroll reveal for the carousel card */
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal(0.15);

  const navigate = useCallback(
    (nextIndex: number, direction: "next" | "prev") => {
      if (animating) return;
      setDir(direction);
      setPrevIdx(current);
      setAnimating(true);
      setCurrent(nextIndex);
      setImgKey((k) => k + 1);
      setTimeout(() => {
        setPrevIdx(null);
        setAnimating(false);
      }, DURATION);
    },
    [animating, current]
  );

  const goNext = useCallback(
    () => navigate((current + 1) % members.length, "next"),
    [current, navigate]
  );
  const goPrev = useCallback(
    () => navigate((current - 1 + members.length) % members.length, "prev"),
    [current, navigate]
  );

  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(goNext, 5500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, goNext]);

  const member = members[current];
  const prevMember = prevIdx !== null ? members[prevIdx] : null;
  const enterFrom = dir === "next" ? "100%" : "-100%";
  const exitTo = dir === "next" ? "-100%" : "100%";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700;9..40,800&family=DM+Serif+Display:ital@0;1&display=swap');

        #equipe {
          background: #0a0a0a;
          padding: 72px 0 80px;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        .team-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Header ── */
        .team-header {
          text-align: center;
          margin-bottom: 44px;
        }
        .team-eyebrow {
          display: block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #ffffff40;
          margin: 0 0 12px;
        }
        .team-heading {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: clamp(30px, 5vw, 50px);
          color: #fff;
          margin: 0;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        /* ── Viewport — tamanho fixo, overflow hidden ── */
        .team-viewport {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
          border-radius: 14px;
          border: 1px solid #ffffff12;
          background: #141414;
        }

        /* ── Slide base ── */
        .team-slide {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: row;
        }

        /* Slide que está entrando */
        .team-slide--enter {
          z-index: 2;
          animation: teamEnter ${DURATION}ms cubic-bezier(0.4,0,0.2,1) both;
        }
        /* Slide que está saindo */
        .team-slide--exit {
          z-index: 1;
          animation: teamExit ${DURATION}ms cubic-bezier(0.4,0,0.2,1) both;
        }
        /* Slide em repouso */
        .team-slide--idle {
          z-index: 2;
        }

        @keyframes teamEnter {
          from { transform: translateX(var(--t-from)); opacity: 0.5; }
          to   { transform: translateX(0);             opacity: 1;   }
        }
        @keyframes teamExit {
          from { transform: translateX(0);           opacity: 1;   }
          to   { transform: translateX(var(--t-to)); opacity: 0.5; }
        }

        /* ── Foto: tamanho fixo em px ── */
        .team-photo {
          width: 320px;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          background: #1a1a1a;
        }
        .team-photo img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
        }
        .team-photo-fallback {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 38px;
          font-weight: 700;
          color: #333;
          background: #1a1a1a;
        }

        /* ── Texto ── */
        .team-body {
          flex: 1;
          min-width: 0;            /* impede que flex filho estoure */
          padding: 56px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        .team-name {
          font-size: clamp(20px, 2.8vw, 28px);
          font-weight: 800;
          color: #fff;
          margin: 0 0 7px;
          letter-spacing: -0.04em;
          line-height: 1.1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .team-role {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ffffff52;
          margin: 0;
        }
        .team-divider {
          width: 28px;
          height: 1px;
          background: #ffffff1f;
          margin: 22px 0;
          flex-shrink: 0;
        }
        .team-bio {
          font-size: 13.5px;
          font-weight: 400;
          line-height: 1.82;
          color: #ffffff8f;
          margin: 0 0 26px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .team-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #ffffff4d;
          text-decoration: none;
          transition: color 0.2s;
          width: fit-content;
        }
        .team-link:hover { color: #fff; }

        /* ── Controles ── */
        .team-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 24px;
        }
        .ctrl-arrow {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #ffffff0d;
          border: 1px solid #ffffff17;
          color: #ffffffa6;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          flex-shrink: 0;
          line-height: 1;
        }
        .ctrl-arrow:hover {
          background: #ffffff21;
          color: #fff;
        }

        /* ── Animations (prefers-reduced-motion safe) ── */
        @media (prefers-reduced-motion: no-preference) {
          /* Header scroll-reveal transition */
          .team-header {
            transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1),
                        transform 0.6s cubic-bezier(0.4,0,0.2,1);
            will-change: transform, opacity;
          }
          /* Viewport scroll-reveal transition (delay so header animates first) */
          .team-viewport {
            transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1) 120ms,
                        transform 0.7s cubic-bezier(0.4,0,0.2,1) 120ms;
            will-change: transform, opacity;
          }
          /* Photo zoom-out on slide enter — triggers on img remount (new key) */
          .team-slide--enter .team-photo img,
          .team-slide--idle .team-photo img {
            animation: photoZoomOut 600ms ease both;
            will-change: transform;
          }
          /* Arrow button hover scale */
          .ctrl-arrow {
            transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease !important;
          }
          .ctrl-arrow:hover {
            transform: scale(1.08);
          }
        }

        /* ── Tablet ── */
        @media (max-width: 768px) {
          .team-viewport { height: 420px; }
          .team-photo { width: 240px; }
          .team-body { padding: 32px 28px; }
        }

        /* ── Mobile (sm) — layout vertical ──
           Slides são position:absolute, então viewport precisa de
           altura explícita para não colapsar */
        @media (max-width: 580px) {
          .team-viewport { height: 520px; }
          .team-slide { flex-direction: column; }
          .team-photo {
            width: 100%;
            height: 240px;
            flex-shrink: 0;
            position: relative;
          }
          .team-photo img {
            object-position: center 15%;
          }
          .team-body {
            flex: 1;
            padding: 20px 22px 22px;
            justify-content: flex-start;
            overflow: hidden;
          }
          .team-name {
            white-space: normal;
            font-size: 20px;
          }
          .team-divider { margin: 12px 0; }
          .team-bio {
            -webkit-line-clamp: 3;
            margin-bottom: 14px;
            font-size: 13px;
            line-height: 1.7;
          }
        }

        /* ── Mobile (xs) — telas muito pequenas ── */
        @media (max-width: 400px) {
          .team-viewport { height: 490px; }
          .team-photo { height: 200px; }
          .team-photo img { object-position: center 10%; }
          .team-body { padding: 16px 18px 18px; }
          .team-name { font-size: 18px; }
          .team-bio { font-size: 12.5px; }
        }
      `}</style>


    </>
  );
}