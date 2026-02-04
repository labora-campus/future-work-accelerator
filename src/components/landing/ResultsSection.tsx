import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, User, FileText, Bot, FolderOpen, Cog, Star, Sparkles } from "lucide-react";

const results = [
  {
    icon: User,
    title: "Perfil Optimizado",
    description: "LinkedIn y redes listas para atraer",
  },
  {
    icon: FileText,
    title: "Sistema de Contenido",
    description: "Plantillas y estrategia para publicar",
  },
  {
    icon: Bot,
    title: "Dominio de IA",
    description: "Herramientas para x10 productividad",
  },
  {
    icon: FolderOpen,
    title: "Portfolio Digital",
    description: "Tu trabajo visible para el mundo",
  },
  {
    icon: Cog,
    title: "Automatizaciones",
    description: "Flujos que trabajan 24/7 por ti",
  },
  {
    icon: Star,
    title: "Marca Personal",
    description: "Propuesta de valor diferenciada",
  },
];

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-dark py-20 md:py-28 relative overflow-hidden">
      {/* Decorative */}
      <div className="decorative-circle w-80 h-80 -bottom-40 -left-40 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white">
            ¿Qué vas a lograr?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {results.map((result, index) => (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-coral/20 flex items-center justify-center flex-shrink-0">
                  <Check size={20} className="text-coral" />
                </div>
                <div>
                  <h3 className="text-white font-heading font-semibold mb-1">
                    {result.title}
                  </h3>
                  <p className="text-gray text-sm">{result.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-coral/20 border border-coral/40 rounded-2xl p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Sparkles size={24} className="text-coral" />
              <span className="text-coral font-heading font-bold text-lg">
                SIN EXPERIENCIA PREVIA
              </span>
            </div>
            <p className="text-white/80">
              No necesitas saber programar ni tener miles de seguidores.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
