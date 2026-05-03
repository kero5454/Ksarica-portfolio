// src/data/projects.ts

export type ProjectCategory = "web" | "ios" | "android" | "game" | "figma" | "desktop" | "fullstack";

export interface ProjectSection {
  heading: string;
  content: string;
  images?: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  descriptionEn?: string;
  tags: string[];
  demoLink: string;
  repoLink: string;
  image: string;
  images?: string[];
  videoUrl?: string;
  category: ProjectCategory;
  // ── Detail page fields ──
  role: string;
  roleEn?: string;
  duration: string;
  context: string;
  contextEn?: string;
  sections: ProjectSection[];
  sectionsEn?: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "solemate-ios",
    title: "Solemate iOS App",
    description: "Native iOS E-Commerce App für individualisierte Sneaker. 3D-Konfiguration, Shop, Warenkorb und Benutzerprofile.",
    descriptionEn: "Native iOS e-commerce app for customized sneakers. 3D configuration, shop, cart, and user profiles.",
    tags: ["iOS", "Swift", "E-Commerce", "Mobile"],
    demoLink: "#", repoLink: "#",
    image: "/Project Pics/Solemate/Homepage.png",
    images: [
      "/Project Pics/Solemate/Homepage.png",
      "/Project Pics/Solemate/Shop.png",
      "/Project Pics/Solemate/DetailShoe.png",
      "/Project Pics/Solemate/CustomShoePic.png",
      "/Project Pics/Solemate/Cart.png",
      "/Project Pics/Solemate/Login.png",
      "/Project Pics/Solemate/Register.png",
      "/Project Pics/Solemate/Password.png",
      "/Project Pics/Solemate/Contact.png",
    ],
    videoUrl: "/Project Pics/Solemate/SolemateDemo.mp4",
    category: "ios",
    role: "iOS Developer & Designer",
    duration: "1 Semester",
    context: "Hochschulprojekt",
    contextEn: "University Project",
    sections: [
      {
        heading: "Überblick",
        content: "Eine native iOS App entwickelt mit Swift für den Kauf und die Individualisierung von Sneakern. Die App verbindet E-Commerce mit 3D-Produktkonfiguration und bietet ein vollständiges Shopping-Erlebnis.",
        images: ["/Project Pics/Solemate/Homepage.png"],
      },
      {
        heading: "Shop & Produkte",
        content: "Vollständiger Shop mit Produktkatalog, Detailansichten der Schuhe mit 360°-Ansicht, Größenauswahl und Warenkorb-Funktionalität. Benutzer können zwischen verschiedenen Modellen und Farben wählen.",
        images: ["/Project Pics/Solemate/Shop.png", "/Project Pics/Solemate/DetailShoe.png"],
      },
      {
        heading: "3D-Konfiguration & Warenkorb",
        content: "Nutzer können Schuhe in einer interaktiven 3D-Ansicht individuell anpassen – verschiedene Teile des Schuhs lassen sich einzeln einfärben. Konfigurationen werden direkt in den Warenkorb übernommen.",
        images: ["/Project Pics/Solemate/CustomShoePic.png", "/Project Pics/Solemate/Cart.png"],
      },
      {
        heading: "Benutzerverwaltung",
        content: "Vollständiges Auth-System mit Login, Registrierung und Passwort-Recovery. Benutzerprofile speichern Konfigurationen, Bestellhistorie und persönliche Einstellungen.",
        images: ["/Project Pics/Solemate/Login.png", "/Project Pics/Solemate/Register.png", "/Project Pics/Solemate/Password.png"],
      },
      {
        heading: "Kontakt & Support",
        content: "Integrierter Kontaktbereich für Kundenanfragen, Designer-Anfragen und Support. Direkte Kommunikation zwischen Käufern und Designern über die App.",
        images: ["/Project Pics/Solemate/Contact.png"],
      },
    ],
    sectionsEn: [
      {
        heading: "Overview",
        content: "A native iOS app built with Swift for purchasing and customizing sneakers. The app combines e-commerce with 3D product configuration and delivers a complete shopping experience.",
        images: ["/Project Pics/Solemate/Homepage.png"],
      },
      {
        heading: "Shop & Products",
        content: "Complete shop with product catalog, shoe detail views with 360° view, size selection, and cart functionality. Users can choose between different models and colors.",
        images: ["/Project Pics/Solemate/Shop.png", "/Project Pics/Solemate/DetailShoe.png"],
      },
      {
        heading: "3D Configuration & Cart",
        content: "Users can customize shoes in an interactive 3D view — different parts of the shoe can be individually colored. Configurations are added directly to the shopping cart.",
        images: ["/Project Pics/Solemate/CustomShoePic.png", "/Project Pics/Solemate/Cart.png"],
      },
      {
        heading: "User Management",
        content: "Complete auth system with login, registration, and password recovery. User profiles store configurations, order history, and personal settings.",
        images: ["/Project Pics/Solemate/Login.png", "/Project Pics/Solemate/Register.png", "/Project Pics/Solemate/Password.png"],
      },
      {
        heading: "Contact & Support",
        content: "Integrated contact area for customer inquiries, designer requests, and support. Direct communication between buyers and designers within the app.",
        images: ["/Project Pics/Solemate/Contact.png"],
      },
    ],
  },
  {
    slug: "randolingo",
    title: "RandoLingo",
    description: "Interaktives Quiz-Game zum Sprachenraten. Ein englisches Wort wird per AI in eine zufällige Sprache übersetzt, und der Spieler muss die Sprache erraten.",
    descriptionEn: "Interactive quiz game for guessing languages. An English word is translated to a random language via AI, and the player guesses the language.",
    tags: ["SvelteKit", "TypeScript", "Docker", "LibreTranslate API"],
    demoLink: "#",
    repoLink: "#",
    image: "/Project Pics/Randolingo/HomePage.png",
    images: ["/Project Pics/Randolingo/HomePage.png", "/Project Pics/Randolingo/Game.png", "/Project Pics/Randolingo/Play.png", "/Project Pics/Randolingo/Profile.png", "/Project Pics/Randolingo/Statistics.png", "/Project Pics/Randolingo/GlobalStatistics.png", "/Project Pics/Randolingo/Register.png", "/Project Pics/Randolingo/Settings.png"],
    videoUrl: "/Project Pics/Randolingo/RandolingoDemo.mp4",
    category: "web",
    role: "Fullstack Developer",
    roleEn: "Fullstack Developer",
    duration: "3 Monate",
    context: "Hochschulprojekt",
    contextEn: "University Project",
    sections: [
      { heading: "Überblick", content: "RandoLingo ist ein interaktives Quiz-Spiel, bei dem Spieler die Sprache eines übersetzten Wortes erraten müssen. Die Idee: Ein englisches Wort wird per KI in eine zufällige Sprache übersetzt – der Spieler muss die richtige Sprache identifizieren.", images: ["/Project Pics/Randolingo/HomePage.png"] },
      { heading: "Spielmechanik & Features", content: "Das Spiel bietet mehrere Schwierigkeitsstufen, ein Punktesystem mit Highscores und Benutzerprofile. Globale Statistiken zeigen, wie man im Vergleich zu anderen Spielern abschneidet. Die Spieloberfläche ist intuitiv und responsive.", images: ["/Project Pics/Randolingo/Game.png", "/Project Pics/Randolingo/Play.png"] },
      { heading: "Technischer Stack", content: "Gebaut mit SvelteKit und TypeScript als Frontend, nutzt die App die LibreTranslate API für KI-gestützte Übersetzungen in über 30 Sprachen. Das gesamte Projekt läuft containerisiert via Docker für einfaches Deployment.", images: ["/Project Pics/Randolingo/Statistics.png", "/Project Pics/Randolingo/GlobalStatistics.png"] },
      { heading: "Benutzerverwaltung", content: "Vollständiges Auth-System mit Registrierung, Login und Benutzerprofilen. Jeder Spieler hat eigene Statistiken, Einstellungen und kann seinen Fortschritt tracken.", images: ["/Project Pics/Randolingo/Profile.png", "/Project Pics/Randolingo/Register.png"] },
    ],
    sectionsEn: [
      { heading: "Overview", content: "RandoLingo is an interactive quiz game where players have to guess the language of a translated word. The concept: An English word is translated via AI into a random language — the player must identify the correct language.", images: ["/Project Pics/Randolingo/HomePage.png"] },
      { heading: "Game Mechanics & Features", content: "The game offers multiple difficulty levels, a scoring system with highscores, and user profiles. Global statistics show how you compare to other players. The game interface is intuitive and responsive.", images: ["/Project Pics/Randolingo/Game.png", "/Project Pics/Randolingo/Play.png"] },
      { heading: "Technical Stack", content: "Built with SvelteKit and TypeScript as frontend, the app uses the LibreTranslate API for AI-powered translations into over 30 languages. The entire project runs containerized via Docker for easy deployment.", images: ["/Project Pics/Randolingo/Statistics.png", "/Project Pics/Randolingo/GlobalStatistics.png"] },
      { heading: "User Management", content: "Complete auth system with registration, login, and user profiles. Each player has their own statistics, settings, and can track their progress.", images: ["/Project Pics/Randolingo/Profile.png", "/Project Pics/Randolingo/Register.png"] },
    ],
  },
  {
    slug: "ios-movie-app",
    title: "iOS Movie App",
    description: "Native iOS App mit Swift. Zeigt aktuelle Filme über die TMDB-API an, inklusive Detailsuche und Favoritenliste.",
    descriptionEn: "Native iOS app built with Swift. Displays current movies via TMDB API, including search and favorites.",
    tags: ["iOS", "Swift", "Rest API", "Mobile"],
    demoLink: "#", repoLink: "#",
    image: "/Project Pics/Movieapp/Homepage.png",
    images: ["/Project Pics/Movieapp/Homepage.png", "/Project Pics/Movieapp/DetailPage.png", "/Project Pics/Movieapp/Favoriten.png", "/Project Pics/Movieapp/FavoritenDetailPage.png", "/Project Pics/Movieapp/Suche.png"],
    videoUrl: "/Project Pics/Movieapp/AbsoluteCinemaDemo.mp4",
    category: "ios",
    role: "iOS Developer",
    duration: "6 Wochen",
    context: "Hochschulprojekt",
    contextEn: "University Project",
    sections: [
      { heading: "Überblick", content: "Eine native Swift-Anwendung, die die TMDB-API nutzt, um aktuelle Filme, Serien und Bewertungen anzuzeigen. Die App bietet eine intuitive Benutzeroberfläche für Film-Enthusiasten.", images: ["/Project Pics/Movieapp/Homepage.png"] },
      { heading: "Features", content: "Umfassende Suchfunktion mit Filterung, Detailansichten mit Trailer-Links und Bewertungen, sowie eine Favoritenliste mit lokalem Persistence-Layer via CoreData. Die App unterstützt Pull-to-Refresh und Infinite Scrolling.", images: ["/Project Pics/Movieapp/DetailPage.png", "/Project Pics/Movieapp/Suche.png"] },
      { heading: "Architektur", content: "Implementiert nach dem MVVM-Pattern mit klarer Trennung von View, ViewModel und Model. Netzwerkanfragen werden asynchron über URLSession abgewickelt. CoreData dient als lokale Datenbank für die Favoritenliste.", images: ["/Project Pics/Movieapp/Favoriten.png", "/Project Pics/Movieapp/FavoritenDetailPage.png"] },
    ],
    sectionsEn: [
      { heading: "Overview", content: "A native Swift application using the TMDB API to display current movies, series, and ratings. The app provides an intuitive interface for movie enthusiasts.", images: ["/Project Pics/Movieapp/Homepage.png"] },
      { heading: "Features", content: "Comprehensive search with filtering, detail views with trailer links and ratings, and a favorites list with local persistence via CoreData. Supports pull-to-refresh and infinite scrolling.", images: ["/Project Pics/Movieapp/DetailPage.png", "/Project Pics/Movieapp/Suche.png"] },
      { heading: "Architecture", content: "Implemented using the MVVM pattern with clear separation of View, ViewModel, and Model. Network requests are handled asynchronously via URLSession. CoreData serves as local database for favorites.", images: ["/Project Pics/Movieapp/Favoriten.png", "/Project Pics/Movieapp/FavoritenDetailPage.png"] },
    ],
  },
  {
    slug: "restaurant-app",
    title: "Android Restaurant App",
    description: "Native Android App für ein Restaurant. Zeigt Speisekarte, Öffnungszeiten und ermöglicht Tischreservierungen.",
    descriptionEn: "Native Android app for a restaurant. Shows menu, hours, and allows table reservations.",
    tags: ["Android", "Kotlin", "Mobile"],
    demoLink: "#", repoLink: "#",
    image: "/Project Pics/RestaurantApp/Homepage.png",
    images: ["/Project Pics/RestaurantApp/Homepage.png", "/Project Pics/RestaurantApp/Cart.png", "/Project Pics/RestaurantApp/Rindfleisch.png", "/Project Pics/RestaurantApp/Salad.png"],
    videoUrl: "/Project Pics/RestaurantApp/RestaurantAppDemo.mp4",
    category: "android",
    role: "Android Developer",
    duration: "6 Wochen",
    context: "Hochschulprojekt",
    contextEn: "University Project",
    sections: [
      { heading: "Überblick", content: "Eine in Kotlin entwickelte Android-App für ein lokales Restaurant. Die App zeigt die vollständige Speisekarte mit Kategorien und Bildern sowie Öffnungszeiten.", images: ["/Project Pics/RestaurantApp/Homepage.png"] },
      { heading: "Speisekarte & Bestellung", content: "Die digitale Speisekarte ist in Kategorien organisiert mit hochwertigen Produktbildern. Nutzer können Gerichte in den Warenkorb legen und Bestellungen aufgeben. Ein übersichtlicher Checkout-Prozess rundet das Erlebnis ab.", images: ["/Project Pics/RestaurantApp/Rindfleisch.png", "/Project Pics/RestaurantApp/Salad.png"] },
      { heading: "Warenkorb & Reservierung", content: "Ein vollständiges Warenkorb-System mit Mengenauswahl und Gesamtpreisberechnung. Zusätzlich bietet die App ein einfaches Reservierungssystem mit Datenpersistenz.", images: ["/Project Pics/RestaurantApp/Cart.png"] },
    ],
    sectionsEn: [
      { heading: "Overview", content: "A Kotlin-developed Android app for a local restaurant. The app shows the complete menu with categories and images, plus opening hours.", images: ["/Project Pics/RestaurantApp/Homepage.png"] },
      { heading: "Menu & Ordering", content: "The digital menu is organized by categories with high-quality product images. Users can add dishes to cart and place orders. A clear checkout process completes the experience.", images: ["/Project Pics/RestaurantApp/Rindfleisch.png", "/Project Pics/RestaurantApp/Salad.png"] },
      { heading: "Cart & Reservation", content: "A complete cart system with quantity selection and total price calculation. Additionally, the app offers a simple reservation system with data persistence.", images: ["/Project Pics/RestaurantApp/Cart.png"] },
    ],
  },
  {
    slug: "wizard-platformer",
    title: "Wizard Platformer",
    description: "Ein Mobile Game in Unity. Klassischer Platformer mit Shooting-Mechaniken, Monster-Gegnern und Boss-Fights.",
    descriptionEn: "A mobile game built in Unity. Classic platformer with shooting mechanics, monster enemies, and boss fights.",
    tags: ["Unity", "C#", "Game Dev", "Mobile"],
    demoLink: "#", repoLink: "#",
    image: "/Project Pics/wizardGame/Game1.png",
    images: ["/Project Pics/wizardGame/Game1.png", "/Project Pics/wizardGame/Game2.png", "/Project Pics/wizardGame/Game3.png", "/Project Pics/wizardGame/Game4.png"],
    videoUrl: "/Project Pics/wizardGame/WizardGameDemo.mp4",
    category: "game",
    role: "Game Developer",
    duration: "1 Semester",
    context: "Hochschulprojekt",
    contextEn: "University Project",
    sections: [
      { heading: "Überblick", content: "Ein vollständiges 2D-Platformer-Game, entwickelt in Unity mit C#. Der Spieler übernimmt die Rolle eines Zauberers, der sich durch verschiedene Level kämpft.", images: ["/Project Pics/wizardGame/Game1.png"] },
      { heading: "Gameplay & Mechaniken", content: "Das Spiel enthält mehrere Level mit steigender Schwierigkeit, unterschiedliche Gegnertypen mit eigener KI und ein Magie-System mit verschiedenen Zaubersprüchen. Der Spieler kann springen, schießen und spezielle Fähigkeiten einsetzen.", images: ["/Project Pics/wizardGame/Game2.png", "/Project Pics/wizardGame/Game3.png"] },
      { heading: "Boss-Kämpfe & Level-Design", content: "Epische Boss-Kämpfe am Ende jedes Abschnitts erfordern Strategie und Geschicklichkeit. Das Level-Design wurde sorgfältig gestaltet mit Plattformen, Hindernissen und versteckten Bereichen.", images: ["/Project Pics/wizardGame/Game4.png"] },
    ],
    sectionsEn: [
      { heading: "Overview", content: "A complete 2D platformer game built in Unity with C#. The player takes on the role of a wizard fighting through various levels.", images: ["/Project Pics/wizardGame/Game1.png"] },
      { heading: "Gameplay & Mechanics", content: "The game features multiple levels with increasing difficulty, different enemy types with their own AI, and a magic system with various spells. The player can jump, shoot, and use special abilities.", images: ["/Project Pics/wizardGame/Game2.png", "/Project Pics/wizardGame/Game3.png"] },
      { heading: "Boss Fights & Level Design", content: "Epic boss fights at the end of each section require strategy and skill. Level design was carefully crafted with platforms, obstacles, and hidden areas.", images: ["/Project Pics/wizardGame/Game4.png"] },
    ],
  },
  /* {
    slug: "connect-plus",
    title: "Connect+ Prototype",
    description: "High-Fidelity Prototyp für eine Campus-App, die Studenten vernetzt. Features: Onboarding, Activity-Partner Suche und AI-Chat.",
    descriptionEn: "High-fidelity prototype for a campus app connecting students. Features: onboarding, activity partner search, and AI chat.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    demoLink: "#",
    repoLink: "https://gitlab.mi.hdm-stuttgart.de/ks249/kerem_sarica_portfolio_projects/-/tree/main/Android%20App%20(Kotlin)",
    image: "https://cdn.prod.website-files.com/6738added5b10100430d0893/6741cefd96314aff2f55eff0_Screenshot%202024-11-23%20at%2013.47.36.png",
    images: ["https://cdn.prod.website-files.com/6738added5b10100430d0893/6741cefd96314aff2f55eff0_Screenshot%202024-11-23%20at%2013.47.36.png"],
    videoUrl: "",
    category: "figma",
    role: "UX/UI Designer",
    duration: "6 Wochen",
    context: "Hochschulprojekt",
    contextEn: "University Project",
    sections: [
      { heading: "Überblick", content: "Ein vollständiger UX-Prozess von Research über Wireframes bis zum High-Fidelity Figma-Prototyp. Die App adressiert das Problem der sozialen Isolation auf dem Campus." },
      { heading: "Research & Konzept", content: "Umfangreiche User Research mit Interviews und Umfragen bildete die Grundlage. Personas und User Journeys wurden erstellt, um die Bedürfnisse der Zielgruppe zu verstehen." },
      { heading: "Design & Prototyping", content: "Von Low-Fidelity Wireframes über Iterationen bis zum finalen High-Fidelity Prototyp. Features umfassen Onboarding-Flow, Activity-Partner Matching, Event-Discovery und einen AI-gestützten Chat." },
    ],
    sectionsEn: [
      { heading: "Overview", content: "A complete UX process from research to wireframes to high-fidelity Figma prototype. The app addresses social isolation on campus." },
      { heading: "Research & Concept", content: "Extensive user research with interviews and surveys formed the foundation. Personas and user journeys were created to understand target audience needs." },
      { heading: "Design & Prototyping", content: "From low-fidelity wireframes through iterations to the final high-fidelity prototype. Features include onboarding flow, activity partner matching, event discovery, and an AI-powered chat." },
    ],
  }, */
  {
    slug: "fitness-tracker",
    title: "Fitness Tracker Desktop",
    description: "JavaFX Desktop-Anwendung zur Analyse von Trainingsdaten, Kalorienberechnung und Workout-Planung.",
    descriptionEn: "JavaFX desktop app for training data analysis, calorie calculation, and workout planning.",
    tags: ["Java", "JavaFX", "Software Engineering"],
    demoLink: "#",
    repoLink: "https://gitlab.mi.hdm-stuttgart.de/ks249/kerem_sarica_portfolio_projects/-/tree/main/Java%20Web%20Application",
    image: "/Project Pics/FitnessTracker/Homepage.png",
    images: ["/Project Pics/FitnessTracker/Homepage.png", "/Project Pics/FitnessTracker/Kalorienbedarf.png", "/Project Pics/FitnessTracker/Login.png", "/Project Pics/FitnessTracker/Statistics.png", "/Project Pics/FitnessTracker/Workout.png"],
    videoUrl: "/Project Pics/FitnessTracker/FitnessTrackerDemo.mp4",
    category: "desktop",
    role: "Fullstack Developer",
    duration: "1 Semester",
    context: "Hochschulprojekt (Software Engineering)",
    contextEn: "University Project (Software Engineering)",
    sections: [
      { heading: "Überblick", content: "Eine umfangreiche Desktop-Applikation entwickelt mit Java und JavaFX. Nutzer können Trainingseinheiten erfassen, Kalorienbilanzen tracken und Fortschritte visualisieren.", images: ["/Project Pics/FitnessTracker/Homepage.png"] },
      { heading: "Features & Funktionen", content: "Workout-Planung mit verschiedenen Übungstypen, Kalorienbedarfsrechner basierend auf persönlichen Daten, und interaktive Charts zur Visualisierung des Trainingsfortschritts.", images: ["/Project Pics/FitnessTracker/Workout.png", "/Project Pics/FitnessTracker/Kalorienbedarf.png"] },
      { heading: "Software Engineering Prozess", content: "Das Projekt folgte einem vollständigen Software-Engineering-Prozess: Anforderungsanalyse, UML-Diagramme, agile Entwicklung mit Sprints, Code-Reviews und Dokumentation.", images: ["/Project Pics/FitnessTracker/Statistics.png"] },
    ],
    sectionsEn: [
      { heading: "Overview", content: "An extensive desktop application built with Java and JavaFX. Users can log training sessions, track calorie balances, and visualize progress.", images: ["/Project Pics/FitnessTracker/Homepage.png"] },
      { heading: "Features & Functions", content: "Workout planning with various exercise types, calorie calculator based on personal data, and interactive charts for visualizing training progress.", images: ["/Project Pics/FitnessTracker/Workout.png", "/Project Pics/FitnessTracker/Kalorienbedarf.png"] },
      { heading: "Software Engineering Process", content: "The project followed a complete software engineering process: requirements analysis, UML diagrams, agile development with sprints, code reviews, and documentation.", images: ["/Project Pics/FitnessTracker/Statistics.png"] },
    ],
  },
];