import { MessageCircle, UserCheck, ShieldCheck } from "lucide-react";

const pasos = [
  {
    numero: "01",
    Icono:  MessageCircle,
    titulo: "Cuéntanos tu caso",
    descripcion:
      "Nos contactas y nos explicas qué pasó. Sin formularios complicados, sin jerga legal — solo cuéntanos tu historia.",
  },
  {
    numero: "02",
    Icono:  UserCheck,
    titulo: "Te conectamos con un abogado",
    descripcion:
      "Te vinculamos con un abogado especializado en tu tipo de accidente, listo para revisar tu situación sin costo inicial.",
  },
  {
    numero: "03",
    Icono:  ShieldCheck,
    titulo: "Recibes tu indemnización",
    descripcion:
      "El abogado lleva tu caso y tú recibes la compensación que mereces, sin pagar nada por adelantado.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-bg py-28 sm:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20 sm:mb-28">
          <p className="font-sans text-xs tracking-[0.22em] uppercase text-gold mb-5">
            El proceso
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-text leading-tight">
            Tres pasos hacia tu
            <br />
            <em className="text-gold">indemnización</em>
          </h2>
        </div>

        {/* ──────────────────────────────────────────────────────────────────
            Mobile: horizontal snap carousel (flex + overflow-x)
            md+:    3-column grid
        ────────────────────────────────────────────────────────────────── */}
        <div className="carousel-track flex md:grid md:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-6 px-6 md:mx-0 md:px-0 pb-4 md:pb-0">
          {pasos.map(({ numero, Icono, titulo, descripcion }) => (
            <div
              key={titulo}
              className="snap-start shrink-0 w-[82vw] sm:w-[55vw] md:w-auto group"
            >
              <div className="h-full bg-card border border-border rounded-3xl p-8 sm:p-10 hover:border-gold/35 transition-colors duration-300">

                {/* Step number + icon row */}
                <div className="flex items-center gap-4 mb-7">
                  <span
                    className="font-display text-[56px] leading-none text-gold/18 select-none"
                    aria-hidden="true"
                  >
                    {numero}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-gold/8 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/14 transition-colors duration-300">
                    <Icono size={22} className="text-gold" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-text leading-snug mb-3">
                  {titulo}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-text-muted">
                  {descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="md:hidden text-center font-sans text-xs text-text-muted/40 mt-5 tracking-wide">
          ← Desliza para ver los pasos →
        </p>

      </div>
    </section>
  );
}
