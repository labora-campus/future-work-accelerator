import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProblemSection = () => {
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
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-8">
            El 90% de las personas busca trabajo{" "}
            <span className="text-coral">de la manera equivocada</span>
          </h2>

          <p className="text-lg md:text-xl text-gray mb-8 leading-relaxed">
            Envían cientos de CVs. Esperan que alguien los llame. Compiten contra
            miles por el mismo puesto. No se diferencian. No son visibles.{" "}
            <span className="text-charcoal font-medium">No los eligen.</span>
          </p>

          <div className="bg-charcoal text-white p-6 md:p-8 rounded-2xl">
            <p className="text-lg md:text-xl font-medium">
              Mientras tanto, otros consiguen trabajo porque{" "}
              <span className="text-coral">las empresas los encuentran a ellos.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
