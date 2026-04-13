"use client";

import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
} from "framer-motion";
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

/* ---- Shape definitions ---- */
interface FloatingShape {
  element: ReactNode;
  position: CSSProperties;
  /** parallax multiplier — higher = more scroll offset */
  parallaxFactor: number;
  /** velocity sensitivity — higher = more reactive to scroll speed */
  velocitySensitivity: number;
  /** direction of velocity displacement: 1 = same as scroll, -1 = opposite */
  direction: 1 | -1;
  /** primary axis for velocity displacement: 'x' or 'y' */
  axis: "x" | "y";
  /** spring stiffness override */
  springStiffness: number;
  /** spring damping override */
  springDamping: number;
}

const shapes: FloatingShape[] = [
  // ---- Hero area ----
  {
    element: <Cube size={90} color="rgba(242,222,222,0.85)" />,
    position: { top: "8%", left: "8%" },
    parallaxFactor: -0.15,
    velocitySensitivity: 0.25,
    direction: 1,
    axis: "x",
    springStiffness: 12,
    springDamping: 6,
  },
  {
    element: (
      <div className="geo-diamond h-[110px] w-[110px] bg-pastel-purple/70" />
    ),
    position: { top: "14%", right: "10%" },
    parallaxFactor: -0.1,
    velocitySensitivity: 0.35,
    direction: -1,
    axis: "y",
    springStiffness: 18,
    springDamping: 7,
  },
  {
    element: (
      <div
        className="geo-ring h-[140px] w-[140px]"
        style={{ borderColor: "rgba(220,239,230,0.85)" }}
      />
    ),
    position: { top: "22%", left: "35%" },
    parallaxFactor: -0.22,
    velocitySensitivity: 0.18,
    direction: 1,
    axis: "y",
    springStiffness: 8,
    springDamping: 4,
  },

  // ---- Projects area ----
  {
    element: <Cube size={70} color="rgba(220,239,230,0.8)" />,
    position: { top: "750px", right: "6%" },
    parallaxFactor: -0.12,
    velocitySensitivity: 0.3,
    direction: -1,
    axis: "x",
    springStiffness: 14,
    springDamping: 5,
  },
  {
    element: <div className="geo-hex h-[120px] w-[120px] bg-pastel-pink/70" />,
    position: { top: "850px", left: "3%" },
    parallaxFactor: -0.18,
    velocitySensitivity: 0.22,
    direction: 1,
    axis: "x",
    springStiffness: 10,
    springDamping: 4,
  },
  {
    element: (
      <div className="geo-dots h-[160px] w-[160px] text-pastel-purple/50" />
    ),
    position: { top: "1000px", right: "20%" },
    parallaxFactor: -0.08,
    velocitySensitivity: 0.4,
    direction: -1,
    axis: "y",
    springStiffness: 20,
    springDamping: 8,
  },

  // ---- Experience area ----
  {
    element: <Cube size={100} color="rgba(233,228,240,0.75)" />,
    position: { top: "1550px", left: "2%" },
    parallaxFactor: -0.16,
    velocitySensitivity: 0.28,
    direction: 1,
    axis: "y",
    springStiffness: 10,
    springDamping: 5,
  },
  {
    element: (
      <div
        className="geo-ring h-[180px] w-[180px]"
        style={{ borderColor: "rgba(242,222,222,0.8)", borderWidth: "4px" }}
      />
    ),
    position: { top: "1750px", right: "4%" },
    parallaxFactor: -0.1,
    velocitySensitivity: 0.2,
    direction: -1,
    axis: "x",
    springStiffness: 6,
    springDamping: 3,
  },
  {
    element: (
      <div className="geo-diamond h-[80px] w-[80px] bg-pastel-green/65" />
    ),
    position: { top: "1900px", left: "25%" },
    parallaxFactor: -0.2,
    velocitySensitivity: 0.35,
    direction: 1,
    axis: "x",
    springStiffness: 16,
    springDamping: 6,
  },

  // ---- Technologies area ----
  {
    element: <Cube size={65} color="rgba(220,239,230,0.75)" />,
    position: { top: "2500px", right: "8%" },
    parallaxFactor: -0.14,
    velocitySensitivity: 0.25,
    direction: -1,
    axis: "y",
    springStiffness: 12,
    springDamping: 5,
  },
  {
    element: (
      <div className="geo-cross h-[100px] w-[100px] bg-pastel-pink/60" />
    ),
    position: { top: "2600px", left: "5%" },
    parallaxFactor: -0.18,
    velocitySensitivity: 0.32,
    direction: 1,
    axis: "x",
    springStiffness: 9,
    springDamping: 4,
  },
  {
    element: <div className="geo-hex h-[90px] w-[90px] bg-pastel-purple/60" />,
    position: { top: "2750px", right: "25%" },
    parallaxFactor: -0.08,
    velocitySensitivity: 0.4,
    direction: -1,
    axis: "x",
    springStiffness: 22,
    springDamping: 8,
  },

  // ---- Education / About / Contact area ----
  {
    element: <Cube size={80} color="rgba(242,222,222,0.7)" />,
    position: { top: "3300px", right: "5%" },
    parallaxFactor: -0.12,
    velocitySensitivity: 0.3,
    direction: 1,
    axis: "y",
    springStiffness: 10,
    springDamping: 4,
  },
  {
    element: (
      <div
        className="geo-ring h-[150px] w-[150px]"
        style={{ borderColor: "rgba(233,228,240,0.8)", borderWidth: "3px" }}
      />
    ),
    position: { top: "3500px", left: "6%" },
    parallaxFactor: -0.16,
    velocitySensitivity: 0.22,
    direction: -1,
    axis: "x",
    springStiffness: 7,
    springDamping: 3,
  },
  {
    element: (
      <div className="geo-dots h-[140px] w-[140px] text-pastel-green/45" />
    ),
    position: { top: "3800px", right: "15%" },
    parallaxFactor: -0.1,
    velocitySensitivity: 0.35,
    direction: 1,
    axis: "x",
    springStiffness: 15,
    springDamping: 6,
  },
  {
    element: (
      <div className="geo-diamond h-[70px] w-[70px] bg-pastel-purple/60" />
    ),
    position: { top: "4100px", left: "20%" },
    parallaxFactor: -0.22,
    velocitySensitivity: 0.18,
    direction: -1,
    axis: "y",
    springStiffness: 6,
    springDamping: 3,
  },
];

