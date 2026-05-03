"use client";

import {
  Download, Briefcase, GraduationCap, Trophy,
  Globe, Code, User, MapPin, Mail, Phone, ExternalLink,
} from "lucide-react";
import {
  experienceData, educationData, hardSkills,
  softSkills, softSkillsEn, languages, awards, personalInfo,
} from "@/data/cv-data";
import { useTranslation } from "@/context/LanguageProvider";

export default function LebenslaufPage() {
  const { t, lang } = useTranslation();
  const isEn = lang === "en";

  /* Helpers to pick the right language field with DE fallback */
  const d  = (de: string, en?: string)  => (isEn && en ? en : de);
  const skills = isEn ? softSkillsEn : softSkills;

  return (
    <main className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1
              className="text-4xl font-extrabold tracking-tight mb-2"
              style={{ color: "var(--fg-primary)" }}
            >
              {t("cv.title")}
            </h1>
            <p className="text-lg" style={{ color: "var(--fg-secondary)" }}>
              {t("cv.subtitle")}
            </p>
          </div>
          <a
            href="/Lebenslauf_Kerem_Sarica.pdf"
            download="Lebenslauf_Kerem_Sarica"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:-translate-y-0.5"
            style={{
              background:  "var(--accent)",
              color:       "var(--bg-base)",
              boxShadow:   "0 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            <Download size={18} className="group-hover:animate-bounce" />
            {t("cv.download")}
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Sidebar ───────────────────────────────────────────────────── */}
          <aside className="space-y-8">

            {/* Contact */}
            <div
              className="p-6 rounded-2xl border"
              style={{
                background:   "var(--bg-surface)",
                borderColor:  "var(--border-subtle)",
                boxShadow:    "var(--shadow-card)",
              }}
            >
              <h3
                className="text-lg font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--fg-primary)" }}
              >
                <User size={20} style={{ color: "var(--accent)" }} />
                {t("cv.contact")}
              </h3>
              <div className="space-y-3 text-sm" style={{ color: "var(--fg-secondary)" }}>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:underline"
                    style={{ color: "var(--accent)" }}
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div
                  className="pt-2 mt-2 flex flex-col gap-2"
                  style={{ borderTop: "1px solid var(--border-subtle)" }}
                >
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    className="flex items-center gap-2 hover:underline"
                    style={{ color: "var(--accent)" }}
                  >
                    <ExternalLink size={14} /> {t("cv.linkedin")}
                  </a>
                </div>
              </div>
            </div>

            {/* IT Skills */}
            <div
              className="p-6 rounded-2xl border"
              style={{
                background:  "var(--bg-surface)",
                borderColor: "var(--border-subtle)",
                boxShadow:   "var(--shadow-card)",
              }}
            >
              <h3
                className="text-lg font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--fg-primary)" }}
              >
                <Code size={20} style={{ color: "var(--accent)" }} />
                {t("cv.itSkills")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium rounded-lg"
                    style={{ background: "var(--accent-light)", color: "var(--accent)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div
              className="p-6 rounded-2xl border"
              style={{
                background:  "var(--bg-surface)",
                borderColor: "var(--border-subtle)",
                boxShadow:   "var(--shadow-card)",
              }}
            >
              <h3
                className="text-lg font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--fg-primary)" }}
              >
                <User size={20} style={{ color: "#22c55e" }} />
                {t("cv.softSkills")}
              </h3>
              <ul className="space-y-2">
                {skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--fg-secondary)" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div
              className="p-6 rounded-2xl border"
              style={{
                background:  "var(--bg-surface)",
                borderColor: "var(--border-subtle)",
                boxShadow:   "var(--shadow-card)",
              }}
            >
              <h3
                className="text-lg font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--fg-primary)" }}
              >
                <Globe size={20} style={{ color: "#a855f7" }} />
                {t("cv.languages")}
              </h3>
              <div className="space-y-3">
                {languages.map((lang, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="font-medium" style={{ color: "var(--fg-primary)" }}>
                      {d(lang.language, lang.languageEn)}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded text-xs"
                      style={{ background: "var(--bg-elevated)", color: "var(--fg-secondary)" }}
                    >
                      {d(lang.level, lang.levelEn)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other / Awards */}
            <div
              className="p-6 rounded-2xl border"
              style={{
                background:  "var(--bg-surface)",
                borderColor: "var(--border-subtle)",
                boxShadow:   "var(--shadow-card)",
              }}
            >
              <h3
                className="text-lg font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--fg-primary)" }}
              >
                <Trophy size={20} style={{ color: "#eab308" }} />
                {t("cv.other")}
              </h3>
              <ul className="space-y-3">
                {awards.map((award, i) => (
                  <li key={i} className="text-sm">
                    <div className="font-medium" style={{ color: "var(--fg-primary)" }}>
                      {award.title}
                    </div>
                    <div className="text-xs" style={{ color: "var(--fg-tertiary)" }}>
                      {d(award.date, award.dateEn)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ── Main content ──────────────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Work Experience */}
            <section>
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-3"
                style={{ color: "var(--fg-primary)" }}
              >
                <div
                  className="p-2 rounded-lg"
                  style={{ background: "rgba(249,115,22,0.1)", color: "#f97316" }}
                >
                  <Briefcase size={24} />
                </div>
                {t("cv.experience")}
              </h2>
              <div className="space-y-6">
                {experienceData.map((item) => (
                  <div key={item.id} className="relative pl-8 md:pl-0">
                    <div
                      className="md:hidden absolute left-2 top-2 bottom-0 w-0.5"
                      style={{ background: "var(--border-subtle)" }}
                    />
                    <div
                      className="group p-6 rounded-2xl border transition-all"
                      style={{
                        background:  "var(--bg-surface)",
                        borderColor: "var(--border-subtle)",
                        boxShadow:   "var(--shadow-card)",
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h3
                            className="text-lg font-bold"
                            style={{ color: "var(--fg-primary)" }}
                          >
                            {d(item.title, item.titleEn)}
                          </h3>
                          <div className="font-medium text-sm mb-1" style={{ color: "#f97316" }}>
                            {item.company}
                          </div>
                        </div>
                        <span
                          className="inline-block md:text-right text-xs font-semibold px-3 py-1 rounded-full w-fit"
                          style={{
                            background: "var(--bg-elevated)",
                            color:      "var(--fg-secondary)",
                          }}
                        >
                          {d(item.date, item.dateEn)}
                        </span>
                      </div>
                      <div
                        className="text-xs mb-3 flex items-center gap-1"
                        style={{ color: "var(--fg-tertiary)" }}
                      >
                        <MapPin size={12} /> {item.location}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
                        {d(item.description, item.descriptionEn)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-3"
                style={{ color: "var(--fg-primary)" }}
              >
                <div
                  className="p-2 rounded-lg"
                  style={{ background: "var(--accent-light)", color: "var(--accent)" }}
                >
                  <GraduationCap size={24} />
                </div>
                {t("cv.education")}
              </h2>
              <div className="space-y-6">
                {educationData.map((item) => (
                  <div
                    key={item.id}
                    className="group p-6 rounded-2xl border transition-all"
                    style={{
                      background:  "var(--bg-surface)",
                      borderColor: "var(--border-subtle)",
                      boxShadow:   "var(--shadow-card)",
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3
                          className="text-lg font-bold"
                          style={{ color: "var(--fg-primary)" }}
                        >
                          {d(item.title, item.titleEn)}
                        </h3>
                        <div
                          className="font-medium text-sm mb-1"
                          style={{ color: "var(--accent)" }}
                        >
                          {item.institution}
                        </div>
                      </div>
                      <span
                        className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full w-fit mt-2 md:mt-0"
                        style={{
                          background: item.isCurrent ? "var(--accent-light)" : "var(--bg-elevated)",
                          color:      item.isCurrent ? "var(--accent)" : "var(--fg-secondary)",
                          border:     item.isCurrent ? "1px solid var(--border-subtle)" : "none",
                        }}
                      >
                        {item.isCurrent && (
                          <span className="relative flex h-2 w-2">
                            <span
                              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                              style={{ background: "var(--accent)" }}
                            />
                            <span
                              className="relative inline-flex rounded-full h-2 w-2"
                              style={{ background: "var(--accent)" }}
                            />
                          </span>
                        )}
                        {d(item.date, item.dateEn)}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed mt-2"
                      style={{ color: "var(--fg-secondary)" }}
                    >
                      {d(item.description, item.descriptionEn)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
