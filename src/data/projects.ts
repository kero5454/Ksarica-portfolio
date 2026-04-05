// src/data/projects.ts

export type ProjectCategory =
  | "web"
  | "ios"
  | "android"
  | "game"
  | "figma"
  | "desktop"
  | "fullstack";

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  demoLink: string;
  repoLink: string;
  image: string;
  images?: string[];
  videoUrl?: string;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    title: "3D Sneaker Configurator",
    description:
      "Ein interaktiver 3D-Konfigurator für den Jordan 1. Nutzer können Schuhe individuell in Echtzeit einfärben, vorgefertigte Designs kaufen oder Designer beauftragen. Fokus auf UX und 3D-Performance.",
    longDescription:
      "Dieses Projekt entstand aus der Idee, den klassischen Nike Jordan 1 vollständig im Browser erlebbar zu machen. Mit Three.js wurde ein performantes 3D-Modell integriert, das Echtzeit-Farbwechsel per Raycast-Picking ermöglicht. Ein eingebetteter Shop-Flow erlaubt es Nutzern, fertige Konfigurationen direkt zu kaufen oder einen Designer zu beauftragen.",
    tags: ["React", "Three.js", "3D", "E-Commerce", "UX/UI"],
    demoLink: "#",
    repoLink: "#",
    image: "/Project Pics/solemate_webapp/anpassenPage.png",
    images: [
      "/Project Pics/solemate_webapp/anpassenPage.png",
      "/Project Pics/solemate_webapp/HomePage.png",
      "/Project Pics/solemate_webapp/kontaktPage.png",
      "/Project Pics/solemate_webapp/LoginPage.png",
      "/Project Pics/solemate_webapp/ProfilePage.png",
      "/Project Pics/solemate_webapp/shopDetailPage.png",
      "/Project Pics/solemate_webapp/shopPage.png"
    ],
    videoUrl: "",
    category: "web",
  },
  {
    title: "RandoLingo",
    description:
      "Interaktives Quiz-Game zum Sprachenraten. Ein englisches Wort wird per AI in eine zufällige Sprache übersetzt, und der Spieler muss die Sprache erraten. Mit User-Profilen und Highscores.",
    longDescription:
      "RandoLingo kombiniert spielerisches Lernen mit KI-gestützter Übersetzung. Die App nutzt die LibreTranslate API, um Wörter in über 30 Sprachen zu übersetzen. Ein Highscore-System und Benutzerprofile sorgen für Langzeitmotivation. Das gesamte Projekt läuft containerisiert via Docker.",
    tags: ["SvelteKit", "TypeScript", "Docker", "LibreTranslate API"],
    demoLink: "#",
    repoLink: "#",
    image: "",
    images: [],
    videoUrl: "",
    category: "web",
  },
  {
    title: "iOS Movie App",
    description:
      "Native iOS App entwickelt mit Swift. Zeigt aktuelle Filme über eine API an, inklusive Detailsuche und Favoritenliste.",
    longDescription:
      "Eine native Swift-Anwendung, die die TMDB-API nutzt, um aktuelle Filme, Serien und Bewertungen anzuzeigen. Features: Suchfunktion, Detailansicht mit Trailer-Link, Favoritenliste mit lokalem Persistence-Layer via CoreData.",
    tags: ["iOS", "Swift", "Rest API", "Mobile"],
    demoLink: "#",
    repoLink: "#",
    image: "",
    images: [],
    videoUrl: "",
    category: "ios",
  },
  {
    title: "Android Restaurant App",
    description:
      "Native Android App für ein Restaurant. Zeigt Speisekarte, Öffnungszeiten und ermöglicht Tischreservierungen.",
    longDescription:
      "Eine in Kotlin entwickelte Android-App für ein lokales Restaurant. Die App zeigt die vollständige Speisekarte mit Kategorien und Bildern, Öffnungszeiten und bietet ein einfaches Reservierungssystem mit Datenpersistenz.",
    tags: ["Android", "Kotlin", "Mobile"],
    demoLink: "#",
    repoLink: "#",
    image: "",
    images: [],
    videoUrl: "",
    category: "android",
  },
  {
    title: "Wizard Platformer",
    description:
      "Ein Mobile Game entwickelt in Unity. Klassischer Platformer mit Shooting-Mechaniken, Monster-Gegnern und Boss-Fights.",
    longDescription:
      "Ein vollständiges 2D-Platformer-Game, entwickelt in Unity mit C#. Das Spiel enthält mehrere Level, unterschiedliche Gegnertypen mit eigener KI, ein Magie-System mit verschiedenen Zaubersprüchen sowie epische Boss-Kämpfe am Ende jedes Abschnitts.",
    tags: ["Unity", "C#", "Game Dev", "Mobile"],
    demoLink: "#",
    repoLink: "#",
    image: "",
    images: [],
    videoUrl: "",
    category: "game",
  },
  {
    title: "Connect+ Prototype",
    description:
      "Konzept und High-Fidelity Prototyp für eine Campus-App, die Studenten vernetzt. Features: Onboarding, Activity-Partner Suche und AI-Chat.",
    longDescription:
      "Ein vollständiger UX-Prozess von Research über Wireframes bis zum High-Fidelity Figma-Prototyp. Die App adressiert das Problem der sozialen Isolation auf dem Campus und bietet Studenten eine Plattform, um Lernpartner, Sportbegleiter oder Freizeitgruppen zu finden.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    demoLink: "#",
    repoLink:
      "https://gitlab.mi.hdm-stuttgart.de/ks249/kerem_sarica_portfolio_projects/-/tree/main/Android%20App%20(Kotlin)",
    image:
      "https://cdn.prod.website-files.com/6738added5b10100430d0893/6741cefd96314aff2f55eff0_Screenshot%202024-11-23%20at%2013.47.36.png",
    images: [
      "https://cdn.prod.website-files.com/6738added5b10100430d0893/6741cefd96314aff2f55eff0_Screenshot%202024-11-23%20at%2013.47.36.png",
    ],
    videoUrl: "",
    category: "figma",
  },
  {
    title: "Fitness Tracker Desktop",
    description:
      "JavaFX Desktop-Anwendung zur Analyse von Trainingsdaten, Kalorienberechnung und Workout-Planung. Mit grafischer Auswertung der Fortschritte.",
    longDescription:
      "Eine umfangreiche Desktop-Applikation, entwickelt mit Java und JavaFX. Nutzer können Trainingseinheiten erfassen, Kalorienbilanzen tracken und ihre Fortschritte in interaktiven Charts visualisieren. Das Projekt folgte einem vollständigen Software-Engineering-Prozess mit Anforderungsanalyse, UML-Diagrammen und agiler Entwicklung.",
    tags: ["Java", "JavaFX", "Software Engineering"],
    demoLink: "#",
    repoLink:
      "https://gitlab.mi.hdm-stuttgart.de/ks249/kerem_sarica_portfolio_projects/-/tree/main/Java%20Web%20Application",
    image:
      "https://cdn.prod.website-files.com/6738added5b10100430d0893/673a32fcd2a51e0bd0dfafaf_Screenshot%202024-11-17%20at%2019.16.14.avif",
    images: [
      "https://cdn.prod.website-files.com/6738added5b10100430d0893/673a32fcd2a51e0bd0dfafaf_Screenshot%202024-11-17%20at%2019.16.14.avif",
    ],
    videoUrl: "",
    category: "desktop",
  },
];