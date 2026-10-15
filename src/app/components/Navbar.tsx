import { useEffect, useState } from "react";
import logo2 from "../../imports/logo2.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Início",     href: "#inicio"    },
    { label: "Trabalhos",  href: "#trabalhos" },
    { label: "Contato",    href: "#contato"   },
  ];

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const animClasses = [
    "nav-link-anim-1",
    "nav-link-anim-2",
    "nav-link-anim-3",
    "nav-link-anim-4",
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        background: scrolled ? "#000000d9" : "transparent",
        borderBottom: scrolled
          ? "1px solid #ffffff0f"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo — fadeIn 600ms, delay 0 */}
        <span
          className="nav-logo-anim"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ display: "flex", alignItems: "center", userSelect: "none" }}
        >
          <img
            src={logo2}
            alt="Cresay"
            style={{ height: 78, width: "auto", display: "block", filter: "brightness(0) invert(1)" }}
          />
        </span>

        {/* Desktop Links — staggered fadeIn 100ms–400ms */}
        <div
          style={{ display: "flex", gap: 40, alignItems: "center" }}
          className="desktop-nav"
        >
          {links.map((link, i) => (
            <button
              key={link.href}
              className={`nav-link-btn ${animClasses[i]}`}
              onClick={() => handleNav(link.href)}
              style={{
                background: "none",
                border: "none",
                color: "#ffffff99",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.02em",
                padding: 0,
                fontFamily: "Inter, sans-serif",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff99")}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            padding: 8,
            flexDirection: "column",
            gap: 5,
          }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 1.5,
                background: "#fff",
                transition: "all 0.3s ease",
                transformOrigin: "center",
                transform:
                  menuOpen
                    ? i === 0
                      ? "translateY(6.5px) rotate(45deg)"
                      : i === 2
                      ? "translateY(-6.5px) rotate(-45deg)"
                      : "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "#000",
            borderTop: "1px solid #ffffff14",
            padding: "24px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            animation: "fadeIn 250ms ease both",
          }}
          className="mobile-menu"
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                background: "none",
                border: "none",
                color: "#ffffffcc",
                fontSize: 16,
                fontWeight: 500,
                padding: 0,
                textAlign: "left",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .nav-inner-wrap { padding: 0 20px !important; }
        }
      `}</style>
    </nav>
  );
}