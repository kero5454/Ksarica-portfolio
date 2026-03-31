"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const ringText = "HALLO • MERHABA • HELLO • こんにちは • BONJOUR • HALLO • MERHABA • HELLO • こんにちは • BONJOUR • ";

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[90vh] px-6 max-w-6xl mx-auto gap-10 overflow-hidden">

      {/* --- Linke Seite: Text --- */}
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4 animate-fade-in">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-blue-700 font-medium">Open for Work</span>
        </div>

        <h2 className="text-xl text-blue-600 font-bold mb-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Software Engineer & Designer
        </h2>
        <h1
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 animate-slide-up leading-tight"
          style={{ animationDelay: "0.2s" }}
        >
          Hi, ich bin Kerem. <br />
          Ich baue{" "}
          <span className="text-blue-600 relative inline-block">
            moderne Web-Apps.
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none">
              <path d="M0 6 Q75 0 150 6 Q225 12 300 6" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" />
            </svg>
          </span>
        </h1>
        <p
          className="text-gray-500 text-lg mb-8 max-w-lg mx-auto md:mx-0 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          Ich entwickle nicht nur Code, sondern digitale Erlebnisse.
          Von Web & Mobile Apps bis zu intuitivem UI/UX Design.
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {["React", "Next.js", "TypeScript", "UI/UX"].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium cursor-default">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 justify-center md:justify-start animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <Link
            href="/#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Projekte ansehen
          </Link>
          <Link
            href="/lebenslauf"
            className="px-6 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Lebenslauf
          </Link>
        </div>
      </div>

      {/* --- Rechte Seite: Bild mit 3D-Pop-out & Orbit --- */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative flex justify-center items-center w-80 h-80 md:w-[420px] md:h-[420px]">

          {/* Rotierender SVG Text (Perfekt geschlossen durch textLength="1256") */}
          <div className="absolute inset-[-12px] animate-spin-slow pointer-events-none">
            <svg viewBox="0 0 424 424" className="w-full h-full">
              {/* Dezent gepunkteter Hintergrund-Kreis */}
              <circle cx="212" cy="212" r="200" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4 8" fill="none" opacity="0.2" />
              
              <defs>
                <path
                  id="orbitPath"
                  d="M 212,212 m -200,0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
                />
              </defs>
              <text className="text-[16px] font-bold" fill="#9ca3af" letterSpacing="4">
                {/* textLength="1256" zwingt den Text, genau den 360-Grad Umfang zu füllen! */}
                <textPath href="#orbitPath" startOffset="0%" textLength="1256" lengthAdjust="spacing">
                  {ringText}
                </textPath>
              </text>
            </svg>
          </div>

          {/* Blauer Hintergrund-Kreis */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-900/10 shadow-2xl shadow-blue-100 dark:shadow-none overflow-visible">

            {/* Innerer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/60 dark:from-white/10 to-transparent pointer-events-none" />

            {/* The Memoji — FIX: Perfekt an der Unterkante (bottom-0) zentriert */}
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

          {/* Floating Badge: Location */}
          <div className="absolute top-6 right-0 md:right-[-10px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 animate-float border border-gray-100 dark:border-gray-700 z-30">
            <span className="text-lg">🇩🇪</span>
            <div>
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 leading-none">Based in</p>
              <p className="text-xs text-gray-400 leading-none mt-0.5">Germany</p>
            </div>
          </div>

          {/* Floating Badge: Role */}
          <div className="absolute bottom-10 left-0 md:left-[-10px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 animate-float-delayed border border-gray-100 dark:border-gray-700 z-30">
            <span className="text-lg">🎓</span>
            <div>
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 leading-none">Mobile Media</p>
              <p className="text-xs text-gray-400 leading-none mt-0.5">B.Sc. Student</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}