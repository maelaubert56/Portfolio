import Image from "next/image";
import type { ExperienceTranslation } from "@/i18n/provider";
import type { Experience } from "@/types";

export default function ExperienceProjects({
  projects,
  translations,
  detailed = false,
}: {
  projects: NonNullable<Experience["projects"]>;
  translations?: ExperienceTranslation["projects"];
  detailed?: boolean;
}) {
  if (!translations) return null;

  return (
    <ul className="mt-4 space-y-4 text-left">
      {projects.map(({ name, logo, monochrome, url }) => {
        const project = translations[name];
        if (!project) return null;

        const logoImage = (
          <Image
            src={logo}
            alt={name}
            width={96}
            height={32}
            className={`h-8 w-24 object-contain object-left ${monochrome ? "[.dark_&]:invert" : ""}`}
          />
        );

        return (
          <li key={name} className="border-t border-glass-border pt-4">
            {detailed && url ? (
              <a href={url} target="_blank" rel="noreferrer" className="inline-block rounded-sm hover:opacity-75">
                {logoImage}
              </a>
            ) : logoImage}
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {detailed ? project.longDescription ?? project.description : project.description}
            </p>
            {detailed && project.highlights && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-secondary">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
