import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Mic, MapPin, Users, Bell } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const features = [
  {
    icon: Mic,
    title: "Conferencias de impacto",
    desc: "Hernán comparte su visión del mercado laboral y cómo adaptarse en tiempo real a las nuevas tecnologías.",
  },
  {
    icon: Users,
    title: "Networking real",
    desc: "Conocé a otros profesionales en el mismo camino. Las mejores oportunidades vienen de las conexiones que hacés.",
  },
  {
    icon: () => <span className="text-2xl">🤖</span>,
    title: "Talleres de IA",
    desc: "Workshops prácticos donde aprendés a usar herramientas de IA aplicadas a tu carrera, en tiempo real.",
  },
  {
    icon: MapPin,
    title: "En diferentes ciudades",
    desc: "Llevamos el mensaje a distintas ciudades de Argentina. Seguí las redes para saber cuándo llegamos a tu ciudad.",
  },
];

const topics = [
  { emoji: "🤖", title: "El Futuro del Trabajo con IA" },
  { emoji: "📱", title: "Marca Personal en la Era Digital" },
  { emoji: "💼", title: "Cómo Conseguir Trabajo sin CV" },
  { emoji: "🚀", title: "Emprender en el Siglo XXI" },
];

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-charcoal">
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="section-dark min-h-[70vh] pt-28 pb-20 flex items-center relative overflow-hidden">
          <div className="decorative-circle w-96 h-96 -top-48 -right-48 opacity-25" />
          <div className="decorative-circle w-64 h-64 bottom-0 -left-32 opacity-15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,90,60,0.08)_0%,transparent_70%)]" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-sm font-medium">
                🎤 Presencial en Argentina
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-none"
            >
              Nos encontramos{" "}
              <span className="text-coral">en persona</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-light mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Conferencias, workshops y eventos presenciales donde la comunidad
              de El Club del Laburo se encuentra cara a cara.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="https://tally.so/r/pbOEXB"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary text-lg px-10 py-4 shadow-glow inline-flex gap-2"
              >
                <Bell size={20} />
                Avisarme del próximo evento
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── PRÓXIMOS EVENTOS ── */}
        <section className="section-light py-20" ref={ref}>
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-heading font-bold text-charcoal text-center mb-12"
            >
              Próximos eventos
            </motion.h2>

            {/* Coming soon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-charcoal rounded-2xl p-12 text-center relative overflow-hidden"
            >
              <div className="decorative-circle w-64 h-64 -top-32 -right-32 opacity-20" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-coral/20 flex items-center justify-center mx-auto mb-6">
                  <Bell size={32} className="text-coral" />
                </div>
                <h3 className="text-white font-heading font-bold text-2xl mb-3">
                  El próximo evento se anuncia pronto
                </h3>
                <p className="text-gray-light text-lg mb-8 max-w-md mx-auto">
                  Dejá tu contacto y te avisamos cuando confirmemos la fecha y
                  ciudad del próximo evento presencial.
                </p>
                <a
                  href="https://tally.so/r/pbOEXB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary text-lg px-10 py-4"
                >
                  Quiero que me avisen
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── WHAT TO EXPECT ── */}
        <section className="section-dark py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
              ¿Qué pasa en nuestros eventos?
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8"
                  >
                    <div className="w-12 h-12 rounded-xl bg-coral/20 flex items-center justify-center mb-5">
                      <Icon size={24} className="text-coral" />
                    </div>
                    <h3 className="text-white font-heading font-bold text-xl mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray leading-relaxed">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TOPICS ── */}
        <section className="section-light py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-heading font-bold text-charcoal text-center mb-10">
              Temas que abordamos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {topics.map((topic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-xl p-5 text-center card-elevated"
                >
                  <span className="text-3xl mb-3 block">{topic.emoji}</span>
                  <p className="text-charcoal text-sm font-medium leading-snug">
                    {topic.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPEAKER ── */}
        <section className="section-dark py-20">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/hernan-lamanna-perfil.jpg"
                alt="Hernán Lamanna"
                className="w-28 h-28 mx-auto mb-6 rounded-full border-4 border-coral object-cover"
              />
              <h2 className="text-2xl font-heading font-bold text-white mb-2">
                Hernán Lamanna
              </h2>
              <p className="text-gray mb-4">Conferencista · Creador de Contenido</p>
              <p className="text-gray-light leading-relaxed mb-8">
                Una de las voces más influyentes en búsqueda laboral y
                emprendimiento digital de Argentina. +300K seguidores,
                reconocido por Revista Caras.
              </p>
              <a
                href="https://tally.so/r/pbOEXB"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary text-lg px-10 py-4"
              >
                Notificarme del próximo evento
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
