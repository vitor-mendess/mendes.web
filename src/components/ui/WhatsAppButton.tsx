import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5599999999999" // coloque seu número
      target="_blank"
      className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}