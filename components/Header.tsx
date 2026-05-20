"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio",         href: "#inicio" },
  { label: "Cómo funciona",  href: "#como-funciona" },
  { label: "Sobre Carla",    href: "#sobre-carla" },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream shadow-sm"
          : "bg-cream/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#inicio"
          className="font-display text-xl text-brown hover:text-brown-mid transition-colors"
        >
          Carla Granda
        </a>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Menú principal">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-sm text-brown-mid hover:text-brown transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-5 py-2 rounded-full bg-brown-mid text-white font-sans text-sm font-medium hover:bg-brown transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-brown p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Menú mobile */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-gold/20 px-6 py-5 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-sm text-brown-mid hover:text-brown transition-colors"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-5 py-3 rounded-full bg-brown-mid text-white font-sans text-sm font-medium text-center hover:bg-brown transition-colors"
            onClick={closeMenu}
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
