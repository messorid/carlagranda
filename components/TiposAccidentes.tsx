import {
  Car,
  HardHat,
  AlertTriangle,
  Bike,
  User,
  Stethoscope,
} from "lucide-react";

const tipos = [
  {
    Icono: Car,
    label: "Accidentes de auto",
    desc:  "Colisiones, atropellos y accidentes con vehículos de motor.",
  },
  {
    Icono: HardHat,
    label: "Accidentes de trabajo",
    desc:  "Lesiones ocurridas en el lugar de trabajo o en camino a él.",
  },
  {
    Icono: AlertTriangle,
    label: "Resbalones y caídas",
    desc:  "Caídas en propiedades privadas, comercios o espacios públicos.",
  },
  {
    Icono: Bike,
    label: "Accidentes de motocicleta",
    desc:  "Colisiones y accidentes en moto, con o sin otro vehículo.",
  },
  {
    Icono: User,
    label: "Accidentes de peatón",
    desc:  "Atropellos y lesiones sufridas caminando en la vía pública.",
  },
  {
    Icono: Stethoscope,
    label: "Negligencia médica",
    desc:  "Errores médicos, diagnósticos incorrectos y mala praxis.",
  },
];

export default function TiposAccidentes() {
  return (
    <section id="tipos-accidentes" className="bg-surface py-28 sm:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20 sm:mb-28">
          <p className="font-sans text-xs tracking-[0.22em] uppercase text-gold mb-5">
            ¿Qué tipo de accidente tuviste?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-text leading-tight mb-5">
            Cubrimos tu caso
          </h2>
          <p className="font-sans text-sm text-text-muted max-w-lg mx-auto leading-relaxed">
            Sin importar el tipo de accidente, Carla puede ayudarte a obtener
            la representación legal que necesitas — sin costo inicial para ti.
          </p>
        </div>

        {/* ──────────────────────────────────────────────────────────────────
            Mobile: horizontal snap carousel
            md+:    3 × 2 grid
        ────────────────────────────────────────────────────────────────── */}
        <div className="carousel-track flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-6 px-6 md:mx-0 md:px-0 pb-4 md:pb-0">
          {tipos.map(({ Icono, label, desc }) => (
            <div
              key={label}
              className="snap-start shrink-0 w-[72vw] sm:w-[44vw] md:w-auto group cursor-default"
            >
              <div className="h-full bg-card border border-border rounded-3xl p-7 text-center hover:border-gold/35 hover:bg-card/70 transition-all duration-300">

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gold/8 border border-gold/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/14 transition-colors duration-300">
                  <Icono size={24} className="text-gold" strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-lg text-text leading-snug mb-2">
                  {label}
                </h3>
                <p className="font-sans text-xs text-text-muted leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="md:hidden text-center font-sans text-xs text-text-muted/40 mt-5 tracking-wide">
          ← Desliza para ver todos →
        </p>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-bg font-sans text-sm font-semibold hover:bg-gold-light transition-colors duration-200 cursor-pointer"
          >
            Evalúa tu caso gratis
          </a>
        </div>

      </div>
    </section>
  );
}
