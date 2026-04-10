import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "sonat-ai",
    name: "Sonat AI",
    shortDescription:
      "App musicale IA qui sépare les stems, génère les accords et partitions depuis n'importe quel morceau.",
    longDescription:
      "Application musicale propulsée par l'intelligence artificielle. Sonat AI permet de séparer les pistes audio (stems) d'un morceau, de générer automatiquement les accords et les partitions. Pipeline de traitement audio avec BullMQ et Redis, modèle IA Demucs pour la séparation de sources.",
    technologies: [
      "Next.js",
      "Express",
      "Howler.js",
      "BullMQ",
      "Redis",
      "IA (Demucs)",
      "Mailjet",
    ],
    images: [
      "/images/projects/sonat-ai/1.png",
      "/images/projects/sonat-ai/2.png",
      "/images/projects/sonat-ai/3.png",
      "/images/projects/sonat-ai/4.png",
    ],
    liveUrl: "https://sonat-ai.com/",
    featured: true,
    createdAt: "2025-01",
  },
  {
    id: "live-efrei",
    name: "Live Efrei",
    shortDescription:
      "Site de l'association musique EFREI — réservation du local, gestion des 120 membres.",
    longDescription:
      "Plateforme web de l'association de musique de l'EFREI. Réservation du local de musique, gestion des membres et administration de l'association. Intégration Discord pour les notifications. Utilisé par les 120 membres de l'association.",
    technologies: ["Next.js", "Express", "Discord.js", "PostgreSQL"],
    images: ["/images/projects/live-efrei.png"],
    liveUrl: "https://live-efrei.fr",
    featured: true,
    createdAt: "2024-09",
  },
  {
    id: "dae-hub",
    name: "DAE Hub",
    shortDescription:
      "Système de gestion des absences excusées EFREI — 3 niveaux de validation, conformité RGPD.",
    longDescription:
      "Plateforme de gestion du système d'absences excusées de l'EFREI, remplaçant l'ancien processus par PDF. Workflow de validation à 3 niveaux (étudiant → association → administration). Fortes exigences de conformité RGPD car traitement de données personnelles d'étudiants. Cible : ensemble des étudiants, bureaux des +60 associations, services absences et vie associative.",
    technologies: [
      "Next.js",
      "Express",
      "Nodemailer",
      "PostgreSQL",
      "Cron Jobs",
    ],
    images: ["/images/projects/dae-hub.png"],
    featured: true,
    createdAt: "2024-06",
  },
  {
    id: "bds-app",
    name: "BDS App",
    shortDescription:
      "App de gestion des entraînements du Bureau des Sports — 360 membres, 13 sports.",
    longDescription:
      "Application de gestion des entraînements du Bureau des Sports de l'EFREI. Comptabilisation des présences, affichage conditionnel des entraînements selon le statut de l'étudiant, calcul des points d'engagement accordés par l'école. 360 utilisateurs actifs, 13 sports représentés. Notifications par email et Discord.",
    technologies: ["Next.js", "Express", "Discord.js", "Nodemailer"],
    images: ["/images/projects/bds-app.png"],
    liveUrl: "https://presences.bds-efrei.fr",
    featured: false,
    createdAt: "2024-03",
  },
];
