import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  const phone = "917061626429";
  const message = "Hello, I would like to inquire about makhana.";
  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-105 active:scale-95 transition-transform animate-float"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent ring-2 ring-background" />
    </a>
  );
}
