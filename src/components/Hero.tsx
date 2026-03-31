import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  // Der Text, der im Kreis rotieren soll (Hallo in DE, TR, EN, JP, FR)
  // Wir wiederholen ihn ein paar Mal, damit der Kreis voll wird.
  const ringText = "HALLO • MERHABA • HELLO • こんにちは • BONJOUR • HALLO • MERHABA • HELLO • こんにちは • BONJOUR • ";

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[90vh] px-6 max-w-6xl mx-auto gap-10">
      
      {/* --- Linke Seite: Text --- */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-xl text-blue-600 font-bold mb-2">
          Software Engineer & Designer
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
          Hi, ich bin Kerem. <br />
          Ich baue <span className="text-blue-600">moderne Web-Apps.</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
          Ich entwickle nicht nur Code, sondern digitale Erlebnisse.
          Von Web & Mobile Apps bis zu intuitivem UI/UX Design.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <Link
            href="/#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Projekte ansehen
          </Link>
          <Link
            href="/lebenslauf"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            Lebenslauf
          </Link>
        </div>
      </div>

      {/* --- Rechte Seite: Profilbild mit 3D Pop-out, Badges & SVG Rotation --- */}
      <div className="flex-1 relative flex justify-center items-center h-[400px] md:h-[500px]">
        
        {/* 1. Der rotierende Text-Ring (Clean Code Lösung via SVG) */}
        <div className="absolute inset-0 flex items-center justify-center animate-spin-slow pointer-events-none z-0">
          <svg viewBox="0 0 500 500" className="w-[380px] h-[380px] md:w-[480px] md:h-[480px] text-gray-300 dark:text-gray-700">
            <path 
              id="text-path" 
              d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0" 
              fill="none" 
            />
            <text className="text-[19px] md:text-[21px] font-bold uppercase tracking-widest" fill="currentColor">
              <textPath href="#text-path" startOffset="0%">
                {ringText}
              </textPath>
            </text>
          </svg>
        </div>

        {/* 2. Der Hauptkreis (Blauer Hintergrund) */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-50 dark:bg-[#0f1623] border border-blue-100 dark:border-blue-900/50 shadow-xl flex items-center justify-center z-10">
          
          {/* 3. Das Memoji */}
          {/* FIX: Streng mittig positioniert (left-1/2 -translate-x-1/2) und object-bottom, damit nichts schief ist */}
          <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-[110%] h-[110%] z-20 pointer-events-none">
            <Image
              src="/Memoji_Kerem_rm_bg.png"
              alt="Kerem Sarica"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* 4. Badge: Based in Germany (Oben Rechts) */}
        <div className="absolute top-10 right-4 md:top-16 md:-right-4 bg-white dark:bg-gray-800 rounded-full p-1.5 pr-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 z-30 border border-gray-100 dark:border-gray-700 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="bg-blue-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
            DE
          </div>
          <div className="text-xs font-bold text-gray-800 dark:text-gray-200 leading-tight text-left">
            Based in<br/>Germany
          </div>
        </div>

        {/* 5. Badge: Mobile Media (Unten Links) */}
        <div className="absolute bottom-16 left-0 md:bottom-20 md:-left-8 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-5 py-2.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-30 transform -rotate-3 hover:rotate-0 transition-transform duration-300 cursor-default">
          <span className="text-sm font-extrabold tracking-wide">Mobile Media B.Sc.</span>
        </div>

      </div>
    </section>
  );
}