"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Geometric shapes */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-[10%] left-[35%] geo-diamond h-[130px] w-[130px] bg-pastel-purple/70 animate-float-medium" />
        <div
          className="absolute top-[40%] right-[30%] geo-ring h-[160px] w-[160px] animate-float-slow"
          style={{ borderColor: "rgba(242,222,222,0.85)", borderWidth: "4px" }}
        />
        <div className="absolute bottom-[20%] left-[40%] geo-dots h-[140px] w-[140px] text-pastel-green/40 animate-float-fast" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          Expérience
        </h2>
        <p className="mb-12 text-text-secondary">Mon parcours professionnel.</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-glass-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative mb-12 pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12 md:text-left"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute top-2 h-3 w-3 rounded-full border-2 border-bg-main bg-text-secondary/40 left-[10px] md:left-auto ${
                  i % 2 === 0 ? "md:right-[-6.5px]" : "md:left-[-6.5px]"
                }`}
              />

              <GlassCard className="p-5 md:p-6" hover>
                <div
                  className={`flex items-center gap-3 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pastel-green/50">
                    <span className="text-xs font-bold text-text-secondary">
                      {exp.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {exp.company}
                      {exp.location && ` · ${exp.location}`}
                    </p>
                  </div>
                </div>

                <p className="mt-1 text-xs text-text-secondary/70">
                  {exp.dateStart} — {exp.dateEnd ?? "Présent"}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {exp.description}
                </p>

                {exp.technologies && (
                  <div
                    className={`mt-3 flex flex-wrap gap-1.5 ${
                      i % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-pastel-purple/40 px-2 py-0.5 text-[11px] font-medium text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
