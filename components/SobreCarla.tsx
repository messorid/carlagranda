import Image from "next/image";
import { CheckCircle } from "lucide-react";

const valores = [
  "Atención personalizada",
  "Sin costo inicial",
  "Abogados con experiencia",
  "Proceso simple y claro",
];

export default function SobreCarla() {
  return (
    <section id="sobre-carla" className="bg-surface py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Foto con detalle dorado */}
          <div className="relative max-w-sm mx-auto lg:mx-0 w-full">
            {/* Cuadro dorado decorativo: desplazado con translate para no alterar el layout */}
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 border border-gold/50 rounded-2xl"
              aria-hidden="true"
            />
            <Image
              src="/images/carlaperfil.png"
              alt="Carla Granda"
              width={480}
              height={580}
              className="relative z-10 w-full rounded-2xl object-cover object-top"
              priority
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-7">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-gold" />
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-brown-mid">
                  Sobre Carla
                </p>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brown leading-tight mb-5">
                Alguien que te
                <br />
                <em>acompaña de verdad.</em>
              </h2>
              <p className="font-sans text-base leading-relaxed text-text-muted">
                Sé lo que se siente quedar desorientado después de un accidente
                — el estrés, las dudas, no saber por dónde empezar. Por eso
                acompaño a cada persona de manera individual, porque detrás de
                cada caso hay una historia real que merece atención y justicia.
              </p>
            </div>

            <p className="font-sans text-base leading-relaxed text-text-muted">
              Mi trabajo es conectarte con el abogado correcto para que no
              tengas que navegar este proceso solo. Sin costos iniciales para
              ti y sin promesas vacías — solo el compromiso de trabajar con
              profesionales de confianza que realmente conocen este campo.
            </p>

            {/* Badges de valores */}
            <div className="flex flex-wrap gap-3 pt-2">
              {valores.map((valor) => (
                <span
                  key={valor}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-cream font-sans text-sm text-brown-mid"
                >
                  <CheckCircle size={14} className="text-gold shrink-0" strokeWidth={2} />
                  {valor}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
