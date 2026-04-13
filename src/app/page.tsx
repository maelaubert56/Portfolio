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
import PhysicsBalls from "@/components/PhysicsBalls";
import { useI18n } from "@/i18n/provider";

export default function Home() {
  const { t } = useI18n();
  return (
    <>
      <ScrollProgress />
      <Navigation />

      <div className="relative">
        <FloatingShapes />
        <PhysicsBalls />

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
          <p>
            © {new Date().getFullYear()} Maël Aubert. {t.footer.rights}
          </p>
          <a
            href="https://github.com/maelaubert56/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-text-secondary/60 transition-colors hover:text-text-secondary"
          >
            {t.footer.source} ↗
          </a>
        </footer>
      </div>
    </>
  );
}
