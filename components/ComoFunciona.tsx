import { MessageCircle, UserCheck, ShieldCheck } from "lucide-react";

const pasos = [
  {
    icono: MessageCircle,
    titulo: "Cuéntanos tu caso",
    descripcion:
      "Nos contactas y nos explicas qué pasó. Sin formularios complicados, sin jerga legal — solo cuéntanos tu historia.",
  },
  {
    icono: UserCheck,
    titulo: "Te conectamos con un abogado",
    descripcion:
      "Te vinculamos con un abogado especializado en tu tipo de accidente, listo para revisar tu situación.",
  },
  {
    icono: ShieldCheck,
    titulo: "Recibes tu indemnización",
    descripcion:
      "El abogado lleva tu caso y tú recibes la compensación que mereces, sin pagar nada por adelantado.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-cream py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-gold" />
            <div className="w-2 h-2 bg-gold rotate-45 shrink-0" aria-hidden="true" />
            <div className="h-px w-10 bg-gold" />
          </div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-brown-mid mb-4">
            El proceso
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brown leading-tight">
            Tres pasos hacia tu indemnización
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Línea conectora — horizontal en desktop */}
          <div
            className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-gold/10 via-gold/50 to-gold/10"
            aria-hidden="true"
          />

          {/* Línea conectora — vertical en mobile */}
          <div
            className="md:hidden absolute top-8 bottom-8 w-px bg-gradient-to-b from-gold/50 via-gold/40 to-gold/10"
            style={{ left: "31.5px" }}
            aria-hidden="true"
          />

          {/* Pasos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
            {pasos.map(({ icono: Icono, titulo, descripcion }) => (
              <div
                key={titulo}
                className="flex md:flex-col items-start md:items-center gap-5 md:gap-0 group"
              >
                {/* Nodo con ícono */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-surface border border-gold flex items-center justify-center shrink-0 md:mb-7 shadow-[0_2px_12px_rgba(201,169,97,0.18)] transition-transform duration-300 group-hover:scale-105">
                  {/* Punto exterior decorativo en hover */}
                  <span
                    className="absolute inset-0 rounded-full border border-gold/0 group-hover:border-gold/40 transition-colors duration-300 scale-110"
                    aria-hidden="true"
                  />
                  <Icono className="text-gold relative" size={26} strokeWidth={1.5} />
                </div>

                {/* Texto */}
                <div className="md:text-center md:max-w-xs flex-1">
                  <h3 className="font-display text-xl text-brown leading-snug mb-2 md:mb-3">
                    {titulo}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-text-muted">
                    {descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
