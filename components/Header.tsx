"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio",             href: "#inicio" },
  { label: "Cómo funciona",      href: "#como-funciona" },
  { label: "Tipos de accidente", href: "#tipos-accidentes" },
  { label: "Sobre Carla",        href: "#sobre-carla" },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#inicio"
          className="font-display text-lg text-text hover:text-gold transition-colors duration-200"
        >
          Carla Granda
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Menú principal">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-xs tracking-wide text-text-muted hover:text-text transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-5 py-2 rounded-full bg-gold text-bg font-sans text-xs font-semibold hover:bg-gold-light transition-colors duration-200 cursor-pointer"
          >
            Contacto
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-text p-1 cursor-pointer"
          onClick={() => setMenuOpen((p) => !p)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen
            ? <X    size={22} strokeWidth={1.5} />
            : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-surface/98 backdrop-blur-lg border-t border-border px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-sm text-text-muted hover:text-text transition-colors duration-200"
              onClick={close}
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-1 px-5 py-3 rounded-full bg-gold text-bg font-sans text-sm font-semibold text-center hover:bg-gold-light transition-colors duration-200 cursor-pointer"
            onClick={close}
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
