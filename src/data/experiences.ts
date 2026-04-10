import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "ekino",
    role: "Développeur JavaScript",
    company: "Ekino",
    dateStart: "2024-01",
    description:
      "Développement d'applications web React & Next.js pour des clients grands comptes. Mise en place d'architectures frontend scalables, tests unitaires et intégration continue.",
    logo: "/images/logos/ekino.png",
    location: "Paris, France",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Jest"],
  },
  {
    id: "live-efrei-president",
    role: "Président",
    company: "Live Efrei — Association de musique",
    dateStart: "2023-09",
    dateEnd: "2024-09",
    description:
      "Direction d'une association de 120 membres. Gestion d'une équipe de 15 responsables, organisation de concerts de +400 personnes, gestion budgétaire et partenariats. Développement du site web de l'association.",
    logo: "/images/logos/live-efrei.png",
    location: "Villejuif, France",
    technologies: ["Management", "Événementiel", "Next.js", "Express"],
  },
  {
    id: "freelance",
    role: "Développeur Freelance",
    company: "Indépendant",
    dateStart: "2023-06",
    dateEnd: "2023-12",
    description:
      "Réalisation de sites vitrines et applications web pour des startups et PME. Design, développement et déploiement complet.",
    logo: "/images/logos/freelance.png",
    location: "Paris, France",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: "stage",
    role: "Développeur Web — Stage",
    company: "Startup Tech",
    dateStart: "2023-01",
    dateEnd: "2023-06",
    description:
      "Participation au développement d'une application SaaS. Implémentation de features frontend et intégration d'APIs REST.",
    logo: "/images/logos/startup.png",
    location: "Paris, France",
    technologies: ["Vue.js", "JavaScript", "REST API"],
  },
];
