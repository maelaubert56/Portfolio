"use client";

import { type ComponentType } from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { technologies } from "@/data/technologies";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGraphql,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiGithubcopilot,
  SiFigma,
  SiJest,
} from "react-icons/si";
import { TbApi, TbLayoutGrid } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { useI18n } from "@/i18n/provider";

const techIcons: Record<string, ComponentType<{ className?: string }>> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Micro-Frontends": TbLayoutGrid,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "HTML/CSS": SiHtml5,
  "Vue.js": SiVuedotjs,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  "REST API": TbApi,
  GraphQL: SiGraphql,
  Git: SiGit,
  Docker: SiDocker,
  Azure: VscAzure,
  "GitHub Actions": SiGithubactions,
  "GitHub Copilot": SiGithubcopilot,
  Figma: SiFigma,
  Jest: SiJest,
};

const categories = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "tools" as const, label: "Tools" },
];

export default function Technologies() {
  const { t } = useI18n();
  return (
    <SectionWrapper id="technologies">
      <div className="relative z-10 mx-auto max-w-5xl">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          {t.technologies.title}
        </h2>
        <p className="mb-12 text-text-secondary">{t.technologies.subtitle}</p>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: ci * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-secondary">
                {cat.label}
              </h3>
              <div className="flex flex-col gap-3">
                {technologies
                  .filter((t) => t.category === cat.key)
                  .map((tech, ti) => (
                    <GlassCard
                      key={tech.name}
                      className="flex items-center gap-3 px-4 py-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: ci * 0.1 + ti * 0.04,
                      }}
                    >
                      {techIcons[tech.name] &&
                        (() => {
                          const Icon = techIcons[tech.name];
                          return (
                            <Icon className="h-4 w-4 shrink-0 text-text-secondary" />
                          );
                        })()}
                      <span className="text-sm font-medium text-text-primary">
                        {tech.name}
                      </span>
                    </GlassCard>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
