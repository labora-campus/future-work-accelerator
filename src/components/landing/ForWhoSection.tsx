import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Search, TrendingUp, RefreshCcw, Briefcase } from "lucide-react";

const personas = [
  {
    icon: Search,
    title: "Si estás buscando empleo actualmente",
    description:
      "Enviás CVs y no te llaman. Querés una estrategia que funcione de verdad para conseguir oportunidades.",
  },
  {
    icon: TrendingUp,
    title: "Si estás trabajando pero querés algo mejor",
    description:
      "Tenés trabajo pero sabés que podés más. Querés posicionarte para que mejores ofertas te encuentren.",
  },
  {
    icon: RefreshCcw,
    title: "Si estás en un momento de reinvención profesional",
    description:
      "Cambiaste de rubro, volvés al mercado laboral o querés dar un giro a tu carrera. Necesitás destacar en un mundo que cambió.",
  },
  {
    icon: Briefcase,
    title: "Si sos freelancer o tenés un negocio",
    description:
      "Querés conseguir más clientes sin perseguir a nadie. Que tu contenido y tu marca atraigan oportunidades.",
  },
];

const ForWhoSection = () => {
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
            ¿Este programa es para ti?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 card-elevated"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <Check size={24} className="text-coral" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-charcoal mb-2">
                    {persona.title}
                  </h3>
                  <p className="text-gray leading-relaxed">{persona.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
