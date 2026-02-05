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
            <span className="badge-coral mb-6 inline-flex">
              <Zap size={16} className="text-coral" />
              PROGRAMA INTENSIVO 5 SEMANAS - ONLINE Y EN VIVO
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-relaxed"
          >
            ¿Cómo conseguir oportunidades de trabajo usando{" "}
            <span className="text-coral">IA y Creación de Contenido?</span>
          </motion.h1>

          {/* Subtitle accent */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl md:text-2xl lg:text-3xl font-body italic font-light text-gray-light mb-8"
          >
            Sin enviar cientos de CVs.
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-light mb-10 max-w-3xl mx-auto"
          >
            El mercado laboral cambió. Los que se destacan{" "}
            <span className="text-white font-medium">no buscan trabajo, atraen oportunidades.</span>{" "}
            Te enseñamos cómo.
          </motion.p>

          {/* Video Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-3xl mx-auto mb-12"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UU7On-on9wo?modestbranding=1&rel=0&showinfo=0&controls=0&disablekb=1"
                title="Video de presentación del programa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#precio" className="cta-primary text-lg">
              INSCRÍBETE AHORA
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
