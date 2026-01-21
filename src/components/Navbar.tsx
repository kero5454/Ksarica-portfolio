"use client"; // Wichtig, da wir Interaktion (Klicks) haben

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons importieren

// Hier definieren wir die Menüpunkte zentral an einem Ort
const navItems = [
  { name: "Home", href: "/" },
  { name: "Projekte", href: "/#projects" }, // Anker-Link zur Startseite
  { name: "Lebenslauf", href: "/lebenslauf" },
  { name: "Kontakt", href: "mailto:kerem.sarica@outlook.de" }, // Vorschlag: Direkt Mail oder Kontakt-Sektion
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
              ksarica<span className="text-blue-600">.dev</span>
            </Link>
          </div>

          {/* DESKTOP MENU (Versteckt auf Mobile) */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            {/* Optional: Ein "Call to Action" Button */}
            <Link 
                href="/#projects"
                className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
            >
                Portfolio
            </Link>
          </div>

          {/* MOBILE MENU BUTTON (Hamburger) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {/* Wird nur angezeigt, wenn isOpen true ist */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)} // Menü schließen beim Klick
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}