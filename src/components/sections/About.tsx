"use client";

import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Geometric shapes */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-[25%] left-[30%] geo-diamond h-[130px] w-[130px] bg-pastel-pink/75 animate-float-medium" />
        <div
          className="absolute bottom-[20%] right-[25%] geo-ring h-[150px] w-[150px] animate-float-slow"
          style={{ borderColor: "rgba(220,239,230,0.85)", borderWidth: "4px" }}
        />
        <div className="absolute top-[55%] left-[45%] geo-dots h-[110px] w-[110px] text-pastel-purple/40 animate-float-fast" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          À propos
        </h2>

        <div className="relative">
          {/* Main card */}
          <GlassCard hover={false} className="p-8 md:p-10">
            <div className="prose prose-sm max-w-none text-text-secondary prose-headings:text-text-primary prose-strong:text-text-primary">
              <p className="text-base leading-relaxed">
                Passionné par le développement web depuis plusieurs années, je
                me spécialise dans l&apos;écosystème JavaScript avec un focus
                sur <strong>React</strong>, <strong>Next.js</strong> et{" "}
                <strong>TypeScript</strong>.
              </p>
              <p className="text-base leading-relaxed">
                J&apos;accorde une importance particulière à la{" "}
                <strong>qualité du code</strong>, à l&apos;
                <strong>expérience utilisateur</strong> et au{" "}
                <strong>design</strong>. Chaque projet est une occasion de créer
                quelque chose de beau, performant et maintenable.
              </p>
              <p className="text-base leading-relaxed">
                Actuellement développeur chez <strong>Ekino</strong>,
                j&apos;interviens sur des applications web complexes pour des
                clients grands comptes, tout en continuant à explorer les
                dernières technologies côté personnel.
              </p>
            </div>
          </GlassCard>

          {/* Overlay card */}
          <GlassCard
            hover={false}
            className="mt-4 ml-auto w-fit max-w-xs p-5 md:-mt-8 md:mr-6"
          >
            <p className="text-sm italic leading-relaxed text-text-secondary">
              &ldquo;Simple mais maîtrisé&rdquo; — c&apos;est ma philosophie,
              dans le code comme dans le design.
            </p>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  );
}
