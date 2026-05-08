"use client";

import { useTranslation } from "@/context/LanguageProvider";

export default function AboutSection() {
  const { t, lang } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="about__grid">
        <div className="about__label">
          <span className="eyebrow">/01 — {t("about.label")}</span>
        </div>
        <div className="about__copy">
          <h2 className="h2">
            {t("about.heading1")} <em>{t("about.heading2")}</em>
          </h2>
          <p className="lead">
            <span style={{ color: "var(--accent)", fontSize: "1.5em", fontWeight: 700, lineHeight: 1 }}>{t("about.p1H")}</span>
            {t("about.p1")}
          </p>
          <p className="lead" style={{ marginTop: "16px" }}>{t("about.p2")}</p>
          <div className="about__meta">
            <div className="about__meta-item">
              <span className="meta-k">{lang === "de" ? "Standort" : "Based in"}</span>
              <span className="meta-v">Stuttgart · Japan</span>
            </div>
            <div className="about__meta-item">
              <span className="meta-k">{lang === "de" ? "Studium" : "Studies"}</span>
              <span className="meta-v">B.Sc. Mobile Medien</span>
            </div>
            <div className="about__meta-item">
              <span className="meta-k">Status</span>
              <span className="meta-v meta-v--ok">
                <i className="dot" />Open for Work · 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
