import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "",
  resources: {
    en: {
      translation: {
        Header_Links_Projects: "Projects",
        Header_Links_Experiences: "Experiences",
        Header_Links_Contact: "Contact Me",

        Hello_Title: "Hello, I'm Maël 👋",
        Hello_Description: "Software Engineer, Student at EFREI Paris",

        Presentation_Title: "Hi, I'm Maël. Nice to meet you.",
        Presentation_Description:
          "I am currently a student at EFREI Paris in computer science. I am looking for a work-study program in web development for a 2-year contract starting in September 2024.",
        Projects_Title: "Some of my projects 🧑‍💻",
        Projects_More: "More Projects",

        StudiesAndExperiences_Title: "Studies and Experiences ✨",
        StudiesAndExperience_Efrei: "Efrei Paris",
        StudiesAndExperience_Efrei_Date: "2021 - 2026",
        StudiesAndExperience_Efrei_Description:
          "Thirst year of a Engineering Degree in IT",
        StudiesAndExperience_Efrei_Image: "/compagnies_logo/efrei.png",
        StudiesAndExperience_Efrei_Alt: "efrei",
        StudiesAndExperience_Logteam: "Logteam & INTM Group",
        StudiesAndExperience_Logteam_Date: "jan. 2023 - jun. 2023",
        StudiesAndExperience_Logteam_Description:
          "Part-Time as Business Developer after an internship of one month",
        StudiesAndExperience_Logteam_Image: "/compagnies_logo/intm.png",
        StudiesAndExperience_Logteam_Alt: "intm",
        StudiesAndExperience_APU: "Asia Pacific University",
        StudiesAndExperience_APU_Date: "sept. 2023 - dec. 2023",
        StudiesAndExperience_APU_Description:
          "Exchange (one semester) in Kuala Lumpur, Malaysia",
        StudiesAndExperience_APU_Image: "/compagnies_logo/apu.png",
        StudiesAndExperience_APU_Alt: "APU",

        Technos_Title: "Technologies I use ⚙️",
        Technos_Front: "Front-End Developement",
        Technos_Back: "Back-End Developement",
        Technos_Others: "Others",

        Contact_Title: "Let's talk together !",
        Contact_Description:
          "I am currently a student at EFREI Paris in computer science. I am looking for a work-study program in web development for a 2-year contract starting in September 2024.",
        Contact_Form_Name: "Name...",
        Contact_Form_Email: "Email...",
        Contact_Form_Message: "Message...",
        Contact_Form_Button: "Send Message",

        Footer_Text1: "Designed and Developped by Maël AUBERT",
        Footer_Text2: "© 2023 - Maël Aubert - All rights reserved.",
      },
    },
    fr: {
      translation: {
        Header_Links_Projects: "Projets",
        Header_Links_Experiences: "Expériences",
        Header_Links_Contact: "Contactez-moi",

        Hello_Title: "Bonjour, je suis Maël 👋",
        Hello_Description: "Software Engineer, étudiant à l'EFREI Paris",

        Presentation_Title: "Bonjour, je suis Maël. Enchanté.",
        Presentation_Description:
          "Je suis actuellement étudiant à l'EFREI Paris en informatique. Je suis en recherche d’une alternance en développement web pour un contrat de 2 ans à partir de septembre 2024.",

        Projects_Title: "Quelques uns de mes projets 🧑‍💻",
        Projects_More: "Plus de Projets",

        StudiesAndExperiences_Title: "Études et Expériences ✨",
        StudiesAndExperience_Efrei: "Efrei Paris",
        StudiesAndExperience_Efrei_Date: "2021 - 2026",
        StudiesAndExperience_Efrei_Description:
          "Troisième année d'un cursus d'ingénieur en informatique",
        StudiesAndExperience_Efrei_Image: "/compagnies_logo/efrei.png",
        StudiesAndExperience_Efrei_Alt: "efrei",
        StudiesAndExperience_Logteam: "Logteam & INTM Group",
        StudiesAndExperience_Logteam_Date: "jan. 2023 - jun. 2023",
        StudiesAndExperience_Logteam_Description:
          "Temps Partiel en parallèle de mes études en tant que Business Developer dans une ESN après un stage d'un mois.",
        StudiesAndExperience_Logteam_Image: "/compagnies_logo/intm.png",
        StudiesAndExperience_Logteam_Alt: "intm",
        StudiesAndExperience_APU: "Asia Pacific University",
        StudiesAndExperience_APU_Date: "sept. 2023 - dec. 2023",
        StudiesAndExperience_APU_Description:
          "Échange (un semestre) à Kuala Lumpur, Malaisie",
        StudiesAndExperience_APU_Image: "/compagnies_logo/apu.png",
        StudiesAndExperience_APU_Alt: "APU",

        Technos_Title: "Technologies que j'utilise ⚙️",
        Technos_Front: "Front-End Developement",
        Technos_Back: "Back-End Developement",
        Technos_Others: "Autres",

        Contact_Title: "Parlons ensemble !",
        Contact_Description:
          "Je suis actuellement étudiant à l'EFREI Paris en informatique. Je suis en recherche d’une alternance en développement web pour un contrat de 2 ans à partir de septembre 2024.",
        Contact_Form_Name: "Nom...",
        Contact_Form_Email: "Email...",
        Contact_Form_Message: "Message...",
        Contact_Form_Button: "Envoyer le Message",

        Footer_Text1: "Designé et Développé par Maël AUBERT",
        Footer_Text2: "© 2023 - Maël Aubert - Tous droits réservés.",
      },
    },
    sp: {
      translation: {
        Header_Links_Projects: "Proyectos",
        Header_Links_Experiences: "Experiencias",
        Header_Links_Contact: "Contáctame",

        Hello_Title: "Hola, soy Maël 👋",
        Hello_Description: "Software Engineer, estudiante en EFREI Paris",

        Presentation_Title: "Hola, soy Maël. Encantado.",
        Presentation_Description:
          "Actualmente soy estudiante en EFREI Paris en informática. Estoy buscando un programa de estudio-trabajo en desarrollo web para un contrato de 2 años a partir de septiembre de 2024.",

        Projects_Title: "Algunos de mis proyectos 🧑‍💻",
        Projects_More: "Más Proyectos",

        StudiesAndExperiences_Title: "Estudios y Experiencias ✨",
        StudiesAndExperience_Efrei: "Efrei Paris",
        StudiesAndExperience_Efrei_Date: "2021 - 2026",
        StudiesAndExperience_Efrei_Description:
          "Tercer año de un curso de ingeniería en informática",
        StudiesAndExperience_Efrei_Image: "/compagnies_logo/efrei.png",
        StudiesAndExperience_Efrei_Alt: "efrei",
        StudiesAndExperience_Logteam: "Logteam & INTM Group",
        StudiesAndExperience_Logteam_Date: "jan. 2023 - jun. 2023",
        StudiesAndExperience_Logteam_Description:
          "Tiempo parcial en paralelo a mis estudios como Business Developer en una ESN después de una pasantía de un mes.",
        StudiesAndExperience_Logteam_Image: "/compagnies_logo/intm.png",
        StudiesAndExperience_Logteam_Alt: "intm",
        StudiesAndExperience_APU: "Asia Pacific University",
        StudiesAndExperience_APU_Date: "sept. 2023 - dec. 2023",
        StudiesAndExperience_APU_Description:
          "Intercambio (un semestre) en Kuala Lumpur, Malasia",
        StudiesAndExperience_APU_Image: "/compagnies_logo/apu.png",
        StudiesAndExperience_APU_Alt: "APU",

        Technos_Title: "Tecnologías que uso ⚙️",
        Technos_Front: "Front-End Developement",
        Technos_Back: "Back-End Developement",
        Technos_Others: "Otros",

        Contact_Title: "¡Hablemos juntos !",
        Contact_Description:
          "Actualmente soy estudiante en EFREI Paris en informática. Estoy buscando un programa de estudio-trabajo en desarrollo web para un contrato de 2 años a partir de septiembre de 2024.",
        Contact_Form_Name: "Nombre...",
        Contact_Form_Email: "Email...",
        Contact_Form_Message: "Mensaje...",
        Contact_Form_Button: "Enviar el Mensaje",

        Footer_Text1: "Diseñado y Desarrollado por Maël AUBERT",
        Footer_Text2: "© 2023 - Maël Aubert - Todos los derechos reservados.",
      },
    },
    de: {
      translation: {
        Header_Links_Projects: "Projekte",
        Header_Links_Experiences: "Erfahrungen",
        Header_Links_Contact: "Kontaktiere mich",

        Hello_Title: "Hallo, ich bin Maël 👋",
        Hello_Description: "Software Engineer, Student an der EFREI Paris",

        Presentation_Title: "Hallo, ich bin Maël. Nett dich kennenzulernen.",
        Presentation_Description:
          "Ich studiere derzeit Informatik an der EFREI Paris. Ich bin auf der Suche nach einem dualen Studienprogramm im Bereich Webentwicklung für einen Zweijahresvertrag mit Beginn im September 2024.",

        Projects_Title: "Einige meiner Projekte 🧑‍💻",
        Projects_More: "Mehr Projekte",

        StudiesAndExperiences_Title: "Studien und Erfahrungen ✨",
        StudiesAndExperience_Efrei: "Efrei Paris",
        StudiesAndExperience_Efrei_Date: "2021 - 2026",
        StudiesAndExperience_Efrei_Description:
          "Drittes Jahr eines Ingenieurstudiums in Informatik",
        StudiesAndExperience_Efrei_Image: "/compagnies_logo/efrei.png",
        StudiesAndExperience_Efrei_Alt: "efrei",
        StudiesAndExperience_Logteam: "Logteam & INTM Group",
        StudiesAndExperience_Logteam_Date: "jan. 2023 - jun. 2023",
        StudiesAndExperience_Logteam_Description:
          "Teilzeit neben meinem Studium als Business Developer in einem ESN nach einem einmonatigen Praktikum.",
        StudiesAndExperience_Logteam_Image: "/compagnies_logo/intm.png",
        StudiesAndExperience_Logteam_Alt: "intm",
        StudiesAndExperience_APU: "Asia Pacific University",
        StudiesAndExperience_APU_Date: "sept. 2023 - dec. 2023",
        StudiesAndExperience_APU_Description:
          "Austausch (ein Semester) in Kuala Lumpur, Malaysia",
        StudiesAndExperience_APU_Image: "/compagnies_logo/apu.png",
        StudiesAndExperience_APU_Alt: "APU",

        Technos_Title: "Technologien, die ich verwende ⚙️",
        Technos_Front: "Front-End Developement",
        Technos_Back: "Back-End Developement",
        Technos_Others: "Andere",

        Contact_Title: "Lass uns zusammen reden !",
        Contact_Description:
          "Ich studiere derzeit Informatik an der EFREI Paris. Ich bin auf der Suche nach einem dualen Studienprogramm im Bereich Webentwicklung für einen Zweijahresvertrag mit Beginn im September 2024.",
        Contact_Form_Name: "Name...",
        Contact_Form_Email: "Email...",
        Contact_Form_Message: "Nachricht...",
        Contact_Form_Button: "Nachricht senden",

        Footer_Text1: "Entworfen und entwickelt von Maël AUBERT",
        Footer_Text2: "© 2023 - Maël Aubert - Alle Rechte vorbehalten.",
      },
    },
  },
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
