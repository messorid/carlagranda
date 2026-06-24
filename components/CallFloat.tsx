"use client";

import { Phone } from "lucide-react";
import { NUMERO_WHATSAPP } from "@/lib/config";
import { track } from "@/lib/gtag";

export default function CallFloat() {
  return (
    <a
      href={`tel:+${NUMERO_WHATSAPP}`}
      aria-label="Llamar ahora"
      onClick={() => track.ctaClick("floating_call")}
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gold shadow-lg hover:bg-gold-light hover:scale-105 transition-all duration-200 cursor-pointer group"
    >
      <Phone size={24} className="text-bg" strokeWidth={1.8} />

      {/* Tooltip */}
      <span className="absolute right-16 bg-card border border-border text-text font-sans text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Llamar ahora
      </span>
    </a>
  );
}
