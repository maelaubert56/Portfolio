"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type GlassCardProps = HTMLMotionProps<"div"> & {
  hover?: boolean;
};

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className = "", hover = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`rounded-2xl border border-glass-border bg-glass-bg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] ${className}`}
        whileHover={
          hover
            ? {
                y: -4,
                boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
              }
            : undefined
        }
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
