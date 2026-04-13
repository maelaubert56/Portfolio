"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import type { Project } from "@/types";
import { useI18n } from "@/i18n/provider";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, tp } = useI18n();
  const [currentImage, setCurrentImage] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && project && project.images.length > 1)
        setCurrentImage(
          (prev) => (prev - 1 + project.images.length) % project.images.length,
        );
      if (e.key === "ArrowRight" && project && project.images.length > 1)
        setCurrentImage((prev) => (prev + 1) % project.images.length);
    },
    [onClose, project],
  );

  useEffect(() => {
    setCurrentImage(0);
  }, [project?.id]);

  useEffect(() => {
    if (project) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, handleKeyDown]);

  const hasMultipleImages = project && project.images.length > 1;

  return (
    <AnimatePresence>
      {project && (
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
            layoutId={`project-${project.id}`}
            className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto p-0"
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
          >
            {/* Image carousel */}
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-pastel-pink/30 via-pastel-purple/20 to-pastel-green/30">
              {project.images[0] && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.images[currentImage]}
                      alt={`${project.name} — ${currentImage + 1}/${project.images.length}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              )}

              {hasMultipleImages && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImage(
                        (prev) =>
                          (prev - 1 + project.images.length) %
                          project.images.length,
                      )
                    }
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                    aria-label={t.a11y.prevImage}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImage(
                        (prev) => (prev + 1) % project.images.length,
                      )
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                    aria-label={t.a11y.nextImage}
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Dot indicators */}
                  <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          i === currentImage ? "bg-white" : "bg-white/50"
                        }`}
                        aria-label={`Image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold text-text-primary md:text-2xl">
                  {project.name}
                </h2>
                <button
                  onClick={onClose}
                  className="rounded-full p-1.5 text-text-secondary transition-colors hover:bg-black/5 hover:text-text-primary"
                  aria-label={t.a11y.close}
                >
                  <X size={20} />
                </button>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
                {(tp as Record<string, { longDescription?: string }>)[
                  project.id
                ]?.longDescription ?? project.longDescription}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-pastel-purple/40 px-3 py-1 text-xs font-medium text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-text-primary px-5 py-2.5 text-sm font-medium text-bg-main transition-colors hover:bg-text-primary/90"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass-bg px-5 py-2.5 text-sm font-medium text-text-primary backdrop-blur-sm transition-colors hover:bg-white/70"
                  >
                    <ExternalLink size={16} />
                    {t.projects.viewSite}
                  </a>
                )}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
