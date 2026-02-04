import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Video, Plus, Sparkles } from "lucide-react";

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-dark py-20 md:py-28 relative overflow-hidden">
      {/* Decorative */}
      <div className="decorative-circle w-72 h-72 top-0 right-0 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Un programa que combina
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center relative">
            {/* Plus symbol */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                <Plus size={28} className="text-charcoal" />
              </div>
            </div>

            {/* IA Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-coral/20 flex items-center justify-center mb-6">
                <Bot size={28} className="text-coral" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Inteligencia Artificial
              </h3>
              <ul className="space-y-3 text-gray-light">
                <li className="flex items-center gap-3">
                  <Sparkles size={16} className="text-coral flex-shrink-0" />
                  Multiplica tu productividad
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles size={16} className="text-coral flex-shrink-0" />
                  Crea tu segundo cerebro
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles size={16} className="text-coral flex-shrink-0" />
                  Automatiza tareas repetitivas
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles size={16} className="text-coral flex-shrink-0" />
                  Diseña sistemas inteligentes
                </li>
              </ul>
            </motion.div>

            {/* Mobile Plus */}
            <div className="md:hidden flex justify-center">
              <div className="w-12 h-12 rounded-full bg-coral flex items-center justify-center">
                <Plus size={24} className="text-white" />
              </div>
            </div>

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-coral rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Video size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Creación de Contenido
              </h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-3">
                  <Sparkles size={16} className="text-white flex-shrink-0" />
                  Marca personal potente
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles size={16} className="text-white flex-shrink-0" />
                  Contenido que atrae oportunidades
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles size={16} className="text-white flex-shrink-0" />
                  Visibilidad ante empresas
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles size={16} className="text-white flex-shrink-0" />
                  Embudos de atracción
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 bg-coral/20 border border-coral/40 rounded-full px-6 py-3">
              <span className="text-2xl">=</span>
              <span className="text-white font-heading font-bold text-lg md:text-xl">
                OPORTUNIDADES QUE TE ENCUENTRAN
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
