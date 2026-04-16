import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Check,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Unlock,
  Monitor,
  CheckSquare,
  Rocket,
  MessageCircle,
  CreditCard,
  Building,
  Smartphone,
  Star,
  Clock,
  ShieldCheck,
  Zap,
  Brain,
  Code2,
  Megaphone,
  TrendingUp,
  Layout,
  Bot,
  Film,
  DollarSign,
  Briefcase,
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
    exercise: "Definí tu norte: ¿querés vender tus servicios, construir un producto o armar una agencia? Escribí en 3 oraciones qué querés lograr en los próximos 90 días.",
    exerciseLabel: "Ejercicio para el Módulo 2",
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
    exercise: "Creá tu portafolio profesional completo usando Claude. Incluí tus proyectos, habilidades y propuesta de valor. Listo para compartir con potenciales clientes.",
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
    exercise: "Construí un micro-SaaS o herramienta propia de principio a fin. Desde la idea hasta el deployment en Vercel. Producto funcional listo para mostrar o vender.",
    exerciseLabel: "Proyecto integrador",
  },
  {
    num: "04",
    title: "Creación de Contenido",
    instructor: "Hernán Lamanna",
    topics: [
      "Sistema y estrategia de contenido en TikTok e Instagram",
      "Anatomía de video viral",
      "Tipos de contenido que funcionan (cost-breakdown, tool-stack, behind-the-scenes)",
      "Storytelling y Ganchos efectivos",
      "Herramientas: TikTok Studio, CapCut, edición rápida",
      "Historias que venden",
    ],
    exercise: "Creá y publicá tu primera pieza de contenido viral usando las estrategias aprendidas. Podés hacer un video mostrando tu producto del Módulo 3 o un breakdown de tu proceso.",
    exerciseLabel: "Ejercicio",
  },
  {
    num: "05",
    title: "Monetización y Salida al Mercado",
    instructor: "Hernán Lamanna",
    topics: [
      "Estrategias de contenido para conseguir clientes",
      "Embudos de venta",
      "Pricing y posicionamiento",
      "Ofertas de Valor",
      "Estrategia: 90 días para tus primeros ingresos",
    ],
    exercise: "Armá tu plan de acción de 90 días. Semana a semana, qué vas a hacer para conseguir tus primeros clientes o ventas. Con métricas claras y pasos concretos.",
    exerciseLabel: "Ejercicio final",
  },
];

const deliverables = [
  { emoji: "✅", title: "Tu portafolio profesional", desc: "Creado con IA, listo para mostrar a clientes o empleadores." },
  { emoji: "✅", title: "Un micro-SaaS funcional", desc: "Producto digital deployado en internet que podés vender o usar." },
  { emoji: "✅", title: "Un agente de IA personalizado", desc: "Automatización en n8n que te ahorra horas de trabajo." },
  { emoji: "✅", title: "Contenido viral publicado", desc: "Primera pieza de contenido aplicando las estrategias del curso." },
  { emoji: "✅", title: "Plan de monetización a 90 días", desc: "Estrategia concreta para conseguir tus primeros ingresos." },
  { emoji: "✅", title: "Habilidades técnicas comprobables", desc: "Claude, Lovable, Supabase, n8n, TikTok y CapCut dominados." },
];

const faqs = [
  { q: "¿Necesito conocimientos previos?", a: "No. El curso está diseñado para principiantes absolutos. Arrancamos desde cero tanto en IA como en creación de contenido." },
  { q: "¿Cuánto tiempo tengo para completarlo?", a: "Acceso de por vida. Podés hacerlo a tu ritmo, sin vencimientos." },
  { q: "¿Qué necesito para hacer el curso?", a: "Una computadora o celular con internet. Todas las herramientas que usamos tienen versiones gratuitas para empezar." },
  { q: "¿Voy a poder generar ingresos realmente?", a: "Sí, si aplicás lo que enseñamos. El curso te da las herramientas y la estrategia, pero la ejecución depende de vos." },
  { q: "¿Hay soporte si tengo dudas?", a: "Sí. Tenés acceso a una comunidad privada donde Brandon y Hernán responden consultas." },
  { q: "¿Entregan certificado?", a: "Sí. Al completar el curso recibís certificado digital que podés compartir en LinkedIn." },
  { q: "¿Puedo pagar en cuotas?", a: "Sí, podés pagar con tarjeta de crédito en cuotas a través de MercadoPago." },
  { q: "¿Hay garantía de reembolso?", a: "Sí. Si en los primeros 7 días no te convence el curso, te devolvemos el 100% de tu dinero sin preguntas." },
];

