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
                Presentation_Description : "I’m currently student at Efrei Paris Engineering School in IT. I’m passionate about new technologies and I’m always looking for new challenges.",

                Projects_Title:"Some of my projects 🧑‍💻",
                Projects_More: "More Projects",

                StudiesAndExperiences_Title:"Studies and Experiences ✨",

                Technos_Title:"Technologies I use ⚙️",
                Technos_Front:"Front-End Developement",
                Technos_Back:"Back-End Developement",
                Technos_Others:"Others",

                Contact_Title:"Let's talk together !",
                Contact_Description:"I’m currently student at Efrei Paris Engineering School, there i have to talk about me and other things like what I like and stuffs, blabla. Some more text there with another sentence.",
                Contact_Form_Name:"Name...",
                Contact_Form_Email:"Email...",
                Contact_Form_Message:"Message...",
                Contact_Form_Button:"Send Message",

                Footer_Text1:"Designed and Developped by me",
                Footer_Text2:"© 2023 - Maël Aubert - All rights reserved."
            }
        },
        fr: {
            translation: {
                Header_Links_Projects: "Projets",
                Header_Links_Experiences: "Expériences",
                Header_Links_Contact: "Contactez-moi",

                Hello_Title: "Bonjour, je suis Maël 👋",
                Hello_Description: "Software Engineer, étudiant à l'EFREI Paris",

                Presentation_Title: "Bonjour, je suis Maël. Enchanté.",
                Presentation_Description : "Je suis actuellement étudiant à l'EFREI Paris en informatique. Je suis passionné par les nouvelles technologies et je suis toujours à la recherche de nouveaux défis.",

                Projects_Title:"Quelques uns de mes projets 🧑‍💻",
                Projects_More: "Plus de Projets",

                StudiesAndExperiences_Title:"Études et Expériences ✨",

                Technos_Title:"Technologies que j'utilise ⚙️",
                Technos_Front:"Front-End Developement",
                Technos_Back:"Back-End Developement",
                Technos_Others:"Autres",

                Contact_Title:"Parlons ensemble !",
                Contact_Description:"Je suis actuellement étudiant à l'EFREI Paris, là je dois parler de moi et d'autres choses comme ce que j'aime et des trucs, blabla. Un peu plus de texte ici avec une autre phrase.",
                Contact_Form_Name:"Nom...",
                Contact_Form_Email:"Email...",
                Contact_Form_Message:"Message...",
                Contact_Form_Button:"Envoyer le Message",

                Footer_Text1:"Designé et Développé par moi",
                Footer_Text2:"© 2023 - Maël Aubert - Tous droits réservés."

            }
        },
        sp: {
            translation: {
                Header_Links_Projects: "Proyectos",
                Header_Links_Experiences: "Experiencias",
                Header_Links_Contact: "Contáctame",

                Hello_Title: "Hola, soy Maël 👋",
                Hello_Description:"Software Engineer, estudiante en EFREI Paris",

                Presentation_Title: "Hola, soy Maël. Encantado.",
                Presentation_Description : "Actualmente soy estudiante en la Escuela de Ingeniería Efrei Paris en TI. Soy un apasionado de las nuevas tecnologías y siempre estoy buscando nuevos desafíos.",

                Projects_Title:"Algunos de mis proyectos 🧑‍💻",
                Projects_More: "Más Proyectos",

                StudiesAndExperiences_Title:"Estudios y Experiencias ✨",

                Technos_Title:"Tecnologías que uso ⚙️",
                Technos_Front:"Front-End Developement",
                Technos_Back:"Back-End Developement",
                Technos_Others:"Otros",

                Contact_Title:"¡Hablemos juntos !",
                Contact_Description:"Soy actualmente estudiante en la Escuela de Ingeniería Efrei Paris, allí tengo que hablar de mí y de otras cosas como lo que me gusta y cosas, blabla. Un poco más de texto allí con otra frase.",
                Contact_Form_Name:"Nombre...",
                Contact_Form_Email:"Email...",
                Contact_Form_Message:"Mensaje...",
                Contact_Form_Button:"Enviar el Mensaje",

                Footer_Text1:"Diseñado y Desarrollado por mí",
                Footer_Text2:"© 2023 - Maël Aubert - Todos los derechos reservados."
            }
        },
        de: {
            translation: {
                Header_Links_Projects: "Projekte",
                Header_Links_Experiences: "Erfahrungen",
                Header_Links_Contact: "Kontaktiere mich",

                Hello_Title: "Hallo, ich bin Maël 👋",
                Hello_Description: "Software Engineer, Student an der EFREI Paris",

                Presentation_Title: "Hallo, ich bin Maël. Nett dich kennenzulernen.",
                Presentation_Description : "Ich bin derzeit Student an der EFREI Paris Engineering School in IT. Ich bin leidenschaftlich für neue Technologien und suche immer nach neuen Herausforderungen.",

                Projects_Title:"Einige meiner Projekte 🧑‍💻",
                Projects_More: "Mehr Projekte",

                StudiesAndExperiences_Title:"Studien und Erfahrungen ✨",

                Technos_Title:"Technologien, die ich verwende ⚙️",
                Technos_Front:"Front-End Developement",
                Technos_Back:"Back-End Developement",
                Technos_Others:"Andere",

                Contact_Title:"Lass uns zusammen reden !",
                Contact_Description:"Ich bin derzeit Student an der EFREI Paris Engineering School, dort muss ich über mich und andere Dinge wie das, was ich mag und so weiter reden, blabla. Ein bisschen mehr Text da mit einem anderen Satz.",
                Contact_Form_Name:"Name...",
                Contact_Form_Email:"Email...",
                Contact_Form_Message:"Nachricht...",
                Contact_Form_Button:"Nachricht senden",

                Footer_Text1:"Entworfen und entwickelt von mir",
                Footer_Text2:"© 2023 - Maël Aubert - Alle Rechte vorbehalten."
            }
        }
    },
    keySeparator: false,
    interpolation: { escapeValue: false }
});

export default i18n;
