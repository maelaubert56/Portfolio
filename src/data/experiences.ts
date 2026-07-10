import { Experience } from "@/types";

export const experiences: Experience[] = [
  // --- Expériences professionnelles ---
  {
    id: "ekino",
    company: "Ekino",
    category: "pro",
    dateStart: "2024-09",
    logo: "/images/logos/ekino.png",
    location: "Paris, France",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "Nx Monorepo",
      "Micro-Frontends",
    ],
  },
  {
    id: "intm",
    company: "INTM Groupe",
    category: "pro",
    dateStart: "2023-01",
    dateEnd: "2023-07",
    logo: "/images/logos/intm.png",
    location: "Paris, France",
    technologies: ["Prospection B2B", "Recrutement tech", "Commercial"],
  },

  // --- Expériences associatives ---
  {
    id: "live-efrei-president",
    category: "associative",
    dateStart: "2025-03",
    logo: "/images/logos/live-efrei.png",
    location: "Villejuif, France",
    technologies: ["Management", "Événementiel"],
  },
  {
    id: "bda-efrei-vp",
    category: "associative",
    dateStart: "2025-04",
    logo: "/images/logos/bda-efrei.png",
    location: "Villejuif, France",
    technologies: ["Management", "Événementiel", "Développement web"],
  },
  {
    id: "bds-efrei-tech",
    category: "associative",
    dateStart: "2023-05",
    logo: "/images/logos/bds-efrei.png",
    location: "Villejuif, France",
    technologies: ["React", "Node.js", "Web Scraping", "Partenariats"],
  },
];
