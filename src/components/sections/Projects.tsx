"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import dynamic from "next/dynamic";
const ProjectModal = dynamic(() => import("@/components/ProjectModal"), { ssr: false });
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { useI18n } from "@/i18n/provider";

export default function Projects() {
  const { t, tp } = useI18n();
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
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          {t.projects.title}
        </h2>
        <p className="mb-8 text-text-secondary">{t.projects.subtitle}</p>

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
            {t.projects.filterAll}
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
                className="flex cursor-pointer flex-col overflow-hidden p-0"
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
                <div className="aspect-video w-full overflow-hidden bg-linear-to-br from-pastel-pink/30 via-pastel-purple/20 to-pastel-green/30">
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
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold text-text-primary">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {tp[project.id]?.shortDescription ??
                      project.shortDescription}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {project.technologies.slice(0, 4).map((tech) => (
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
