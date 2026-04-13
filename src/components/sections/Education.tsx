"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { education } from "@/data/education";
import { useI18n } from "@/i18n/provider";

export default function Education() {
  const { t, ted } = useI18n();
  return (
    <SectionWrapper id="education">
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          {t.education.title}
        </h2>
        <p className="mb-12 text-text-secondary">{t.education.subtitle}</p>

        <div className="flex flex-col gap-6">
          {education.map((edu, i) => {
            const tr = (
              ted as Record<
                string,
                { title?: string; description?: string; location?: string }
              >
            )[edu.id];
            return (
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
                        {tr?.title ?? edu.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        {edu.school}
                        {(tr?.location ?? edu.location) &&
                          ` · ${tr?.location ?? edu.location}`}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs text-text-secondary/70">
                      {edu.dateStart} — {edu.dateEnd ?? t.education.now}
                    </span>
                  </div>
                  {(tr?.description ?? edu.description) && (
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {tr?.description ?? edu.description}
                    </p>
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
