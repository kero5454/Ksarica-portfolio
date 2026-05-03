"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageProvider";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("de-DE", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Europe/Berlin",
        }) + " CET"
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="mt-auto py-8 px-6"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-base)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[12px]" style={{ fontFamily: "var(--font-geist-mono, monospace)" }}>
          {/* Left */}
          <div className="text-center md:text-left" style={{ color: "var(--fg-tertiary)" }}>
            <p>&copy; {currentYear} Kerem Sarica</p>
            <div className="flex gap-4 justify-center md:justify-start mt-1">
              <Link href="/impressum" className="hover:underline" style={{ color: "var(--fg-tertiary)" }}>{t("footer.impressum")}</Link>
              <Link href="/datenschutz" className="hover:underline" style={{ color: "var(--fg-tertiary)" }}>{t("footer.datenschutz")}</Link>
            </div>
          </div>

          {/* Center */}
          <div className="text-center" style={{ color: "var(--fg-tertiary)" }}>
            <div className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {t("footer.location")} · 48.78°N 9.18°E
            </div>
          </div>

          {/* Right */}
          <div className="text-center md:text-right" style={{ color: "var(--fg-tertiary)" }}>
            <p>{time}</p>
            <p className="mt-1">{t("footer.built")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}