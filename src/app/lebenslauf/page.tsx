import React from 'react';
import { Download, Briefcase, GraduationCap, Trophy, Globe, Code, User, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { experienceData, educationData, hardSkills, softSkills, languages, awards, personalInfo } from "@/data/cv-data";

export default function LebenslaufPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Lebenslauf</h1>
            <p className="text-gray-500 text-lg">Mein Werdegang, Erfahrungen und Qualifikationen im Überblick.</p>
          </div>
          
          <a 
            href="/Lebenslauf_Kerem_Sarica.pdf" // Stelle sicher, dass die Datei im 'public' Ordner liegt
            download="Lebenslauf_Kerem_Sarica"
            className="group flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Download size={18} className="group-hover:animate-bounce" />
            PDF Download
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- Linke Spalte (Sidebar: Info, Skills) --- */}
          <aside className="space-y-8">
            
            {/* Kontakt Karte */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User size={20} className="text-blue-600" /> Kontakt
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition">{personalInfo.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="pt-2 border-t border-gray-100 mt-2 flex flex-col gap-2">
                   <a href={personalInfo.linkedin} target="_blank" className="flex items-center gap-2 text-blue-600 hover:underline">
                     <ExternalLink size={14} /> LinkedIn Profil
                   </a>
                   <a href={personalInfo.gitlab} target="_blank" className="flex items-center gap-2 text-orange-600 hover:underline">
                     <ExternalLink size={14} /> GitLab Portfolio
                   </a>
                </div>
              </div>
            </div>

            {/* IT-Kenntnisse */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Code size={20} className="text-blue-600" /> IT-Kenntnisse
              </h3>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User size={20} className="text-green-600" /> Soft Skills
              </h3>
              <ul className="space-y-2">
                 {softSkills.map((skill, i) => (
                   <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> {skill}
                   </li>
                 ))}
              </ul>
            </div>

            {/* Sprachen */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Globe size={20} className="text-purple-600" /> Sprachen
              </h3>
              <div className="space-y-3">
                {languages.map((lang, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="font-medium text-gray-800">{lang.language}</span>
                    <span className="text-gray-500 bg-gray-50 px-2 py-0.5 rounded text-xs">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

             {/* Auszeichnungen */}
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Trophy size={20} className="text-yellow-500" /> Sonstiges
              </h3>
              <ul className="space-y-3">
                {awards.map((award, i) => (
                  <li key={i} className="text-sm">
                    <div className="font-medium text-gray-800">{award.title}</div>
                    <div className="text-gray-500 text-xs">{award.date}</div>
                  </li>
                ))}
              </ul>
            </div>

          </aside>

          {/* --- Rechte Spalte (Hauptinhalt: Experience & Education) --- */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Berufserfahrung Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                  <Briefcase size={24} />
                </div>
                Beruflicher Werdegang
              </h2>
              
              <div className="space-y-6">
                {experienceData.map((item) => (
                  <div key={item.id} className="relative pl-8 md:pl-0">
                    {/* Timeline Linie Mobile */}
                    <div className="md:hidden absolute left-2 top-2 bottom-0 w-0.5 bg-gray-200"></div>
                    
                    <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                          <div className="text-orange-600 font-medium text-sm mb-1">{item.company}</div>
                        </div>
                        <span className="inline-block md:text-right text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit">
                          {item.date}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                         <MapPin size={12}/> {item.location}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Ausbildung Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <GraduationCap size={24} />
                </div>
                Akademischer Werdegang
              </h2>
              
              <div className="space-y-6">
                {educationData.map((item) => (
                  <div key={item.id} className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                          <div className="text-blue-600 font-medium text-sm mb-1">{item.institution}</div>
                        </div>
                        <span className="inline-block md:text-right text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mt-2">
                        {item.description}
                      </p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}