const purchaseIncludes = [
  "🚀 Empezás al instante en tu campus privado",
  "📱 Acceso desde cualquier dispositivo",
  "🔓 Acceso de por vida, sin límite de tiempo",
  "🎓 Certificado de finalización",
  "💻 Proyectos reales y ejercicios prácticos",
  "💬 Soporte y comunidad privada",
  "🧠 Aprendé a tu ritmo",
];

/* ─────────────────────────── SUB-COMPONENTS ─────────────────────────── */

const SectionBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 text-coral text-sm font-semibold uppercase tracking-wider mb-3">
    <span className="w-6 h-px bg-coral" />
    {children}
    <span className="w-6 h-px bg-coral" />
  </span>
);

const PricingCTA = ({ variant = "dark" }: { variant?: "dark" | "light" }) => (
  <div className={`rounded-2xl p-8 ${variant === "dark" ? "bg-white/5 border border-white/10" : "bg-charcoal"}`}>
    <div className="text-center mb-6">
      <span className="bg-coral/20 text-coral text-sm font-bold px-4 py-1.5 rounded-full inline-block mb-4">
        🔥 Promo lanzamiento — 50% OFF
      </span>
      <div className="flex items-center justify-center gap-3 mb-1">
        <span className="text-gray line-through text-xl">$120.000 ARS</span>
      </div>
      <p className="text-5xl md:text-6xl font-heading font-bold text-white">
        $60.000 <span className="text-2xl text-gray-light font-normal">ARS</span>
      </p>
    </div>

    <a
      href="https://mpago.la/2cpefDJ"
      target="_blank"
      rel="noopener noreferrer"
      className="cta-primary text-lg px-8 py-4 w-full justify-center mb-5 transform hover:scale-105 transition-all shadow-glow"
    >
      COMPRAR AHORA
    </a>

    <ul className="space-y-2 mb-6">
      {purchaseIncludes.map((item, i) => (
        <li key={i} className="text-gray-light text-sm flex items-start gap-2">
          <span className="flex-shrink-0">{item}</span>
        </li>
      ))}
    </ul>

    {/* Payment methods */}
    <div className="border-t border-white/10 pt-5">
      <p className="text-gray text-xs text-center mb-4">También podés pagar por:</p>
      <div className="grid grid-cols-2 gap-3">
        <a
          href="https://mpago.la/2cpefDJ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors"
        >
          <CreditCard size={16} className="text-coral flex-shrink-0" />
          <div>
            <p className="text-white text-xs font-semibold">MercadoPago</p>
            <p className="text-gray text-xs">Cuotas sin interés</p>
          </div>
        </a>
        <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3">
          <Building size={16} className="text-coral flex-shrink-0" />
          <div>
            <p className="text-white text-xs font-semibold">Transferencia</p>
            <p className="text-gray font-mono text-xs">labora.ar</p>
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/5491138142899"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 mt-3 bg-green-500/20 border border-green-500/30 rounded-xl px-4 py-3 hover:bg-green-500/30 transition-colors"
      >
        <Smartphone size={16} className="text-green-400 flex-shrink-0" />
        <p className="text-green-400 text-sm font-semibold">WhatsApp: +549 11 3814-2899</p>
      </a>
    </div>
  </div>
);

/* ─────────────────────────── MODULE ACCORDION ─────────────────────────── */

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
                <div className="bg-coral/5 border border-coral/20 rounded-xl p-5">
                  <p className="text-coral font-semibold text-sm mb-2 flex items-center gap-1.5">
                    ✏️ {mod.exerciseLabel}
                  </p>
                  <p className="text-charcoal text-sm leading-relaxed">
                    {mod.exercise}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/* ─────────────────────────── FAQ ─────────────────────────── */

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