/* ---- Animated shape wrapper ---- */
function AnimatedShape({
  shape,
  scrollY,
  scrollVelocity,
}: {
  shape: FloatingShape;
  scrollY: ReturnType<typeof useScroll>["scrollY"];
  scrollVelocity: ReturnType<typeof useVelocity>;
}) {
  const magnitude = shape.velocitySensitivity * 1500;
  const rotateMagnitude = shape.velocitySensitivity * 80;

  // Parallax: smooth offset based on scroll position
  const yParallax = useTransform(scrollY, (v) => v * shape.parallaxFactor);

  // Velocity-driven displacement on the shape's primary axis
  const displacementFromVelocity = useTransform(
    scrollVelocity,
    [-3000, 0, 3000],
    [-magnitude * shape.direction, 0, magnitude * shape.direction],
  );

  // Velocity-driven rotation (direction affects spin direction)
  const rotateFromVelocity = useTransform(
    scrollVelocity,
    [-2000, 0, 2000],
    [-rotateMagnitude * shape.direction, 0, rotateMagnitude * shape.direction],
  );

  // Each shape gets its own spring config → different inertia/decay
  const springConfig = {
    stiffness: shape.springStiffness,
    damping: shape.springDamping,
  };

  const displacement = useSpring(displacementFromVelocity, springConfig);
  const rotate = useSpring(rotateFromVelocity, springConfig);
  const ySmooth = useSpring(yParallax, { stiffness: 80, damping: 25 });

  // Apply displacement on the correct axis
  const xMotion = shape.axis === "x" ? displacement : undefined;
  const yExtra = shape.axis === "y" ? displacement : undefined;

  return (
    <motion.div
      className="absolute"
      style={{
        ...shape.position,
        y: shape.axis === "y" ? yExtra : ySmooth,
        x: xMotion,
        rotate,
      }}
    >
      {shape.element}
    </motion.div>
  );
}

export default function FloatingShapes() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {shapes.map((shape, i) => (
        <AnimatedShape
          key={i}
          shape={shape}
          scrollY={scrollY}
          scrollVelocity={scrollVelocity}
        />
      ))}
    </div>
  );
}
