/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Github, PlayCircle } from "lucide-react";
import { projects, Project, ProjectCategory } from "@/data/projects";
import { useTranslation } from "@/context/LanguageProvider";
import type { TranslationKey } from "@/data/translations";

/* ── Category config ──────────────────────────────────────────────────────── */

const placeholderConfig: Record<ProjectCategory, { bg: string; labelKey: TranslationKey; icon: React.ReactNode }> = {
  ios: { bg: "from-slate-900 to-slate-700", labelKey: "cat.ios", icon: <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 opacity-90"><rect x="10" y="2" width="28" height="44" rx="6" stroke="white" strokeWidth="2"/><rect x="14" y="8" width="20" height="30" rx="2" fill="white" fillOpacity="0.08"/><circle cx="24" cy="43" r="2" fill="white" fillOpacity="0.5"/></svg> },
  android: { bg: "from-emerald-900 to-emerald-700", labelKey: "cat.android", icon: <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 opacity-90"><path d="M8 36V20C8 14.477 13.373 10 24 10C34.627 10 40 14.477 40 20V36" stroke="white" strokeWidth="2"/><rect x="8" y="20" width="32" height="20" rx="3" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="2"/></svg> },
  game: { bg: "from-violet-900 to-violet-700", labelKey: "cat.game", icon: <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 opacity-90"><rect x="4" y="14" width="40" height="24" rx="8" stroke="white" strokeWidth="2"/></svg> },
  figma: { bg: "from-rose-900 to-pink-800", labelKey: "cat.figma", icon: <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 opacity-90"><rect x="10" y="4" width="13" height="13" rx="6.5" stroke="white" strokeWidth="2"/><rect x="25" y="4" width="13" height="13" rx="2" stroke="white" strokeWidth="2"/></svg> },
  desktop: { bg: "from-sky-900 to-sky-700", labelKey: "cat.desktop", icon: <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 opacity-90"><rect x="4" y="6" width="40" height="28" rx="3" stroke="white" strokeWidth="2"/></svg> },
  web: { bg: "from-blue-900 to-indigo-800", labelKey: "cat.web", icon: <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 opacity-90"><circle cx="24" cy="24" r="18" stroke="white" strokeWidth="2"/><ellipse cx="24" cy="24" rx="8" ry="18" stroke="white" strokeWidth="2"/></svg> },
  fullstack: { bg: "from-amber-900 to-orange-800", labelKey: "cat.fullstack", icon: <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 opacity-90"><rect x="4" y="8" width="40" height="10" rx="2" stroke="white" strokeWidth="2"/></svg> },
};

function ProjectPlaceholder({ category }: { category: ProjectCategory }) {
  const cfg = placeholderConfig[category];
  return (
    <div className={`w-full h-full bg-linear-to-br ${cfg.bg} flex flex-col items-center justify-center gap-3`}>
      {cfg.icon}
    </div>
  );
}

/* ── Project Card (links to detail page) ──────────────────────────────────── */

function ProjectCard({ project }: { project: Project }) {
  const { lang, t } = useTranslation();
  const hasImage = project.image && (project.image.startsWith("/") || project.image.startsWith("http"));
  const description = lang === "en" ? (project.descriptionEn || project.description) : project.description;
  const cfg = placeholderConfig[project.category];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-card group text-left flex flex-col rounded-3xl overflow-hidden w-full"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div className="relative h-56 w-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
        {hasImage ? (
          <img src={project.image} alt={project.title} loading="lazy" className="project-card-img object-cover w-full h-full" />
        ) : (
          <ProjectPlaceholder category={project.category} />
        )}
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold rounded-full tracking-[0.06em] uppercase">
          {t(cfg.labelKey)}
        </span>
      </div>

      <div className="p-7 flex flex-col grow">
        <div className="mb-4 grow">
          <h3 className="text-xl font-bold tracking-tight mb-2 leading-snug" style={{ color: "var(--fg-primary)" }}>{project.title}</h3>
          <p className="text-[15px] line-clamp-3 leading-relaxed" style={{ color: "var(--fg-secondary)" }}>{description}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="px-2.5 py-1 border text-[11px] font-semibold rounded-full tracking-wide" style={{ background: "var(--bg-elevated)", borderColor: "var(--border-subtle)", color: "var(--fg-secondary)" }}>{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <span className="project-card-label text-xs font-medium tracking-wider uppercase">{t(cfg.labelKey)}</span>
          <div className="flex items-center gap-3">
            {project.repoLink && project.repoLink !== "#" && (
              <span className="project-card-link flex items-center gap-1.5 text-xs font-semibold"><Github size={14} /> Code</span>
            )}
            {project.demoLink && project.demoLink !== "#" && (
              <span className="project-card-link flex items-center gap-1.5 text-xs font-semibold"><PlayCircle size={14} /> Demo</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ── Main Export ──────────────────────────────────────────────────────────── */

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: "var(--fg-primary)" }}>{t("projects.heading")}</h2>
        <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "var(--fg-secondary)" }}>{t("projects.desc")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}