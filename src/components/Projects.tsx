"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Github, PlayCircle, X, ChevronLeft, ChevronRight, Video, Maximize2 } from "lucide-react";
import { projects, Project, ProjectCategory } from "@/data/projects";

// ─── Smart Placeholder Icons ──────────────────────────────────────────────────

const placeholderConfig: Record<
  ProjectCategory,
  { bg: string; label: string; icon: React.ReactNode }
> = {
  ios: {
    bg: "from-slate-900 to-slate-700",
    label: "iOS App",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 opacity-90">
        <rect x="10" y="2" width="28" height="44" rx="6" stroke="white" strokeWidth="2" />
        <rect x="14" y="8" width="20" height="30" rx="2" fill="white" fillOpacity="0.08" />
        <circle cx="24" cy="43" r="2" fill="white" fillOpacity="0.5" />
        <line x1="20" y1="5" x2="28" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  android: {
    bg: "from-emerald-900 to-emerald-700",
    label: "Android App",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 opacity-90">
        <path d="M8 36V20C8 14.477 13.373 10 24 10C34.627 10 40 14.477 40 20V36" stroke="white" strokeWidth="2" />
        <rect x="8" y="20" width="32" height="20" rx="3" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="2" />
        <circle cx="17" cy="30" r="2.5" fill="white" fillOpacity="0.7" />
        <circle cx="31" cy="30" r="2.5" fill="white" fillOpacity="0.7" />
        <line x1="16" y1="8" x2="12" y2="4" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="8" x2="36" y2="4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  game: {
    bg: "from-violet-900 to-violet-700",
    label: "Game Dev",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 opacity-90">
        <rect x="4" y="14" width="40" height="24" rx="8" stroke="white" strokeWidth="2" />
        <line x1="16" y1="26" x2="22" y2="26" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="19" y1="23" x2="19" y2="29" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="31" cy="24" r="1.5" fill="white" fillOpacity="0.9" />
        <circle cx="35" cy="28" r="1.5" fill="white" fillOpacity="0.9" />
      </svg>
    ),
  },
  figma: {
    bg: "from-rose-900 to-pink-800",
    label: "UI/UX Design",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 opacity-90">
        <rect x="10" y="4" width="13" height="13" rx="6.5" stroke="white" strokeWidth="2" />
        <rect x="25" y="4" width="13" height="13" rx="2" stroke="white" strokeWidth="2" />
        <rect x="10" y="18" width="13" height="13" rx="2" stroke="white" strokeWidth="2" />
        <rect x="25" y="18" width="13" height="13" rx="2" stroke="white" strokeWidth="2" />
        <rect x="10" y="32" width="13" height="13" rx="2" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  desktop: {
    bg: "from-sky-900 to-sky-700",
    label: "Desktop App",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 opacity-90">
        <rect x="4" y="6" width="40" height="28" rx="3" stroke="white" strokeWidth="2" />
        <rect x="8" y="10" width="32" height="20" rx="1" fill="white" fillOpacity="0.08" />
        <line x1="16" y1="42" x2="32" y2="42" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="34" x2="24" y2="42" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  web: {
    bg: "from-blue-900 to-indigo-800",
    label: "Web App",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 opacity-90">
        <circle cx="24" cy="24" r="18" stroke="white" strokeWidth="2" />
        <ellipse cx="24" cy="24" rx="8" ry="18" stroke="white" strokeWidth="2" />
        <line x1="6" y1="24" x2="42" y2="24" stroke="white" strokeWidth="2" />
        <line x1="8" y1="16" x2="40" y2="16" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="8" y1="32" x2="40" y2="32" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
      </svg>
    ),
  },
  fullstack: {
    bg: "from-amber-900 to-orange-800",
    label: "Fullstack",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 opacity-90">
        <rect x="4" y="8" width="40" height="10" rx="2" stroke="white" strokeWidth="2" />
        <rect x="4" y="22" width="40" height="10" rx="2" stroke="white" strokeWidth="2" />
        <rect x="4" y="36" width="40" height="6" rx="2" stroke="white" strokeWidth="2" />
        <circle cx="10" cy="13" r="2" fill="white" fillOpacity="0.7" />
        <circle cx="10" cy="27" r="2" fill="white" fillOpacity="0.7" />
      </svg>
    ),
  },
};

function ProjectPlaceholder({ category }: { category: ProjectCategory }) {
  const cfg = placeholderConfig[category];
  return (
    <div className={`w-full h-full bg-gradient-to-br ${cfg.bg} flex flex-col items-center justify-center gap-3`}>
      {cfg.icon}
      <span className="text-white/50 text-xs font-medium tracking-widest uppercase">{cfg.label}</span>
    </div>
  );
}

// ─── Fullscreen Lightbox ──────────────────────────────────────────────────────

