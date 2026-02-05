import { motion } from "framer-motion";
import { Check, Star, MessageCircle, ArrowRight } from "lucide-react";

const Payment = () => {
    return (
        <div className="min-h-screen bg-charcoal font-sans text-white">
            {/* Header Simple */}
            <header className="py-6 border-b border-white/10">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <span className="text-white font-heading font-bold text-lg md:text-xl">
                        Futuro del Trabajo
                    </span>
                    <span className="bg-coral text-white text-xs font-semibold px-2 py-0.5 rounded">
                        2026
                    </span>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-coral font-medium tracking-wider text-sm uppercase mb-4 block">
                        Paso final
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                        Confirmá tu inscripción
                    </h1>
                    <p className="text-xl text-gray-light max-w-2xl mx-auto mb-4">
                        Elegí la opción de pago que prefieras. Una vez completado, envíanos el comprobante para darte acceso inmediato.
                    </p>
                    <div className="inline-block bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm font-medium text-coral-light">
                        📅 Inicio: 19 de Febrero • Lunes, Jueves y Viernes (20-22hs)
                    </div>
                </motion.div>

                {/* ARS Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8 justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png" alt="Argentina" className="w-8 h-auto rounded shadow-sm opacity-80" />
                        <h2 className="text-2xl font-heading font-semibold">Pagos desde Argentina</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Pago Único */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative bg-white rounded-2xl p-8 text-charcoal border-2 border-coral shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="bg-coral text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                                    <Star size={14} fill="white" />
                                    15% OFF
                                </span>
                            </div>

                            <h3 className="text-xl font-heading font-bold mb-2 text-center text-charcoal/80">PAGO ÚNICO</h3>
                            <div className="text-center mb-6">
                                <p className="text-gray-400 text-lg line-through font-medium">AR$ 345.000</p>
                                <p className="text-5xl font-heading font-bold text-coral">AR$ 293.250</p>
                                <p className="text-sm text-gray mt-2 font-medium">Precio final con descuento</p>
                            </div>

                            <a
                                href="https://mpago.la/1YuRN5C"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-coral text-white font-bold text-center py-4 rounded-xl hover:bg-coral-dark transition-all shadow-lg hover:shadow-coral/30 mb-6 flex items-center justify-center gap-2 group"
                            >
                                PAGAR CON MERCADO PAGO
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <ul className="space-y-3 text-sm text-gray-dark">
                                <li className="flex items-start gap-2">
                                    <Check size={16} className="text-coral mt-0.5" />
                                    <span>Ahorrás dinero con el descuento del 15%</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check size={16} className="text-coral mt-0.5" />
                                    <span>Acceso inmediato a la plataforma</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Cuotas */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="relative bg-white/5 border border-white/10 rounded-2xl p-8 text-white hover:bg-white/10 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-heading font-bold mb-2 text-center text-white/80">FINANCIADO</h3>
                            <div className="text-center mb-6">
                                <p className="text-4xl font-heading font-bold">2 x AR$ 172.500</p>
                                <p className="text-lg text-gray-light mt-1">sin interés sobre precio de lista</p>
                            </div>

                            <a
                                href="https://mpago.la/1v6MPn5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-white text-charcoal font-bold text-center py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg mb-6 flex items-center justify-center gap-2"
                            >
                                PAGAR EN CUOTAS
                                <ArrowRight size={18} />
                            </a>

                            <ul className="space-y-3 text-sm text-gray-light">
                                <li className="flex items-start gap-2">
                                    <Check size={16} className="text-coral mt-0.5" />
                                    <span>Pagá la primera cuota hoy</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check size={16} className="text-coral mt-0.5" />
                                    <span>Congelás el precio total</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* International Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="max-w-2xl mx-auto bg-gradient-to-br from-charcoal-light to-charcoal border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-coral/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <h3 className="text-2xl font-heading font-bold mb-4">¿Estás fuera de Argentina? 🌍</h3>
                    <p className="text-gray-light mb-8">
                        Aceptamos pagos en <strong>USD (Dólares)</strong>, <strong>USDT (Cripto)</strong> y otras monedas internacionales. Escribinos para coordinar.
                    </p>

                    <a
                        href="https://wa.me/5491138142899?text=Hola!%20Quiero%20inscribirme%20al%20Future%20Work%20Accelerator%20y%20pagar%20en%20USD/Cripto."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-green-500/20 transform hover:-translate-y-1"
                    >
                        <MessageCircle size={24} />
                        CONTACTAR POR WHATSAPP
                    </a>
                </motion.div>

            </main>

            <footer className="py-8 text-center text-gray text-sm border-t border-white/10">
                <p>© 2026 Futuro del Trabajo. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Payment;
