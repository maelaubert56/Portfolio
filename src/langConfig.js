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
            }
        },
        fr: {
            translation: {
                Header_Links_Projects: "Projets",
                Header_Links_Experiences: "Expériences",
                Header_Links_Contact: "Contactez-moi",
            }
        },
        sp: {
            translation: {
                Header_Links_Projects: "Proyectos",
                Header_Links_Experiences: "Experiencias",
                Header_Links_Contact: "Contáctame",
            }
        },
        de: {
            translation: {
                Header_Links_Projects: "Projekte",
                Header_Links_Experiences: "Erfahrungen",
                Header_Links_Contact: "Kontaktiere mich",
            }
        }
    },
    keySeparator: false,
    interpolation: { escapeValue: false }
});

export default i18n;
