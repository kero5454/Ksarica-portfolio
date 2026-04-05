import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <Stats />
      <TimelineSection />
      <div id="projects">
        <Projects />
      </div>
    </main>
  );
}