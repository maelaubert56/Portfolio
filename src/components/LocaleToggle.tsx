"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n, type Locale } from "@/i18n/provider";
import { ChevronDown } from "lucide-react";

const locales: { value: Locale; flag: string; label: string }[] = [
  { value: "fr", flag: "🇫🇷", label: "Français" },
  { value: "en", flag: "🇬🇧", label: "English" },
];

export default function LocaleToggle() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.value === locale)!;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm text-text-secondary transition-colors hover:text-text-primary"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{current.flag}</span>
        <span className="hidden sm:inline text-xs font-medium">
          {current.label}
        </span>
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 min-w-[140px] overflow-hidden rounded-xl border border-glass-border bg-glass-bg shadow-lg backdrop-blur-xl">
          {locales.map((l) => (
            <button
              key={l.value}
              onClick={() => {
                setLocale(l.value);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/5 ${
                l.value === locale
                  ? "font-medium text-text-primary"
                  : "text-text-secondary"
              }`}
              role="option"
              aria-selected={l.value === locale}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
