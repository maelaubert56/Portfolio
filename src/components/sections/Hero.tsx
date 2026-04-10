"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

const decorativeCards = [
  {
    className: "absolute -top-6 -left-12 h-36 w-56 rotate-[-6deg] opacity-40",
    delay: 0.3,
  },
  {
    className:
      "absolute -bottom-8 -right-10 h-32 w-48 rotate-[4deg] opacity-30",
    delay: 0.5,
  },
  {
    className: "absolute top-10 -right-20 h-28 w-40 rotate-[8deg] opacity-25",
    delay: 0.7,
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-24 pb-12">
      {/* Geometric shapes behind hero card */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-[30%] left-[30%] geo-diamond h-[140px] w-[140px] bg-pastel-pink/80 animate-float-slow" />
        <div
          className="absolute top-[40%] right-[25%] geo-ring h-[170px] w-[170px] animate-float-medium"
          style={{ borderColor: "rgba(233,228,240,0.9)", borderWidth: "4px" }}
        />
        <div className="absolute bottom-[30%] left-[50%] -translate-x-1/2 geo-hex h-[110px] w-[110px] bg-pastel-green/70 animate-float-fast" />
        <div className="absolute top-[50%] left-[35%] geo-dots h-[130px] w-[130px] text-pastel-purple/45 animate-float-medium" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-2xl">
        {/* Decorative cards */}
        {decorativeCards.map((card, i) => (
          <GlassCard
            key={i}
            hover={false}
            className={card.className}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: card.className.includes("opacity-40")
                ? 0.4
                : card.className.includes("opacity-30")
                  ? 0.3
                  : 0.25,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: card.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        {/* Main card */}
        <GlassCard
          hover={false}
          className="relative z-10 p-10 pt-28 md:p-14 md:pt-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Avatar — top right, half outside the card */}
          <motion.div
            className="absolute -top-10 left-1/2 z-20 -translate-x-1/2 md:translate-x-0 md:left-auto md:-top-14 md:right-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 180,
              damping: 16,
            }}
          >
            <Image
              src="/avatar.png"
              alt="Maël Aubert"
              width={1200}
              height={140}
              priority
              className="h-[130px] w-[130px] rounded-3xl object-cover shadow-lg ring-4 ring-white/30 md:h-[180px] md:w-[180px]"
            />
          </motion.div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <motion.h1
              className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              Maël Aubert
            </motion.h1>

            <motion.p
              className="mt-2 text-lg font-medium text-text-secondary md:text-xl"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              Développeur JavaScript
            </motion.p>

            <motion.p
              className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary md:text-base"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              Je crée des expériences web modernes, performantes et soignées
              avec React, Next.js et TypeScript.
            </motion.p>

            <motion.a
              href="#projects"
              className="mt-8 inline-flex rounded-full bg-text-primary px-6 py-3 text-sm font-medium text-bg-main transition-colors hover:bg-text-primary/90"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              Voir mes projets
            </motion.a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
