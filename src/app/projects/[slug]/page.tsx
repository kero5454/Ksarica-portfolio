"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft, ArrowRight, Github, PlayCircle,
  ChevronLeft, ChevronRight, X, Maximize2, Play, Video,
} from "lucide-react";
import { projects, ProjectCategory } from "@/data/projects";
import { useTranslation } from "@/context/LanguageProvider";
import type { TranslationKey } from "@/data/translations";

/* ── Category label keys ──────────────────────────────────────────────────── */

const CATEGORY_LABEL: Record<ProjectCategory, TranslationKey> = {
  ios: "cat.ios", android: "cat.android", game: "cat.game",
  figma: "cat.figma", desktop: "cat.desktop", web: "cat.web", fullstack: "cat.fullstack",
};

/* ── Lightbox ─────────────────────────────────────────────────────────────── */

function Lightbox({ images, startIndex, onClose }: { images: string[]; startIndex: number; onClose: () => void }) {
  const [idx, setIdx] = useState(startIndex);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [images.length, onClose]);

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/96" onClick={onClose}>
      <button onClick={onClose} className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
        <X size={20} className="text-white" />
      </button>
      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"><ChevronLeft size={22} className="text-white" /></button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"><ChevronRight size={22} className="text-white" /></button>
        </>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img key={idx} src={images[idx]} alt="" className="lightbox-img-fade max-w-[92vw] max-h-[90vh] object-contain select-none rounded-lg" onClick={(e) => e.stopPropagation()} />
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button key={i} onClick={(e) => { e.stopPropagation(); setIdx(i); }} className={`rounded-full transition-all ${i === idx ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"}`} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Lazy Video ───────────────────────────────────────────────────────────── */

function LazyVideo({ src, title }: { src: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  if (!playing) {
    return (
      <button onClick={() => setPlaying(true)} className="relative w-full aspect-video rounded-2xl overflow-hidden group" style={{ background: "var(--bg-elevated)" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: "var(--accent)" }}>
            <Play size={24} className="ml-1" style={{ color: "var(--bg-base)" }} />
          </div>
          <span className="text-[13px] font-semibold" style={{ color: "var(--fg-secondary)" }}>{title}</span>
        </div>
      </button>
    );
  }
  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
      <video src={src} controls autoPlay className="w-full h-full object-contain" playsInline />
    </div>
  );
}

/* ── TOC Sidebar ──────────────────────────────────────────────────────────── */

function TableOfContents({ headings, activeIdx, lang }: { headings: string[]; activeIdx: number; lang: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, i: number) => {
    e.preventDefault();
    const el = document.getElementById(`section-${i}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="hidden lg:block sticky top-22 w-56 shrink-0 self-start">
      <div className="rounded-xl p-4 border" style={{ background: "var(--bg-surface)", borderColor: "var(--border-subtle)" }}>
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--fg-tertiary)" }}>
          {lang === "en" ? "Contents" : "Inhalt"}
        </p>
        <ul className="space-y-1">
          {headings.map((h, i) => (
            <li key={i}>
              <a
                href={`#section-${i}`}
                onClick={(e) => handleClick(e, i)}
                className="block text-[13px] py-1.5 px-2.5 rounded-lg transition-all duration-200"
                style={{
                  color: i === activeIdx ? "var(--accent)" : "var(--fg-secondary)",
                  fontWeight: i === activeIdx ? 600 : 400,
                  background: i === activeIdx ? "var(--accent-light)" : "transparent",
                }}
              >
                {h}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ── Project Nav (bottom) ─────────────────────────────────────────────────── */

function ProjectNav({ currentSlug, lang }: { currentSlug: string; lang: string }) {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;
  if (!prev && !next) return null;

  return (
    <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="flex gap-4">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="flex-1 flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 group"
            style={{ borderColor: "var(--border-subtle)", background: "var(--bg-surface)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)"; }}
          >
            <ChevronLeft size={18} style={{ color: "var(--fg-tertiary)" }} className="shrink-0 group-hover:text-accent transition-colors" />
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wide mb-0.5" style={{ color: "var(--fg-tertiary)" }}>
                {lang === "en" ? "Previous" : "Vorheriges"}
              </p>
              <p className="text-[13px] font-semibold truncate" style={{ color: "var(--fg-primary)" }}>{prev.title}</p>
            </div>
          </Link>
        ) : <div className="flex-1" />}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="flex-1 flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 group justify-end text-right"
            style={{ borderColor: "var(--border-subtle)", background: "var(--bg-surface)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)"; }}
          >
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wide mb-0.5" style={{ color: "var(--fg-tertiary)" }}>
                {lang === "en" ? "Next" : "Nächstes"}
              </p>
              <p className="text-[13px] font-semibold truncate" style={{ color: "var(--fg-primary)" }}>{next.title}</p>
            </div>
            <ArrowRight size={18} style={{ color: "var(--fg-tertiary)" }} className="shrink-0 group-hover:text-accent transition-colors" />
          </Link>
        ) : <div className="flex-1" />}
      </div>
    </div>
  );
}

