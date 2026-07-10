"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import type { Experience } from "@/types";
import { useI18n } from "@/i18n/provider";

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
}

export default function ExperienceModal({
  experience,
  onClose,
}: ExperienceModalProps) {
  const { t, te } = useI18n();
  const tr = experience ? te[experience.id] : null;
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (experience) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [experience, handleKeyDown]);

  return (
    <AnimatePresence>
      {experience && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <GlassCard
            hover={false}
            layoutId={`experience-${experience.id}`}
            className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={experience.role}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-pastel-green/50 overflow-hidden">
                  {experience.logo ? (
                    <Image
                      src={experience.logo}
                      alt={experience.company || ""}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-lg font-bold text-text-secondary">
                      {experience.company?.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-text-primary md:text-2xl">
                    {tr?.role ?? experience.role}
                  </h2>
                  <p className="text-sm text-text-secondary">
                    {tr?.company ?? experience.company}
                    {experience.location && ` · ${experience.location}`}
                  </p>
                  <p className="mt-0.5 text-xs text-text-secondary/70">
                    {experience.dateStart} —{" "}
                    {experience.dateEnd ?? t.experience.now}
                    {(tr?.contractType ?? experience.contractType) && (
                      <span className="ml-2 inline-block rounded-full bg-pastel-blue/40 px-2 py-0.5 text-[10px] font-medium text-text-secondary">
                        {tr?.contractType ?? experience.contractType}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-text-secondary transition-colors hover:bg-black/5 hover:text-text-primary"
                aria-label={t.a11y.close}
              >
                <X size={20} />
              </button>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-text-secondary md:text-base">
              {tr?.longDescription ?? experience.longDescription}
            </p>

            {(tr?.highlights ?? experience.highlights) &&
              (tr?.highlights ?? experience.highlights)!.length > 0 && (
                <div className="mt-6">
                  <h3 className="mb-3 text-sm font-semibold text-text-primary">
                    {t.experience.keyAchievements}
                  </h3>
                  <ul className="space-y-2">
                    {(tr?.highlights ?? experience.highlights)!.map(
                      (highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pastel-green/70" />
                          {highlight}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}

            {experience.technologies && (
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-pastel-purple/40 px-3 py-1 text-xs font-medium text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </GlassCard>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
