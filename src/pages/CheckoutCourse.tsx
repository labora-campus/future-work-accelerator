import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, User, Mail, CreditCard } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const CheckoutCourse = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Disparar evento de InitiateCheckout del Pixel al cargar la página
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Curso On Demand',
        value: 60000,
        currency: 'ARS'
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aquí podríamos guardar los datos en una DB o enviarlos por email si fuera necesario.
    // Por ahora, simulamos un pequeño delay y redirigimos a Mercado Pago.
    setTimeout(() => {
      window.location.href = "https://mpago.la/2cpefDJ";
    }, 800);
  };

  return (
    <div className="min-h-screen bg-charcoal font-sans text-white flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-32 max-w-5xl">
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Finalizar Compra</h1>
          <p className="text-gray-light">Estás a un paso de acceder al Curso On Demand.</p>
        </div>

        <div className="grid md:grid-cols-[1fr_380px] gap-10">
          {/* Columna Izquierda: Formulario */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
              <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2 mb-4">
                <User size={20} className="text-coral" />
                Datos Personales
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-light">Nombre *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-light">Apellido *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-light flex items-center gap-2">
                  Email *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail size={16} className="text-gray" />
                  </div>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <p className="text-xs text-gray mt-1">A este correo enviaremos tu acceso al curso.</p>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-coral text-white font-bold text-center py-4 rounded-xl hover:bg-coral-dark transition-all shadow-glow flex items-center justify-center gap-2 mt-8 disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Procesando..."
                ) : (
                  <>
                    <CreditCard size={20} />
                    PAGAR CON MERCADO PAGO
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-gray mt-4">
                <Lock size={14} className="text-gray" />
                <span>Serás redirigido a Mercado Pago para completar tu compra de forma 100% segura.</span>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <p className="text-xs text-gray-light text-center mb-4">Otras opciones de pago:</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://wa.me/5491138142899?text=Hola!%20Quiero%20inscribirme%20al%20Curso%20On%20Demand%20por%20transferencia%20bancaria."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-white text-center transition-colors flex items-center justify-center gap-2"
                  >
                    Transferencia bancaria
                  </a>
                  <a 
                    href="https://wa.me/5491138142899?text=Hola!%20Soy%20de%20otro%20pa%C3%ADs%20y%20quiero%20inscribirme%20al%20Curso%20On%20Demand."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-white text-center transition-colors flex items-center justify-center gap-2"
                  >
                    Pago Internacional
                  </a>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Columna Derecha: Resumen de la Orden */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-heading font-bold text-white mb-6">Tu Pedido</h3>
              
              <div className="flex gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-lg bg-coral/20 flex-shrink-0 border border-coral/30 overflow-hidden">
                  <img src="/og-image.png" alt="Curso" className="w-full h-full object-cover opacity-80" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">Curso On Demand</h4>
                  <p className="text-xs text-gray mt-1">Acceso de por vida</p>
                  <p className="text-coral font-bold text-sm mt-1">$60.000 ARS</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-light mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$120.000 ARS</span>
                </div>
                <div className="flex justify-between text-coral">
                  <span>Descuento 50%</span>
                  <span>-$60.000 ARS</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <span className="text-base font-medium text-white">Total a pagar</span>
                <span className="text-2xl font-heading font-bold text-white">$60.000 ARS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutCourse;
