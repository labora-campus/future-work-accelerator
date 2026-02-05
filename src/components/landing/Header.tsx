import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <span className="text-white font-heading font-bold text-lg md:text-xl">
              Trabajo del Futuro
            </span>
            <span className="bg-coral text-white text-xs font-semibold px-2 py-0.5 rounded">
              2026
            </span>
          </div>

          {/* Desktop CTA */}
          <a
            href="https://tally.so/r/pbOEXB"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex cta-primary text-sm py-3 px-6"
          >
            INSCRÍBETE AHORA
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-charcoal border-t border-white/10 py-4"
          >
            <a
              href="https://tally.so/r/pbOEXB"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full cta-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              INSCRÍBETE AHORA
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
