import { ChevronRight } from "lucide-react";
import { useI18n } from "@/i18n/provider";

export default function CardDetailsLabel() {
  const { t } = useI18n();

  return (
    <span className="mt-4 inline-flex items-center gap-1 rounded-full border border-text-secondary/25 px-3 py-1.5 text-xs font-semibold text-text-primary transition-colors group-hover:bg-text-secondary/10 group-focus-visible:bg-text-secondary/10">
      {t.a11y.viewDetails}
      <ChevronRight size={14} aria-hidden="true" />
    </span>
  );
}
