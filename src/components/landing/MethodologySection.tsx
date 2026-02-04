import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Hammer, Target, PlayCircle, Clock } from "lucide-react";

const methods = [
  {
    number: "01",
    title: "100% en Vivo",
    description: "Clases interactivas donde participás activamente",
    icon: Video,
  },
  {
    number: "02",
    title: "Proyectos Reales",
    description: "Desde el día 1 creás cosas que podés mostrar",
    icon: Hammer,
  },
  {
    number: "03",
    title: "Desafíos Semanales",
    description: "Ejercicios prácticos para aplicar lo aprendido",
    icon: Target,
  },
  {
    number: "04",
    title: "Acceso a Grabaciones",
    description: "Todas las clases disponibles para volver a ver",
    icon: PlayCircle,
  },
];

const MethodologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-dark py-20 md:py-28 relative overflow-hidden">
      {/* Decorative */}
      <div className="decorative-circle w-64 h-64 top-20 right-0 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white">
            Cómo funciona
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {methods.map((method, index) => (
              <motion.div
                key={method.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="relative">
                  <span className="step-number">{method.number}</span>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-coral rounded-full" />
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Schedule Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-coral rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock size={24} className="text-white" />
              <h3 className="text-xl font-heading font-bold text-white">
                Horarios de Clases
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <p className="text-white/70 text-sm mb-1">Días</p>
                <p className="text-white font-semibold text-lg">
                  Martes, Jueves y Viernes
                </p>
              </div>
              <div>
                <p className="text-white/70 text-sm mb-1">Turno Mañana</p>
                <p className="text-white font-semibold text-lg">
                  08:00 - 10:00 hs (ARG)
                </p>
              </div>
              <div>
                <p className="text-white/70 text-sm mb-1">Turno Tarde</p>
                <p className="text-white font-semibold text-lg">
                  19:00 - 21:00 hs (ARG)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
