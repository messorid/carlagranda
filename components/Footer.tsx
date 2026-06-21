import { CORREO_CONTACTO, NUMERO_WHATSAPP } from "@/lib/config";

const secciones = [
  { label: "Inicio",             href: "#inicio" },
  { label: "Cómo funciona",      href: "#como-funciona" },
  { label: "Tipos de accidente", href: "#tipos-accidentes" },
  { label: "Sobre Carla",        href: "#sobre-carla" },
  { label: "Contacto",           href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-14">

          {/* Brand + contact */}
          <div>
            <p className="font-display text-2xl text-text mb-3">Carla Granda</p>
            <p className="font-sans text-xs leading-relaxed text-text-muted max-w-xs mb-7">
              Conectamos a personas que sufrieron accidentes con abogados
              especializados para que reciban la indemnización que merecen.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`https://wa.me/${NUMERO_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-gold hover:text-gold-light transition-colors duration-200"
              >
                +1 (689) 236-1508
              </a>
              <a
                href={`mailto:${CORREO_CONTACTO}`}
                className="font-sans text-xs text-gold hover:text-gold-light transition-colors duration-200"
              >
                {CORREO_CONTACTO}
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-5">
              Secciones
            </p>
            <nav className="flex flex-col gap-3" aria-label="Pie de página">
              {secciones.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="font-sans text-xs text-text-muted hover:text-text transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" aria-hidden="true" />

        {/* Legal disclaimer */}
        <p className="font-sans text-xs leading-relaxed text-text-muted/55 max-w-2xl mb-5">
          <span className="font-medium text-text-muted/70">Aviso legal:</span>{" "}
          Carla Granda no es un bufete de abogados ni ofrece asesoría legal.
          Este servicio conecta a las personas con abogados independientes.
          Los resultados varían según cada caso.
        </p>

        {/* Copyright */}
        <p className="font-sans text-xs text-text-muted/30">
          © {new Date().getFullYear()} Carla Granda. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}
