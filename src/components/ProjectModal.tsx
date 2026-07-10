"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
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
            <div className="relative aspect-video w-full overflow-hidden bg-linear-to-br from-pastel-pink/30 via-pastel-purple/20 to-pastel-green/30">
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
                {tp[project.id]?.longDescription ?? project.longDescription}
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
                    <SiGithub className="h-4 w-4" />
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
