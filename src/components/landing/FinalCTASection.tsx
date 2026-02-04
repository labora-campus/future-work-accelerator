import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket } from "lucide-react";

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-dark py-20 md:py-32 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="decorative-circle w-64 h-64 top-10 left-10 opacity-30" />
      <div className="decorative-circle w-48 h-48 bottom-10 right-20 opacity-20" />
      <div className="decorative-circle w-32 h-32 top-1/2 right-1/4 opacity-25" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-coral/20 flex items-center justify-center">
            <Rocket size={40} className="text-coral" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Sé parte del{" "}
            <span className="text-coral">Futuro del Trabajo</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-light mb-10">
            5 semanas que pueden cambiar tu carrera
          </p>

          <a href="#precio" className="cta-primary text-lg px-12 py-5">
            INSCRÍBETE AHORA
          </a>

          {/* Logos */}
          <div className="mt-12 flex items-center justify-center gap-4 text-white/60">
            <span className="font-heading font-semibold">Academia Labora</span>
            <span className="text-coral">×</span>
            <span className="font-heading font-semibold">AyudarteAR</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