const CourseOnDemand = () => {
  const outcomesRef = useRef(null);
  const benefitsRef = useRef(null);
  const deliverablesRef = useRef(null);

  const outcomesInView = useInView(outcomesRef, { once: true, margin: "-80px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
  const deliverablesInView = useInView(deliverablesRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-charcoal">
      <Header />
      <main>

        {/* ══════════════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════════════ */}
        <section className="section-dark pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
          <div className="decorative-circle w-[500px] h-[500px] -top-64 -right-64 opacity-20" />
          <div className="decorative-circle w-80 h-80 bottom-0 -left-40 opacity-15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(232,90,60,0.1)_0%,transparent_70%)]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
                {/* Left: Main content */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
                      🔥 50% OFF — Precio de lanzamiento
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-heading font-bold text-white mb-5 leading-tight"
                  >
                    IA + Creación de Contenido:{" "}
                    <span className="text-coral">
                      Comenzá tu futuro 100% digital
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-gray-light mb-8 leading-relaxed max-w-2xl"
                  >
                    Aprendé a usar Inteligencia Artificial y Creación de
                    Contenido para conseguir mejores oportunidades laborales o
                    construir tu propio emprendimiento digital.
                  </motion.p>

                  {/* Quick facts */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="grid grid-cols-2 gap-3 mb-8 max-w-lg"
                  >
                    {[
                      "✓ 10 horas de contenido práctico",
                      "✓ Para principiantes absolutos",
                      "✓ Construís tu primer producto digital",
                      "✓ Ejercicios prácticos por módulo",
                    ].map((fact, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-white/90 text-sm font-medium"
                      >
                        {fact}
                      </div>
                    ))}
                  </motion.div>

                  {/* Instructors mini */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex -space-x-3">
                      <img
                        src="/brandoncandia.png"
                        alt="Brandon Candia"
                        className="w-10 h-10 rounded-full border-2 border-coral object-cover"
                      />
                      <img
                        src="/hernan-lamanna-perfil.jpg"
                        alt="Hernán Lamanna"
                        className="w-10 h-10 rounded-full border-2 border-coral object-cover"
                      />
                    </div>
                    <p className="text-gray-light text-sm">
                      Brandon Candia & Hernán Lamanna
                    </p>
                  </motion.div>
                </div>

                {/* Right: Sticky pricing card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:sticky lg:top-24"
                >
                  <PricingCTA variant="dark" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            2. AL FINALIZAR EL CURSO
        ══════════════════════════════════════════════════ */}
        <section className="section-light py-20 md:py-24" ref={outcomesRef}>
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <SectionBadge>Al finalizar el curso</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-3">
                Al finalizar el curso
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

        {/* ══════════════════════════════════════════════════
            3. QUIÉNES LO DAN
        ══════════════════════════════════════════════════ */}
        <section className="section-dark py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <SectionBadge>Quiénes lo dan</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                Quiénes lo dan
              </h2>
              <p className="text-gray-light text-lg">Dos expertos, una visión completa</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Brandon */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-5 mb-5">
                  <img
                    src="/brandoncandia.png"
                    alt="Brandon Candia"
                    className="w-20 h-20 rounded-full border-4 border-coral object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-white font-heading font-bold text-xl">
                      Brandon Candia
                    </h3>
                    <p className="text-coral text-sm font-medium mt-0.5">
                      IA · Desarrollo · Automatización
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="badge-coral text-xs">+16 cohortes</span>
                      <span className="badge-coral text-xs">Ditobanx</span>
                      <span className="badge-coral text-xs">Academia Labora</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-light text-sm leading-relaxed">
                  Brandon es fundador y Director Académico de{" "}
                  <span className="text-white font-medium">Academia Labora</span>,
                  donde forma profesionales en IA y No-Code desde hace más de 16
                  cohortes. Trabaja como desarrollador de IA para Ditobanx y ha
                  construido decenas de productos digitales usando Claude, Lovable,
                  Supabase y n8n. Enseña día a día cómo pasar de cero conocimiento
                  técnico a crear aplicaciones reales que generan valor.
                </p>
                <div className="mt-4 bg-coral/10 border border-coral/20 rounded-xl px-4 py-3">
                  <p className="text-coral text-sm font-semibold italic">
                    "Claude piensa, vos dirigís."
                  </p>
                </div>
              </motion.div>

              {/* Hernán */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-5 mb-5">
                  <img
                    src="/hernan-lamanna-perfil.jpg"
                    alt="Hernán Lamanna"
                    className="w-20 h-20 rounded-full border-4 border-coral object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-white font-heading font-bold text-xl">
                      Hernán Lamanna
                    </h3>
                    <p className="text-coral text-sm font-medium mt-0.5">
                      Contenido · Marketing · Ventas
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="badge-coral text-xs">+700K seguidores</span>
                      <span className="badge-coral text-xs">Revista Caras</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-light text-sm leading-relaxed">
                  Hernán es creador de contenido especializado en empleabilidad con
                  más de{" "}
                  <span className="text-white font-medium">700.000 seguidores</span>{" "}
                  en todas sus redes sociales{" "}
                  <span className="text-coral font-medium">(@hernilamanna)</span>.
                  Ayuda a miles de personas en toda Latinoamérica a conseguir
                  trabajo, armar CVs atractivos y destacarse en procesos de
                  selección. Es conferencista y mentor laboral, llevando su
                  expertise a empresas, universidades y eventos en múltiples
                  ciudades.
                </p>
              </motion.div>
            </div>

            {/* Por qué juntos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-coral/10 border border-coral/20 rounded-2xl p-8 max-w-3xl mx-auto"
            >
              <h3 className="text-white font-heading font-bold text-xl mb-4 text-center">
                Por qué juntos
              </h3>
              <p className="text-gray-light text-sm leading-relaxed text-center">
                <span className="text-white font-medium">Brandon</span> trae la
                ejecución técnica: cómo usar IA para construir productos, automatizar
                procesos y multiplicar tu productividad.{" "}
                <span className="text-white font-medium">Hernán</span> trae la
                estrategia de contenido: cómo atraer clientes, qué publicar, cómo
                vender sin vender.{" "}
                <span className="text-coral font-semibold">
                  Juntos te dan el mapa completo: de la idea al ingreso.
                </span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            4. BENEFICIOS
        ══════════════════════════════════════════════════ */}
        <section className="section-light py-20 md:py-24" ref={benefitsRef}>
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <SectionBadge>Beneficios</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
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
                  className="bg-white rounded-2xl p-6 card-elevated"
                >
                  <span className="text-3xl mb-4 block">{b.emoji}</span>
                  <h3 className="text-charcoal font-heading font-bold text-lg mb-2">
                    {b.title}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            5. MÓDULOS
        ══════════════════════════════════════════════════ */}
        <section className="section-dark py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <SectionBadge>Programa</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                Los módulos
              </h2>
              <p className="text-gray-light text-lg max-w-xl mx-auto">
                5 módulos con 10 horas de contenido práctico más ejercicios integradores
              </p>
            </div>
            <ModuleAccordion />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            6. PRICING SECTION
        ══════════════════════════════════════════════════ */}
        <section className="section-light py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <SectionBadge>Inversión</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                Acceso completo por
              </h2>
            </div>

            <div className="bg-charcoal rounded-3xl p-8 md:p-12 max-w-lg mx-auto">
              <PricingCTA variant="dark" />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            7. ENTREGABLES
        ══════════════════════════════════════════════════ */}
        <section className="section-dark py-20 md:py-24" ref={deliverablesRef}>
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={deliverablesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <SectionBadge>Entregables</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                Al finalizar tendrás
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {deliverables.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  animate={deliverablesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-coral/30 hover:bg-white/8 transition-all"
                >
                  <span className="text-2xl mb-4 block">{d.emoji}</span>
                  <h3 className="text-white font-heading font-bold text-lg mb-2">
                    {d.title}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            8. FAQ
        ══════════════════════════════════════════════════ */}
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

        {/* ══════════════════════════════════════════════════
            9. FINAL CTA
        ══════════════════════════════════════════════════ */}
        <section className="section-dark py-24 relative overflow-hidden">
          <div className="decorative-circle w-96 h-96 -top-48 -right-48 opacity-20" />
          <div className="decorative-circle w-80 h-80 -bottom-40 -left-40 opacity-15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,90,60,0.12)_0%,transparent_65%)]" />

          <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
                Empezá hoy un{" "}
                <span className="text-coral">nuevo futuro digital</span>
              </h2>
              <p className="text-gray-light text-lg mb-3">
                Precio de lanzamiento solo por tiempo limitado
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-gray line-through text-2xl">$120.000 ARS</span>
                <span className="text-5xl font-heading font-bold text-white">$60.000 ARS</span>
                <span className="bg-coral text-white text-sm font-bold px-3 py-1.5 rounded-full">
                  50% OFF
                </span>
              </div>

              <a
                href="https://mpago.la/2cpefDJ"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary text-xl px-12 py-5 transform hover:scale-105 transition-all shadow-glow inline-flex mb-5"
              >
                COMPRAR AHORA
              </a>

              <p className="text-gray-light text-sm">
                🔓 Acceso de por vida · 🎓 Certificado oficial
              </p>

              <div className="mt-10 pt-10 border-t border-white/10">
                <p className="text-gray text-sm mb-4">
                  ¿Tenés dudas? Escribinos
                </p>
                <a
                  href="https://wa.me/5491138142899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 px-6 py-3 rounded-xl hover:bg-green-500/30 transition-colors font-semibold text-sm"
                >
                  💬 WhatsApp: +549 11 3814-2899
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseOnDemand;
