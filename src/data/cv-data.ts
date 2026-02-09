import { Briefcase, GraduationCap, Trophy, Globe, Code, User, MapPin, Mail, Phone } from "lucide-react";

// --- Stammdaten ---
export const personalInfo = {
  name: "Kerem Sarica",
  title: "Software Engineer & Designer",
  location: "Rathausstraße 16, 72649 Wolfschlugen",
  email: "Kerem.sarica@outlook.de",
  phone: "01573 2030710",
  linkedin: "https://www.linkedin.com/in/kerem-sarica-905748338",
  gitlab: "https://gitlab.mi.hdm-stuttgart.de/ks249",
};

// --- Erfahrung (Beruflicher Werdegang) ---
export const experienceData = [
  {
    id: 1,
    date: "März 2025 - Aug 2025",
    title: "Praktikum Softwareentwicklung",
    company: "ANDREAS STIHL AG & Co. KG",
    location: "Waiblingen",
    description: "Entwicklung automatisierter Testsoftware mit OTX (Open Test sequence eXchange, ISO 13209) mit Fokus auf Wiederverwendbarkeit und modulare Architektur.",
    type: "work",
  },
  {
    id: 2,
    date: "März 2023 - Juni 2023",
    title: "Nachhilfelehrer / Tutor",
    company: "Hochschule der Medien",
    location: "Stuttgart",
    description: "Betreuung und Unterstützung der Studenten für das Fach Mathematik.",
    type: "work",
  },
  {
    id: 3,
    date: "Aug 2022 - Sep 2022",
    title: "IT Support & Administration",
    company: "Thomson und Neff",
    location: "Wolfschlugen",
    description: "Verwaltung der IT-Infrastruktur, Organisation und Koordination von Bestellungen für die Produktion sowie Mitarbeit in der Produktion.",
    type: "work",
  },
  {
    id: 4,
    date: "April 2019",
    title: "Schülerpraktikum",
    company: "Turkish Airlines",
    location: "Nürnberg",
    description: "Einblicke in die Arbeitsweise und Organisation eines Großunternehmens.",
    type: "work",
  },
];

// --- Ausbildung (Akademischer Werdegang) ---
export const educationData = [
  {
    id: 1,
    date: "März 2023 - Aktuell",
    title: "Mobile Medien (B.Sc.)",
    institution: "Hochschule der Medien, Stuttgart",
    description: "Schwerpunkte: Informatik, Design, Usability, App-Entwicklung.",
  },
  {
    id: 2,
    date: "Okt 2022 - März 2023",
    title: "Medizininformatik (B.Sc.)",
    institution: "Universität Tübingen",
    description: "Schwerpunkte: Informatik, Medizin.",
  },
  {
    id: 3,
    date: "Sep 2014 - Juli 2022",
    title: "Abitur (Note: 2,3)",
    institution: "Dietrich-Bonhoeffer-Gymnasium, Filderstadt",
    description: "Leistungsfächer: Englisch, Mathe, Sport. Auszeichnung mit dem Balluff Informatikpreis.",
  },
];

// --- Skills & Kenntnisse ---
export const hardSkills = [
  "Java", "Kotlin", "Swift", "JavaScript", "HTML/CSS", "SQL", "OTX", "MS Office"
];

export const softSkills = [
  "Teamfähigkeit", "Lernbereitschaft", "Eigenständigkeit", "Verantwortungsbewusstsein"
];

export const languages = [
  { language: "Deutsch", level: "Muttersprache" },
  { language: "Türkisch", level: "Muttersprache" },
  { language: "Englisch", level: "Verhandlungssicher" },
];

export const awards = [
  { title: "Balluff Informatikpreis", date: "Juli 2022" },
  { title: "PKW Führerschein", date: "Feb 2023" }
];