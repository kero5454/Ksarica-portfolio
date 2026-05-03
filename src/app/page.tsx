import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <Stats />
      <TimelineSection />
      <Projects />
      <ContactSection />
    </main>
  );
}