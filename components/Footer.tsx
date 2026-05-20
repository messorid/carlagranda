import { CORREO_CONTACTO, NUMERO_WHATSAPP } from "@/lib/config";

const secciones = [
  { label: "Inicio",        href: "#inicio" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Sobre Carla",   href: "#sobre-carla" },
  { label: "Contacto",      href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-brown py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Contenido principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">

          {/* Columna izquierda: descripción + contacto */}
          <div>
            <p className="font-display text-2xl text-cream mb-4">Carla Granda</p>
            <p className="font-sans text-sm text-cream/60 leading-relaxed max-w-xs mb-6">
              Conectamos a personas que sufrieron accidentes con abogados
              especializados para que reciban la indemnización que merecen.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`https://wa.me/${NUMERO_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-gold hover:text-gold-light transition-colors"
              >
                +1 (689) 236-1508
              </a>
              <a
                href={`mailto:${CORREO_CONTACTO}`}
                className="font-sans text-sm text-gold hover:text-gold-light transition-colors"
              >
                {CORREO_CONTACTO}
              </a>
            </div>
          </div>

          {/* Columna derecha: enlaces */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-5">
              Secciones
            </p>
            <nav className="flex flex-col gap-3" aria-label="Pie de página">
              {secciones.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Separador */}
        <div className="h-px bg-gold/20 mb-8" aria-hidden="true" />

        {/* Aviso legal */}
        <p className="font-sans text-xs leading-relaxed text-cream/50 max-w-2xl mb-6">
          <span className="font-medium text-cream/60">Aviso legal:</span>{" "}
          Carla Granda no es un bufete de abogados ni ofrece asesoría legal.
          Este servicio conecta a las personas con abogados independientes.
          Los resultados varían según cada caso.{" "}
          <em>Revisar este texto con un abogado antes de publicar.</em>
        </p>

        {/* Copyright */}
        <p className="font-sans text-xs text-cream/30">
          © {new Date().getFullYear()} Carla Granda. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}
