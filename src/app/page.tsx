"use client";

import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingShapes from "@/components/FloatingShapes";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Technologies from "@/components/sections/Technologies";
import Education from "@/components/sections/Education";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />

      <div className="relative">
        <FloatingShapes />

        <main className="relative z-10">
          <Hero />
          <Projects />
          <Experience />
          <Technologies />
          <Education />
          <About />
          <Contact />
        </main>

        <footer className="relative z-10 py-8 text-center text-xs text-text-secondary">
          © {new Date().getFullYear()} Maël Aubert. Tous droits réservés.
        </footer>
      </div>
    </>
  );
}
