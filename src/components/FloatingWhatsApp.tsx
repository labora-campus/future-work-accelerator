import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const phoneNumber = "5491138142899"; // Argentina country code added
  const message = "Hola, quiero obtener más info sobre...";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
};

export default FloatingWhatsApp;
