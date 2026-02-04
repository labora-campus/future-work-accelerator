import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currency, setCurrency] = useState<"USD" | "ARS">("USD");

  const prices = {
    USD: {
      single: "$250 USD",
      installment: "2 x $125 USD",
    },
    ARS: {
      single: "AR$345.000",
      installment: "2 x $172.500",
    },
  };

  return (
    <section id="precio" className="section-dark py-20 md:py-28 relative overflow-hidden">
      {/* Decorative */}
      <div className="decorative-circle w-96 h-96 -top-48 -left-48 opacity-20" />
      <div className="decorative-circle w-64 h-64 bottom-0 right-0 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-8">
            Inversión
          </h2>

          {/* Currency Toggle */}
          <div className="inline-flex bg-white/10 rounded-full p-1 mb-8">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                currency === "USD"
                  ? "bg-coral text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency("ARS")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                currency === "ARS"
                  ? "bg-coral text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Pesos Argentinos
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {/* Single Payment - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-coral text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                <Star size={12} fill="white" />
                Mejor precio
              </span>
            </div>
            <div className="bg-white border-2 border-coral rounded-2xl p-8 text-center h-full">
              <h3 className="text-charcoal font-heading font-semibold text-lg mb-6">
                PAGO ÚNICO
              </h3>
              <p className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
                {prices[currency].single}
              </p>
              <ul className="space-y-3 text-gray text-sm mb-6">
                <li className="flex items-center justify-center gap-2">
                  <Check size={16} className="text-coral" />
                  Acceso completo al programa
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Check size={16} className="text-coral" />
                  5 semanas de clases en vivo
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Check size={16} className="text-coral" />
                  Acceso a grabaciones
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Installments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8 text-center h-full">
              <h3 className="text-white font-heading font-semibold text-lg mb-6">
                PAGO EN CUOTAS
              </h3>
              <p className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                {prices[currency].installment}
              </p>
              <ul className="space-y-3 text-gray text-sm mb-6">
                <li className="flex items-center justify-center gap-2">
                  <Check size={16} className="text-coral" />
                  Acceso completo al programa
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Check size={16} className="text-coral" />
                  5 semanas de clases en vivo
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Check size={16} className="text-coral" />
                  Acceso a grabaciones
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a href="#" className="cta-primary text-lg px-12">
            INSCRÍBETE AHORA
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
