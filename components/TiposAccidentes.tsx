import { Car, HardHat, AlertTriangle, Bike, User, Stethoscope } from "lucide-react";

const tipos = [
  { icono: Car,          label: "Accidentes de auto" },
  { icono: HardHat,      label: "Accidentes de trabajo" },
  { icono: AlertTriangle,label: "Resbalones y caídas" },
  { icono: Bike,         label: "Accidentes de motocicleta" },
  { icono: User,         label: "Accidentes de peatón" },
  { icono: Stethoscope,  label: "Negligencia médica" },
];

export default function TiposAccidentes() {
  return (
    <section id="tipos-accidentes" className="bg-cream py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-gold" />
            <div className="w-2 h-2 bg-gold rotate-45 shrink-0" aria-hidden="true" />
            <div className="h-px w-10 bg-gold" />
          </div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-brown-mid mb-4">
            ¿Qué tipo de accidente tuviste?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brown leading-tight">
            Cubrimos tu caso
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {tipos.map(({ icono: Icono, label }) => (
            <div
              key={label}
              className="bg-surface border border-gold/20 rounded-2xl p-6 flex flex-col items-center gap-3 text-center transition-all duration-200 hover:border-gold hover:shadow-sm cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center">
                <Icono size={22} className="text-gold" strokeWidth={1.5} />
              </div>
              <p className="font-display text-base text-brown leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