/* ── Main Page ────────────────────────────────────────────────────────────── */

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { lang, t } = useTranslation();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const project = projects.find((p) => p.slug === slug);

  /* Scroll spy */
  useEffect(() => {
    const refs = sectionRefs.current.filter(Boolean) as HTMLElement[];
    if (refs.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const idx = sectionRefs.current.indexOf(visible[0].target as HTMLElement);
          if (idx !== -1) setActiveSectionIdx(idx);
        }
      },
      { rootMargin: "-10% 0px -55% 0px", threshold: 0 }
    );
    refs.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, [project, lang]);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--fg-primary)" }}>Project not found</h1>
          <Link href="/#projects" className="text-[14px] font-semibold" style={{ color: "var(--accent)" }}>← Back to projects</Link>
        </div>
      </main>
    );
  }

  const sections = lang === "en" && project.sectionsEn ? project.sectionsEn : project.sections;
  const allImages = project.images && project.images.length > 0 ? project.images : project.image ? [project.image] : [];
  const hasVideo = !!(project.videoUrl && project.videoUrl !== "");
  const hasDemo = project.demoLink && project.demoLink !== "#";
  const hasRepo = project.repoLink && project.repoLink !== "#";
  const role = lang === "en" && project.roleEn ? project.roleEn : project.role;
  const context = lang === "en" && project.contextEn ? project.contextEn : project.context;
  const description = lang === "en" ? (project.descriptionEn || project.description) : project.description;

  /* portrait-image categories — cap height to avoid huge phone screenshots */
  const isPortraitCategory = project.category === "ios" || project.category === "android";

  const sectionHeadings = [
    ...sections.map((s) => s.heading),
    t("projects.video.label"),
  ];

  return (
    <main className="min-h-screen">
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <div className="pt-8 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[13px] font-medium mb-10 px-3 py-1.5 rounded-lg transition-colors"
            style={{ color: "var(--fg-secondary)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent-light)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            <ArrowLeft size={16} /> {lang === "en" ? "Back" : "Zurück"}
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6" style={{ color: "var(--fg-primary)" }}>
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed mb-8" style={{ color: "var(--fg-secondary)" }}>
            {description}
          </p>

          {/* Metadata row */}
          <div className="flex flex-wrap gap-6 md:gap-10 mb-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-1" style={{ color: "var(--fg-tertiary)" }}>
                {lang === "en" ? "ROLE" : "ROLLE"}
              </p>
              <p className="text-[14px] font-semibold" style={{ color: "var(--fg-primary)" }}>{role}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-1" style={{ color: "var(--fg-tertiary)" }}>
                {lang === "en" ? "DURATION" : "DAUER"}
              </p>
              <p className="text-[14px] font-semibold" style={{ color: "var(--fg-primary)" }}>{project.duration}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-1" style={{ color: "var(--fg-tertiary)" }}>
                {lang === "en" ? "CONTEXT" : "KONTEXT"}
              </p>
              <p className="text-[14px] font-semibold" style={{ color: "var(--fg-primary)" }}>{context}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-1" style={{ color: "var(--fg-tertiary)" }}>
                {lang === "en" ? "CATEGORY" : "KATEGORIE"}
              </p>
              <p className="text-[14px] font-semibold" style={{ color: "var(--fg-primary)" }}>{t(CATEGORY_LABEL[project.category])}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3.5 py-1.5 border text-[12px] font-semibold rounded-full" style={{ background: "var(--accent-light)", borderColor: "var(--border-subtle)", color: "var(--accent)" }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          {(hasDemo || hasRepo) && (
            <div className="flex gap-3">
              {hasDemo && (
                <Link href={project.demoLink} target="_blank" className="flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-xl transition-colors" style={{ background: "var(--accent)", color: "var(--bg-base)" }}>
                  <PlayCircle size={16} /> {t("projects.demo")}
                </Link>
              )}
              {hasRepo && (
                <Link href={project.repoLink} target="_blank" className="flex items-center gap-2 px-5 py-2.5 border text-[13px] font-semibold rounded-xl transition-colors" style={{ borderColor: "var(--border-subtle)", color: "var(--fg-secondary)" }}>
                  <Github size={16} /> {t("projects.code")}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Divider ──────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ borderTop: "1px solid var(--border-subtle)" }} />
      </div>

      {/* ── Content + TOC ────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex gap-12 items-start">
          {/* TOC sidebar */}
          <TableOfContents headings={sectionHeadings} activeIdx={activeSectionIdx} lang={lang} />

          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-16">
            {sections.map((section, idx) => (
              <section
                key={idx}
                id={`section-${idx}`}
                ref={(el) => { sectionRefs.current[idx] = el; }}
                className="scroll-mt-24"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-1 h-8 rounded-full mt-0.5" style={{ background: "var(--accent)" }} />
                  <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--fg-primary)" }}>{section.heading}</h2>
                </div>
                <p className="text-[16px] leading-[1.8] mb-6" style={{ color: "var(--fg-secondary)" }}>{section.content}</p>

                {section.images && section.images.length > 0 && (
                  <div className={`grid gap-4 ${section.images.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                    {section.images.map((img, imgIdx) => (
                      <button
                        key={imgIdx}
                        onClick={() => setLightboxIdx(allImages.indexOf(img) >= 0 ? allImages.indexOf(img) : 0)}
                        className="group relative rounded-2xl overflow-hidden cursor-zoom-in flex items-center justify-center"
                        style={{ background: "var(--bg-elevated)" }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img}
                          alt=""
                          loading="lazy"
                          className={`rounded-2xl transition-transform duration-300 group-hover:scale-[1.02] ${
                            isPortraitCategory
                              ? "max-h-120 w-auto max-w-full object-contain"
                              : "w-full h-auto object-cover"
                          }`}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl" />
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1.5 rounded-lg">
                            <Maximize2 size={11} /> {t("projects.fullscreen")}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* Video section */}
            <section
              id={`section-${sections.length}`}
              ref={(el) => { sectionRefs.current[sections.length] = el; }}
              className="scroll-mt-24"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-1 h-8 rounded-full mt-0.5" style={{ background: "var(--accent)" }} />
                <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--fg-primary)" }}>{t("projects.video.label")}</h2>
              </div>

              {hasVideo ? (
                <LazyVideo src={project.videoUrl!} title={t("projects.video.play")} />
              ) : (
                <div className="flex items-center gap-4 p-5 rounded-2xl border border-dashed" style={{ background: "var(--bg-elevated)", borderColor: "var(--border-subtle)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--bg-base)" }}>
                    <Video size={17} style={{ color: "var(--fg-tertiary)" }} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold" style={{ color: "var(--fg-tertiary)" }}>{t("projects.video.soon")}</p>
                    <p className="text-[12px] mt-0.5" style={{ color: "var(--fg-tertiary)" }}>{t("projects.video.soonDesc")}</p>
                  </div>
                </div>
              )}
            </section>

            {/* Next / Prev project */}
            <ProjectNav currentSlug={slug} lang={lang} />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox images={allImages} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}
    </main>
  );
}
