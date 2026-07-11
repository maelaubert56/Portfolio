"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { useI18n } from "@/i18n/provider";

const decorativeCards = [
  {
    id: 1,
    className: "absolute -bottom-15 -left-40 h-36 w-56 rotate-[-6deg]",
    delay: 0.5,
  },
  {
    id: 2,
    className: "absolute -bottom-8 -left-20 h-32 w-48 rotate-[4deg]",
    delay: 0.7,
  },
];

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative flex items-center justify-center px-6 pb-12">
      <div className="relative z-10 mx-auto w-full max-w-2xl">
        {/* Decorative cards */}
        {decorativeCards.map((card, i) => (
          <GlassCard
            key={i}
            hover={false}
            className={card.className}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: card.id === 1 ? 0.8 : 0.6,
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
          style={{ overflow: "visible" }}
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
              src="/avatar.webp"
              alt="Maël Aubert"
              width={180}
              height={180}
              priority
              className="h-22.5 w-22.5 rounded-3xl object-cover shadow-lg ring-3 ring-white/30 md:h-45 md:w-45"
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
              {t.hero.subtitle}
            </motion.p>

            <motion.p
              className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary md:text-base"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              {t.hero.description}
            </motion.p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start">
              <motion.a
                href="#projects"
                className="inline-flex rounded-full bg-text-primary px-6 py-3 text-sm font-medium text-bg-main transition-colors hover:bg-text-primary/90"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                {t.hero.cta}
              </motion.a>

              <motion.a
                href="/CV_Mael-AUBERT.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-glass-border px-6 py-3 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary hover:border-text-secondary/30"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
              >
                <Download size={16} />
                {t.hero.cv}
              </motion.a>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
