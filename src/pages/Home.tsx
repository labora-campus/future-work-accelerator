import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  PlayCircle,
  Smartphone,
  Radio,
  Mic,
  ArrowRight,
  Zap,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const services = [
  {
    icon: GraduationCap,
    title: "Bootcamp Intensivo",
    description:
      "5 semanas online y en vivo. Aprendé IA y Creación de Contenido para conseguir trabajo sin enviar cientos de CVs.",
    badge: "Más popular",
    badgeClass: "bg-coral text-white",
    cta: "Ver el Bootcamp",
    to: "/bootcamp",
    highlight: true,
  },
  {
    icon: PlayCircle,
    title: "Curso On Demand",
    description:
      "Acceso inmediato. Aprendé IA y Creación de Contenido a tu ritmo, cuando y donde quieras.",
    badge: "50% OFF · Lanzamiento",
    badgeClass:
      "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    cta: "Ver el Curso",
    to: "/curso-on-demand",
    highlight: false,
  },
  {
    icon: Smartphone,
    title: "Lives en TikTok",
    description:
      "Todos los Lunes de 11 a 13hs. Hernán va en vivo para responder dudas sobre búsqueda laboral e IA. Gratis.",
    badge: "Gratis · Cada Lunes",
    badgeClass: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    cta: "Ver los Lives",
    to: "/lives-tiktok",
    highlight: false,
  },
  {
    icon: Radio,
    title: "Streaming Semanal",
    description:
      'Los Miércoles de 10 a 12hs. Hernán y Brandon conducen "El Club del Laburo" por YouTube. Gratis.',
    badge: "Gratis · Cada Miércoles",
    badgeClass: "bg-red-500/20 text-red-400 border border-red-500/30",
    cta: "Ver el Streaming",
    to: "/streaming",
    highlight: false,
  },
  {
    icon: Mic,
    title: "Conferencias y Eventos",
    description:
      "Nos encontramos en persona. Conferencias, workshops y eventos donde Hernán habla del nuevo mundo laboral.",
    badge: "Presencial",
    badgeClass: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
    cta: "Ver Eventos",
    to: "/eventos",
    highlight: false,
  },
];

const stats = [
  { value: "+300K", label: "Seguidores en redes" },
  { value: "+30K", label: "CVs creados" },
  { value: "+120", label: "Alumnos formados" },
  { value: "2", label: "Años de contenido" },
];

const Home = () => {
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const instructorsRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const instructorsInView = useInView(instructorsRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-charcoal">
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="section-dark min-h-screen pt-24 pb-20 md:pt-36 md:pb-28 relative overflow-hidden flex items-center">
          <div className="decorative-circle w-[500px] h-[500px] -top-64 -right-64 opacity-25" />
          <div className="decorative-circle w-80 h-80 bottom-0 -left-40 opacity-15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(232,90,60,0.1)_0%,transparent_70%)]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-coral/30 bg-coral/10 backdrop-blur-sm text-coral text-sm font-medium">
                  <Zap size={15} />
                  Comunidad de Empleo y Emprendimiento Digital
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-none tracking-tight"
              >
                El Club del{" "}
                <span className="text-coral">Laburo</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-2xl text-gray-light mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                Tu comunidad para conseguir{" "}
                <span className="text-white font-medium">
                  mejores oportunidades de empleo
                </span>{" "}
                o emprender, usando las{" "}
                <span className="text-coral font-medium">
                  redes, la creación de contenido y la inteligencia artificial.
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/bootcamp"
                  className="cta-primary text-lg px-10 py-4 transform hover:scale-105 transition-all shadow-glow"
                >
                  Ver el Bootcamp
                </Link>
                <Link
                  to="/curso-on-demand"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all font-heading font-semibold text-lg"
                >
                  Curso On Demand <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="section-light py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              ref={servicesRef}
              initial={{ opacity: 0, y: 40 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal mb-4">
                Todo lo que hacemos
              </h2>
              <p className="text-gray max-w-xl mx-auto text-lg">
                5 formas de acceder a la comunidad y transformar tu carrera.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.to}
                    initial={{ opacity: 0, y: 30 }}
                    animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <Link
                      to={service.to}
                      className={`group block rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1.5 ${
                        service.highlight
                          ? "bg-charcoal text-white border-2 border-coral shadow-glow"
                          : "bg-white text-charcoal border border-gray-200 hover:border-coral/40 shadow-sm hover:shadow-md"
                      }`}
                    >
                      <span
                        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${service.badgeClass}`}
                      >
                        {service.badge}
                      </span>

                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                          service.highlight ? "bg-coral/20" : "bg-coral/10"
                        }`}
                      >
                        <Icon size={22} className="text-coral" />
                      </div>

                      <h3
                        className={`text-lg font-heading font-bold mb-2.5 ${
                          service.highlight ? "text-white" : "text-charcoal"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed mb-5 ${
                          service.highlight ? "text-gray-light" : "text-gray"
                        }`}
                      >
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-coral group-hover:gap-3 transition-all">
                        {service.cta} <ArrowRight size={15} />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="section-dark py-16 border-y border-white/5">
          <div className="container mx-auto px-4" ref={statsRef}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-heading font-bold text-coral mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-light text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INSTRUCTORS ── */}
        <section className="section-light py-20 md:py-28">
          <div className="container mx-auto px-4" ref={instructorsRef}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={instructorsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-3">
                Las personas detrás del club
              </h2>
              <p className="text-gray max-w-xl mx-auto text-lg">
                El dúo que está transformando la forma en que los profesionales
                buscan trabajo y emprenden.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={instructorsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 card-elevated text-center"
              >
                <img
                  src="/hernan-lamanna-perfil.jpg"
                  alt="Hernán Lamanna"
                  className="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-coral object-cover"
                />
                <h3 className="text-xl font-heading font-bold text-charcoal mb-1">
                  Hernán Lamanna
                </h3>
                <p className="text-gray text-sm mb-4">
                  Creador de Contenido Laboral · Fundador de AyudarteAR
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="badge-coral">+300K seguidores</span>
                  <span className="badge-coral">+30K CVs</span>
                  <span className="badge-coral">Revista Caras</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={instructorsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 card-elevated text-center"
              >
                <img
                  src="/brandoncandia.png"
                  alt="Brandon Candia"
                  className="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-coral object-cover"
                />
                <h3 className="text-xl font-heading font-bold text-charcoal mb-1">
                  Brandon Candia
                </h3>
                <p className="text-gray text-sm mb-4">
                  AI Product Developer · Fundador de Academia Labora
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="badge-coral">+120 alumnos</span>
                  <span className="badge-coral">+$1.800 USD/mes</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="section-dark py-24 relative overflow-hidden">
          <div className="decorative-circle w-96 h-96 -top-48 -right-48 opacity-20" />
          <div className="decorative-circle w-80 h-80 -bottom-40 -left-40 opacity-15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,90,60,0.12)_0%,transparent_65%)]" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-5">
                ¿Listo para cambiar tu{" "}
                <span className="text-coral">carrera</span>?
              </h2>
              <p className="text-gray-light text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Unite a la comunidad que está usando IA y contenido para
                conseguir mejores oportunidades. El futuro del trabajo ya llegó.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/bootcamp"
                  className="cta-primary text-lg px-10 py-4 shadow-glow"
                >
                  Inscribirse al Bootcamp
                </Link>
                <Link
                  to="/curso-on-demand"
                  className="inline-flex items-center justify-center px-8 py-4 border border-coral/40 text-coral rounded-lg hover:bg-coral/10 transition-all font-heading font-semibold text-lg"
                >
                  Ver Curso On Demand
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

export default Home;
