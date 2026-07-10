"use client";

import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useI18n } from "@/i18n/provider";

const socials = [
  {
    label: "Email",
    href: "mailto:maelaubert56@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/maelaubert56",
    icon: SiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mael-aubert",
    icon: FaLinkedinIn,
  },
];

export default function Contact() {
  const { t } = useI18n();
  return (
    <SectionWrapper id="contact">
      <div className="relative z-10 mx-auto max-w-xl text-center">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          {t.contact.title}
        </h2>
        <p className="mb-8 text-text-secondary">{t.contact.subtitle}</p>

        <GlassCard hover={false} className="p-8">
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm leading-relaxed text-text-secondary">
              {t.contact.description}
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-glass-border bg-glass-bg text-text-secondary backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:text-text-primary hover:shadow-md"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
