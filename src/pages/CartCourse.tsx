import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Trash2, ShoppingCart, ShieldCheck } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

// Definición global para fbq
declare global {
  interface Window {
    fbq: any;
  }
}

const CartCourse = () => {
  useEffect(() => {
    // Disparar evento de AddToCart del Pixel al cargar la página
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_name: 'Curso On Demand',
        value: 60000,
        currency: 'ARS'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-charcoal font-sans text-white flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-32 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="text-coral" size={28} />
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">Tu Carrito</h1>
        </div>

        <div className="grid md:grid-cols-[1fr_320px] gap-8">
          {/* Columna Izquierda: Lista de productos */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center relative"
            >
              <div className="w-24 h-24 rounded-xl bg-coral/20 flex-shrink-0 flex items-center justify-center border border-coral/30 overflow-hidden">
                <img src="/og-image.png" alt="Curso" className="w-full h-full object-cover opacity-80" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-heading font-bold text-white">Curso On Demand</h3>
                  <span className="bg-coral/20 text-coral text-xs font-bold px-2 py-0.5 rounded-full">50% OFF</span>
                </div>
                <p className="text-sm text-gray-light mb-3">IA + Creación de Contenido. Acceso de por vida.</p>
                <div className="text-xl font-heading font-bold text-white">
                  $60.000 ARS <span className="text-sm text-gray line-through font-normal ml-2">$120.000 ARS</span>
                </div>
              </div>

              <button className="absolute top-6 right-6 text-gray hover:text-red-400 transition-colors">
                <Trash2 size={20} />
              </button>
            </motion.div>
          </div>

          {/* Columna Derecha: Resumen */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24"
            >
              <h3 className="text-lg font-heading font-bold text-white mb-4">Resumen de compra</h3>
              
              <div className="space-y-3 text-sm text-gray-light mb-6 border-b border-white/10 pb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$120.000 ARS</span>
                </div>
                <div className="flex justify-between text-coral font-medium">
                  <span>Descuento especial</span>
                  <span>-$60.000 ARS</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-medium text-white">Total</span>
                <span className="text-3xl font-heading font-bold text-white">$60.000 <span className="text-lg text-gray-light font-normal">ARS</span></span>
              </div>

              <Link 
                to="/checkout-curso"
                className="w-full bg-coral text-white font-bold text-center py-4 rounded-xl hover:bg-coral-dark transition-all shadow-glow flex items-center justify-center gap-2 group mb-4"
              >
                IR A FINALIZAR COMPRA
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center justify-center gap-2 text-xs text-gray">
                <ShieldCheck size={14} className="text-green-400" />
                <span>Pago seguro cifrado de extremo a extremo</span>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartCourse;
