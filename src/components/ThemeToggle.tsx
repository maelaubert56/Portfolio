"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "@/components/ThemeProvider";
import { useI18n } from "@/i18n/provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useI18n();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-8 w-8 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-text-primary"
      aria-label={theme === "dark" ? t.a11y.lightMode : t.a11y.darkMode}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </motion.div>
    </button>
  );
}
