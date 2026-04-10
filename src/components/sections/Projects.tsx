"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const allTechs = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.technologies.includes(filter)),
    [filter],
  );

  return (
    <SectionWrapper id="projects">
      {/* Geometric shapes */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-[5%] right-[30%] geo-ring h-[180px] w-[180px] animate-float-slow"
          style={{ borderColor: "rgba(220,239,230,0.85)", borderWidth: "4px" }}
        />
        <div className="absolute top-[35%] left-[25%] geo-diamond h-[120px] w-[120px] bg-pastel-pink/70 animate-float-medium" />
        <div className="absolute bottom-[15%] right-[35%] geo-hex h-[100px] w-[100px] bg-pastel-purple/65 animate-float-fast" />
        <div className="absolute top-[55%] left-[45%] geo-cross h-[90px] w-[90px] bg-pastel-green/55 animate-float-slow" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          Projets
        </h2>
        <p className="mb-8 text-text-secondary">
          Une sélection de mes réalisations récentes.
        </p>

        {/* Filter pills */}
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
              filter === "all"
                ? "bg-text-primary text-bg-main"
                : "bg-glass-bg text-text-secondary border border-glass-border hover:text-text-primary"
            }`}
          >
            Tous
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                filter === tech
                  ? "bg-text-primary text-bg-main"
                  : "bg-glass-bg text-text-secondary border border-glass-border hover:text-text-primary"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <GlassCard
                key={project.id}
                layoutId={`project-${project.id}`}
                className="cursor-pointer overflow-hidden p-0"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Preview image */}
                <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-pastel-pink/30 via-pastel-purple/20 to-pastel-green/30">
                  {project.images[0] && (
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      width={600}
                      height={338}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-text-primary">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {project.shortDescription}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-pastel-purple/40 px-2.5 py-0.5 text-[11px] font-medium text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </SectionWrapper>
  );
}
