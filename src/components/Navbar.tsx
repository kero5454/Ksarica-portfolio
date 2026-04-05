"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home",       href: "/" },
  { name: "Werdegang",  href: "/#Werdegang" },
  { name: "Portfolio",  href: "/#projects" },
  { name: "Lebenslauf", href: "/lebenslauf" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll-Listener für Navbar-Hintergrund
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hash-Listener für Active State
  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    handleHashChange(); // Initiale Ausführung
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  // FIX: Next.js Scroll-Restoration Fix
  // Zwingt die Seite nach ganz oben, wenn wir auf eine neue Route (ohne #) wechseln
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  // Click-Outside Listener für das Kontakt-Dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const checkIsActive = (href: string) => {
    const [path, hash] = href.split("#");
    const formattedHash = hash ? `#${hash}` : "";

    if (formattedHash) {
      return pathname === path && activeHash === formattedHash;
    }
    if (href === "/") {
      return pathname === "/" && !activeHash;
    }
    return pathname === href;
  };

  return (
    <nav className={`navbar-glass fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm" : ""}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-[62px]">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setActiveHash("")}
            className="text-[17px] font-bold tracking-tight text-gray-900 hover:opacity-75 transition-opacity z-10"
          >
            ksarica<span style={{ color: "var(--accent, #3b82f6)" }}>.dev</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = checkIsActive(item.href);
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    if (item.href.includes("#")) {
                      setActiveHash(`#${item.href.split("#")[1]}`);
                    } else {
                      setActiveHash("");
                    }
                  }}
                  className={`relative text-[13.5px] px-4 py-2 transition-colors duration-200 ${
                    isActive ? "text-gray-900 font-semibold" : "text-gray-500 font-medium hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      initial={false} // FIX: Verhindert, dass die Animation von 0,0 (oben links) einfliegt
                      className="absolute inset-0 bg-black/[0.04] rounded-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}

            {/* Kontakt Dropdown (Desktop) */}
            <div className="relative ml-3" ref={dropdownRef}>
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="flex items-center gap-1.5 bg-gray-900 text-white text-[13px] font-semibold pl-4 pr-3 py-2 rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200"
              >
                Kontakt
                <ChevronDown size={14} className={`transition-transform duration-200 ${isContactOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isContactOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded-xl p-1.5 flex flex-col z-50"
                  >
                    <Link 
                      href="mailto:kerem.sarica@outlook.de"
                      onClick={() => setIsContactOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 text-[13.5px] font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Mail size={16} className="text-gray-400" /> E-Mail senden
                    </Link>
                    <Link 
                      href="https://linkedin.com/in/DEIN_LINKEDIN" 
                      target="_blank"
                      onClick={() => setIsContactOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 text-[13.5px] font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Linkedin size={16} className="text-gray-400" /> LinkedIn
                    </Link>
                    <Link 
                      href="https://github.com/DEIN_GITHUB" 
                      target="_blank"
                      onClick={() => setIsContactOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 text-[13.5px] font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Github size={16} className="text-gray-400" /> GitHub
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden text-gray-500 hover:text-gray-900 p-2 rounded-lg hover:bg-black/[0.04] transition-colors"
            aria-label="Menü"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-black/[0.06] bg-[#f7f7f5]/95 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = checkIsActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setIsOpen(false);
                    if (item.href.includes("#")) {
                      setActiveHash(`#${item.href.split("#")[1]}`);
                    } else {
                      setActiveHash("");
                    }
                  }}
                  className={`text-[15px] px-3 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "text-gray-900 font-semibold bg-black/[0.04]" 
                      : "text-gray-600 font-medium hover:text-gray-900 hover:bg-black/[0.04]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Contact Section */}
            <div className="mt-3 pt-3 border-t border-black/[0.06]">
              <p className="px-3 mb-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">Kontakt</p>
              <div className="flex flex-col gap-1">
                <Link 
                  href="mailto:kerem.sarica@outlook.de"
                  className="flex items-center gap-3 px-3 py-3 text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-black/[0.04] rounded-lg transition-colors"
                >
                  <Mail size={18} className="text-gray-400" /> E-Mail senden
                </Link>
                <Link 
                  href="https://linkedin.com/in/DEIN_LINKEDIN" 
                  target="_blank"
                  className="flex items-center gap-3 px-3 py-3 text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-black/[0.04] rounded-lg transition-colors"
                >
                  <Linkedin size={18} className="text-gray-400" /> LinkedIn
                </Link>
                <Link 
                  href="https://github.com/DEIN_GITHUB" 
                  target="_blank"
                  className="flex items-center gap-3 px-3 py-3 text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-black/[0.04] rounded-lg transition-colors"
                >
                  <Github size={18} className="text-gray-400" /> GitHub
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}