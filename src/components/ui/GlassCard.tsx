"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef, useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";

type GlassCardProps = HTMLMotionProps<"div"> & {
  hover?: boolean;
};

const darkGlassStyle: React.CSSProperties = {
  background: "padding-box rgba(255, 255, 255, 0.02)",
  boxShadow:
    "rgba(0, 0, 0, 0.15) 0px 8px 32px, rgba(0, 0, 0, 0.05) 0px 2px 8px, rgba(255, 255, 255, 0.12) 0px 1px 0px inset, rgba(255, 255, 255, 0.06) 0px -1px 0px inset",
  backdropFilter: "blur(14px) saturate(1.2)",
  WebkitBackdropFilter: "blur(14px) saturate(1.2)",
  border: "1px solid transparent",
  borderRadius: 20,
  position: "relative",
  overflow: "hidden",
};

const lightGlassStyle: React.CSSProperties = {
  background: "padding-box rgba(255, 255, 255, 0.15)",
  boxShadow:
    "0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(14px) saturate(1.2)",
  WebkitBackdropFilter: "blur(14px) saturate(1.2)",
  border: "1px solid rgba(255, 255, 255, 0.35)",
  borderRadius: 20,
  position: "relative",
  overflow: "hidden",
};

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className = "", hover = true, children, style, ...props }, ref) => {
    const { theme } = useContext(ThemeContext);
    const glassStyle = theme === "dark" ? darkGlassStyle : lightGlassStyle;

    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ ...glassStyle, ...style }}
        whileHover={
          hover
            ? {
                y: -4,
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
