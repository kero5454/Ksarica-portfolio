import React from 'react';
import Link from 'next/link';
import { experienceData, educationData } from '@/data/cv-data'; // Pfad ggf. anpassen
import { Briefcase, GraduationCap, ArrowRight } from "lucide-react";

// Hilfsfunktion: Wandelt deutsches Datum (z.B. "Okt 2025") in eine sortierbare Zahl um (202510)
const parseStartDate = (dateString: string) => {
  const months: { [key: string]: number } = {
    'jan': 1, 'feb': 2, 'mär': 3, 'apr': 4, 'mai': 5, 'jun': 6,
    'jul': 7, 'aug': 8, 'sep': 9, 'okt': 10, 'nov': 11, 'dez': 12
  };

  // Sucht nach dem ersten Wort (Monat) und der ersten 4-stelligen Zahl (Jahr)
  const match = dateString.toLowerCase().match(/^([a-zäöü]+)?\s*(\d{4})/);

  if (match) {
    const monthStr = match[1];
    const year = parseInt(match[2]);
    let month = 1; // Standardmäßig Januar, falls kein Monat da steht

    if (monthStr) {
      const foundKey = Object.keys(months).find(k => monthStr.startsWith(k));
      if (foundKey) month = months[foundKey];
    }

    return year * 100 + month; // z.B. 2025 * 100 + 10 = 202510
  }
  return 0;
};

export default function TimelineSection() {
  // 1. Alle Daten zusammenwerfen
  const timelineItems = [
    ...experienceData.map((item) => ({
      ...item,
      category: 'work',
      icon: Briefcase,
      org: item.company
    })),
    ...educationData.map((item) => ({
      ...item,
      category: 'education',
      icon: GraduationCap,
      org: item.institution
    }))
  ];

  // 2. Nur die absoluten Highlights auswählen (anhand von Keywords im Titel)
  const selectedKeywords = [
    "Japan",             // Auslandssemester
    "Praktikum",         // Stihl
    "Mobile Medien",     // Aktuelles Studium
    "Medizininformatik"  // Erstes Studium
  ];

  // 3. Filtern und sortieren (Neuestes Startdatum zuerst)
  const displayItems = selectedKeywords
    .map(keyword => timelineItems.find(i => i.title.includes(keyword)))
    .filter(Boolean) // Entfernt "undefined", falls ein Keyword nicht gefunden wird
    .sort((a, b) => parseStartDate(b!.date) - parseStartDate(a!.date));

  return (
    // bg-transparent statt bg-white, damit sich der globale Dark-Mode Hintergrund anpasst
    <section className="py-24 px-6 overflow-hidden" id="Werdegang">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-orange-500 font-bold tracking-wider text-sm uppercase">Werdegang</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            Experience Journey
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            Mein Weg als Entwickler und Designer – akademisch und in der Praxis.
          </p>
        </div>

        <div className="relative">
          {/* Vertikale Linie (Mitte) - Nur Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2" />

          {/* Vertikale Linie (Links) - Mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-12">
            {displayItems.map((item, index) => {
              if (!item) return null;
              const isLeft = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div key={`${item.category}-${item.id}`} className={`relative flex flex-col md:flex-row items-center ${!isLeft ? 'md:flex-row-reverse' : ''}`}>

                  {/* Icon / Dot in der Mitte */}
                  <div className={`absolute left-6 md:left-1/2 w-10 h-10 rounded-full bg-white dark:bg-[#0f1623] border-2 flex items-center justify-center transform -translate-x-1/2 z-10 shadow-sm 
                    ${item.category === 'work'
                      ? 'border-orange-100 dark:border-orange-900/50 text-orange-500'
                      : 'border-blue-100 dark:border-blue-900/50 text-blue-500'}`}>
                    <Icon size={18} />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`group relative bg-white dark:bg-[#0f1623] p-6 rounded-2xl border shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300
                      ${item.category === 'work'
                        ? 'border-gray-100 dark:border-gray-800 hover:border-orange-200 dark:hover:border-orange-500/50'
                        : 'border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-500/50'}`}>

                      {/* Datum Badge */}
                      <div className="flex justify-between items-center mb-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wide rounded-full border
                          ${item.isCurrent
                            ? 'border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400 shadow-sm'
                            : item.category === 'work'
                              ? 'border-transparent text-orange-600 bg-orange-50 dark:bg-orange-500/10 dark:text-orange-400'
                              : 'border-transparent text-blue-600 bg-blue-50 dark:bg-blue-500/10 dark:text-blue-400'
                          }`}>

                          {/* Pulsierender Punkt (nur wenn isCurrent true ist) */}
                          {item.isCurrent && (
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                          )}

                          {item.date}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide mt-1">
                        {item.org}
                      </h4>

                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {/* Wichtig: Nutzt shortDescription, falls vorhanden, sonst Fallback auf description */}
                        {item.shortDescription || item.description}
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
      <div className="mt-16 flex justify-center">
        <Link
          href="/lebenslauf"
          className="group flex items-center gap-2.5 px-6 py-3 bg-white border border-gray-200/80 text-gray-700 text-[14px] font-medium rounded-full shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-gray-300 hover:shadow-[0_4px_15px_-4px_rgba(0,0,0,0.08)] transition-all duration-300"
        >
          Vollständigen Lebenslauf ansehen
          <ArrowRight
            size={16}
            className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300"
          />
        </Link>
      </div>
    </section>
  );
}