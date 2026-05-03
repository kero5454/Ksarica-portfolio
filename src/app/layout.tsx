import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono, Montserrat, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/context/Providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kerem Sarica – Portfolio",
  description: "Software Engineer & Designer — Web, Mobile, UI/UX",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} ${montserrat.variable} ${jetbrainsMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="cursor-blob" id="cursorBlob" aria-hidden="true" />
        <Providers>
          <Navbar />
          {/* pt-[70px] clears the floating pill navbar */}
          <div className="pt-17.5 grow">
            {children}
          </div>
          <Footer />
        </Providers>
        <Script id="cursor-glow" strategy="afterInteractive">{`
          (function () {
            var blob = document.getElementById('cursorBlob');
            if (!blob) return;
            window.addEventListener('mousemove', function(e) {
              blob.style.left = e.clientX + 'px';
              blob.style.top  = e.clientY + 'px';
            }, { passive: true });
            if (matchMedia('(pointer: coarse)').matches) blob.style.display = 'none';
          })();
        `}</Script>
      </body>
    </html>
  );
}
