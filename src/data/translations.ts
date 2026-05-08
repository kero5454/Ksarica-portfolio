// src/data/translations.ts
// ──────────────────────────────────────────────────────────────────────────────
// Central translation file for DE / EN.
// Every translatable string in the portfolio is keyed here.
// ──────────────────────────────────────────────────────────────────────────────

const de = {
  // ── Navbar ──────────────────────────────────────────────────────────────────
  "nav.home": "Home",
  "nav.career": "Werdegang",
  "nav.portfolio": "Portfolio",
  "nav.resume": "Lebenslauf",
  "nav.contact": "Kontakt",
  "nav.email": "E-Mail senden",
  "nav.linkedin": "LinkedIn",
  "nav.github": "GitHub",

  // ── Hero ────────────────────────────────────────────────────────────────────
  "hero.badge": "Open for Work · 2026",
  "hero.subtitle": "DESIGNER × SOFTWARE ENGINEER",
  "hero.heading1": "Hi, ich bin",
  "hero.heading2": "Kerem.",
  "hero.heading3": "Ich baue.",
  "hero.desc":
    "Ich entwickle nicht nur Code, sondern digitale Erlebnisse — von Web & Mobile bis zu intuitivem UI/UX.",
  "hero.cta.projects": "Projekte ansehen",
  "hero.cta.resume": "Lebenslauf",
  "hero.badge.location.label": "Standort",
  "hero.badge.location.value": "Deutschland",
  "hero.badge.role.label": "Mobile Media",
  "hero.badge.role.value": "B.Sc. Student",

  // ── Stats ───────────────────────────────────────────────────────────────────
  "stats.years": "Jahre Erfahrung",
  "stats.projects": "Projekte",
  "stats.platforms": "Plattformen",
  "stats.design": "Design",

  // ── Timeline ────────────────────────────────────────────────────────────────
  "timeline.label": "Werdegang",
  "timeline.heading": "Experience Journey",
  "timeline.desc":
    "Mein Weg als Entwickler und Designer – akademisch und in der Praxis.",
  "timeline.cta": "Vollständigen Lebenslauf ansehen",

  // ── About ───────────────────────────────────────────────────────────────────
  "about.label": "Über Mich",
  "about.heading1": "Die Brücke zwischen",
  "about.heading2": "Design & Code",
  "about.p1H": "H",
  "about.p1":
    "allo! Ich bin Kerem, ein passionierter Software Engineer und Designer. Meine Reise begann mit der Faszination dafür, wie Dinge funktionieren – heute entwickle ich moderne Web-Apps, die nicht nur gut aussehen, sondern auch performant sind.",
  "about.p2":
    "Ob es um komplexe Algorithmen oder pixelgenaues UI-Design geht – ich liebe es, Probleme kreativ zu lösen und Nutzererlebnisse zu schaffen, die begeistern.",
  "about.status.label": "Aktueller Status",
  "about.status.value": "Student & Software Developer",
  "about.skills.heading": "Tech Stack & Skills",

  // ── Projects ────────────────────────────────────────────────────────────────
  "projects.heading": "Ausgewählte Projekte",
  "projects.desc":
    "Eine Mischung aus Mobile Apps, Game Development und Fullstack Web-Anwendungen.",
  "projects.demo": "Live Demo",
  "projects.gameDemo": "Video Demo",
  "projects.code": "Code ansehen",
  "projects.video.label": "Demo Video",
  "projects.video.play": "Video abspielen",
  "projects.video.soon": "Folgt in Kürze",
  "projects.video.soonDesc": "Demo-Video wird noch aufgenommen",
  "projects.fullscreen": "Vollbild",
  "projects.close": "Schließen",

  // ── Contact ─────────────────────────────────────────────────────────────────
  "contact.label": "/05 — KONTAKT",
  "contact.heading1": "Lass uns etwas",
  "contact.heading2": "bauen.",
  "contact.desc":
    "Praktika, Werkstudent, Freelance — schick mir eine Mail und ich antworte innerhalb von 24h.",
  "contact.email": "keremsarica@outlook.de",

  // ── Footer ──────────────────────────────────────────────────────────────────
  "footer.rights": "Alle Rechte vorbehalten.",
  "footer.impressum": "Impressum",
  "footer.datenschutz": "Datenschutz",
  "footer.location": "Stuttgart, DE",
  "footer.built": "Gebaut mit Aufmerksamkeit für Details.",

  // ── Category labels ─────────────────────────────────────────────────────────
  "cat.ios": "iOS App",
  "cat.android": "Android App",
  "cat.game": "Game Dev",
  "cat.figma": "UI/UX Design",
  "cat.desktop": "Desktop App",
  "cat.web": "Web App",
  "cat.fullstack": "Fullstack",

  // ── CV / Lebenslauf page ─────────────────────────────────────────────────
  "cv.title":       "Lebenslauf",
  "cv.subtitle":    "Mein Werdegang, Erfahrungen und Qualifikationen im Überblick.",
  "cv.download":    "PDF Download",
  "cv.contact":     "Kontakt",
  "cv.itSkills":    "IT-Kenntnisse",
  "cv.softSkills":  "Soft Skills",
  "cv.languages":   "Sprachen",
  "cv.other":       "Sonstiges",
  "cv.experience":  "Beruflicher Werdegang",
  "cv.education":   "Akademischer Werdegang",
  "cv.linkedin":    "LinkedIn Profil",
  "cv.location":    "Standort",
  "cv.currently":   "Aktuell",
} as const;

