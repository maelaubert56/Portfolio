"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ExperienceModal from "@/components/ExperienceModal";
import { experiences } from "@/data/experiences";
import type { Experience as ExperienceType } from "@/types";
import { useI18n, type ExperienceTranslations } from "@/i18n/provider";

function Timeline({
  items,
  onSelect,
  te,
  now,
}: {
  items: ExperienceType[];
  onSelect: (exp: ExperienceType) => void;
  te: ExperienceTranslations;
  now: string;
}) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-9 bottom-0 w-px bg-black/15 dark:bg-glass-border md:left-1/2 md:-translate-x-px" />

      {items.map((exp, i) => (
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
              : "md:ml-auto md:pl-12 md:text-left md:-mt-24"
          }`}
        >
          <div
            className={`absolute top-9 flex h-3 w-3 items-center justify-center rounded-full border-2 border-bg-main bg-bg-main left-2.5 ${
              i % 2 === 0
                ? "md:left-auto md:right-[-5.5px]"
                : "md:left-[-6.5px]"
            }`}
          >
            <div className="h-full w-full rounded-full bg-text-secondary/40" />
          </div>

          <GlassCard
            className="cursor-pointer p-5 md:p-6"
            layoutId={`experience-${exp.id}`}
            onClick={() => onSelect(exp)}
            hover
          >
            <div
              className={`flex items-center gap-3 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pastel-green/50 overflow-hidden">
                {exp.logo ? (
                  <Image
                    src={exp.logo}
                    alt={exp.company || ""}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xs font-bold text-text-secondary">
                    {exp.company?.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">
                  {te[exp.id]?.role ?? exp.role}
                </h3>
                <p className="text-sm text-text-secondary">
                  {te[exp.id]?.company ?? exp.company}
                  {exp.location && ` · ${exp.location}`}
                </p>
              </div>
            </div>

            <p className="mt-1 text-xs text-text-secondary/70">
              {exp.dateStart} — {exp.dateEnd ?? now}
              {(te[exp.id]?.contractType ?? exp.contractType) && (
                <span className="ml-2 inline-block rounded-full bg-pastel-blue/40 px-2 py-0.5 text-[10px] font-medium text-text-secondary">
                  {te[exp.id]?.contractType ?? exp.contractType}
                </span>
              )}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {te[exp.id]?.description ?? exp.description}
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
  );
}

export default function Experience() {
  const { t, te } = useI18n();
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceType | null>(null);

  const proExperiences = experiences.filter((e) => e.category === "pro");
  const assoExperiences = experiences.filter(
    (e) => e.category === "associative",
  );

  return (
    <SectionWrapper id="experience">
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          {t.experience.title}
        </h2>

        <h3 className="mb-8 text-sm font-semibold uppercase tracking-wider text-text-secondary">
          {t.experience.pro}
        </h3>
        <Timeline
          items={proExperiences}
          onSelect={setSelectedExperience}
          te={te}
          now={t.experience.now}
        />

        <h3 className="mb-8 mt-16 text-sm font-semibold uppercase tracking-wider text-text-secondary">
          {t.experience.associative}
        </h3>
        <Timeline
          items={assoExperiences}
          onSelect={setSelectedExperience}
          te={te}
          now={t.experience.now}
        />
      </div>

      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </SectionWrapper>
  );
}
