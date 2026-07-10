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
  colorClass,
  className,
  style,
}: {
  size: number;
  colorClass: string;
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
            className={`face face-${face} ${colorClass}`}
            style={{ width: s, height: s }}
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
    element: <Cube size={90} colorClass="bg-pastel-pink/85" />,
    position: { top: "8%", left: "8%" },
    parallaxFactor: -0.15,
    velocitySensitivity: 0.25,
    direction: 1,
    axis: "x",
    springStiffness: 12,
    springDamping: 6,
  },
  {
    element: <div className="geo-diamond h-27.5 w-27.5 bg-pastel-purple/70" />,
    position: { top: "14%", right: "10%" },
    parallaxFactor: -0.1,
    velocitySensitivity: 0.35,
    direction: -1,
    axis: "y",
    springStiffness: 18,
    springDamping: 7,
  },
  {
    element: <div className="geo-ring h-35 w-35 border-pastel-green/85" />,
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
    element: <Cube size={70} colorClass="bg-pastel-green/80" />,
    position: { top: "17%", right: "6%" },
    parallaxFactor: -0.12,
    velocitySensitivity: 0.3,
    direction: -1,
    axis: "x",
    springStiffness: 14,
    springDamping: 5,
  },
  {
    element: <div className="geo-hex h-30 w-30 bg-pastel-pink/70" />,
    position: { top: "19%", left: "3%" },
    parallaxFactor: -0.18,
    velocitySensitivity: 0.22,
    direction: 1,
    axis: "x",
    springStiffness: 10,
    springDamping: 4,
  },
  {
    element: <div className="geo-dots h-40 w-40 text-pastel-purple/50" />,
    position: { top: "23%", right: "20%" },
    parallaxFactor: -0.08,
    velocitySensitivity: 0.4,
    direction: -1,
    axis: "y",
    springStiffness: 20,
    springDamping: 8,
  },

  // ---- Experience area ----
  {
    element: <Cube size={100} colorClass="bg-pastel-purple/75" />,
    position: { top: "35%", left: "2%" },
    parallaxFactor: -0.16,
    velocitySensitivity: 0.28,
    direction: 1,
    axis: "y",
    springStiffness: 10,
    springDamping: 5,
  },
  {
    element: <div className="geo-ring h-45 w-45 border-4 border-pastel-pink/80" />,
    position: { top: "39%", right: "4%" },
    parallaxFactor: -0.1,
    velocitySensitivity: 0.2,
    direction: -1,
    axis: "x",
    springStiffness: 6,
    springDamping: 3,
  },
  {
    element: <div className="geo-diamond h-20 w-20 bg-pastel-green/65" />,
    position: { top: "42%", left: "25%" },
    parallaxFactor: -0.2,
    velocitySensitivity: 0.35,
    direction: 1,
    axis: "x",
    springStiffness: 16,
    springDamping: 6,
  },

  // ---- Technologies area ----
  {
    element: <Cube size={65} colorClass="bg-pastel-green/75" />,
    position: { top: "56%", right: "8%" },
    parallaxFactor: -0.14,
    velocitySensitivity: 0.25,
    direction: -1,
    axis: "y",
    springStiffness: 12,
    springDamping: 5,
  },
  {
    element: <div className="geo-cross h-25 w-25 bg-pastel-pink/60" />,
    position: { top: "58%", left: "5%" },
    parallaxFactor: -0.18,
    velocitySensitivity: 0.32,
    direction: 1,
    axis: "x",
    springStiffness: 9,
    springDamping: 4,
  },
  {
    element: <div className="geo-hex h-22.5 w-22.5 bg-pastel-purple/60" />,
    position: { top: "61%", right: "25%" },
    parallaxFactor: -0.08,
    velocitySensitivity: 0.4,
    direction: -1,
    axis: "x",
    springStiffness: 22,
    springDamping: 8,
  },

  // ---- Education / About / Contact area ----
  {
    element: <Cube size={80} colorClass="bg-pastel-pink/70" />,
    position: { top: "73%", right: "5%" },
    parallaxFactor: -0.12,
    velocitySensitivity: 0.3,
    direction: 1,
    axis: "y",
    springStiffness: 10,
    springDamping: 4,
  },
  {
    element: <div className="geo-ring h-37.5 w-37.5 border-[3px] border-pastel-purple/80" />,
    position: { top: "78%", left: "6%" },
    parallaxFactor: -0.16,
    velocitySensitivity: 0.22,
    direction: -1,
    axis: "x",
    springStiffness: 7,
    springDamping: 3,
  },
  {
    element: <div className="geo-dots h-35 w-35 text-pastel-green/45" />,
    position: { top: "84%", right: "15%" },
    parallaxFactor: -0.1,
    velocitySensitivity: 0.35,
    direction: 1,
    axis: "x",
    springStiffness: 15,
    springDamping: 6,
  },
  {
    element: <div className="geo-diamond h-17.5 w-17.5 bg-pastel-purple/60" />,
    position: { top: "91%", left: "20%" },
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
