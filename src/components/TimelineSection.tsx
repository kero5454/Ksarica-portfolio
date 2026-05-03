"use client";

import Link from "next/link";
import { experienceData, educationData } from "@/data/cv-data";
import { Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { useTranslation } from "@/context/LanguageProvider";

const parseStartDate = (dateString: string) => {
  const months: { [key: string]: number } = {
    jan: 1, feb: 2, mär: 3, apr: 4, mai: 5, jun: 6,
    jul: 7, aug: 8, sep: 9, okt: 10, nov: 11, dez: 12,
  };
  const match = dateString.toLowerCase().match(/^([a-zäöü]+)?\s*(\d{4})/);
  if (match) {
    const monthStr = match[1];
    const year = parseInt(match[2]);
    let month = 1;
    if (monthStr) {
      const foundKey = Object.keys(months).find((k) => monthStr.startsWith(k));
      if (foundKey) month = months[foundKey];
    }
    return year * 100 + month;
  }
  return 0;
};

export default function TimelineSection() {
  const { t, lang } = useTranslation();

  const timelineItems = [
    ...experienceData.map((item) => ({ ...item, category: "work", icon: Briefcase, org: item.company })),
    ...educationData.map((item) => ({ ...item, category: "education", icon: GraduationCap, org: item.institution })),
  ];

  const selectedKeywords = ["Japan", "Praktikum", "Mobile Medien", "Medizininformatik"];

  const displayItems = selectedKeywords
    .map((keyword) => timelineItems.find((i) => i.title.includes(keyword)))
    .filter(Boolean)
    .sort((a, b) => parseStartDate(b!.date) - parseStartDate(a!.date));

  return (
    <section className="py-24 px-6 overflow-hidden" id="Werdegang">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-bold tracking-wider text-sm uppercase" style={{ color: "var(--accent)" }}>
            {t("timeline.label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4" style={{ color: "var(--fg-primary)" }}>
            {t("timeline.heading")}
          </h2>
          <p className="max-w-lg mx-auto" style={{ color: "var(--fg-secondary)" }}>
            {t("timeline.desc")}
          </p>
        </div>

        <div className="relative">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2" style={{ background: "var(--border-subtle)" }} />
          {/* Mobile left line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px" style={{ background: "var(--border-subtle)" }} />

          <div className="space-y-12">
            {displayItems.map((item, index) => {
              if (!item) return null;
              const isLeft = index % 2 === 0;
              const Icon = item.icon;
              const isWork = item.category === "work";
              const accentColor = isWork ? "#f97316" : "var(--accent)";

              return (
                <div key={`${item.category}-${item.id}`} className={`relative flex flex-col md:flex-row items-center ${!isLeft ? "md:flex-row-reverse" : ""}`}>
                  {/* Icon in center */}
                  <div
                    className="absolute left-6 md:left-1/2 w-10 h-10 rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-sm"
                    style={{
                      background: "var(--bg-surface)",
                      border: `2px solid ${isWork ? "rgba(249,115,22,0.3)" : "var(--border-subtle)"}`,
                      color: accentColor,
                    }}
                  >
                    <Icon size={18} />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <div
                      className="group relative p-6 rounded-2xl border transition-all duration-300"
                      style={{
                        background: "var(--bg-surface)",
                        borderColor: "var(--border-subtle)",
                        boxShadow: "var(--shadow-card)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card-hover)";
                        (e.currentTarget as HTMLElement).style.borderColor = isWork ? "rgba(249,115,22,0.3)" : "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)";
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                      }}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <span
                          className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wide rounded-full"
                          style={{
                            background: item.isCurrent ? "var(--accent-light)" : (isWork ? "rgba(249,115,22,0.1)" : "var(--accent-light)"),
                            color: item.isCurrent ? "var(--accent)" : accentColor,
                          }}
                        >
                          {item.isCurrent && (
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--accent)" }} />
                              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--accent)" }} />
                            </span>
                          )}
                          {lang === "en" && item.dateEn ? item.dateEn : item.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold" style={{ color: "var(--fg-primary)" }}>
                        {lang === "en" && item.titleEn ? item.titleEn : item.title}
                      </h3>
                      <h4 className="text-sm font-semibold uppercase tracking-wide mt-1 mb-3" style={{ color: "var(--fg-tertiary)" }}>{item.org}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
                        {lang === "en" && item.descriptionEn
                          ? item.descriptionEn
                          : (item.shortDescription || item.description)}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/lebenslauf"
            className="group flex items-center gap-2.5 px-6 py-3 border text-[14px] font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--bg-surface)",
              borderColor: "var(--border-subtle)",
              color: "var(--fg-secondary)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {t("timeline.cta")}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-all duration-300" style={{ color: "var(--fg-tertiary)" }} />
          </Link>
        </div>
      </div>
    </section>
  );
}