import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Bereich */}
      <Hero />
      
      {/* 2. Über mich (Intro) */}
      <AboutSection />
      
      {/* 3. Statistiken */}
      <Stats />
      
      {/* 4. Lebenslauf (Timeline) */}
      <TimelineSection />
      
      {/* 5. Projekte */}
      <div id="projects">
        <Projects />
      </div>
    </main>
  );
}