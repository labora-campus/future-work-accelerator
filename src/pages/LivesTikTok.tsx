import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const topics = [
  {
    emoji: "💼",
    title: "Búsqueda Laboral",
    desc: "Estrategias reales para conseguir trabajo en el mercado actual sin depender del CV.",
  },
  {
    emoji: "🤖",
    title: "Inteligencia Artificial",
    desc: "Herramientas de IA que podés usar hoy mismo para destacarte en tu carrera.",
  },
  {
    emoji: "📱",
    title: "Creación de Contenido",
    desc: "Cómo usar las redes para atraer oportunidades laborales de forma orgánica.",
  },
  {
    emoji: "❓",
    title: "Q&A en Vivo",
    desc: "Hernán responde tus preguntas en tiempo real junto a toda la comunidad.",
  },
];

const LivesTikTok = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-charcoal">
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="section-dark min-h-[85vh] pt-28 pb-20 flex items-center relative overflow-hidden">
          <div className="decorative-circle w-96 h-96 -top-48 -right-48 opacity-30" />
          <div className="decorative-circle w-64 h-64 bottom-0 -left-32 opacity-20" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-coral/30 bg-coral/10 text-coral text-sm font-medium">
                    📱 En vivo — 100% gratis
                  </span>
                  <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5 leading-tight">
                    Lives en{" "}
                    <span className="text-coral">TikTok</span>
                    <br />
                    con Hernán
                  </h1>
                  <p className="text-xl text-gray-light mb-8 leading-relaxed">
                    Cada lunes, Hernán Lamanna va en vivo para hablar de
                    búsqueda laboral, IA y creación de contenido.{" "}
                    <span className="text-white font-medium">
                      Participá gratis.
                    </span>
                  </p>

                  {/* Schedule */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-3 bg-white/8 border border-white/10 rounded-2xl px-5 py-4">
                      <Calendar size={22} className="text-coral" />
                      <div>
                        <p className="text-white font-heading font-bold">
                          Todos los Lunes
                        </p>
                        <p className="text-gray-light text-sm">
                          11:00 a 13:00 hs (Argentina)
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://www.tiktok.com/@hernilamanna/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-primary text-lg px-10 py-4 shadow-glow inline-flex"
                  >
                    Seguir en TikTok
                  </a>
                </motion.div>

                {/* Photo */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex justify-center"
                >
                  <div className="relative">
                    <div
                      className="w-72 h-72 rounded-full overflow-hidden border-4 border-coral"
                      style={{ boxShadow: "0 0 80px rgba(232,90,60,0.3)" }}
                    >
                      <img
                        src="/hernan-lamanna-perfil.jpg"
                        alt="Hernán Lamanna"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Live badge */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm font-bold px-6 py-2.5 rounded-full flex items-center gap-2 shadow-lg whitespace-nowrap">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      LIVE cada Lunes
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TOPICS ── */}
        <section className="section-light py-20" ref={ref}>
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-heading font-bold text-charcoal text-center mb-12"
            >
              ¿De qué hablamos?
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-5">
              {topics.map((topic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-7 card-elevated flex items-start gap-5"
                >
                  <span className="text-3xl flex-shrink-0">{topic.emoji}</span>
                  <div>
                    <h3 className="text-charcoal font-heading font-bold text-lg mb-2">
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

        {/* ── HERNÁN BIO ── */}
        <section className="section-dark py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/hernan-lamanna-perfil.jpg"
                alt="Hernán Lamanna"
                className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-coral object-cover"
              />
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Hernán Lamanna
              </h2>
              <p className="text-gray-light text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                Creador de contenido sobre búsqueda laboral con más de{" "}
                <span className="text-white font-medium">300K seguidores</span>{" "}
                en redes. Fundador de AyudarteAR. Ha ayudado a crear{" "}
                <span className="text-coral font-medium">+30.000 CVs</span> con
                su metodología y fue destacado en Revista Caras.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="badge-coral">+300K Seguidores</span>
                <span className="badge-coral">+30K CVs creados</span>
                <span className="badge-coral">Fundador AyudarteAR</span>
                <span className="badge-coral">Revista Caras</span>
              </div>
            </motion.div>
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
                No te pierdas el próximo live
              </h2>
              <p className="text-gray text-lg mb-10 max-w-xl mx-auto">
                Seguí a Hernán en TikTok y activá las notificaciones para
                enterarte cuando empiece cada lunes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.tiktok.com/@hernilamanna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary text-lg px-10 py-4"
                >
                  Seguir en TikTok
                </a>
                <Link
                  to="/bootcamp"
                  className="inline-flex items-center justify-center px-8 py-4 border border-coral/40 text-coral rounded-lg hover:bg-coral/10 transition-all font-heading font-semibold text-lg"
                >
                  Ver el Bootcamp
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

export default LivesTikTok;
