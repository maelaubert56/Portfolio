"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { type CSSProperties, type ReactNode } from "react";

/* ---- 3D Cube component ---- */
function Cube({
  size,
  color,
  className,
  style,
}: {
  size: number;
  color: string;
  className?: string;
  style?: CSSProperties;
}) {
  const s = `${size}px`;
  return (
    <div
      className={`absolute ${className ?? ""}`}
      style={{ perspective: "600px", ...style }}
    >
      <div
        className="geo-cube"
        style={{ width: s, height: s, ["--size" as string]: s }}
      >
        {["front", "back", "left", "right", "top", "bottom"].map((face) => (
          <div
            key={face}
            className={`face face-${face}`}
            style={{ background: color, width: s, height: s }}
          />
        ))}
      </div>
    </div>
  );
}

/* ---- Shape wrapper type ---- */
interface FloatingShape {
  element: ReactNode;
  position: CSSProperties;
}

const shapes: FloatingShape[] = [
  // ---- Hero area ----
  {
    element: (
      <Cube
        size={90}
        color="rgba(242,222,222,0.85)"
        className="animate-float-slow"
      />
    ),
    position: { top: "8%", left: "8%" },
  },
  {
    element: (
      <div className="geo-diamond h-[110px] w-[110px] bg-pastel-purple/70 animate-float-medium" />
    ),
    position: { top: "14%", right: "10%" },
  },
  {
    element: (
      <div
        className="geo-ring h-[140px] w-[140px] animate-float-fast"
        style={{ borderColor: "rgba(220,239,230,0.85)" }}
      />
    ),
    position: { top: "22%", left: "35%" },
  },

  // ---- Projects area ----
  {
    element: (
      <Cube
        size={70}
        color="rgba(220,239,230,0.8)"
        className="animate-float-medium"
        style={{ animationDelay: "1s" }}
      />
    ),
    position: { top: "750px", right: "6%" },
  },
  {
    element: (
      <div className="geo-hex h-[120px] w-[120px] bg-pastel-pink/70 animate-float-slow" />
    ),
    position: { top: "850px", left: "3%" },
  },
  {
    element: (
      <div className="geo-dots h-[160px] w-[160px] text-pastel-purple/50 animate-float-fast" />
    ),
    position: { top: "1000px", right: "20%" },
  },

  // ---- Experience area ----
  {
    element: (
      <Cube
        size={100}
        color="rgba(233,228,240,0.75)"
        className="animate-float-fast"
        style={{ animationDelay: "2s" }}
      />
    ),
    position: { top: "1550px", left: "2%" },
  },
  {
    element: (
      <div
        className="geo-ring h-[180px] w-[180px] animate-float-slow"
        style={{ borderColor: "rgba(242,222,222,0.8)", borderWidth: "4px" }}
      />
    ),
    position: { top: "1750px", right: "4%" },
  },
  {
    element: (
      <div className="geo-diamond h-[80px] w-[80px] bg-pastel-green/65 animate-float-medium" />
    ),
    position: { top: "1900px", left: "25%" },
  },

  // ---- Technologies area ----
  {
    element: (
      <Cube
        size={65}
        color="rgba(220,239,230,0.75)"
        className="animate-float-medium"
        style={{ animationDelay: "0.5s" }}
      />
    ),
    position: { top: "2500px", right: "8%" },
  },
  {
    element: (
      <div className="geo-cross h-[100px] w-[100px] bg-pastel-pink/60 animate-float-slow" />
    ),
    position: { top: "2600px", left: "5%" },
  },
  {
    element: (
      <div className="geo-hex h-[90px] w-[90px] bg-pastel-purple/60 animate-float-fast" />
    ),
    position: { top: "2750px", right: "25%" },
  },

  // ---- Education / About / Contact area ----
  {
    element: (
      <Cube
        size={80}
        color="rgba(242,222,222,0.7)"
        className="animate-float-slow"
        style={{ animationDelay: "3s" }}
      />
    ),
    position: { top: "3300px", right: "5%" },
  },
  {
    element: (
      <div
        className="geo-ring h-[150px] w-[150px] animate-float-medium"
        style={{ borderColor: "rgba(233,228,240,0.8)", borderWidth: "3px" }}
      />
    ),
    position: { top: "3500px", left: "6%" },
  },
  {
    element: (
      <div className="geo-dots h-[140px] w-[140px] text-pastel-green/45 animate-float-fast" />
    ),
    position: { top: "3800px", right: "15%" },
  },
  {
    element: (
      <div className="geo-diamond h-[70px] w-[70px] bg-pastel-purple/60 animate-float-slow" />
    ),
    position: { top: "4100px", left: "20%" },
  },
];

export default function FloatingShapes() {
  const { scrollY } = useScroll();

  const parallax = [
    useTransform(scrollY, [0, 5000], [0, -100]),
    useTransform(scrollY, [0, 5000], [0, -65]),
    useTransform(scrollY, [0, 5000], [0, -120]),
    useTransform(scrollY, [0, 5000], [0, -50]),
    useTransform(scrollY, [0, 5000], [0, -85]),
    useTransform(scrollY, [0, 5000], [0, -75]),
    useTransform(scrollY, [0, 5000], [0, -110]),
    useTransform(scrollY, [0, 5000], [0, -55]),
    useTransform(scrollY, [0, 5000], [0, -90]),
    useTransform(scrollY, [0, 5000], [0, -70]),
    useTransform(scrollY, [0, 5000], [0, -105]),
    useTransform(scrollY, [0, 5000], [0, -60]),
    useTransform(scrollY, [0, 5000], [0, -80]),
    useTransform(scrollY, [0, 5000], [0, -95]),
    useTransform(scrollY, [0, 5000], [0, -45]),
    useTransform(scrollY, [0, 5000], [0, -115]),
  ];

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ ...shape.position, y: parallax[i % parallax.length] }}
        >
          {shape.element}
        </motion.div>
      ))}
    </div>
  );
}
