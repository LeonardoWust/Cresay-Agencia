import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { WebsiteShowcase } from "./components/WebsiteShowcase";
import { QuemSomos } from "./components/QuemSomos";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Global reset overrides */}
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
          box-shadow: none !important;
          outline: none !important;
          --tw-ring-shadow: none !important;
          --tw-ring-offset-shadow: none !important;
          --tw-shadow: none !important;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          padding: 0;
          background: #000;
          color: #fff;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        ::selection {
          background: #ffffff26;
          color: #fff;
        }
        button, a, [role="button"] {
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
        }
        .border-white-6 { border-color: #ffffff0f; }
        .border-white-8 { border-color: #ffffff14; }
        .bg-black-85 { background: #000000d9; }

        /* ── Mobile: 768px ── */
        @media (max-width: 768px) {
          #inicio { padding: 96px 20px 64px !important; }
          #sobre { padding: 56px 20px !important; }
          #quem-somos { padding: 56px 20px !important; }
          #servicos { padding: 64px 20px !important; }
          #servicos-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          #servicos-grid > div:last-child { display: none; }
          #producao-roles { grid-template-columns: repeat(2, 1fr) !important; }
          #trabalhos { padding: 64px 20px !important; }
          #contato { padding: 60px 20px 36px !important; }
          #contato a[href^="mailto"] { font-size: 14px !important; word-break: break-all; text-align: center; }
        }

        /* ── Mobile: 480px ── */
        @media (max-width: 480px) {
          #producao-roles { grid-template-columns: 1fr !important; }
          #servicos-grid > div:last-child { display: none !important; }
          #contato a[href^="mailto"] { font-size: 12px !important; }
        }
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <QuemSomos />
      <Services />
      <Work />
      <WebsiteShowcase />
      <Team />
      <Footer />
    </div>
  );
}