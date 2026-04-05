"use client";

import Link from "next/link";
import Image from "next/image";

const RING_TEXT = "HALLO • MERHABA • HELLO • こんにちは • BONJOUR • HALLO • MERHABA • HELLO • こんにちは • BONJOUR • ";

const SKILL_TAGS = ["React", "Next.js", "TypeScript", "UI/UX"];

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-[90vh] px-6 max-w-6xl mx-auto gap-12 overflow-hidden">

      {/* ── Left: Text ───────────────────────────────────────────────────────── */}
      <div className="flex-1 text-center md:text-left">

        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 animate-fade-in border"
          style={{
            backgroundColor: "var(--accent-light, #eff3ff)",
            borderColor: "rgba(41, 82, 227, 0.15)",
          }}
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-[13px] font-semibold" style={{ color: "var(--accent)" }}>
            Open for Work
          </span>
        </div>

        {/* Sub-heading */}
        <p
          className="text-[15px] font-semibold mb-3 tracking-wide uppercase animate-slide-up"
          style={{ color: "var(--accent)", animationDelay: "0.05s", letterSpacing: "0.08em" }}
        >
          Software Engineer &amp; Designer
        </p>

        {/* Main heading */}
        <h1
          className="text-5xl md:text-[64px] font-extrabold leading-[1.08] tracking-[-0.03em] mb-6 animate-slide-up"
          style={{ color: "var(--fg-primary)", animationDelay: "0.15s" }}
        >
          Hi, ich bin<br />
          <span>Kerem.</span>
          <br />
          <span className="relative inline-block" style={{ color: "var(--accent)" }}>
            Ich baue.
            {/* Underline squiggle */}
            <svg
              className="absolute -bottom-1 left-0 w-full pointer-events-none"
              viewBox="0 0 280 8"
              fill="none"
            >
              <path
                d="M0 6 Q70 1 140 6 Q210 11 280 6"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.35"
              />
            </svg>
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-[17px] leading-relaxed mb-8 max-w-md mx-auto md:mx-0 animate-slide-up"
          style={{ color: "var(--fg-secondary)", animationDelay: "0.25s" }}
        >
          Ich entwickle nicht nur Code, sondern digitale Erlebnisse —
          von Web &amp; Mobile Apps bis zu intuitivem UI/UX Design.
        </p>

        {/* Skill tags */}
        <div
          className="flex flex-wrap gap-2 mb-9 justify-center md:justify-start animate-slide-up"
          style={{ animationDelay: "0.35s" }}
        >
          {SKILL_TAGS.map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1.5 text-[13px] font-semibold rounded-full border"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border-subtle)",
                color: "var(--fg-secondary)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex gap-3 justify-center md:justify-start animate-slide-up"
          style={{ animationDelay: "0.45s" }}
        >
          <Link
            href="/#projects"
            className="px-6 py-3 text-[14px] font-semibold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: "var(--accent)",
              boxShadow: "0 4px 20px rgba(41, 82, 227, 0.28)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(41, 82, 227, 0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(41, 82, 227, 0.28)";
            }}
          >
            Projekte ansehen
          </Link>
          <Link
            href="/lebenslauf"
            className="px-6 py-3 text-[14px] font-semibold rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
            style={{
              borderColor: "var(--border-subtle)",
              color: "var(--fg-primary)",
              background: "transparent",
            }}
          >
            Lebenslauf
          </Link>
        </div>
      </div>

      {/* ── Right: Avatar ────────────────────────────────────────────────────── */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative flex justify-center items-center w-80 h-80 md:w-[420px] md:h-[420px]">

          {/* Rotating ring text */}
          <div className="absolute inset-[-12px] animate-spin-slow pointer-events-none">
            <svg viewBox="0 0 424 424" className="w-full h-full">
              <circle
                cx="212" cy="212" r="200"
                stroke="#9ca3af"
                strokeWidth="1.5"
                strokeDasharray="4 8"
                fill="none"
                opacity="0.18"
              />
              <defs>
                <path
                  id="orbitPath"
                  d="M 212,212 m -200,0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
                />
              </defs>
              <text fill="#b0b0b0" letterSpacing="4" fontSize="13" fontWeight="600">
                <textPath href="#orbitPath" startOffset="0%" textLength="1256" lengthAdjust="spacing">
                  {RING_TEXT}
                </textPath>
              </text>
            </svg>
          </div>

          {/* Glow blob behind avatar */}
          <div
            className="absolute inset-8 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(41,82,227,0.13) 0%, transparent 70%)",
              filter: "blur(24px)",
            }}
          />

          {/* Avatar circle */}
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-visible"
            style={{
              background: "linear-gradient(135deg, #e8eeff 0%, #dce5ff 100%)",
              boxShadow: "0 20px 60px rgba(41, 82, 227, 0.15), 0 4px 16px rgba(0,0,0,0.06)",
            }}
          >
            {/* Inner highlight */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, transparent 60%)",
              }}
            />

            {/* Memoji */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[115%] h-[115%] z-20 pointer-events-none">
              <Image
                src="/Memoji_Kerem_rm_bg.png"
                alt="Kerem Sarica"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Badge: Location */}
          <div
            className="absolute top-6 right-0 md:right-[-10px] rounded-2xl px-3 py-2 flex items-center gap-2.5 animate-float z-30 border"
            style={{
              background: "var(--bg-surface)",
              borderColor: "var(--border-subtle)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <span className="text-lg">🇩🇪</span>
            <div>
              <p className="text-[11px] font-bold text-gray-800 leading-none">Based in</p>
              <p className="text-[11px] text-gray-400 leading-none mt-0.5">Germany</p>
            </div>
          </div>

          {/* Badge: Role */}
          <div
            className="absolute bottom-10 left-0 md:left-[-10px] rounded-2xl px-3 py-2 flex items-center gap-2.5 animate-float-delayed z-30 border"
            style={{
              background: "var(--bg-surface)",
              borderColor: "var(--border-subtle)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <span className="text-lg">🎓</span>
            <div>
              <p className="text-[11px] font-bold text-gray-800 leading-none">Mobile Media</p>
              <p className="text-[11px] text-gray-400 leading-none mt-0.5">B.Sc. Student</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}