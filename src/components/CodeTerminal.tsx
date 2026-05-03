"use client";

import { useState, useEffect, useRef } from "react";

/* ────────────────────────────────────────────────────────────────────────────
 * Types
 * ──────────────────────────────────────────────────────────────────────────── */

interface CodeLine {
  indent: number;
  tokens: Token[];
}

interface Token {
  text: string;
  type: "keyword" | "string" | "comment" | "punctuation" | "variable" | "boolean" | "plain";
}

type TermState = "normal" | "closed" | "minimized" | "zoomed";

/* ────────────────────────────────────────────────────────────────────────────
 * Data
 * ──────────────────────────────────────────────────────────────────────────── */

const CODE_LINES: CodeLine[] = [
  { indent: 0, tokens: [
    { text: "const ", type: "keyword" },
    { text: "kerem", type: "variable" },
    { text: " = {", type: "punctuation" },
  ]},
  { indent: 1, tokens: [
    { text: "name", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: '"Kerem Sarica"', type: "string" },
    { text: ",", type: "punctuation" },
  ]},
  { indent: 1, tokens: [
    { text: "role", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: '"Designer × Developer"', type: "string" },
    { text: ",", type: "punctuation" },
  ]},
  { indent: 1, tokens: [
    { text: "school", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: '"Hochschule der Medien"', type: "string" },
    { text: ",", type: "punctuation" },
  ]},
  { indent: 1, tokens: [
    { text: "degree", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: '"Mobile Medien (B.Sc.)"', type: "string" },
    { text: ",", type: "punctuation" },
  ]},
  { indent: 1, tokens: [
    { text: "based", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: '"Stuttgart, DE 🇩🇪"', type: "string" },
    { text: ",", type: "punctuation" },
  ]},
  { indent: 1, tokens: [
    { text: "skills", type: "variable" },
    { text: ": [", type: "punctuation" },
  ]},
  { indent: 2, tokens: [
    { text: '"Java"', type: "string" },
    { text: ", ", type: "punctuation" },
    { text: '"Figma"', type: "string" },
    { text: ", ", type: "punctuation" },
    { text: '"React"', type: "string" },
    { text: ", ", type: "punctuation" },
    { text: '"TypeScript"', type: "string" },
    { text: ",", type: "punctuation" },
  ]},
  { indent: 2, tokens: [
    { text: '"Swift"', type: "string" },
    { text: ", ", type: "punctuation" },
    { text: '"Kotlin"', type: "string" },
    { text: ", ", type: "punctuation" },
    { text: '"Unity"', type: "string" },
  ]},
  { indent: 1, tokens: [
    { text: "],", type: "punctuation" },
  ]},
  { indent: 1, tokens: [
    { text: "open for work", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "true", type: "boolean" },
    { text: ",", type: "punctuation" },
  ]},
  { indent: 0, tokens: [
    { text: "};", type: "punctuation" },
  ]},
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [
    { text: "// ", type: "comment" },
    { text: "Let's build something together.", type: "comment" },
  ]},
];

const TOKEN_COLORS: Record<Token["type"], string> = {
  keyword:     "#c792ea",
  string:      "#c3e88d",
  comment:     "#546e7a",
  punctuation: "#89ddff",
  variable:    "#f78c6c",
  boolean:     "#ff5370",
  plain:       "#d6deeb",
};

/* ────────────────────────────────────────────────────────────────────────────
 * State → CSS transform & appearance
 * ──────────────────────────────────────────────────────────────────────────── */

const STATE_TRANSFORM: Record<TermState, string> = {
  normal:    "scale(1) translateY(0px)",
  closed:    "scale(1) translateY(0px)",
  minimized: "scale(0.6) translateY(20px)",
  zoomed:    "scale(1.08) translateY(0px)",
};

/* ────────────────────────────────────────────────────────────────────────────
 * Component
 * ──────────────────────────────────────────────────────────────────────────── */

