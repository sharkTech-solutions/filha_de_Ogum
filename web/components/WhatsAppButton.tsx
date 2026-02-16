import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/554196865804?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20trabalhos."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-bold hidden md:inline">Falar no WhatsApp</span>
    </a>
  );
}
