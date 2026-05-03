"use client";

import { useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/context/LanguageProvider";
import CodeTerminal from "@/components/CodeTerminal";

export default function Hero() {
  const { t } = useTranslation();

  const heroRef      = useRef<HTMLElement>(null);
  const termWrapRef  = useRef<HTMLDivElement>(null);
  /* true when parallax should be skipped (touch / reduced-motion) */
  const noParallax   = useRef(false);

  useEffect(() => {
    noParallax.current =
      matchMedia("(pointer: coarse)").matches ||
      matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (noParallax.current || !heroRef.current || !termWrapRef.current) return;
    const r  = heroRef.current.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width  - 0.5; // –0.5 … 0.5
    const cy = (e.clientY - r.top)  / r.height - 0.5;
    termWrapRef.current.style.transform =
      `translate3d(${cx * 12}px, ${cy * 12}px, 0) ` +
      `rotateY(${cx * 2}deg) rotateX(${-cy * 2}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (termWrapRef.current) termWrapRef.current.style.transform = "";
  }, []);

  const handleProjectsClick = useCallback((e: React.MouseEvent) => {
    const el = document.getElementById("projects");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.addEventListener("mousemove",  handleMouseMove,  { passive: true });
    hero.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      hero.removeEventListener("mousemove",  handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    /* -mt-[70px] pulls the section behind the fixed nav so the
       grid covers the full viewport from top to bottom           */
    <section
      ref={heroRef}
      className="hero -mt-17.5"
      style={{ perspective: "1200px" }}
    >
      <div className="hero__inner max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16">

        {/* ── Left: Text ──────────────────────────────────────────────────── */}
        <div className="flex-1 text-center lg:text-left">

          {/* Badge row */}
          <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8 animate-fade-in">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border"
              style={{
                backgroundColor: "var(--bg-elevated)",
                borderColor:     "var(--border-subtle)",
              }}
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span
                className="text-[12px] font-mono font-medium tracking-wide"
                style={{ color: "var(--fg-secondary)" }}
              >
                {t("hero.badge")}
              </span>
            </div>

            <span
              className="text-[12px] font-mono font-semibold tracking-[0.12em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              {t("hero.subtitle")}
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[130px] font-black leading-[0.92] tracking-[-0.04em] mb-8 animate-slide-up"
            style={{ color: "var(--fg-primary)", animationDelay: "0.1s" }}
          >
            Kerem<br />Sarica<span style={{ color: "var(--accent)" }}>.</span>
          </h1>

          {/* Description */}
          <p
            className="text-[17px] md:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 animate-slide-up"
            style={{ color: "var(--fg-secondary)", animationDelay: "0.2s" }}
          >
            {t("hero.desc")}
          </p>

          {/* CTAs */}
          <div
            className="cta-group flex flex-wrap gap-3 justify-center lg:justify-start animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/#projects" className="btn btn--primary group" onClick={handleProjectsClick}>
              {t("hero.cta.projects")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/lebenslauf" className="btn btn--ghost">
              {t("hero.cta.resume")}
            </Link>
          </div>
        </div>

        {/* ── Right: Terminal + parallax wrapper ──────────────────────────── */}
        <div
          className="flex-1 flex justify-center items-center animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          {/*
            Parallax wrapper: transform is set directly by the mousemove
            handler (no re-render). CSS transition smooths each update.
            Nested inside the slide-up wrapper to keep transforms separate.
          */}
          <div
            ref={termWrapRef}
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              willChange: "transform",
            }}
          >
            <CodeTerminal />
          </div>
        </div>

      </div>
    </section>
  );
}