export default function CodeTerminal() {
  const [visibleChars, setVisibleChars] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [termState, setTermState] = useState<TermState>("normal");
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalChars = CODE_LINES.reduce((sum, line) => {
    const lineChars = line.tokens.reduce((s, t) => s + t.text.length, 0) + line.indent * 2;
    return sum + lineChars + 1;
  }, 0);

  /* Typing animation */
  useEffect(() => {
    let charCount = 0;
    intervalRef.current = setInterval(() => {
      charCount += 1;
      setVisibleChars(charCount);
      if (charCount >= totalChars && intervalRef.current) clearInterval(intervalRef.current);
    }, 28);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [totalChars]);

  /* Cursor blink */
  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  /* Traffic-light handlers ─────────────────────────────────────────────── */

  const handleClose = () =>
    setTermState((s) => (s === "closed" ? "normal" : "closed"));

  const handleMinimize = () =>
    setTermState((s) => {
      if (s === "closed") return "normal";
      return s === "minimized" ? "normal" : "minimized";
    });

  const handleZoom = () =>
    setTermState((s) => {
      if (s === "closed") return "normal";
      return s === "zoomed" ? "normal" : "zoomed";
    });

  /* Code renderer ─────────────────────────────────────────────────────── */

  const renderCode = () => {
    let charsSoFar = 0;
    const elements: React.ReactNode[] = [];

    CODE_LINES.forEach((line, lineIdx) => {
      const lineElements: React.ReactNode[] = [];
      const indentStr = "  ".repeat(line.indent);
      const indentLen = indentStr.length;

      if (charsSoFar + indentLen <= visibleChars) {
        lineElements.push(indentStr);
        charsSoFar += indentLen;
      } else {
        const remaining = visibleChars - charsSoFar;
        if (remaining > 0) lineElements.push(indentStr.slice(0, remaining));
        charsSoFar = visibleChars;
        elements.push(
          <div key={lineIdx} className="leading-[1.7]" style={{ minHeight: "1.7em" }}>
            {lineElements}
            {charsSoFar === visibleChars && (
              <span
                className="inline-block w-0.5 h-[1.1em] align-middle ml-px"
                style={{ background: cursorVisible ? "#7dd3fc" : "transparent" }}
              />
            )}
          </div>
        );
        return;
      }

      let done = false;
      line.tokens.forEach((token, tokenIdx) => {
        if (done) return;
        if (charsSoFar + token.text.length <= visibleChars) {
          lineElements.push(
            <span key={tokenIdx} style={{ color: TOKEN_COLORS[token.type] }}>
              {token.text}
            </span>
          );
          charsSoFar += token.text.length;
        } else {
          const remaining = visibleChars - charsSoFar;
          if (remaining > 0) {
            lineElements.push(
              <span key={tokenIdx} style={{ color: TOKEN_COLORS[token.type] }}>
                {token.text.slice(0, remaining)}
              </span>
            );
          }
          charsSoFar = visibleChars;
          done = true;
        }
      });

      if (!done) charsSoFar += 1;

      elements.push(
        <div key={lineIdx} className="leading-[1.7]" style={{ minHeight: "1.7em" }}>
          {lineElements}
          {charsSoFar >= visibleChars && charsSoFar <= visibleChars + 1 && (
            <span
              className="inline-block w-0.5 h-[1.1em] align-middle ml-px"
              style={{ background: cursorVisible ? "#7dd3fc" : "transparent" }}
            />
          )}
        </div>
      );
    });

    return elements;
  };

  /* Derived styles ─────────────────────────────────────────────────────── */

  const isClosed    = termState === "closed";
  const isMinimized = termState === "minimized";
  const isZoomed    = termState === "zoomed";

  const containerTransform = STATE_TRANSFORM[termState];
  const containerOpacity   = isMinimized ? 0.6 : 1;
  const containerShadow    = isZoomed
    ? "0 25px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06), 0 0 50px var(--accent)"
    : "0 25px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)";

  return (
    <div
      className="w-full max-w-125 rounded-2xl overflow-hidden"
      style={{
        background:  "#1e293b",
        boxShadow:   containerShadow,
        transform:   containerTransform,
        opacity:     containerOpacity,
        /* state transitions — parallax sits on the parent wrapper in Hero */
        transition:
          "transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1), " +
          "opacity 200ms ease, " +
          "box-shadow 350ms ease",
        transformOrigin: "center bottom",
      }}
    >
      {/* ── Title bar ─────────────────────────────────────────────────── */}
      {/* Clicking the bar while closed re-opens the terminal */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          background:   "#0f172a",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          cursor:       isClosed ? "pointer" : "default",
        }}
        onClick={isClosed ? handleClose : undefined}
        title={isClosed ? "Click to reopen" : undefined}
      >
        {/* Traffic-light dots */}
        <div className={`flex gap-1.5 ${isClosed ? "term-dots--closed" : ""}`}>
          <button
            aria-label="Close"
            className="traffic-dot"
            style={{ background: "#ff5f57" }}
            onClick={(e) => { e.stopPropagation(); handleClose(); }}
          >
            <span className="traffic-glyph">×</span>
          </button>
          <button
            aria-label="Minimize"
            className="traffic-dot"
            style={{ background: "#febc2e" }}
            onClick={(e) => { e.stopPropagation(); handleMinimize(); }}
          >
            <span className="traffic-glyph">−</span>
          </button>
          <button
            aria-label="Zoom"
            className="traffic-dot"
            style={{ background: "#28c840" }}
            onClick={(e) => { e.stopPropagation(); handleZoom(); }}
          >
            <span className="traffic-glyph">+</span>
          </button>
        </div>

        <span
          className="flex-1 text-center text-[11px] font-medium"
          style={{ color: "#64748b" }}
        >
          kerem.tsx
        </span>
        <div className="w-10.5" />
      </div>

      {/* ── Code body — collapses when closed ─────────────────────────── */}
      <div
        style={{
          maxHeight:  isClosed ? 0 : 600,
          opacity:    isClosed ? 0 : 1,
          overflow:   "hidden",
          transition: "max-height 300ms ease, opacity 200ms ease",
        }}
      >
        <div className="px-5 py-4">
          <pre
            className="text-[13px] md:text-[14px] font-mono leading-relaxed select-none"
            style={{
              fontFamily: "var(--font-geist-mono, 'SF Mono', 'Fira Code', monospace)",
              color: "#d6deeb",
            }}
          >
            {renderCode()}
          </pre>
        </div>
      </div>
    </div>
  );
}
