"use client";

import { useEffect, useRef, useCallback } from "react";
import Matter from "matter-js";

const BALL_COLORS = [
  "#f2dede", // pastel pink
  "#dcefe6", // pastel green
  "#e9e4f0", // pastel purple
  "#f5e6d0", // pastel orange
  "#d6e8f5", // pastel blue
  "#fde8e8", // light pink
  "#e0f0e3", // light green
  "#ede6f6", // light lavender
];

const MIN_RADIUS = 9;
const MAX_RADIUS = 17;

export default function PhysicsBalls() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const mouseConstraintRef = useRef<Matter.MouseConstraint | null>(null);
  const wallsRef = useRef<Matter.Body[]>([]);
  const lastScrollY = useRef(0);
  const listenersRef = useRef<(() => void) | null>(null);

  const cleanup = useCallback(() => {
    listenersRef.current?.();
    listenersRef.current = null;
    if (renderRef.current) {
      Matter.Render.stop(renderRef.current);
      renderRef.current.canvas.remove();
      renderRef.current = null;
    }
    if (runnerRef.current) {
      Matter.Runner.stop(runnerRef.current);
      runnerRef.current = null;
    }
    if (engineRef.current) {
      Matter.Engine.clear(engineRef.current);
      engineRef.current = null;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Delay init so layout is fully settled (images, fonts, mobile reflow)
    const initTimeout = setTimeout(() => {
      const width = window.innerWidth;
      const height = document.documentElement.scrollHeight;
      const footerHeight = 80;
      const floorY = height - footerHeight;
      const ballCount = Math.round(400); // ~50 balls on 1000px width, scales up/down with screen size

      // Engine
      const engine = Matter.Engine.create({
        gravity: { x: 0, y: 1, scale: 0.001 },
      });
      engineRef.current = engine;

      // Renderer
      const render = Matter.Render.create({
        element: container,
        canvas,
        engine,
        options: {
          width,
          height,
          wireframes: false,
          background: "transparent",
          pixelRatio: Math.min(window.devicePixelRatio, 2),
        },
      });
      renderRef.current = render;

      // Walls (floor, left, right) — no ceiling so balls can fly up
      const wallThickness = 60;
      const walls = [
        // Floor (above footer)
        Matter.Bodies.rectangle(
          width / 2,
          floorY + wallThickness / 2,
          width + 100,
          wallThickness,
          { isStatic: true, render: { visible: false } },
        ),
        // Left
        Matter.Bodies.rectangle(
          -wallThickness / 2,
          height / 2,
          wallThickness,
          height * 2,
          { isStatic: true, render: { visible: false } },
        ),
        // Right
        Matter.Bodies.rectangle(
          width + wallThickness / 2,
          height / 2,
          wallThickness,
          height * 2,
          { isStatic: true, render: { visible: false } },
        ),
      ];
      wallsRef.current = walls;
      Matter.Composite.add(engine.world, walls);

      // Balls — spawn near the floor
      const balls: Matter.Body[] = [];
      for (let i = 0; i < ballCount; i++) {
        const radius = MIN_RADIUS + Math.random() * (MAX_RADIUS - MIN_RADIUS);
        const color =
          BALL_COLORS[Math.floor(Math.random() * BALL_COLORS.length)];
        const ball = Matter.Bodies.circle(
          radius + Math.random() * (width - radius * 2),
          floorY - 100 - Math.random() * 400,
          radius,
          {
            restitution: 0.6,
            friction: 0.1,
            frictionAir: 0.01,
            density: 0.001,
            render: {
              fillStyle: color,
              strokeStyle: "rgba(255,255,255,0.3)",
              lineWidth: 1,
            },
          },
        );
        balls.push(ball);
      }
      Matter.Composite.add(engine.world, balls);

      // Mouse interaction
      const mouse = Matter.Mouse.create(canvas);
      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.1,
          damping: 0.1,
          render: { visible: false },
        },
      });
      mouseConstraintRef.current = mouseConstraint;
      Matter.Composite.add(engine.world, mouseConstraint);
      render.mouse = mouse;

      // Mouse repulsion
      const handleMouseMove = (e: MouseEvent) => {
        const mx = e.clientX;
        const my = e.clientY + window.scrollY;

        balls.forEach((ball) => {
          const dx = ball.position.x - mx;
          const dy = ball.position.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 50 && dist > 0) {
            const force = 0.005 * (1 - dist / 50);
            Matter.Body.applyForce(ball, ball.position, {
              x: (dx / dist) * force,
              y: (dy / dist) * force,
            });
          }
        });
      };
      window.addEventListener("mousemove", handleMouseMove);

      // Scroll-based shake
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const delta = scrollY - lastScrollY.current;
        lastScrollY.current = scrollY;

        if (Math.abs(delta) > 3) {
          const forceMag = Math.min(Math.abs(delta) * 0.00008, 0.004);
          balls.forEach((ball) => {
            Matter.Body.applyForce(ball, ball.position, {
              x: (Math.random() - 0.5) * forceMag,
              y: -forceMag * 0.5 * Math.sign(delta),
            });
          });
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });

      // Run
      const runner = Matter.Runner.create();
      runnerRef.current = runner;
      Matter.Runner.run(runner, engine);
      Matter.Render.run(render);

      // Resize handler
      const handleResize = () => {
        const w = window.innerWidth;
        const h = document.documentElement.scrollHeight;
        const fY = h - footerHeight;
        render.canvas.width = w * Math.min(window.devicePixelRatio, 2);
        render.canvas.height = h * Math.min(window.devicePixelRatio, 2);
        render.options.width = w;
        render.options.height = h;

        Matter.Body.setPosition(walls[0], {
          x: w / 2,
          y: fY + wallThickness / 2,
        });
        Matter.Body.setVertices(
          walls[0],
          Matter.Bodies.rectangle(
            w / 2,
            fY + wallThickness / 2,
            w + 100,
            wallThickness,
          ).vertices,
        );
        Matter.Body.setPosition(walls[1], { x: -wallThickness / 2, y: h / 2 });
        Matter.Body.setPosition(walls[2], {
          x: w + wallThickness / 2,
          y: h / 2,
        });
      };
      window.addEventListener("resize", handleResize);

      // Store listener cleanup
      listenersRef.current = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }, 500);

    return () => {
      clearTimeout(initTimeout);
      cleanup();
    };
  }, [cleanup]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-5"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
