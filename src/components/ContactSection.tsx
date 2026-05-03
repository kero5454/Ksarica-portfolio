"use client";

import Link from "next/link";
import { useTranslation } from "@/context/LanguageProvider";
import { ArrowRight } from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────────
 * Contact Section — matching reference screenshot style:
 * Large typography, accent-colored keyword, CTA buttons for email/LinkedIn/GitHub
 * ──────────────────────────────────────────────────────────────────────────── */

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 px-6 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-150 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, var(--accent-light) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.6,
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Section label */}
        <p
          className="text-[13px] font-mono font-medium tracking-[0.2em] uppercase mb-10 animate-fade-in"
          style={{ color: "var(--fg-tertiary)", animationDelay: "0.05s" }}
        >
          {t("contact.label")}
        </p>

        {/* Massive heading */}
        <h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[120px] font-extrabold leading-[0.95] tracking-[-0.04em] mb-8 animate-slide-up"
          style={{ color: "var(--fg-primary)", animationDelay: "0.15s" }}
        >
          {t("contact.heading1")}
          <br />
          <span style={{ color: "var(--accent)" }}>
            {t("contact.heading2")}
          </span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed animate-slide-up"
          style={{
            color: "var(--fg-secondary)",
            animationDelay: "0.25s",
          }}
        >
          {t("contact.desc")}
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 animate-slide-up"
          style={{ animationDelay: "0.35s" }}
        >
          {/* Email — primary */}
          <Link
            href="mailto:kerem.sarica@outlook.de"
            className="group flex items-center gap-2.5 px-7 py-3.5 text-[14px] font-semibold rounded-full border transition-all duration-200 hover:-translate-y-0.5"
            style={{
              borderColor: "var(--border-subtle)",
              color: "var(--fg-primary)",
              background: "var(--bg-surface)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 30px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {t("contact.email")}
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
              style={{ color: "var(--fg-tertiary)" }}
            />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://linkedin.com/in/kerem-sarica-905748338"
            target="_blank"
            className="px-7 py-3.5 text-[14px] font-semibold rounded-full border transition-all duration-200 hover:-translate-y-0.5"
            style={{
              borderColor: "var(--border-subtle)",
              color: "var(--fg-secondary)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--bg-surface)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-secondary)";
            }}
          >
            LinkedIn
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/kero5454"
            target="_blank"
            className="px-7 py-3.5 text-[14px] font-semibold rounded-full border transition-all duration-200 hover:-translate-y-0.5"
            style={{
              borderColor: "var(--border-subtle)",
              color: "var(--fg-secondary)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--bg-surface)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-secondary)";
            }}
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
