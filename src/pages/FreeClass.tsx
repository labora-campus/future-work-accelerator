import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  PlayCircle,
  ArrowRight,
  Brain,
  Bot,
  Code2,
  Zap,
  Film,
  TrendingUp,
  Briefcase,
  DollarSign,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

/* ─────────────────────────── DATA ─────────────────────────── */

const outcomes = [
  { icon: Brain, text: "Usar Claude como tu asistente personal de trabajo y segundo cerebro" },
  { icon: Bot, text: "Crear Skills personalizados y automatizaciones con IA" },
  { icon: Code2, text: "Construir tu primer producto digital (micro-SaaS) y deployarlo en internet" },
  { icon: Zap, text: "Desarrollar un agente de IA con n8n para automatizar tareas" },
  { icon: Film, text: "Crear contenido viral en TikTok e Instagram que genera oportunidades" },
  { icon: TrendingUp, text: "Diseñar embudos de venta y estrategias de monetización" },
  { icon: Briefcase, text: "Tener un portafolio profesional listo para conseguir clientes" },
  { icon: DollarSign, text: "Ejecutar un plan de 90 días para tus primeros ingresos digitales" },
];

const benefits = [
  { emoji: "🎓", title: "Certificación oficial", desc: "Al finalizar el curso, recibirás tu certificado digital. Ideal para sumarlo a tu CV y compartirlo en LinkedIn etiquetándonos." },
  { emoji: "🔓", title: "Acceso de por vida", desc: "Sin límite de tiempo para acceder al contenido. Aprendé a tu ritmo, revisá cuando quieras." },
  { emoji: "💻", title: "100% práctico", desc: "No solo teoría. Construís proyectos reales que podés mostrar en tu portafolio o usar para generar ingresos." },
  { emoji: "✅", title: "Ejercicios por módulo", desc: "Cada módulo incluye ejercicios prácticos para aplicar lo aprendido inmediatamente." },
  { emoji: "🚀", title: "Proyecto integrador final", desc: "Al finalizar tenés: tu portafolio, un micro-SaaS funcional, contenido viral publicado y tu plan de monetización." },
  { emoji: "💬", title: "Comunidad y soporte", desc: "Acceso a grupo privado para consultas, networking y feedback directo de Brandon y Hernán." },
];

const modules = [
  {
    num: "01",
    title: "Mindset para el nuevo mercado digital",
    instructor: "Hernán Lamanna",
    topics: [
      "Cómo vender tus habilidades (freelancing, consultoría, trabajo remoto, cursos, agencia)",
      "Cómo construir un emprendimiento digital o físico usando IA y Creación de Contenido",
      "Mindset de adaptación: IA + Contenido como binomio de oportunidades",
      "Overview del stack completo que vas a aprender",
    ],
    exercise: "Definí tu norte: ¿querés vender tus servicios, construir un producto o armar una agencia?",
    exerciseLabel: "Ejercicio",
  },
  {
    num: "02",
    title: "Dominio de Claude — La mejor herramienta de IA para el trabajo",
    instructor: "Brandon Candia",
    topics: [
      "Claude de cero a cien (prompting, conversaciones efectivas)",
      "Qué se puede hacer con Claude: Creación de Segundo Cerebro",
      "Claude Skills (creación y uso de skills custom)",
      "Claude Cowork (gestión de archivos y automatización de tareas)",
    ],
    exercise: "Creá tu portafolio profesional completo usando Claude.",
    exerciseLabel: "Ejercicio integrador",
  },
  {
    num: "03",
    title: "Construí tu primer producto digital con IA",
    instructor: "Brandon Candia",
    topics: [
      "NotebookLM para investigación, contenido y generación de roadmaps",
      "Lovable: de idea a MVP funcional",
      "Supabase: bases de datos y autenticación",
      "n8n: Crea tu propio Agente de IA",
    ],
    exercise: "Construí un micro-SaaS o herramienta propia de principio a fin.",
    exerciseLabel: "Proyecto integrador",
  },
  {
    num: "04",
    title: "Creación de Contenido",
    instructor: "Hernán Lamanna",
    topics: [
      "Sistema y estrategia de contenido en TikTok e Instagram",
      "Anatomía de video viral",
      "Tipos de contenido que funcionan",
      "Storytelling y Ganchos efectivos",
    ],
    exercise: "Creá y publicá tu primera pieza de contenido viral.",
    exerciseLabel: "Ejercicio",
  },
];

const faqs = [
  { q: "¿Necesito conocimientos previos?", a: "No. El curso está diseñado para principiantes absolutos. Arrancamos desde cero tanto en IA como en creación de contenido." },
  { q: "¿Cuánto tiempo tengo para completarlo?", a: "Acceso de por vida. Podés hacerlo a tu ritmo, sin vencimientos." },
  { q: "¿Qué necesito para hacer el curso?", a: "Una computadora o celular con internet. Todas las herramientas que usamos tienen versiones gratuitas para empezar." },
  { q: "¿Hay soporte si tengo dudas?", a: "Sí. Tenés acceso a una comunidad privada donde Brandon y Hernán responden consultas." },
];

/* ─────────────────────────── SUB-COMPONENTS ─────────────────────────── */

const SectionBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 text-coral text-sm font-semibold uppercase tracking-wider mb-3">
    <span className="w-6 h-px bg-coral" />
    {children}
    <span className="w-6 h-px bg-coral" />
  </span>
);

