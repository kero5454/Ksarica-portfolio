"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Mail, Github, Linkedin, ChevronDown, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";
import { useTranslation } from "@/context/LanguageProvider";
import type { Lang } from "@/context/LanguageProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useTranslation();

  const navItems = [
    { key: "nav.home"      as const, href: "/"          },
    { key: "nav.career"    as const, href: "/#Werdegang" },
    { key: "nav.portfolio" as const, href: "/#projects"  },
    { key: "nav.resume"    as const, href: "/lebenslauf" },
  ];

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Hash tracker */
  useEffect(() => {
    const sync = () => setActiveHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  /* Scroll to top on real page change */
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /**
   * Smart nav click:
   *  – Same page + hash  → scrollIntoView (no router trip, no "rendering")
   *  – Same page + /     → scroll to top   (no router trip)
   *  – Different page    → navigate normally
   */
  const handleNavClick = useCallback(
    (e: React.MouseEvent, href: string) => {
      const hashIdx = href.indexOf("#");
      const hash    = hashIdx >= 0 ? href.slice(hashIdx + 1) : null;
      const path    = hashIdx >= 0 ? (href.slice(0, hashIdx) || "/") : href;

      setIsOpen(false);

      if (pathname === path) {
        e.preventDefault();
        if (hash) {
          setActiveHash(`#${hash}`);
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        } else {
          setActiveHash("");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        /* Navigating to a different page → let router handle it */
        if (hash) setActiveHash(`#${hash}`);
        else setActiveHash("");
        router.push(href);
        e.preventDefault(); // we pushed manually
      }
    },
    [pathname, router]
  );

  const checkIsActive = (href: string) => {
    const [path, hash] = href.split("#");
    const fHash = hash ? `#${hash}` : "";
    if (fHash) return pathname === (path || "/") && activeHash === fHash;
    if (href === "/") return pathname === "/" && !activeHash;
    return pathname === href;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 pointer-events-none">
      <nav
        className={`navbar-glass pointer-events-auto max-w-5xl mx-auto transition-all duration-300 ${scrolled ? "scrolled" : ""}`}
      >
        <div className="px-5 sm:px-6">
          <div className="flex justify-between items-center h-13">

            {/* ── Logo ── */}
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="text-[17px] font-bold tracking-tight hover:opacity-75 transition-opacity z-10"
              style={{ color: "var(--fg-primary)" }}
            >
              ksarica<span style={{ color: "var(--accent)" }}>.dev</span>
            </Link>

            {/* ── Desktop links ── */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = checkIsActive(item.href);
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative text-[13.5px] px-4 py-2 transition-colors duration-200 ${
                      isActive ? "font-semibold" : "font-medium hover:opacity-80"
                    }`}
                    style={{ color: isActive ? "var(--fg-primary)" : "var(--fg-secondary)" }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        initial={false}
                        className="absolute inset-0 rounded-lg"
                        style={{ background: "var(--accent-light)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{t(item.key)}</span>
                  </Link>
                );
              })}

              {/* ── Contact Dropdown ── */}
              <div className="relative ml-3" ref={dropdownRef}>
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="flex items-center gap-1.5 text-[13px] font-semibold pl-4 pr-3 py-2 rounded-xl transition-all duration-200"
                  style={{
                    background: "var(--accent)",
                    color: theme === "dark" ? "#0b0f1a" : "#ffffff",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}
                >
                  {t("nav.contact")}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isContactOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isContactOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute right-0 mt-2 w-48 rounded-xl p-1.5 flex flex-col z-50"
                      style={{
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border-subtle)",
                        boxShadow: "0 10px 40px -10px rgba(0,0,0,0.2)",
                      }}
                    >
                      {[
                        { href: "mailto:kerem.sarica@outlook.de", icon: <Mail size={16} style={{ color: "var(--fg-tertiary)" }} />, label: t("nav.email") },
                        { href: "https://linkedin.com/in/kerem-sarica-905748338", icon: <Linkedin size={16} style={{ color: "var(--fg-tertiary)" }} />, label: t("nav.linkedin"), external: true },
                        { href: "https://github.com/kero5454", icon: <Github size={16} style={{ color: "var(--fg-tertiary)" }} />, label: t("nav.github"), external: true },
                      ].map(({ href, icon, label, external }) => (
                        <Link
                          key={href}
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          onClick={() => setIsContactOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 text-[13.5px] font-medium rounded-lg transition-colors"
                          style={{ color: "var(--fg-secondary)" }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "var(--fg-primary)";
                            (e.currentTarget as HTMLElement).style.background = "var(--accent-light)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "var(--fg-secondary)";
                            (e.currentTarget as HTMLElement).style.background = "transparent";
                          }}
                        >
                          {icon}{label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Separator ── */}
              <div className="w-px h-5 mx-2" style={{ background: "var(--border-subtle)" }} />

              {/* ── Language Toggle ── */}
              <div
                className="relative flex items-center rounded-full p-0.5"
                style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)" }}
              >
                {(["DE", "EN"] as const).map((l) => {
                  const lLower = l.toLowerCase() as Lang;
                  const isActive = lang === lLower;
                  return (
                    <button
                      key={l}
                      onClick={() => setLang(lLower)}
                      className="relative text-[11px] font-bold px-2.5 py-1 rounded-full transition-all duration-200 z-10"
                      style={{ color: isActive ? (theme === "dark" ? "#0b0f1a" : "#ffffff") : "var(--fg-tertiary)" }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="lang-pill"
                          className="absolute inset-0 rounded-full"
                          style={{ background: "var(--accent)" }}
                          transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">{l}</span>
                    </button>
                  );
                })}
              </div>

              {/* ── Dark Mode Toggle ── */}
              <button
                onClick={toggleTheme}
                className="ml-1 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
                style={{ color: "var(--fg-secondary)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent-light)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>

            {/* ── Mobile right ── */}
            <div className="flex md:hidden items-center gap-2">
              <div
                className="relative flex items-center rounded-full p-0.5"
                style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)" }}
              >
                {(["DE", "EN"] as const).map((l) => {
                  const lLower = l.toLowerCase() as Lang;
                  const isActive = lang === lLower;
                  return (
                    <button
                      key={l}
                      onClick={() => setLang(lLower)}
                      className="relative text-[10px] font-bold px-2 py-0.5 rounded-full transition-all duration-200 z-10"
                      style={{ color: isActive ? (theme === "dark" ? "#0b0f1a" : "#ffffff") : "var(--fg-tertiary)" }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="lang-pill-mobile"
                          className="absolute inset-0 rounded-full"
                          style={{ background: "var(--accent)" }}
                          transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">{l}</span>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={toggleTheme}
                className="w-8 h-8 flex items-center justify-center rounded-full"
                style={{ color: "var(--fg-secondary)" }}
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="p-2 rounded-lg transition-colors"
                style={{ color: "var(--fg-secondary)" }}
                aria-label="Menü"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile dropdown ── */}
        {isOpen && (
          <div
            className="md:hidden backdrop-blur-xl"
            style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--glass-bg-scrolled)" }}
          >
            <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = checkIsActive(item.href);
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[15px] px-3 py-3 rounded-lg transition-colors"
                    style={{
                      color: isActive ? "var(--fg-primary)" : "var(--fg-secondary)",
                      fontWeight: isActive ? 600 : 500,
                      background: isActive ? "var(--accent-light)" : "transparent",
                    }}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}

              <div className="mt-3 pt-3" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <p className="px-3 mb-1 text-[11px] font-bold uppercase tracking-wider" style={{ color: "var(--fg-tertiary)" }}>
                  {t("nav.contact")}
                </p>
                <div className="flex flex-col gap-1">
                  {[
                    { href: "mailto:kerem.sarica@outlook.de", icon: <Mail size={18} style={{ color: "var(--fg-tertiary)" }} />, label: t("nav.email") },
                    { href: "https://linkedin.com/in/kerem-sarica-905748338", icon: <Linkedin size={18} style={{ color: "var(--fg-tertiary)" }} />, label: t("nav.linkedin"), external: true },
                    { href: "https://github.com/kero5454", icon: <Github size={18} style={{ color: "var(--fg-tertiary)" }} />, label: t("nav.github"), external: true },
                  ].map(({ href, icon, label, external }) => (
                    <Link
                      key={href}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 text-[15px] font-medium rounded-lg transition-colors"
                      style={{ color: "var(--fg-secondary)" }}
                    >
                      {icon}{label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
