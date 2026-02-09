import React from 'react';
import { hardSkills, personalInfo } from "@/data/cv-data"; // Import angepasst

export default function AboutSection() {
  // Wir nehmen nur die ersten 6 Skills für die Übersicht, damit die Box nicht platzt
  const featuredSkills = hardSkills.slice(0, 6);

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Linke Seite: Text */}
        <div className="space-y-8">
          <div>
            <span className="text-orange-500 font-bold tracking-wider text-sm uppercase">Über Mich</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-2">
              Die Brücke zwischen <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Design & Code</span>
            </h2>
          </div>
          
          <div className="text-gray-600 text-lg leading-relaxed space-y-4">
            <p>
              <span className="text-orange-500 text-5xl float-left mr-3 mt-[-8px] font-serif">H</span>
              allo! Ich bin Kerem, ein passionierter Software Engineer und Designer. 
              Meine Reise begann mit der Faszination dafür, wie Dinge funktionieren – heute entwickle ich moderne Web-Apps, die nicht nur gut aussehen, sondern auch performant sind.
            </p>
            <p>
              Ob es um komplexe <strong>Algorithmen</strong> oder pixelgenaues <strong>UI-Design</strong> geht – ich liebe es, Probleme kreativ zu lösen und Nutzererlebnisse zu schaffen, die begeistern.
            </p>
          </div>
          
          {/* Status Box */}
          <div className="inline-block">
             <div className="bg-orange-50/50 border border-orange-100 p-4 rounded-xl flex items-center gap-4">
               <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">🎓</div>
               <div>
                 <p className="font-bold text-gray-800 text-sm">Aktueller Status</p>
                 <p className="text-sm text-gray-600">Student & Software Developer</p>
               </div>
            </div>
          </div>
        </div>

        {/* Rechte Seite: "Why work with me" Card */}
        <div className="relative mt-8 md:mt-0">
          {/* Dekorativer Hintergrund-Blob */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
          
          <div className="relative bg-gray-50 rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 overflow-hidden">
            
            <h3 className="text-2xl font-bold text-gray-900 mb-8 relative z-10">Tech Stack & Skills</h3>
            
            <ul className="space-y-5 relative z-10">
              {featuredSkills.map((skill, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
                  {skill}
                </li>
              ))}
            </ul>

            {/* Hanko (Stempel) Effekt */}
            <div className="absolute bottom-6 right-6 transform rotate-[-12deg] border-2 border-red-400 text-red-400 px-3 py-2 rounded-md opacity-80 font-mono text-xs text-center leading-tight shadow-sm bg-white/80 backdrop-blur-sm">
               <span className="block text-[10px] uppercase tracking-widest border-b border-red-300 pb-1 mb-1">Portfolio</span>
               KEREM<br/>SARICA
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}