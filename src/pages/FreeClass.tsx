import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const FreeClass = () => {
  return (
    <div className="min-h-screen bg-charcoal flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* HERO SECTION WITH VIDEO */}
        <section className="section-dark pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
          <div className="decorative-circle w-[500px] h-[500px] -top-64 -right-64 opacity-20" />
          <div className="decorative-circle w-80 h-80 bottom-0 -left-40 opacity-15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(232,90,60,0.1)_0%,transparent_70%)]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-coral/30 bg-coral/10 text-coral text-sm font-semibold uppercase tracking-wider">
                  <PlayCircle size={16} /> Clase Gratuita
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-5xl font-heading font-bold text-white mb-5 leading-tight"
              >
                El único video que precisas ver para dominar la <span className="text-coral">Inteligencia Artificial</span> y la <span className="text-coral">Creación de Contenido</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-light leading-relaxed max-w-3xl mx-auto"
              >
                De cero absoluto a creador. Descubrí el paso a paso exacto para usar IA, automatizar tu trabajo y crear contenido viral que te posicione en el nuevo mercado.
              </motion.p>
            </div>

            {/* VIDEO PLAYER CONTAINER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto bg-black/50 border border-white/10 rounded-2xl p-2 md:p-4 shadow-2xl backdrop-blur-sm"
            >
              <div className="aspect-video bg-black rounded-xl overflow-hidden relative group flex items-center justify-center border border-white/5">
                <iframe 
                  src="https://www.youtube.com/embed/EZLdIYIQZL0" 
                  title="Clase Gratuita" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen 
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* NEXT STEP CTA SECTION */}
        <section className="section-light py-20 md:py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  ¿Querés profundizar y dominar todo el ecosistema?
                </h2>
                <p className="text-lg text-gray mb-10 leading-relaxed">
                  Si te gustó la clase gratuita y querés implementar el sistema completo paso a paso (desde Claude hasta la monetización), el siguiente paso es nuestro Curso On Demand.
                </p>

                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-coral" />
                  
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
                    Curso de IA + Creación de Contenido
                  </h3>
                  
                  <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
                    {[
                      "✓ 10 horas de contenido 100% práctico",
                      "✓ Acceso de por vida a tu propio campus",
                      "✓ Creación de tu primer micro-SaaS",
                      "✓ Estrategia para conseguir clientes",
                      "✓ Soporte y comunidad privada"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray font-medium">
                        <span className="text-coral">{feature.split(' ')[0]}</span>
                        <span>{feature.split(' ').slice(1).join(' ')}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/curso-on-demand"
                    className="cta-primary text-lg px-8 py-4 inline-flex items-center gap-2 transform hover:scale-105 transition-all shadow-glow"
                  >
                    Ver Programa Completo
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FreeClass;
