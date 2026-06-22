const WA_MSG = encodeURIComponent(
  "Hola, me comunico desde carlaccidentes.com. Quisiera información sobre mi caso."
);

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Video background ─────────────────────────────────────────────
          Coloca el archivo del video en /public/videos/accidente.mp4
          y descomenta la etiqueta <source> de abajo.
      ─────────────────────────────────────────────────────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/images/video169.mp4" type="video/mp4" />
      </video>

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/82" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-bg/85"
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-28 pb-28 flex flex-col items-center text-center">

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[90px] leading-[1.08] text-white max-w-4xl mb-8">
          ¿Tuviste un accidente
          <br />
          en los últimos{" "}
          <span className="pulse-glow">30</span>{" "}días?
        </h1>

        {/* Gold divider */}
        <div className="flex items-center gap-4 mb-8 w-full max-w-xs">
          <div className="flex-1 h-px bg-gold/40" />
          <div
            className="w-1.5 h-1.5 bg-gold rotate-45 shrink-0"
            aria-hidden="true"
          />
          <div className="flex-1 h-px bg-gold/40" />
        </div>

        {/* Subtitle */}
        <p className="font-sans text-sm sm:text-base leading-relaxed text-white/60 max-w-lg mb-12">
          Si eres víctima de un accidente, puedo ayudarte a obtener la
          indemnización que mereces —{" "}
          <span className="text-gold font-medium">sin costo alguno para ti.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="#contacto"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold text-bg font-sans text-sm font-semibold hover:bg-gold-light transition-colors duration-200 cursor-pointer"
          >
            Cuéntanos tu caso
          </a>
          <a
            href={`https://wa.me/14074608151?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-gold/45 text-gold font-sans text-sm font-medium hover:bg-gold/10 transition-colors duration-200 cursor-pointer"
          >
            Hablar por WhatsApp
          </a>
        </div>

      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-35"
        aria-hidden="true"
      >
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white">Scroll</span>
        <div className="w-px h-9 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
