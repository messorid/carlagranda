export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-cream flex items-center justify-center px-6 py-24 sm:py-32"
    >
      <div className="w-full max-w-2xl mx-auto text-center">

        {/* Ornamento dorado */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-10 bg-gold" />
          <div
            className="w-2 h-2 bg-gold rotate-45 shrink-0"
            aria-hidden="true"
          />
          <div className="h-px w-10 bg-gold" />
        </div>

        {/* Etiqueta superior */}
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-brown-mid mb-5">
          Estamos aquí para ayudarte
        </p>

        {/*
          Variante 1 (empática, directa):
            "¿Tuviste un accidente? No estás solo."
          Variante 2 (centrada en la recuperación):
            "Después de un accidente, mereces apoyo real."
          Variante 3 (centrada en el siguiente paso):
            "El abogado correcto empieza aquí."
        */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.15] text-brown mb-6">
          ¿Tuviste un accidente?
          <br />
          <em>No estás solo.</em>
        </h1>

        {/* Línea decorativa */}
        <div className="w-12 h-px bg-gold mx-auto mb-8" aria-hidden="true" />

        {/* Subtítulo */}
        <p className="font-sans text-lg sm:text-xl leading-relaxed text-text-muted max-w-xl mx-auto mb-10">
          Te conectamos con abogados especializados en accidentes para que
          recibas la indemnización que mereces —{" "}
          <span className="text-brown-mid font-medium">
            sin costo inicial para ti.
          </span>
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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
    </section>
  );
}
