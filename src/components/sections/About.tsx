"use client";

import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useI18n } from "@/i18n/provider";

export default function About() {
  const { t } = useI18n();
  return (
    <SectionWrapper id="about">
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          {t.about.title}
        </h2>

        <div className="relative">
          {/* Main card */}
          <GlassCard hover={false} className="p-8 md:p-10">
            <div className="prose prose-sm max-w-none text-text-secondary prose-headings:text-text-primary prose-strong:text-text-primary">
              <p
                className="text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.about.p1 }}
              />
              <p
                className="text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.about.p2 }}
              />
              <p
                className="text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.about.p3 }}
              />
            </div>
          </GlassCard>

          {/* Overlay card */}
          <GlassCard
            hover={false}
            className="mt-4 ml-auto w-fit max-w-xs p-5 md:-mt-8 md:mr-6"
          >
            <p className="text-sm italic leading-relaxed text-text-secondary">
              {t.about.quote}
            </p>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  );
}
