import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Quote } from "lucide-react";

const CaseStudySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-light pb-20 md:pb-28">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-charcoal rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-coral/10 rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-coral mb-6">
                <Briefcase size={20} />
                <span className="font-heading font-semibold text-sm uppercase tracking-wider">
                  Caso Real
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Photo placeholder */}
                {/* Photo */}
                <img
                  src="/5041928251730758485.jpg"
                  alt="Brandon Candia"
                  className="w-20 h-20 rounded-full border-4 border-coral object-cover flex-shrink-0"
                />

                <div className="flex-1">
                  <Quote className="text-coral/40 mb-4" size={32} />
                  <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-6">
                    "Hace 3 meses comencé a crear contenido en TikTok. El CEO de
                    Ditobanx vio uno de mis videos, me contactó, y hoy trabajo con
                    un sueldo de{" "}
                    <span className="text-coral font-semibold">
                      +$1,800 USD con horarios flexibles
                    </span>{" "}
                    y por objetivos."
                  </blockquote>
                  <div>
                    <p className="text-white font-heading font-semibold">
                      Brandon Candia
                    </p>
                    <p className="text-gray text-sm">AI Product Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
