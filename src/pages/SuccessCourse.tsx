import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Laptop, ArrowRight, Star } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const SuccessCourse = () => {
  useEffect(() => {
    // Disparar evento de Purchase del Pixel al cargar la página
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'Purchase', {
        content_name: 'Curso On Demand',
        value: 60000,
        currency: 'ARS'
      });
    }
  }, []);

  const whatsappMessage = encodeURIComponent("Hola! Ya completé el pago del curso. Mi nombre es: ");
  const whatsappUrl = `https://wa.me/5491138142899?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-charcoal font-sans text-white flex flex-col relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-coral/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,90,60,0.05)_0%,transparent_80%)] pointer-events-none" />

      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-20 md:py-32 max-w-3xl relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl scale-150" />
          <CheckCircle2 size={100} className="text-emerald-400 relative z-10 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            ¡Pago exitoso! <br />
            <span className="text-coral">Bienvenido al club</span>
          </h1>
          <p className="text-xl text-gray-light max-w-2xl mx-auto mb-12">
            Tu compra se ha procesado correctamente. Estás a un solo paso de empezar tu formación en IA y Creación de Contenido.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-left backdrop-blur-sm shadow-2xl"
        >
          <h2 className="text-2xl font-heading font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
            <Star className="text-coral" size={24} />
            Tus Próximos Pasos
            <Star className="text-coral" size={24} />
          </h2>

          <div className="space-y-8">
            {/* Paso 1 */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-coral flex items-center justify-center font-heading font-bold text-xl flex-shrink-0 shadow-glow">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Solicita tu acceso</h3>
                <p className="text-gray-light mb-4">
                  Haz clic en el botón de abajo para enviarnos un WhatsApp y recibir inmediatamente tus credenciales de acceso a la plataforma.
                </p>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transform hover:-translate-y-1 w-full sm:w-auto text-lg"
                >
                  <MessageCircle size={24} />
                  PEDIR MIS CREDENCIALES
                </a>
              </div>
            </div>

            {/* Divisor */}
            <div className="w-px h-10 bg-white/10 ml-6 -my-4" />

            {/* Paso 2 */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-heading font-bold text-xl flex-shrink-0 text-gray-light">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Laptop size={20} className="text-coral" />
                  Inicia sesión y empieza
                </h3>
                <p className="text-gray-light">
                  Una vez que te enviemos tu usuario y contraseña, podrás entrar a tu campus virtual y comenzar el curso a tu propio ritmo.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default SuccessCourse;
