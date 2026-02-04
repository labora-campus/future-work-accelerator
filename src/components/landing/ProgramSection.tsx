import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Bot, Cog, Rocket } from "lucide-react";

const weeks = [
  {
    number: 1,
    title: "Sistema de Creación y Contenido Viral",
    instructor: "Hernán Lamanna",
    icon: Video,
    color: "coral",
    days: [
      "Día 1: Sistema de Creación + Estrategia",
      "Día 2: Anatomía del Video Viral",
      "Día 3: Guionizar + Grabar + Editar",
    ],
  },
  {
    number: 2,
    title: "Mindset, Embudos y Lanzamiento",
    instructor: "Hernán Lamanna",
    icon: Video,
    color: "coral",
    days: [
      "Día 4: Mindset de Creador",
      "Día 5: Embudos de Venta en Redes",
      "Día 6: Publicación y Análisis",
    ],
  },
  {
    number: 3,
    title: "IA para Multiplicar tu Productividad",
    instructor: "Brandon Candia",
    icon: Bot,
    color: "charcoal",
    days: [
      "Día 7: Fundamentos de IA + Estructura tu Profesión",
      "Día 8: Tu Segundo Cerebro con IA",
      "Día 9: De Operar IA a Diseñar Sistemas",
    ],
  },
  {
    number: 4,
    title: "Automatización con N8N",
    instructor: "Brandon Candia",
    icon: Cog,
    color: "charcoal",
    days: [
      "Día 10: Automatización con N8N (Parte 1)",
      "Día 11: Automatización con N8N (Parte 2)",
      "Día 12: Repositorio de Automatizaciones",
    ],
  },
  {
    number: 5,
    title: "Lanzamiento, Crecimiento y Búsqueda Inteligente",
    instructor: "Brandon Candia + Hernán Lamanna",
    icon: Rocket,
    color: "gradient",
    days: [
      "Día 13: Integración IA + Contenido",
      "Día 14: CRM de Búsqueda Inteligente",
      "Día 15: Lanzamiento + Plan 90 Días",
    ],
  },
];

const ProgramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-light py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal">
            5 semanas que pueden{" "}
            <span className="text-coral">cambiar tu carrera</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {weeks.map((week, index) => (
            <motion.div
              key={week.number}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden ${
                week.color === "gradient"
                  ? "bg-gradient-to-r from-charcoal to-coral"
                  : week.color === "coral"
                  ? "bg-coral"
                  : "bg-charcoal"
              }`}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-heading font-bold text-white/30">
                      {week.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <week.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
                      {week.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-1">
                      Instructor: {week.instructor}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-3 pl-0 md:pl-20">
                  {week.days.map((day) => (
                    <div
                      key={day}
                      className="bg-white/10 rounded-lg px-4 py-3 text-white/90 text-sm"
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
