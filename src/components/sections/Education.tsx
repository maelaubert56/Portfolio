"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { education } from "@/data/education";

export default function Education() {
  return (
    <SectionWrapper id="education">
      {/* Geometric shapes */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-[15%] left-[45%] geo-ring h-[140px] w-[140px] animate-float-slow"
          style={{ borderColor: "rgba(233,228,240,0.8)", borderWidth: "4px" }}
        />
        <div className="absolute bottom-[10%] left-[35%] geo-hex h-[110px] w-[110px] bg-pastel-green/65 animate-float-medium" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          Formation
        </h2>
        <p className="mb-12 text-text-secondary">Mon parcours académique.</p>

        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassCard className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {edu.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {edu.school}
                      {edu.location && ` · ${edu.location}`}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-text-secondary/70">
                    {edu.dateStart} — {edu.dateEnd ?? "Présent"}
                  </span>
                </div>
                {edu.description && (
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {edu.description}
                  </p>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
