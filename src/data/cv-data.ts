export interface CVItem {
  id: number;
  date: string;
  dateEn?: string;          // English date string (only where month names differ)
  title: string;
  titleEn?: string;         // English job/degree title
  institution?: string;
  company?: string;
  location?: string;
  description: string;
  descriptionEn?: string;   // English description
  shortDescription?: string;
  type?: string;
  isCurrent?: boolean;
}

// --- Stammdaten / Personal info ---
export const personalInfo = {
  name:     "Kerem Sarica",
  title:    "Software Engineer & Designer",
  location: "Rathausstraße 16, 72649 Wolfschlugen",
  email:    "Kerem.sarica@outlook.de",
  phone:    "01573 2030710",
  linkedin: "https://www.linkedin.com/in/kerem-sarica-905748338",
};

// --- Erfahrung / Work experience ---
export const experienceData: CVItem[] = [
  {
    id: 1,
    date:   "März 2025 – Aug 2025",
    dateEn: "Mar 2025 – Aug 2025",
    title:   "Praktikum Softwareentwicklung (Diagnose)",
    titleEn: "Software Development Internship (Diagnostics)",
    company:  "ANDREAS STIHL AG & Co. KG",
    location: "Waiblingen",
    description:
      "Aufbau und Automatisierung einer Testumgebung (CI/CD) unter Einsatz von Hyper-V, QF-Test und Python. Erstellung und Ausführung komplexer Testfälle für die STIHL Diagnose Software. " +
      "Zusätzlich war ich verantwortlich für die Optimierung von Testabläufen sowie die Verbesserung von UI-Texten und Begrifflichkeiten innerhalb der STIHL Diagnosis Software 2.0. Gearbeitet wurde agil mit der Atlassian Toolchain (Jira, Bitbucket, Bamboo, Confluence).",
    descriptionEn:
      "Built and automated a CI/CD test environment using Hyper-V, QF-Test, and Python. Designed and executed complex test cases for the STIHL Diagnostic Software. " +
      "Additionally responsible for optimising test workflows and improving UI copy within STIHL Diagnosis Software 2.0. Worked agile with the Atlassian toolchain (Jira, Bitbucket, Bamboo, Confluence).",
    shortDescription:
      "Aufbau einer automatisierten CI/CD-Testumgebung (Python, QF-Test) sowie Optimierung von UI-Texten und Testabläufen für die STIHL Diagnose Software.",
    type: "work",
  },
  {
    id: 3,
    date:   "Aug 2022 – Sep 2022",
    title:   "IT Support & Administration",
    titleEn: "IT Support & Administration",
    company:  "Thomson und Neff",
    location: "Wolfschlugen",
    description:
      "Verwaltung und Instandhaltung der lokalen IT-Infrastruktur. Neben dem technischen First-Level-Support übernahm ich die Organisation und Koordination von Bestellprozessen für die Fertigung und unterstützte bei Bedarf aktiv in der Produktion.",
    descriptionEn:
      "Managed and maintained local IT infrastructure. In addition to first-level technical support, coordinated procurement processes for manufacturing and provided hands-on support on the production floor.",
    type: "work",
  },
  {
    id: 4,
    date:   "April 2019",
    title:   "Schülerpraktikum",
    titleEn: "School Internship",
    company:  "Turkish Airlines",
    location: "Nürnberg",
    description:
      "Erste Einblicke in die Prozessorganisation und die logistischen Abläufe eines global agierenden Luftfahrtunternehmens. Unterstützung bei administrativen Aufgaben im Tagesgeschäft.",
    descriptionEn:
      "First insights into process organisation and logistics at a globally operating airline. Assisted with day-to-day administrative tasks.",
    type: "work",
  },
];