const ModuleAccordion = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3 max-w-4xl mx-auto">
      {modules.map((mod, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center gap-5 p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-3xl font-heading font-bold text-coral/40 flex-shrink-0 w-12 text-right">
              {mod.num}
            </span>
            <div className="flex-1">
              <p className="text-charcoal font-heading font-bold text-lg leading-snug">
                {mod.title}
              </p>
              <p className="text-gray text-sm mt-0.5">
                Con {mod.instructor}
              </p>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center">
              {open === i ? (
                <ChevronUp size={16} className="text-coral" />
              ) : (
                <ChevronDown size={16} className="text-coral" />
              )}
            </div>
          </button>

          {open === i && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="pt-5 grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-charcoal font-semibold text-sm mb-3 uppercase tracking-wider">
                    Temas de la clase
                  </p>
                  <ul className="space-y-2">
                    {mod.topics.map((topic, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray">
                        <span className="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0 mt-1.5" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-white font-medium">{q}</span>
        {open ? (
          <ChevronUp size={18} className="text-coral flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-coral flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-white/10 pt-4">
          <p className="text-gray-light text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────── MAIN PAGE ─────────────────────────── */

const FreeClass = () => {
  const outcomesRef = useRef(null);
  const benefitsRef = useRef(null);

  const outcomesInView = useInView(outcomesRef, { once: true, margin: "-80px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-charcoal flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* 1. HERO SECTION WITH VIDEO */}
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
              className="max-w-4xl mx-auto bg-black/50 border border-white/10 rounded-2xl p-2 md:p-4 shadow-2xl backdrop-blur-sm mb-10"
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

            {/* FIRST CTA DIRECTLY UNDER VIDEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Link
                to="/curso-on-demand"
                className="cta-primary text-xl px-10 py-5 inline-flex items-center gap-3 transform hover:scale-105 transition-all shadow-glow"
              >
                Ver Programa Completo
                <ArrowRight size={24} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. AL FINALIZAR EL CURSO (OUTCOMES) */}
        <section className="section-light py-20 md:py-24" ref={outcomesRef}>
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <SectionBadge>El Siguiente Paso</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-3">
                ¿Qué aprenderás en el curso completo?
              </h2>
              <p className="text-gray text-lg max-w-xl mx-auto">
                Vas a dominar IA y Contenido para generar ingresos reales
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {outcomes.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 card-elevated"
                  >
                    <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-coral" />
                    </div>
                    <p className="text-charcoal text-sm leading-relaxed pt-1 font-medium">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. BENEFICIOS */}
        <section className="section-dark py-20 md:py-24" ref={benefitsRef}>
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <SectionBadge>Beneficios</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                Todo lo que obtenés
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-coral/30 hover:bg-white/8 transition-all"
                >
                  <span className="text-3xl mb-4 block">{b.emoji}</span>
                  <h3 className="text-white font-heading font-bold text-lg mb-2">
                    {b.title}
                  </h3>
                  <p className="text-gray-light text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. MÓDULOS */}
        <section className="section-light py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <SectionBadge>Programa</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-3">
                Los módulos
              </h2>
            </div>
            <ModuleAccordion />
          </div>
        </section>

        {/* 5. QUIÉNES LO DAN (Simplified) */}
        <section className="section-dark py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <SectionBadge>Quiénes lo dan</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                Tus Instructores
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
                <img
                  src="/brandoncandia.png"
                  alt="Brandon Candia"
                  className="w-24 h-24 rounded-full border-4 border-coral object-cover mb-4"
                />
                <h3 className="text-white font-heading font-bold text-xl">Brandon Candia</h3>
                <p className="text-coral text-sm font-medium mb-3">IA · Desarrollo · Automatización</p>
                <p className="text-gray-light text-sm leading-relaxed">Fundador de Academia Labora. Desarrollador de IA especializado en crear productos sin saber programar.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
                <img
                  src="/hernan-lamanna-perfil.jpg"
                  alt="Hernán Lamanna"
                  className="w-24 h-24 rounded-full border-4 border-coral object-cover mb-4"
                />
                <h3 className="text-white font-heading font-bold text-xl">Hernán Lamanna</h3>
                <p className="text-coral text-sm font-medium mb-3">Contenido · Marketing · Ventas</p>
                <p className="text-gray-light text-sm leading-relaxed">Creador de contenido con +700K seguidores. Experto en empleabilidad y estrategias de monetización.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="section-light py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <SectionBadge>FAQ</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                Preguntas frecuentes
              </h2>
            </div>
            <div className="bg-charcoal rounded-2xl p-1 space-y-1 overflow-hidden">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="section-dark py-24 relative overflow-hidden border-t border-white/10">
          <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Empezá hoy un <span className="text-coral">nuevo futuro digital</span>
              </h2>
              
              <Link
                to="/curso-on-demand"
                className="cta-primary text-xl px-12 py-5 inline-flex items-center gap-3 transform hover:scale-105 transition-all shadow-glow mb-5"
              >
                Inscribirme al Curso
                <ArrowRight size={24} />
              </Link>
              
              <p className="text-gray-light text-sm">
                Serás redirigido a la página con todos los detalles y opciones de pago.
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default FreeClass;
