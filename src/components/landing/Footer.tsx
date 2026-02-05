import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray">
            <a href="#" className="hover:text-white transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contacto
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {/* Hernán Instagram */}
            <a
              href="https://www.instagram.com/hernilamanna/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral transition-colors"
              title="Hernán Instagram"
            >
              <Instagram size={18} />
            </a>
            {/* Hernán LinkedIn */}
            <a
              href="https://www.linkedin.com/in/gabriel-hernan-lamanna-b0178b192/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral transition-colors"
              title="Hernán LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            {/* Hernán TikTok */}
            <a
              href="https://www.tiktok.com/@hernilamanna/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral transition-colors"
              title="Hernán TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-video"
              >
                <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" />
              </svg>
            </a>
            {/* Labora TikTok */}
            <a
              href="https://www.tiktok.com/@labora.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral transition-colors"
              title="Labora TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-video"
              >
                <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray text-sm text-center md:text-right">
            Trabajo del Futuro 2026 •{" "}
            <span className="text-white/60">Academia Labora × AyudarteAR</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
