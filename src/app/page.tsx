import { connection } from "next/server";
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
import Footer from "@/components/Footer";

export default async function Home() {
  await connection();
  const openToWork = process.env.OPEN_TO_WORK === "true";

  return (
    <>
      <ScrollProgress />
      <Navigation />

      <div className="relative">
        <FloatingShapes />
        <PhysicsBalls />

        <main className="relative z-10">
          <Hero />
          <Experience category="pro" />
          <Projects />
          <Experience category="associative" />
          <Technologies />
          <Education />
          <About />
          <Contact openToWork={openToWork} />
        </main>

        <Footer />
      </div>
    </>
  );
}
