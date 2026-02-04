import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Video, Bot, Rocket } from "lucide-react";

const InstructorsSection = () => {
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
            ¿Quiénes te van a enseñar?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hernán */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 card-elevated"
          >
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-coral/30 to-coral/10 border-4 border-coral flex items-center justify-center">
                <span className="text-5xl font-heading font-bold text-coral">H</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-charcoal">
                Hernán Lamanna
              </h3>
              <p className="text-gray mt-1">
                Fundador de AyudarteAR
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-charcoal font-medium">
                Creador de Contenido de Búsqueda Laboral
              </p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                  +300K seguidores en redes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                  +30K CVs creados con su metodología
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                  2 años creando contenido
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                  Salió en Revista Caras
                </li>
              </ul>
            </div>

            <div className="bg-coral/10 rounded-xl p-4 flex items-center gap-3">
              <Video size={20} className="text-coral" />
              <span className="text-charcoal font-medium text-sm">
                Enseña: Semanas 1 y 2 (Creación de Contenido)
              </span>
            </div>
          </motion.div>

          {/* Brandon */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 card-elevated"
          >
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-coral/30 to-coral/10 border-4 border-coral flex items-center justify-center">
                <span className="text-5xl font-heading font-bold text-coral">B</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-charcoal">
                Brandon Candia
              </h3>
              <p className="text-gray mt-1">
                AI Product Developer
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-charcoal font-medium">
                Fundador de Academia Labora
              </p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                  +120 alumnos formados
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                  +$1,800 USD/mes con contenido
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                  3 meses para conseguir trabajo creando contenido
                </li>
              </ul>
            </div>

            <div className="bg-coral/10 rounded-xl p-4 flex items-center gap-3">
              <Bot size={20} className="text-coral" />
              <span className="text-charcoal font-medium text-sm">
                Enseña: Semanas 3 y 4 (IA y Automatización)
              </span>
            </div>
          </motion.div>
        </div>

        {/* Together */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-md mx-auto mt-8"
        >
          <div className="bg-charcoal rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-coral flex items-center justify-center">
              <Rocket size={24} className="text-white" />
            </div>
            <div>
              <p className="text-white font-heading font-semibold">Juntos</p>
              <p className="text-gray text-sm">
                Semana 5 (Integración y Lanzamiento)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorsSection;
