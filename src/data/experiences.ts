import { Experience } from "@/types";

export const experiences: Experience[] = [
  // --- Expériences professionnelles ---
  {
    id: "ekino-canal-plus",
    company: "Ekino",
    category: "pro",
    dateStart: "2026-09",
    logo: "/images/logos/ekino.webp",
    location: "Paris, France",
    projects: [
      { name: "CANAL+", logo: "/images/logos/canal-plus.webp", monochrome: true },
    ],
  },
  {
    id: "ekino",
    company: "Ekino",
    category: "pro",
    dateStart: "2024-09",
    dateEnd: "2026-08",
    logo: "/images/logos/ekino.webp",
    location: "Paris, France",
    projects: [
      { name: "Royal Canin", logo: "/images/logos/royal-canin.webp" },
      {
        name: "Vitality",
        logo: "/images/logos/vitality.svg",
        monochrome: true,
        url: "https://github.com/ekino/v6y",
      },
    ],
  },
  {
    id: "intm",
    company: "INTM Groupe",
    category: "pro",
    dateStart: "2023-01",
    dateEnd: "2023-07",
    logo: "/images/logos/intm.webp",
    location: "Paris, France",
    technologies: ["Prospection B2B", "Recrutement tech", "Commercial"],
  },

  // --- Expériences associatives ---
  {
    id: "live-efrei-president",
    category: "associative",
    dateStart: "2025-03",
    logo: "/images/logos/live-efrei.webp",
    location: "Villejuif, France",
    technologies: ["Management", "Événementiel"],
  },
  {
    id: "bda-efrei-vp",
    category: "associative",
    dateStart: "2025-04",
    logo: "/images/logos/bda-efrei.webp",
    location: "Villejuif, France",
    technologies: ["Management", "Événementiel", "Développement web"],
  },
  {
    id: "bds-efrei-tech",
    category: "associative",
    dateStart: "2023-05",
    logo: "/images/logos/bds-efrei.webp",
    logoBackground: "neutral",
    location: "Villejuif, France",
    technologies: ["React", "Node.js", "Web Scraping", "Partenariats"],
  },
];
