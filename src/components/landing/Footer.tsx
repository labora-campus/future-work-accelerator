import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const serviceLinks = [
  { label: "Bootcamp Intensivo", to: "/bootcamp" },
  { label: "Curso On Demand", to: "/curso-on-demand" },
  { label: "Lives en TikTok", to: "/lives-tiktok" },
  { label: "Streaming", to: "/streaming" },
  { label: "Conferencias y Eventos", to: "/eventos" },
];

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.54V6.79a4.85 4.85 0 01-1.02-.1z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="block mb-4">
              <span className="font-heading font-bold text-white text-xl">
                El Club del <span className="text-coral">Laburo</span>
              </span>
            </Link>
            <p className="text-gray text-sm leading-relaxed max-w-xs mb-5">
              Tu comunidad para conseguir mejores oportunidades de empleo y emprender usando IA, redes y creación de contenido.
            </p>
            <a
              href="https://wa.me/5491138142899"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray text-sm hover:text-coral transition-colors flex items-center gap-2"
            >
              💬 WhatsApp: +549 11 3814-2899
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 text-sm uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray text-sm hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 text-sm uppercase tracking-wider">
              Seguinos
            </h4>
            <div className="flex gap-3 mb-5">
              <a
                href="https://www.instagram.com/hernilamanna/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral transition-colors"
                title="Instagram de Hernán"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-hernan-lamanna-b0178b192/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral transition-colors"
                title="LinkedIn de Hernán"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.youtube.com/@elclubdellaburo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral transition-colors"
                title="YouTube El Club del Laburo"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@hernilamanna/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral transition-colors"
                title="TikTok de Hernán"
              >
                <TikTokIcon />
              </a>
            </div>
            <p className="text-gray text-xs leading-relaxed">
              Hernán Lamanna · Brandon Candia
              <br />
              Academia Labora × AyudarteAR
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray text-sm">
            © 2026 El Club del Laburo. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray">
            <a href="#" className="hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
