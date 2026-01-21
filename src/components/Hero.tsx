// src/components/Hero.tsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[90vh] px-6 max-w-6xl mx-auto gap-10">
      {/* Linke Seite: Text */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-xl text-blue-600 font-bold mb-2">Frontend Developer</h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Hi, ich bin Kerem. <br />
          Ich baue <span className="text-blue-600">moderne Web-Apps.</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
          Spezialisiert auf React, TypeScript und nutzerfreundliches UI-Design.
          Lass uns gemeinsam digitale Produkte erschaffen.
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
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
          >
            Lebenslauf
          </Link>
        </div>
      </div>

      {/* Rechte Seite: Bild */}
      <div className="flex-1 relative flex justify-center">
        {/* Platzhalter für dein Bild - später durch dein echtes Foto ersetzen */}
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-full border-4 border-white shadow-xl overflow-hidden relative">
           {/* Sobald du ein Bild hast, entferne den Kommentar unten und lösche den grauen Div */}
           {/* <Image src="/dein-foto.jpg" alt="Kerem Sarica" fill className="object-cover" /> */}
           <span className="flex items-center justify-center h-full text-gray-400">Dein Foto</span>
        </div>
      </div>
    </section>
  );
}