import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Youtube, Calendar } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const topics = [
  {
    emoji: "📈",
    title: "Tendencias del mercado laboral",
    desc: "Las últimas novedades del mundo del trabajo y cómo adaptarse.",
  },
  {
    emoji: "🤖",
    title: "IA en el trabajo",
    desc: "Herramientas y casos reales de uso de inteligencia artificial en carreras reales.",
  },
  {
    emoji: "🎯",
    title: "Estrategias de marca personal",
    desc: "Cómo construir tu presencia digital para que las oportunidades te encuentren a vos.",
  },
  {
    emoji: "🗣️",
    title: "Entrevistas y debates",
    desc: "Invitados especiales e historias reales de personas que transformaron su carrera.",
  },
];

const Streaming = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-charcoal">
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="section-dark min-h-[85vh] pt-28 pb-20 flex items-center relative overflow-hidden">
          <div className="decorative-circle w-96 h-96 -top-48 -right-48 opacity-25" />
          <div className="decorative-circle w-96 h-96 -bottom-48 -left-48 opacity-15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,90,60,0.08)_0%,transparent_70%)]" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium">
                <Youtube size={16} />
                Streaming semanal · YouTube · Gratis
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-5 leading-none"
            >
              El Club del Laburo
              <span className="block text-coral mt-1">— En Vivo</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-light mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Hernán Lamanna y Brandon Candia se juntan cada semana para hablar
              del futuro del trabajo. Un show que no te podés perder.
            </motion.p>

            {/* Schedule Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-5 bg-white/8 border border-white/15 rounded-2xl px-8 py-5 mb-10"
            >
              <Calendar size={28} className="text-coral" />
              <div className="text-left">
                <p className="text-white font-heading font-bold text-xl">
                  Todos los Miércoles
                </p>
                <p className="text-gray-light">
                  10:00 a 12:00 hs (Argentina) · Por YouTube
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="https://www.youtube.com/@elclubdellaburo"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary text-lg px-10 py-4 inline-flex gap-2 shadow-glow"
              >
                <Youtube size={22} />
                Suscribirme en YouTube
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── HOSTS ── */}
        <section className="section-light py-20" ref={ref}>
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-heading font-bold text-charcoal text-center mb-12"
            >
              Los conductores
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Hernán */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 card-elevated"
              >
                <div className="flex items-center gap-5 mb-5">
                  <img
                    src="/hernan-lamanna-perfil.jpg"
                    alt="Hernán Lamanna"
                    className="w-20 h-20 rounded-full border-4 border-coral object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-charcoal font-heading font-bold text-xl">
                      Hernán Lamanna
                    </h3>
                    <p className="text-gray text-sm">
                      Creador de Contenido Laboral
                    </p>
                  </div>
                </div>
                <p className="text-gray text-sm leading-relaxed">
                  Fundador de AyudarteAR, +300K seguidores y especialista en
                  búsqueda laboral digital. La voz más reconocida del empleo y
                  emprendimiento en Argentina.
                </p>
              </motion.div>

              {/* Brandon */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 card-elevated"
              >
                <div className="flex items-center gap-5 mb-5">
                  <img
                    src="/brandoncandia.png"
                    alt="Brandon Candia"
                    className="w-20 h-20 rounded-full border-4 border-coral object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-charcoal font-heading font-bold text-xl">
                      Brandon Candia
                    </h3>
                    <p className="text-gray text-sm">AI Product Developer</p>
                  </div>
                </div>
                <p className="text-gray text-sm leading-relaxed">
                  Fundador de Academia Labora, referente en inteligencia
                  artificial aplicada al trabajo. Construyó un negocio de
                  +$1.800 USD/mes con contenido e IA.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TOPICS ── */}
        <section className="section-dark py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
              ¿De qué hablamos cada semana?
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {topics.map((topic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-7 flex items-start gap-5"
                >
                  <span className="text-3xl flex-shrink-0">{topic.emoji}</span>
                  <div>
                    <h3 className="text-white font-heading font-bold text-lg mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-gray text-sm leading-relaxed">
                      {topic.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-light py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-5">
                Unite al streaming del miércoles
              </h2>
              <p className="text-gray text-lg mb-10 max-w-xl mx-auto">
                Suscribite al canal de YouTube y activá las notificaciones para
                no perderte ningún episodio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.youtube.com/@elclubdellaburo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary text-lg px-10 py-4 inline-flex gap-2"
                >
                  <Youtube size={22} />
                  Suscribirse en YouTube
                </a>
                <Link
                  to="/lives-tiktok"
                  className="inline-flex items-center justify-center px-8 py-4 border border-coral/40 text-coral rounded-lg hover:bg-coral/10 transition-all font-heading font-semibold text-lg"
                >
                  Ver Lives en TikTok
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Streaming;