const en: Record<keyof typeof de, string> = {
  // ── Navbar ──────────────────────────────────────────────────────────────────
  "nav.home": "Home",
  "nav.career": "Career",
  "nav.portfolio": "Portfolio",
  "nav.resume": "Resume",
  "nav.contact": "Contact",
  "nav.email": "Send Email",
  "nav.linkedin": "LinkedIn",
  "nav.github": "GitHub",

  // ── Hero ────────────────────────────────────────────────────────────────────
  "hero.badge": "Open for Work · 2026",
  "hero.subtitle": "DESIGNER × SOFTWARE ENGINEER",
  "hero.heading1": "Hi, I'm",
  "hero.heading2": "Kerem.",
  "hero.heading3": "I build.",
  "hero.desc":
    "I don't just write code — I craft digital experiences, from web & mobile to intuitive UI/UX.",
  "hero.cta.projects": "View Projects",
  "hero.cta.resume": "Resume",
  "hero.badge.location.label": "Based in",
  "hero.badge.location.value": "Germany",
  "hero.badge.role.label": "Mobile Media",
  "hero.badge.role.value": "B.Sc. Student",

  // ── Stats ───────────────────────────────────────────────────────────────────
  "stats.years": "Years Experience",
  "stats.projects": "Projects",
  "stats.platforms": "Platforms",
  "stats.design": "Design",

  // ── Timeline ────────────────────────────────────────────────────────────────
  "timeline.label": "Career",
  "timeline.heading": "Experience Journey",
  "timeline.desc":
    "My journey as a developer and designer — academic and professional.",
  "timeline.cta": "View Full Resume",

  // ── About ───────────────────────────────────────────────────────────────────
  "about.label": "About Me",
  "about.heading1": "Bridging the gap between",
  "about.heading2": "Design & Code",
  "about.p1H": "H",
  "about.p1":
    "ello! I'm Kerem, a passionate software engineer and designer. My journey began with a fascination for how things work — today I build modern web apps that don't just look good, but perform great.",
  "about.p2":
    "Whether it's complex algorithms or pixel-perfect UI design — I love solving problems creatively and crafting user experiences that delight.",
  "about.status.label": "Current Status",
  "about.status.value": "Student & Software Developer",
  "about.skills.heading": "Tech Stack & Skills",

  // ── Projects ────────────────────────────────────────────────────────────────
  "projects.heading": "Selected Projects",
  "projects.desc":
    "A mix of mobile apps, game development, and fullstack web applications.",
  "projects.demo": "Live Demo",
  "projects.gameDemo": "Video Demo",
  "projects.code": "View Code",
  "projects.video.label": "Demo Video",
  "projects.video.play": "Play Video",
  "projects.video.soon": "Coming Soon",
  "projects.video.soonDesc": "Demo video is being recorded",
  "projects.fullscreen": "Fullscreen",
  "projects.close": "Close",

  // ── Contact ─────────────────────────────────────────────────────────────────
  "contact.label": "/05 — CONTACT",
  "contact.heading1": "Let's build",
  "contact.heading2": "something.",
  "contact.desc":
    "Internships, working student, freelance — send me an email and I'll reply within 24h.",
  "contact.email": "keremsarica@outlook.de",

  // ── Footer ──────────────────────────────────────────────────────────────────
  "footer.rights": "All rights reserved.",
  "footer.impressum": "Imprint",
  "footer.datenschutz": "Privacy Policy",
  "footer.location": "Stuttgart, DE",
  "footer.built": "Built with attention to detail.",

  // ── Category labels ─────────────────────────────────────────────────────────
  "cat.ios": "iOS App",
  "cat.android": "Android App",
  "cat.game": "Game Dev",
  "cat.figma": "UI/UX Design",
  "cat.desktop": "Desktop App",
  "cat.web": "Web App",
  "cat.fullstack": "Fullstack",

  // ── CV / Résumé page ─────────────────────────────────────────────────────
  "cv.title":       "Résumé",
  "cv.subtitle":    "My career, experiences, and qualifications at a glance.",
  "cv.download":    "Download PDF",
  "cv.contact":     "Contact",
  "cv.itSkills":    "IT Skills",
  "cv.softSkills":  "Soft Skills",
  "cv.languages":   "Languages",
  "cv.other":       "Other",
  "cv.experience":  "Work Experience",
  "cv.education":   "Academic Background",
  "cv.linkedin":    "LinkedIn Profile",
  "cv.location":    "Location",
  "cv.currently":   "Present",
};

export type TranslationKey = keyof typeof de;
export const translations: Record<"de" | "en", Record<TranslationKey, string>> = { de, en };