function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/96" onClick={onClose}>
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <X size={20} className="text-white" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={22} className="text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight size={22} className="text-white" />
          </button>
        </>
      )}

      <img
        key={idx}
        src={images[idx]}
        alt={`Bild ${idx + 1}`}
        className="lightbox-img-fade max-w-[92vw] max-h-[90vh] object-contain select-none rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIdx(i); }}
              className={`rounded-full transition-all duration-200 ${i === idx ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Project Detail Modal ─────────────────────────────────────────────────────

function GalleryModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const allImages =
    project.images && project.images.length > 0
      ? project.images
      : project.image
      ? [project.image]
      : [];

  const [current, setCurrent] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + allImages.length) % allImages.length),
    [allImages.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % allImages.length),
    [allImages.length]
  );

  useEffect(() => {
    if (lightboxIdx !== null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next, lightboxIdx]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const cfg = placeholderConfig[project.category];
  const hasDemo = project.demoLink && project.demoLink !== "#";
  const hasRepo = project.repoLink && project.repoLink !== "#";

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xl" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
        <div
          className="relative pointer-events-auto bg-white rounded-[28px] w-full max-w-[900px] max-h-[90vh] overflow-hidden flex flex-col"
          style={{ boxShadow: "0 40px 120px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.06)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── IMAGE SECTION (top, full-width) ─────────────────── */}
          <div className="relative bg-gray-950 shrink-0" style={{ height: "clamp(240px, 42vh, 400px)" }}>

            {allImages.length > 0 ? (
              <>
                {/* Main image — object-cover fills the panel, click opens lightbox */}
                <div
                  className="w-full h-full overflow-hidden cursor-zoom-in group/img"
                  onClick={() => setLightboxIdx(current)}
                >
                  <img
                    key={current}
                    src={allImages[current]}
                    alt={`${project.title} Bild ${current + 1}`}
                    className="modal-img-fade w-full h-full object-cover"
                  />
                  {/* Vollbild hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-200" />
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1.5 rounded-lg">
                      <Maximize2 size={11} />
                      Vollbild
                    </div>
                  </div>
                </div>

                {/* Prev / Next arrows (always visible, not just mobile) */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prev(); }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 flex items-center justify-center transition-colors z-10"
                    >
                      <ChevronLeft size={18} className="text-white" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); next(); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 flex items-center justify-center transition-colors z-10"
                    >
                      <ChevronRight size={18} className="text-white" />
                    </button>
                  </>
                )}

                {/* Thumbnail strip overlaid at bottom */}
                {allImages.length > 1 && (
                  <div className="absolute bottom-0 left-0 right-0 flex gap-2 px-4 pb-3 pt-8 overflow-x-auto"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)", scrollbarWidth: "none" }}
                  >
                    {allImages.map((src, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                        className={`shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-150 ${
                          i === current
                            ? "border-white scale-105 opacity-100"
                            : "border-transparent opacity-50 hover:opacity-80"
                        }`}
                      >
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Dot indicators (single image) */}
                {allImages.length === 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    <div className="w-5 h-1.5 rounded-full bg-white/70" />
                  </div>
                )}
              </>
            ) : (
              <ProjectPlaceholder category={project.category} />
            )}

            {/* Close button — always on top right of image */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 flex items-center justify-center transition-colors"
              aria-label="Schließen"
            >
              <X size={15} className="text-white" />
            </button>
          </div>

          {/* ── TEXT / INFO SECTION (below image, scrollable) ─── */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-7 md:p-9">

              {/* Header row: title + category badge */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-2xl md:text-[26px] font-bold text-gray-900 tracking-tight leading-tight">
                  {project.title}
                </h2>
                <span className="shrink-0 mt-1 px-2.5 py-1 bg-gray-100 text-gray-400 text-[10px] font-bold rounded-full tracking-[0.1em] uppercase whitespace-nowrap">
                  {cfg.label}
                </span>
              </div>

              {/* Description */}
              <p className="text-[15px] text-gray-500 leading-[1.75] mb-6">
                {project.longDescription || project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-7">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-500 text-[11px] font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 mb-6" />

              {/* Video section */}
              <div className="mb-6">
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.14em] mb-3">Demo Video</p>
                {project.videoUrl ? (
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                    <iframe
                      src={project.videoUrl}
                      title={`${project.title} demo`}
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-dashed border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                      <Video size={17} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-gray-400">Folgt in Kürze</p>
                      <p className="text-[12px] text-gray-300 mt-0.5">Demo-Video wird noch aufgenommen</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              {(hasDemo || hasRepo) && (
                <div className="flex gap-3">
                  {hasDemo && (
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-5 bg-gray-900 text-white text-[13px] font-semibold rounded-xl hover:bg-gray-700 transition-colors"
                    >
                      <PlayCircle size={16} />
                      {project.tags.includes("Game Dev") ? "Video Demo" : "Live Demo"}
                    </Link>
                  )}
                  {hasRepo && (
                    <Link
                      href={project.repoLink}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-5 border border-gray-200 text-gray-700 text-[13px] font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <Github size={16} />
                      Code ansehen
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          images={allImages}
          startIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const hasImage =
    project.image &&
    (project.image.startsWith("/") || project.image.startsWith("http"));

  return (
    <>
    <button
      onClick={onClick}
      className="project-card group text-left flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 w-full"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-card-img object-cover w-full h-full"
          />
        ) : (
          <ProjectPlaceholder category={project.category} />
        )}
      </div>

      <div className="p-7 flex flex-col flex-grow">
        <div className="mb-4 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2 leading-snug">
            {project.title}
          </h3>
          <p className="text-[15px] text-gray-500 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-500 text-[11px] font-semibold rounded-full tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="project-card-label text-xs font-medium text-gray-300 tracking-wider uppercase">
            {placeholderConfig[project.category].label}
          </span>
          <div className="flex items-center gap-3">
            {project.repoLink && project.repoLink !== "#" && (
              <span className="project-card-link flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                <Github size={14} />
                Code
              </span>
            )}
            {project.demoLink && project.demoLink !== "#" && (
              <span className="project-card-link flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                <PlayCircle size={14} />
                Demo
              </span>
            )}
          </div>
        </div>
      </div>
    </button>

    </>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
          Ausgewählte Projekte
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
          Eine Mischung aus Mobile Apps, Game Development und Fullstack Web-Anwendungen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {selected && (
        <GalleryModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}