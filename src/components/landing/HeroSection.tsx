import { motion } from "framer-motion";
import { Zap, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-dark min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="decorative-circle w-96 h-96 -top-48 -right-48 opacity-30" />
      <div className="decorative-circle w-64 h-64 bottom-20 -left-32 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-coral mb-6 inline-flex">
              <Zap size={16} className="text-coral" />
              PROGRAMA INTENSIVO 5 SEMANAS
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Trabajo del Futuro{" "}
            <span className="text-coral">2026</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-light mb-10 max-w-2xl mx-auto"
          >
            Cómo conseguir oportunidades laborales usando{" "}
            <span className="text-white font-medium">IA + Creación de Contenido</span>
          </motion.p>

          {/* Video Embed Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-3xl mx-auto mb-12"
          >
            <div className="aspect-video bg-charcoal/50 rounded-2xl border border-white/10 overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-coral flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <p className="absolute bottom-4 left-0 right-0 text-white/60 text-sm">
                Video de presentación del programa
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <a href="#precio" className="cta-primary text-lg">
              INSCRÍBETE AHORA
            </a>
          </motion.div>

          {/* Instructors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {/* Hernán */}
            <div className="text-center">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-coral/30 to-coral/10 border-4 border-coral flex items-center justify-center">
                <span className="text-4xl font-heading font-bold text-coral">H</span>
              </div>
              <h3 className="text-white font-heading font-semibold text-lg mb-1">
                Hernán Lamanna
              </h3>
              <p className="text-gray text-sm mb-3">
                Fundador de AyudarteAR<br />
                Creador de Contenido de Búsqueda Laboral
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                <span className="bg-white/10 text-white px-3 py-1 rounded-full">
                  +300K seguidores
                </span>
                <span className="bg-white/10 text-white px-3 py-1 rounded-full">
                  +30K CVs creados
                </span>
                <span className="bg-coral/20 text-coral px-3 py-1 rounded-full">
                  Revista Caras
                </span>
              </div>
            </div>

            {/* Brandon */}
            <div className="text-center">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-coral/30 to-coral/10 border-4 border-coral flex items-center justify-center">
                <span className="text-4xl font-heading font-bold text-coral">B</span>
              </div>
              <h3 className="text-white font-heading font-semibold text-lg mb-1">
                Brandon Candia
              </h3>
              <p className="text-gray text-sm mb-3">
                AI Product Developer<br />
                Fundador de Academia Labora
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                <span className="bg-white/10 text-white px-3 py-1 rounded-full">
                  +120 alumnos
                </span>
                <span className="bg-coral/20 text-coral px-3 py-1 rounded-full">
                  +$1,800 USD/mes
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
