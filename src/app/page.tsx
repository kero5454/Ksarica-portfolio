import Image from "next/image";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <Stats />
      <Projects />
    </main>
  );
}
