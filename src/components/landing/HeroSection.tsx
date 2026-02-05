import { motion } from "framer-motion";
import { Zap, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-dark min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="decorative-circle w-96 h-96 -top-48 -right-48 opacity-30" />
      <div className="decorative-circle w-64 h-64 bottom-20 -left-32 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-coral/30 bg-coral/10 backdrop-blur-sm text-coral text-sm font-medium">
              <Zap size={16} className="text-coral" />
              PROGRAMA INTENSIVO 5 SEMANAS - ONLINE Y EN VIVO
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight md:leading-relaxed"
          >
            ¿Cómo conseguir oportunidades de trabajo usando{" "}
            <span className="text-coral">IA y Creación de Contenido?</span>
          </motion.h1>

          {/* Subtitle accent */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl md:text-2xl lg:text-3xl font-body italic font-light text-gray-light mb-12"
          >
            Sin enviar cientos de CVs.
          </motion.p>

          {/* Video Embed with Custom Cover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-4xl mx-auto mb-12"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative group bg-charcoal">
              {/* Custom Cover / Facade */}
              <div
                className="absolute inset-0 z-10 cursor-pointer"
                onClick={(e) => {
                  e.currentTarget.style.display = 'none';
                  const iframe = e.currentTarget.nextElementSibling as HTMLIFrameElement;
                  if (iframe) {
                    iframe.src += "&autoplay=1";
                  }
                }}
              >
                {/* Thumbnail Image (using og-image as base or a gradient backup) */}
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/80 to-coral/20">
                  <img
                    src="/og-image.png"
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                  />
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-coral flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play size={40} className="text-white ml-2" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <p className="text-white font-heading font-semibold text-lg drop-shadow-md">
                    Mira el video de presentación
                  </p>
                </div>
              </div>

              {/* YouTube Iframe (hidden behind cover until clicked) */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UU7On-on9wo?modestbranding=1&rel=0&showinfo=0&controls=0&disablekb=1"
                title="Video de presentación del programa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full relative z-0"
              ></iframe>
            </div>
          </motion.div>

          {/* Description (Moved below video) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-light mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            El mercado laboral cambió. Los que se destacan{" "}
            <span className="text-white font-medium">no buscan trabajo, atraen oportunidades.</span>{" "}
            Este programa es lo que tanto estabas esperando.
          </motion.p>

          {/* CTA Button (Increased size) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="https://tally.so/r/pbOEXB"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary text-xl px-12 py-5 transform hover:scale-105 transition-all shadow-glow"
            >
              INSCRÍBETE AHORA
            </a>
            <p className="mt-4 text-white/80 text-sm font-medium">
              📅 Inicia: Jueves 19 de Febrero | Turno Noche
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
