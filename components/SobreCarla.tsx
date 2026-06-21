import Image from "next/image";
import { CheckCircle } from "lucide-react";

const valores = [
  "Atención personalizada",
  "Sin costo inicial",
  "Abogados con experiencia",
  "Proceso simple y claro",
];

const stats = [
  { value: "100%",  label: "Sin costo inicial" },
  { value: "24 h",  label: "Tiempo de respuesta" },
  { value: "6+",    label: "Tipos de accidentes" },
];

export default function SobreCarla() {
  return (
    <section id="sobre-carla" className="bg-bg py-28 sm:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* ── Photo column ── */}
          <div className="relative max-w-sm mx-auto lg:mx-0 w-full order-2 lg:order-1">
            {/* Glow border */}
            <div
              className="absolute -inset-px rounded-3xl bg-gradient-to-br from-gold/22 via-transparent to-transparent"
              aria-hidden="true"
            />
            {/* Offset decorative frame */}
            <div
              className="absolute inset-0 translate-x-5 translate-y-5 border border-gold/18 rounded-3xl"
              aria-hidden="true"
            />
            <Image
              src="/images/carlaperfil.png"
              alt="Carla Granda"
              width={480}
              height={580}
              className="relative z-10 w-full rounded-3xl object-cover object-top"
              priority
            />

            {/* Floating stats chips */}
            <div className="absolute -bottom-5 -right-2 sm:-right-6 z-20 flex flex-col gap-2">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-card border border-border rounded-2xl px-4 py-3 text-right backdrop-blur-sm shadow-lg"
                >
                  <p className="font-display text-xl text-gold leading-none">{value}</p>
                  <p className="font-sans text-xs text-text-muted mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Text column ── */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">

            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-gold" />
              <p className="font-sans text-xs tracking-[0.22em] uppercase text-gold">
                Sobre Carla
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-text leading-tight">
              Alguien que te
              <br />
              <em className="text-gold">acompaña de verdad.</em>
            </h2>

            {/* Body copy */}
            <p className="font-sans text-sm leading-relaxed text-text-muted">
              Sé lo que se siente quedar desorientado después de un accidente
              — el estrés, las dudas, no saber por dónde empezar. Por eso
              acompaño a cada persona de manera individual, porque detrás de
              cada caso hay una historia real que merece atención y justicia.
            </p>
            <p className="font-sans text-sm leading-relaxed text-text-muted">
              Mi trabajo es conectarte con el abogado correcto para que no
              tengas que navegar este proceso solo. Sin costos iniciales y sin
              promesas vacías — solo el compromiso de trabajar con
              profesionales de confianza que realmente conocen este campo.
            </p>

            {/* Value badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {valores.map((valor) => (
                <span
                  key={valor}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/25 bg-gold/5 font-sans text-xs text-gold"
                >
                  <CheckCircle
                    size={13}
                    className="text-gold shrink-0"
                    strokeWidth={2}
                  />
                  {valor}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-bg font-sans text-sm font-semibold hover:bg-gold-light transition-colors duration-200 cursor-pointer"
              >
                Hablar con Carla
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
