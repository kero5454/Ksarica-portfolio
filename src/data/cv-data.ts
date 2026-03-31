import { Briefcase, GraduationCap, Trophy, Globe, Code, User, MapPin, Mail, Phone } from "lucide-react";

export interface CVItem {
  id: number;
  date: string;
  title: string;
  institution?: string; // optional
  company?: string;     // optional
  location?: string;    // optional
  description: string;
  shortDescription?: string; // optional
  type?: string;        // optional
  isCurrent?: boolean;  // kann undefined/false sein
}

// --- Stammdaten ---
export const personalInfo = {
  name: "Kerem Sarica",
  title: "Software Engineer & Designer",
  location: "Rathausstraße 16, 72649 Wolfschlugen",
  email: "Kerem.sarica@outlook.de",
  phone: "01573 2030710",
  linkedin: "https://www.linkedin.com/in/kerem-sarica-905748338",
  // gitlab: "https://gitlab.mi.hdm-stuttgart.de/ks249",
};

// --- Erfahrung (Beruflicher Werdegang) ---
export const experienceData: CVItem[] = [
  {
    id: 1,
    date: "März 2025 - Aug 2025",
    title: "Praktikum Softwareentwicklung (Diagnose)",
    company: "ANDREAS STIHL AG & Co. KG",
    location: "Waiblingen",
    description: `Aufbau und Automatisierung einer Testumgebung (CI/CD) unter Einsatz von Hyper-V, QF-Test und Python. Erstellung und Ausführung komplexer Testfälle für die STIHL Diagnose Software. 
    Zusätzlich war ich verantwortlich für die Optimierung von Testabläufen sowie die Verbesserung von UI-Texten und Begrifflichkeiten innerhalb der STIHL Diagnosis Software 2.0. Gearbeitet wurde agil mit der Atlassian Toolchain (Jira, Bitbucket, Bamboo, Confluence).`,
    shortDescription: "Aufbau einer automatisierten CI/CD-Testumgebung (Python, QF-Test) sowie Optimierung von UI-Texten und Testabläufen für die STIHL Diagnose Software.",
    type: "work",
  },
  // {
  //   id: 2,
  //   date: "März 2023 - Juni 2023",
  //   title: "Nachhilfelehrer / Tutor",
  //   company: "Hochschule der Medien",
  //   location: "Stuttgart",
  //   description: "Betreuung und Unterstützung der Studenten für das Fach Mathematik.",
  //   type: "work",
  // },
  {
    id: 3,
    date: "Aug 2022 - Sep 2022",
    title: "IT Support & Administration",
    company: "Thomson und Neff",
    location: "Wolfschlugen",
    description: "Verwaltung und Instandhaltung der lokalen IT-Infrastruktur. Neben dem technischen First-Level-Support übernahm ich die Organisation und Koordination von Bestellprozessen für die Fertigung und unterstützte bei Bedarf aktiv in der Produktion.",
    type: "work",
  },
  {
    id: 4,
    date: "April 2019",
    title: "Schülerpraktikum",
    company: "Turkish Airlines",
    location: "Nürnberg",
    description: "Erste Einblicke in die Prozessorganisation und die logistischen Abläufe eines global agierenden Luftfahrtunternehmens. Unterstützung bei administrativen Aufgaben im Tagesgeschäft.",
    type: "work",
  },
];

// --- Ausbildung (Akademischer Werdegang) ---
export const educationData: CVItem[] = [
  {
    id: 1,
    date: "Okt 2025 - Feb 2026",
    title: "Study Abroad: Auslandsemester in Japan",
    institution: "University of Tsukuba, Japan",
    description: `Interkultureller Austausch mit intensivem Japanisch-Sprachkurs. Akademischer Fokus auf Media Politics, Fotografie und Programmierung. 
    Diese Erfahrung hat mich als Person und Entwickler enorm bereichert, indem sie meine interkulturelle Kompetenz gestärkt und meinen Horizont erweitert hat.`,
    shortDescription: "Interkulturelles Auslandssemester mit akademischem Fokus auf Media Politics, zeitgenössischer Fotografie und Programmierung.",
  },
  {
    id: 2,
    date: "März 2023 - Aktuell",
    title: "Mobile Medien (B.Sc.)",
    institution: "Hochschule der Medien, Stuttgart",
    description: "Praxisnahes Informatik-Studium mit starkem Fokus auf mobile Endgeräte. Zu den Schwerpunkten gehören native und plattformübergreifende App-Entwicklung, Game Development, Usability,  UI/UX-Design sowie grundlegende Softwarearchitektur.",
    shortDescription: "Informatik-Studium mit Fokus auf plattformübergreifende App-Entwicklung, UI/UX-Design, Prototyping und Usability.",
    isCurrent: true 
  },
  {
    id: 3,
    date: "Okt 2022 - März 2023",
    title: "Medizininformatik (B.Sc.)",
    institution: "Universität Tübingen, Tübingen",
    description: "Grundlagenstudium mit Fokus auf angewandte Informatik im Gesundheitswesen. Schwerpunkte bildeten medizinische Dokumentation, grundlegende Programmierkonzepte sowie die Schnittstelle zwischen IT und Medizin.",
    shortDescription: "Grundlagenstudium mit Fokus auf angewandte Informatik im Gesundheitswesen.",
  },
  {
    id: 4,
    date: "Sep 2014 - Juli 2022",
    title: "Abitur (Note: 2,3)",
    institution: "Dietrich-Bonhoeffer-Gymnasium, Filderstadt",
    description: "Leistungsfächer: Englisch, Mathematik, Sport. Für herausragende Leistungen im Fach Informatik wurde ich mit dem Balluff Informatikpreis ausgezeichnet.",
  },
];

// --- Skills & Kenntnisse ---
export const hardSkills = [
  "React", "TypeScript", "Next.js", "Tailwind", "Kotlin", "Swift", "Java", "Python", "SQL", "OTX", "Figma", "Webflow"
];

export const softSkills = [
  "Teamfähigkeit", "Eigeninitiative", "Kommunikationsfähigkeit", "Agiles Arbeiten", "Analytisches Denken", "Interkulturelle Kompetenz",
];

export const languages = [
  { language: "Deutsch", level: "Muttersprache" },
  { language: "Türkisch", level: "Muttersprache" },
  { language: "Englisch", level: "Verhandlungssicher" },
  { language: "Japanisch", level: "Basiswissen" },
];

export const awards = [
  { title: "Balluff Informatikpreis", date: "Juli 2022" },
  { title: "Führerschein Klasse B", date: "Feb 2023" }
];