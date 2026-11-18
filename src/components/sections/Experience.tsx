"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ExperienceProjects from "@/components/ExperienceProjects";
import CardDetailsLabel from "@/components/ui/CardDetailsLabel";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import dynamic from "next/dynamic";
const ExperienceModal = dynamic(() => import("@/components/ExperienceModal"), { ssr: false });
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
      <div className="absolute left-4 top-9 bottom-0 w-px bg-text-secondary/40 [.dark_&]:bg-glass-border md:left-1/2 md:-translate-x-px" />

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
            className="group cursor-pointer p-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text-secondary md:p-6"
            layoutId={`experience-${exp.id}`}
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            onClick={() => onSelect(exp)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect(exp);
              }
            }}
            hover
          >
            <div
              className={`flex items-center gap-3 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl ${exp.logoBackground === "neutral" ? "bg-neutral-200" : "bg-pastel-green/50"}`}>
                {exp.logo ? (
                  <Image
                    src={exp.logo}
                    alt=""
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
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

            {(te[exp.id]?.description ?? exp.description) && (
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {te[exp.id]?.description ?? exp.description}
              </p>
            )}

            {exp.projects && (
              <ExperienceProjects
                projects={exp.projects}
                translations={te[exp.id]?.projects}
              />
            )}

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

            <CardDetailsLabel />
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}

export default function Experience({ category }: { category: ExperienceType["category"] }) {
  const { t, te } = useI18n();
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceType | null>(null);

  const items = experiences.filter((experience) => experience.category === category);
  const isProfessional = category === "pro";

  return (
    <SectionWrapper id={isProfessional ? "experience" : "associations"}>
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          {isProfessional ? t.experience.pro : t.experience.associative}
        </h2>

        <Timeline
          items={items}
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
