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
  nombre?:       string;
  telefono?:     string;
  tipoAccidente?:string;
  descripcion?:  string;
}

export default function Contacto() {
  const [nombre,         setNombre]         = useState("");
  const [telefono,       setTelefono]       = useState("");
  const [tipoAccidente,  setTipoAccidente]  = useState("");
  const [descripcion,    setDescripcion]    = useState("");
  const [errores,        setErrores]        = useState<Errores>({});

  function validar(): boolean {
    const e: Errores = {};
    if (!nombre.trim())
      e.nombre = "Por favor ingresa tu nombre.";
    if (!telefono.trim() || !/^\+?[\d\s\-().]{7,}$/.test(telefono))
      e.telefono = "Ingresa un número de teléfono válido.";
    if (!tipoAccidente)
      e.tipoAccidente = "Selecciona el tipo de accidente.";
    if (!descripcion.trim())
      e.descripcion = "Cuéntanos brevemente qué pasó.";
    setErrores(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validar()) return;

    const msg =
      `Hola, me llamo ${nombre.trim()}. ` +
      `Mi número es ${telefono.trim()}. ` +
      `Tuve un accidente: ${tipoAccidente}.\n\n` +
      descripcion.trim();

    window.open(
      `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const base =
    "w-full rounded-xl border bg-card px-4 py-3 font-sans text-sm text-text placeholder:text-text-muted/40 outline-none transition-colors duration-150 focus:border-gold";

  return (
    <section id="contacto" className="bg-surface py-28 sm:py-40 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.22em] uppercase text-gold mb-5">
            Estamos listos para ayudarte
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-text leading-tight">
            Cuéntanos tu caso
          </h2>
          <p className="font-sans text-sm text-text-muted mt-5 leading-relaxed">
            Un paso sencillo puede cambiar el rumbo de tu situación.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/${NUMERO_WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] text-white font-sans text-sm font-semibold hover:bg-[#1fba5b] transition-colors duration-200 mb-10 cursor-pointer"
        >
          <MessageCircle size={20} strokeWidth={1.5} />
          Escríbeme por WhatsApp
        </a>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-border" />
          <span className="font-sans text-xs text-text-muted tracking-widest uppercase shrink-0">
            o completa el formulario
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Form card */}
        <div className="bg-card border border-border rounded-3xl p-8">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

            {/* Nombre */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nombre" className="font-sans text-xs font-medium text-text-muted uppercase tracking-wide">
                Nombre completo
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className={`${base} ${errores.nombre ? "border-red-500/60" : "border-border"}`}
              />
              {errores.nombre && (
                <p className="font-sans text-xs text-red-400">{errores.nombre}</p>
              )}
            </div>

            {/* Teléfono */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="telefono" className="font-sans text-xs font-medium text-text-muted uppercase tracking-wide">
                Teléfono
              </label>
              <input
                id="telefono"
                type="tel"
                placeholder="+1 (000) 000-0000"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className={`${base} ${errores.telefono ? "border-red-500/60" : "border-border"}`}
              />
              {errores.telefono && (
                <p className="font-sans text-xs text-red-400">{errores.telefono}</p>
              )}
            </div>

            {/* Tipo de accidente */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="tipo" className="font-sans text-xs font-medium text-text-muted uppercase tracking-wide">
                Tipo de accidente
              </label>
              <select
                id="tipo"
                value={tipoAccidente}
                onChange={(e) => setTipoAccidente(e.target.value)}
                className={`${base} ${errores.tipoAccidente ? "border-red-500/60" : "border-border"}`}
              >
                <option value="">Selecciona una opción</option>
                {TIPOS_ACCIDENTE.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              {errores.tipoAccidente && (
                <p className="font-sans text-xs text-red-400">{errores.tipoAccidente}</p>
              )}
            </div>

            {/* Descripción */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="descripcion" className="font-sans text-xs font-medium text-text-muted uppercase tracking-wide">
                Cuéntanos qué pasó
              </label>
              <textarea
                id="descripcion"
                rows={4}
                placeholder="Describe brevemente el accidente y cuándo ocurrió..."
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className={`${base} resize-none ${errores.descripcion ? "border-red-500/60" : "border-border"}`}
              />
              {errores.descripcion && (
                <p className="font-sans text-xs text-red-400">{errores.descripcion}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-4 rounded-full bg-gold text-bg font-sans text-sm font-semibold hover:bg-gold-light transition-colors duration-200 cursor-pointer"
            >
              Enviar por WhatsApp
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
