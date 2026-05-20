"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { NUMERO_WHATSAPP } from "@/lib/config";

const TIPOS_ACCIDENTE = [
  "Accidente de auto",
  "Accidente de trabajo",
  "Resbalón y caída",
  "Accidente de motocicleta",
  "Accidente de peatón",
  "Negligencia médica",
  "Otro",
];

interface Errores {
  nombre?: string;
  telefono?: string;
  tipoAccidente?: string;
  descripcion?: string;
}

export default function Contacto() {
  const [nombre,        setNombre]        = useState("");
  const [telefono,      setTelefono]      = useState("");
  const [tipoAccidente, setTipoAccidente] = useState("");
  const [descripcion,   setDescripcion]   = useState("");
  const [errores,       setErrores]       = useState<Errores>({});

  function validar(): boolean {
    const nuevosErrores: Errores = {};

    if (!nombre.trim())
      nuevosErrores.nombre = "Por favor ingresa tu nombre.";

    if (!telefono.trim() || !/^\+?[\d\s\-().]{7,}$/.test(telefono))
      nuevosErrores.telefono = "Ingresa un número de teléfono válido.";

    if (!tipoAccidente)
      nuevosErrores.tipoAccidente = "Selecciona el tipo de accidente.";

    if (!descripcion.trim())
      nuevosErrores.descripcion = "Cuéntanos brevemente qué pasó.";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validar()) return;

    const mensaje =
      `Hola, me llamo ${nombre.trim()}. ` +
      `Mi número es ${telefono.trim()}. ` +
      `Tuve un accidente: ${tipoAccidente}.\n\n` +
      `${descripcion.trim()}`;

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputBase =
    "w-full rounded-xl border px-4 py-3 font-sans text-sm text-brown bg-cream placeholder:text-text-muted/60 outline-none transition-colors focus:border-gold";

  return (
    <section id="contacto" className="bg-cream py-24 sm:py-32 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-gold" />
            <div className="w-2 h-2 bg-gold rotate-45 shrink-0" aria-hidden="true" />
            <div className="h-px w-10 bg-gold" />
          </div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-brown-mid mb-4">
            Estamos listos para ayudarte
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brown leading-tight">
            Cuéntanos tu caso
          </h2>
        </div>

        {/* Botón principal de WhatsApp — camino preferido */}
        <a
          href={`https://wa.me/${NUMERO_WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-brown-mid text-white font-sans text-base font-medium hover:bg-brown transition-colors mb-10"
        >
          <MessageCircle size={20} strokeWidth={1.5} />
          Escríbeme por WhatsApp
        </a>

        {/* Separador */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gold/25" />
          <span className="font-sans text-xs text-text-muted tracking-widest uppercase">
            o completa el formulario
          </span>
          <div className="flex-1 h-px bg-gold/25" />
        </div>

        {/* Formulario */}
        <div className="bg-surface border border-gold/25 rounded-2xl p-8">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

            {/* Nombre */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nombre" className="font-sans text-sm font-medium text-brown">
                Nombre completo
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className={`${inputBase} ${errores.nombre ? "border-red-400" : "border-gold/30"}`}
              />
              {errores.nombre && (
                <p className="font-sans text-xs text-red-500">{errores.nombre}</p>
              )}
            </div>

            {/* Teléfono */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="telefono" className="font-sans text-sm font-medium text-brown">
                Teléfono
              </label>
              <input
                id="telefono"
                type="tel"
                placeholder="+1 (000) 000-0000"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className={`${inputBase} ${errores.telefono ? "border-red-400" : "border-gold/30"}`}
              />
              {errores.telefono && (
                <p className="font-sans text-xs text-red-500">{errores.telefono}</p>
              )}
            </div>

            {/* Tipo de accidente */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="tipo" className="font-sans text-sm font-medium text-brown">
                Tipo de accidente
              </label>
              <select
                id="tipo"
                value={tipoAccidente}
                onChange={(e) => setTipoAccidente(e.target.value)}
                className={`${inputBase} ${errores.tipoAccidente ? "border-red-400" : "border-gold/30"}`}
              >
                <option value="">Selecciona una opción</option>
                {TIPOS_ACCIDENTE.map((tipo) => (
                  <option key={tipo} value={tipo}>{tipo}</option>
                ))}
              </select>
              {errores.tipoAccidente && (
                <p className="font-sans text-xs text-red-500">{errores.tipoAccidente}</p>
              )}
            </div>

            {/* Descripción */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="descripcion" className="font-sans text-sm font-medium text-brown">
                Cuéntanos qué pasó
              </label>
              <textarea
                id="descripcion"
                rows={4}
                placeholder="Describe brevemente el accidente y cuándo ocurrió..."
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className={`${inputBase} resize-none ${errores.descripcion ? "border-red-400" : "border-gold/30"}`}
              />
              {errores.descripcion && (
                <p className="font-sans text-xs text-red-500">{errores.descripcion}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-4 rounded-full bg-brown-mid text-white font-sans text-base font-medium hover:bg-brown transition-colors"
            >
              Enviar por WhatsApp
            </button>

            <p className="font-sans text-xs text-center text-text-muted">
              Sin compromiso · Confidencial · Sin costo inicial
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}
