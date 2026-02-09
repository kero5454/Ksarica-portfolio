import React from 'react';
import { experienceData, educationData } from '@/data/cv-data';
import { Briefcase, GraduationCap } from "lucide-react";

export default function TimelineSection() {
  // Wir kombinieren Arbeit und Bildung für die Timeline auf der Startseite
  const timelineItems = [
    ...experienceData.map((item) => ({
      ...item,
      category: 'work',
      icon: Briefcase,
      org: item.company // Einheitliches Feld für Firma
    })),
    ...educationData.map((item) => ({
      ...item,
      category: 'education',
      icon: GraduationCap,
      org: item.institution // Einheitliches Feld für Uni/Schule
    }))
  ];

  // Manuelle Sortierung für die perfekte Story (oder nach Datum, wenn du eine Logik baust)
  // Hier eine feste Reihenfolge basierend auf deinen Daten (Neuestes zuerst)
  const sortedTimeline = timelineItems.sort((a, b) => {
    // Einfache Logik: Wir priorisieren hier Items basierend auf der ID und Kategorie für die Demo
    // In einer echten App würde man das Datum parsen. 
    // Hier tricksen wir kurz für die perfekte Darstellung deiner aktuellen Daten:
    const aDate = parseInt(a.date.slice(-4)); // Nimmt das Jahr
    const bDate = parseInt(b.date.slice(-4));
    return bDate - aDate; 
    // Falls das Sortieren nicht sauber klappt (wegen "Aktuell"), 
    // kannst du das Array auch oben manuell in die richtige Reihenfolge bringen.
  });

  // Manuelle Überschreibung der Sortierung für deine spezifischen Daten, 
  // damit der Verlauf logisch ist (Praktikum 2025 -> Studium -> Tutor -> Studium Tü -> ...)
  const displayItems = [
    timelineItems.find(i => i.title.includes("Praktikum Softwareentwicklung")), // 2025
    timelineItems.find(i => i.title.includes("Mobile Medien")), // 2023-Aktuell
    timelineItems.find(i => i.title.includes("Tutor")), // 2023
    timelineItems.find(i => i.title.includes("Medizininformatik")), // 2022
    timelineItems.find(i => i.title.includes("IT Support")), // 2022
  ].filter(Boolean); // Filtert undefined raus, falls was nicht gefunden wird

  return (
    <section className="bg-white py-24 px-6 overflow-hidden" id="lebenslauf">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-orange-500 font-bold tracking-wider text-sm uppercase">Werdegang</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Experience Journey</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Mein Weg als Entwickler und Designer – akademisch und in der Praxis.
          </p>
        </div>

        <div className="relative">
          {/* Vertikale Linie (Mitte) - Nur Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2" />
          
          {/* Vertikale Linie (Links) - Mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-12">
            {displayItems.map((item, index) => {
              if (!item) return null;
              const isLeft = index % 2 === 0;
              const Icon = item.icon;
              
              return (
                <div key={`${item.category}-${item.id}`} className={`relative flex flex-col md:flex-row items-center ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Icon / Dot */}
                  <div className={`absolute left-6 md:left-1/2 w-10 h-10 rounded-full bg-white border-2 flex items-center justify-center transform -translate-x-1/2 z-10 shadow-sm 
                    ${item.category === 'work' ? 'border-orange-100 text-orange-500' : 'border-blue-100 text-blue-500'}`}>
                    <Icon size={18} />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`group relative bg-white p-6 rounded-2xl border shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300
                      ${item.category === 'work' ? 'border-gray-100 hover:border-orange-100' : 'border-gray-100 hover:border-blue-100'}`}>
                      
                      {/* Datum Badge */}
                      <div className="flex justify-between items-center mb-4">
                        <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wide rounded-full
                          ${item.category === 'work' ? 'text-orange-600 bg-orange-50' : 'text-blue-600 bg-blue-50'}`}>
                          {item.date}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                        {item.org}
                      </h4>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Spacer für Balance (Desktop) */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}