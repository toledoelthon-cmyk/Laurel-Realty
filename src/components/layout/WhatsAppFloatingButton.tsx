import { MessageCircle } from "lucide-react";
import { brand, whatsappHref } from "@/lib/constants";

export function WhatsAppFloatingButton() {
  return (
    <a
      aria-label={`Contactar a ${brand.name} por WhatsApp`}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-laurel text-ivory shadow-soft transition hover:-translate-y-0.5 hover:bg-laurel-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:bottom-6 sm:right-6"
      href={whatsappHref}
      rel="noreferrer"
      target="_blank"
    >
      <span className="absolute -inset-1 rounded-full border border-gold/20" />
      <MessageCircle aria-hidden className="relative" size={24} />
    </a>
  );
}
