"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageProvider";

/**
 * Combined provider wrapper — keeps layout.tsx clean.
 * Both providers are client-only (use localStorage).
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
