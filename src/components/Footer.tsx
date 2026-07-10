"use client";

import { useI18n } from "@/i18n/provider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative z-10 py-8 text-center text-xs text-text-secondary">
      <p>
        © {new Date().getFullYear()} Maël Aubert. {t.footer.rights}
      </p>
      <a
        href="https://github.com/maelaubert56/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-block text-text-secondary/60 transition-colors hover:text-text-secondary"
      >
        {t.footer.source} ↗
      </a>
    </footer>
  );
}
