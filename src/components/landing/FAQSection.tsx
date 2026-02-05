import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito experiencia previa?",
    answer:
      "No, no necesitas experiencia previa en IA ni en creación de contenido. El programa está diseñado para empezar desde cero y llevarte paso a paso hasta que domines ambas habilidades.",
  },
  {
    question: "¿Qué pasa si no puedo asistir a una clase en vivo?",
    answer:
      "Todas las clases quedan grabadas y disponibles en la plataforma. Podés verlas cuando quieras y cuantas veces necesites durante el acceso al programa.",
  },
  {
    question: "¿En qué horarios son las clases?",
    answer:
      "Las clases inician el Jueves 19 de Febrero. Se cursa en Turno Noche: Lunes, Jueves y Viernes de 20:00 a 22:00 hs (ARG).",
  },
  {
    question: "¿Cuánto dura el acceso a las grabaciones?",
    answer:
      "El acceso a las grabaciones está disponible durante el programa y por un tiempo adicional después de finalizar para que puedas repasar todo el contenido.",
  },
  {
    question: "¿Hay soporte durante el programa?",
    answer:
      "Sí, tenés acceso a soporte a través de la comunidad del programa donde podés hacer preguntas, compartir avances y recibir feedback de los instructores y otros participantes.",
  },
];

const FAQSection = () => {
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal">
            Preguntas Frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border-none shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-heading font-semibold text-charcoal hover:no-underline hover:bg-gray-50 [&[data-state=open]]:bg-gray-50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
