"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { technologies } from "@/data/technologies";

const categories = [
  { key: "frontend" as const, label: "Frontend", color: "bg-pastel-pink/50" },
  { key: "backend" as const, label: "Backend", color: "bg-pastel-green/50" },
  { key: "tools" as const, label: "Tools", color: "bg-pastel-purple/50" },
];

const levelDots: Record<string, number> = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
};

export default function Technologies() {
  return (
    <SectionWrapper id="technologies">
      {/* Geometric shapes */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-[10%] left-[40%] geo-hex h-[120px] w-[120px] bg-pastel-green/70 animate-float-fast" />
        <div className="absolute bottom-[15%] left-[30%] geo-diamond h-[100px] w-[100px] bg-pastel-purple/65 animate-float-slow" />
        <div className="absolute top-[45%] right-[25%] geo-cross h-[80px] w-[80px] bg-pastel-pink/55 animate-float-medium" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          Technologies
        </h2>
        <p className="mb-12 text-text-secondary">
          Les outils et langages que j&apos;utilise au quotidien.
        </p>

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
                      className="flex items-center justify-between px-4 py-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: ci * 0.1 + ti * 0.04,
                      }}
                    >
                      <span className="text-sm font-medium text-text-primary">
                        {tech.name}
                      </span>
                      {tech.level && (
                        <div className="flex gap-1">
                          {[1, 2, 3].map((dot) => (
                            <div
                              key={dot}
                              className={`h-1.5 w-1.5 rounded-full ${
                                dot <= levelDots[tech.level!]
                                  ? cat.color
                                  : "bg-black/5"
                              }`}
                            />
                          ))}
                        </div>
                      )}
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
