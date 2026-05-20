import { MessageCircle, UserCheck, ShieldCheck } from "lucide-react";

const pasos = [
  {
    numero: "01",
    icono: MessageCircle,
    titulo: "Cuéntanos tu caso",
    descripcion:
      "Nos contactas y nos explicas qué pasó. Sin formularios complicados, sin jerga legal — solo cuéntanos tu historia.",
  },
  {
    numero: "02",
    icono: UserCheck,
    titulo: "Te conectamos con un abogado",
    descripcion:
      "Te vinculamos con un abogado especializado en tu tipo de accidente, listo para revisar tu situación.",
  },
  {
    numero: "03",
    icono: ShieldCheck,
    titulo: "Recibes tu indemnización",
    descripcion:
      "El abogado lleva tu caso y tú recibes la compensación que mereces, sin pagar nada por adelantado.",
  },
];

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="bg-cream py-24 sm:py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-gold" />
            <div className="w-2 h-2 bg-gold rotate-45 shrink-0" aria-hidden="true" />
            <div className="h-px w-10 bg-gold" />
          </div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-brown-mid mb-4">
            El proceso
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brown leading-tight">
            Así es como te ayudamos
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {pasos.map(({ numero, icono: Icono, titulo, descripcion }) => (
            <div
              key={numero}
              className="bg-surface border border-gold/30 rounded-2xl p-8 flex flex-col gap-5 transition-shadow duration-200 hover:shadow-md"
            >
              {/* Número decorativo */}
              <span className="font-display text-5xl leading-none text-gold/40 select-none">
                {numero}
              </span>

              {/* Ícono */}
              <div className="w-11 h-11 rounded-full bg-cream flex items-center justify-center shrink-0">
                <Icono size={22} className="text-gold" strokeWidth={1.5} />
              </div>

              {/* Texto */}
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl text-brown leading-snug">
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
    </section>
  );
}