// --- Ausbildung / Education ---
export const educationData: CVItem[] = [
  {
    id: 1,
    date:   "Okt 2025 – Feb 2026",
    dateEn: "Oct 2025 – Feb 2026",
    title:   "Study Abroad: Auslandssemester in Japan",
    titleEn: "Study Abroad: Exchange Semester in Japan",
    institution: "University of Tsukuba, Japan",
    description:
      "Interkultureller Austausch mit intensivem Japanisch-Sprachkurs. Akademischer Fokus auf Media Politics, Fotografie und Programmierung. " +
      "Diese Erfahrung hat mich als Person und Entwickler enorm bereichert, indem sie meine interkulturelle Kompetenz gestärkt und meinen Horizont erweitert hat.",
    descriptionEn:
      "Cross-cultural exchange with an intensive Japanese language course. Academic focus on media politics, photography, and programming. " +
      "A transformative experience that deepened my intercultural competence and broadened my perspective as both a person and a developer.",
  },
  {
    id: 2,
    date:   "März 2023 – Aktuell",
    dateEn: "Mar 2023 – Present",
    title:   "Mobile Medien (B.Sc.)",
    titleEn: "Mobile Media (B.Sc.)",
    institution: "Hochschule der Medien, Stuttgart",
    description:
      "Praxisnahes Informatik-Studium mit starkem Fokus auf mobile Endgeräte. Zu den Schwerpunkten gehören native und plattformübergreifende App-Entwicklung, Game Development, Usability, UI/UX-Design sowie grundlegende Softwarearchitektur.",
    descriptionEn:
      "Hands-on computer science programme with a strong focus on mobile devices. Topics include native and cross-platform app development, game development, usability, UI/UX design, and software architecture fundamentals.",
    shortDescription:
      "Informatik-Studium mit Fokus auf plattformübergreifende App-Entwicklung, UI/UX-Design, Prototyping und Usability.",
    isCurrent: true,
  },
  {
    id: 3,
    date:   "Okt 2022 – März 2023",
    dateEn: "Oct 2022 – Mar 2023",
    title:   "Medizininformatik (B.Sc.)",
    titleEn: "Medical Informatics (B.Sc.)",
    institution: "Universität Tübingen, Tübingen",
    description:
      "Grundlagenstudium mit Fokus auf angewandte Informatik im Gesundheitswesen. Schwerpunkte bildeten medizinische Dokumentation, grundlegende Programmierkonzepte sowie die Schnittstelle zwischen IT und Medizin.",
    descriptionEn:
      "Foundational studies with a focus on applied computer science in healthcare. Topics included medical documentation, core programming concepts, and the intersection of IT and medicine.",
  },
  {
    id: 4,
    date:   "Sep 2014 – Juli 2022",
    dateEn: "Sep 2014 – Jul 2022",
    title:   "Abitur (Note: 2,3)",
    titleEn: "A-levels / Abitur (Grade: 2.3)",
    institution: "Dietrich-Bonhoeffer-Gymnasium, Filderstadt",
    description:
      "Leistungsfächer: Englisch, Mathematik, Sport. Für herausragende Leistungen im Fach Informatik wurde ich mit dem Balluff Informatikpreis ausgezeichnet.",
    descriptionEn:
      "Advanced subjects: English, Mathematics, Sports. Awarded the Balluff Computer Science Prize for outstanding performance in computing.",
  },
];

// --- Skills ---
export const hardSkills = [
  "React", "TypeScript", "Next.js", "Tailwind", "Kotlin", "Swift",
  "Java", "Python", "SQL", "OTX", "Figma", "Webflow",
];

export const softSkills = [
  "Teamfähigkeit", "Eigeninitiative", "Kommunikationsfähigkeit",
  "Agiles Arbeiten", "Analytisches Denken", "Interkulturelle Kompetenz",
];

export const softSkillsEn = [
  "Teamwork", "Self-initiative", "Communication",
  "Agile Working", "Analytical Thinking", "Intercultural Competence",
];

export const languages = [
  { language: "Deutsch",    languageEn: "German",   level: "Muttersprache",      levelEn: "Native"        },
  { language: "Türkisch",   languageEn: "Turkish",  level: "Muttersprache",      levelEn: "Native"        },
  { language: "Englisch",   languageEn: "English",  level: "Verhandlungssicher", levelEn: "Proficient"    },
  { language: "Japanisch",  languageEn: "Japanese", level: "Basiswissen",        levelEn: "Basic"         },
];

export const awards = [
  { title: "Balluff Informatikpreis", date: "Juli 2022",  dateEn: "Jul 2022"  },
  { title: "Führerschein Klasse B",   date: "Feb 2023",   dateEn: "Feb 2023"  },
];
