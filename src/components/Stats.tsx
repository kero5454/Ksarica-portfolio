"use client";

import { Code2, Layers, MonitorSmartphone, Trophy } from "lucide-react";
import { useTranslation } from "@/context/LanguageProvider";

const skills = [
  "React", "TypeScript", "Next.js", "Tailwind", "Figma",
  "Unity", "C#", "Swift", "iOS Dev", "SvelteKit", "Docker", "UX/UI",
];

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    { icon: Trophy, value: "2+", label: t("stats.years"), color: "var(--accent)" },
    { icon: Code2, value: "10+", label: t("stats.projects"), color: "var(--accent)" },
    { icon: MonitorSmartphone, value: "3", label: t("stats.platforms"), color: "var(--accent)" },
    { icon: Layers, value: "UI/UX", label: t("stats.design"), color: "var(--accent)" },
  ];

  return (
    <section className="py-12" style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Hard Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl font-bold" style={{ color: "var(--fg-primary)" }}>{stat.value}</h3>
              <p className="text-sm font-medium" style={{ color: "var(--fg-secondary)" }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scrolling skill ticker */}
        <div className="relative overflow-hidden w-full">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to right, var(--bg-base), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to left, var(--bg-base), transparent)" }} />
          <div className="flex w-max animate-scroll">
            {[0, 1].map((list) => (
              <div key={list} className="flex gap-16 px-8 items-center">
                {skills.map((skill, index) => (
                  <span key={`${list}-${index}`} className="text-2xl font-bold uppercase tracking-widest cursor-default" style={{ color: "var(--fg-tertiary)", opacity: 0.5 }}>
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}