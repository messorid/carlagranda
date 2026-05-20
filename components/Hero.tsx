import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-cream flex items-center px-6 py-24 sm:py-28 overflow-hidden"
    >
      {/* Fondo decorativo con opacidad baja */}
      <Image
        src="/images/fondo.png"
        alt=""
        fill
        className="object-cover object-center opacity-15 select-none pointer-events-none"
        priority
        aria-hidden="true"
      />
      {/* Capa de tinte crema para mantener legibilidad */}
      <div className="absolute inset-0 bg-cream/65" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Columna de texto ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Foto circular — solo visible en mobile */}
            <div className="lg:hidden mb-8 relative">
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gold/50 shadow-sm">
                <Image
                  src="/images/carlaperfil.png"
                  alt="Carla Granda"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Ornamento dorado */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold" />
              <div className="w-2 h-2 bg-gold rotate-45 shrink-0" aria-hidden="true" />
              <div className="h-px w-10 bg-gold" />
            </div>

            {/* Etiqueta */}
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-brown-mid mb-5">
              Víctimas de accidentes
            </p>

            {/*
              Variante 1 (urgencia + empatía):
                "¿Tuviste un accidente en los últimos 30 días?"
              Variante 2 (centrada en la víctima):
                "Eres víctima. Mereces una buena indemnización."
              Variante 3 (acción inmediata):
                "El momento de actuar es ahora."
            */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.15] text-brown mb-6">
              ¿Tuviste un accidente
              <br />
              <em>en los últimos 30 días?</em>
            </h1>

            {/* Línea decorativa */}
            <div className="w-12 h-px bg-gold mb-8" aria-hidden="true" />

            {/* Subtítulo */}
            <p className="font-sans text-lg sm:text-xl leading-relaxed text-text-muted max-w-xl mb-10">
              Si eres víctima de un accidente, puedo ayudarte a obtener
              la indemnización que mereces —{" "}
              <span className="text-brown-mid font-medium">sin costo alguno.</span>
            </p>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contacto"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brown-mid text-white font-sans text-base font-medium transition-colors duration-200 hover:bg-brown"
              >
                Cuéntanos tu caso
              </a>
              <a
                href="https://wa.me/16892361508"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-gold text-brown-mid font-sans text-base font-medium transition-colors duration-200 hover:bg-gold-light hover:border-gold-light"
              >
                Hablar por WhatsApp
              </a>
            </div>

            {/* Nota de confianza */}
            <p className="font-sans text-sm text-text-muted tracking-wide">
              Sin compromiso&ensp;·&ensp;Consulta gratuita&ensp;·&ensp;Confidencial
            </p>
          </div>

          {/* ── Columna de imagen (solo desktop) ── */}
          <div className="hidden lg:block relative max-w-sm mx-auto w-full">
            {/* Cuadro dorado offset */}
            <div
              className="absolute inset-0 translate-x-5 translate-y-5 border border-gold/45 rounded-2xl"
              aria-hidden="true"
            />
            <Image
              src="/images/carlaperfil.png"
              alt="Carla Granda"
              width={480}
              height={580}
              className="relative z-10 w-full rounded-2xl object-cover object-top shadow-sm"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
