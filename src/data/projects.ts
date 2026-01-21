// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  tags: string[];
  demoLink: string;
  repoLink: string;
  image: string;
}

export const projects: Project[] = [
  // --- NEUE PROJEKTE (Highlights) ---
  {
    title: "3D Sneaker Configurator",
    description: "Ein interaktiver 3D-Konfigurator für den Jordan 1. Nutzer können Schuhe individuell in Echtzeit einfärben, vorgefertigte Designs kaufen oder Designer beauftragen. Fokus auf UX und 3D-Performance.",
    tags: ["React", "Three.js", "3D", "E-Commerce", "UX/UI"],
    demoLink: "#", // Hier später Live-Link einfügen
    repoLink: "#", // Hier später GitHub Link einfügen
    image: "/images/sneaker-configurator.jpg", // Bitte Screenshot machen: public/images/sneaker-configurator.jpg
  },
  {
    title: "RandoLingo",
    description: "Interaktives Quiz-Game zum Sprachenraten. Ein englisches Wort wird per AI in eine zufällige Sprache übersetzt, und der Spieler muss die Sprache erraten. Mit User-Profilen und Highscores.",
    tags: ["SvelteKit", "TypeScript", "Docker", "LibreTranslate API"],
    demoLink: "#",
    repoLink: "#",
    image: "/images/randolingo.jpg", // Bitte Screenshot machen
  },
  {
    title: "iOS Movie App",
    description: "Native iOS App entwickelt mit Swift. Zeigt aktuelle Filme über eine API an, inklusive Detailsuche und Favoritenliste.",
    tags: ["iOS", "Swift", "Rest API", "Mobile"],
    demoLink: "#",
    repoLink: "#",
    image: "/images/movie-app.jpg", // Bitte Screenshot machen
  },
  {
    title: "Wizard Platformer",
    description: "Ein Mobile Game entwickelt in Unity. Klassischer Platformer mit Shooting-Mechaniken, Monster-Gegnern und Boss-Fights.",
    tags: ["Unity", "C#", "Game Dev", "Mobile"],
    demoLink: "#",
    repoLink: "#",
    image: "/images/wizard-game.jpg", // Bitte Screenshot machen
  },

  // --- ALTE PROJEKTE (Aus Webflow importiert) ---
  {
    title: "Connect+ Prototype",
    description: "Konzept und High-Fidelity Prototyp für eine Campus-App, die Studenten vernetzt. Features: Onboarding, Activity-Partner Suche und AI-Chat.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    demoLink: "#",
    repoLink: "https://gitlab.mi.hdm-stuttgart.de/ks249/kerem_sarica_portfolio_projects/-/tree/main/Android%20App%20(Kotlin)",
    image: "https://cdn.prod.website-files.com/6738added5b10100430d0893/6741cefd96314aff2f55eff0_Screenshot%202024-11-23%20at%2013.47.36.png",
  },
  {
    title: "Fitness Tracker Desktop",
    description: "JavaFX Desktop-Anwendung zur Analyse von Trainingsdaten, Kalorienberechnung und Workout-Planung. Mit grafischer Auswertung der Fortschritte.",
    tags: ["Java", "JavaFX", "Software Engineering"],
    demoLink: "#",
    repoLink: "https://gitlab.mi.hdm-stuttgart.de/ks249/kerem_sarica_portfolio_projects/-/tree/main/Java%20Web%20Application",
    image: "https://cdn.prod.website-files.com/6738added5b10100430d0893/673a32fcd2a51e0bd0dfafaf_Screenshot%202024-11-17%20at%2019.16.14.avif",
  },
  {
    title: "FuturePlayer AI",
    description: "Visionärer Musik-Player mit integriertem AI-Assistenten für Musikempfehlungen. Design-Konzept erstellt in Figma.",
    tags: ["Figma", "AI Concept", "Product Design"],
    demoLink: "#",
    repoLink: "https://gitlab.mi.hdm-stuttgart.de/ks249/kerem_sarica_portfolio_projects/-/tree/main/Figma%20Projekte",
    image: "https://cdn.prod.website-files.com/6738added5b10100430d0893/6741cf0ac89de7fa9e55f0a0_Screenshot%202024-11-23%20at%2013.42.05.png",
  },
  {
    title: "Dating App Database",
    description: "Backend-Architektur für eine Dating-App. Erstellung von ER-Diagrammen und SQL DDL-Skripten für User-Matching und Chats.",
    tags: ["SQL", "Database", "Backend Architecture"],
    demoLink: "#",
    repoLink: "https://gitlab.mi.hdm-stuttgart.de/ks249/kerem_sarica_portfolio_projects/-/tree/main/Datenbank%20Verwaltung%20DDL",
    image: "https://cdn.prod.website-files.com/6738added5b10100430d0893/6741d51682830e50e3748d38_Screenshot%202024-11-23%20at%2014.09.24.png",
  },
  {
    title: "IT Project Planning",
    description: "Professionelle Projektplanung für eine Restaurant-App. Gantt-Charts, Ressourcenplanung und Agile Methoden.",
    tags: ["Project Management", "Agile", "Planning"],
    demoLink: "#",
    repoLink: "https://gitlab.mi.hdm-stuttgart.de/ks249/kerem_sarica_portfolio_projects/-/tree/main/Projekte%20Planung",
    image: "https://cdn.prod.website-files.com/6738added5b10100430d0893/6741d6d1dee4595f113aef82_Screenshot%202024-11-23%20at%2014.20.26.png",
  },
];