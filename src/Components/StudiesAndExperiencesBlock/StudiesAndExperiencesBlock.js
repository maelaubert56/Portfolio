import "./StudiesAndExperiencesBlock.css";
import timeline from "../../assets/timeline_long.svg";
import { useTranslation } from "react-i18next";

function StudiesAndExperiencesBlock() {
  const list = [
    {
      en: {
        name: "Efrei Paris",
        date: "2021 - 2026",
        description: "Fourth year of an Engineering Degree in IT",
        image: "/compagnies_logo/efrei.png",
        alt: "efrei",
      },
      fr: {
        name: "Efrei Paris",
        date: "2021 - 2026",
        description: "Quatrième année d'un cursus d'ingénieur en informatique",
        image: "/compagnies_logo/efrei.png",
        alt: "efrei",
      },
      es: {
        name: "Efrei Paris",
        date: "2021 - 2026",
        description: "Cuarto año de Ingeniería en Informática",
        image: "/compagnies_logo/efrei.png",
        alt: "efrei",
      },
      ge: {
        name: "Efrei Paris",
        date: "2021 - 2026",
        description: "Viertes Jahr des Informatik-Ingenieurstudiums",
        image: "/compagnies_logo/efrei.png",
        alt: "efrei",
      },
    },
    {
      en: {
        name: "INTM Group",
        date: "jan. 2023 - jun. 2023",
        description:
          "Part-Time as Business Developer after an internship of one month",
        image: "/compagnies_logo/intm.png",
        alt: "intm",
      },
      fr: {
        name: "INTM Groupe",
        date: "jan. 2023 - jun. 2023",
        description:
          "Temps Partiel en parallèle de mes études en tant que Business Developer dans une ESN après un stage d'un mois.",
        image: "/compagnies_logo/intm.png",
        alt: "intm",
      },
      es: {
        name: "INTM Groupe",
        date: "jan. 2023 - jun. 2023",
        description: "Tiempo parcial como Business Developer después de una práctica de un mes",
        image: "/compagnies_logo/intm.png",
        alt: "intm",
      },
      ge: {
        name: "INTM Gruppe",
        date: "Jan. 2023 - Jun. 2023",
        description: "Teilzeit als Business Developer nach einem einmonatigen Praktikum",
        image: "/compagnies_logo/intm.png",
        alt: "intm",
      },
    },
    {
      en: {
        name: "Asia Pacific University",
        date: "sept. 2023 - dec. 2023",
        description: "Exchange (one semester) in Kuala Lumpur, Malaysia",
        image: "/compagnies_logo/apu.png",
        alt: "APU",
      },
      fr: {
        name: "Asia Pacific University",
        date: "sept. 2023 - dec. 2023",
        description: "Mobilité d'un semèstre à Kuala Lumpur, Malaisie",
        image: "/compagnies_logo/apu.png",
        alt: "APU",
      },
      es: {
        name: "Asia Pacific University",
        date: "sept. 2023 - dic. 2023",
        description: "Intercambio (un semestre) en Kuala Lumpur, Malasia",
        image: "/compagnies_logo/apu.png",
        alt: "APU",
      },
      ge: {
        name: "Asia Pacific University",
        date: "Sept. 2023 - Dez. 2023",
        description: "Austauschsemester in Kuala Lumpur, Malaysia",
        image: "/compagnies_logo/apu.png",
        alt: "APU",
      },
    },
    {
      en: {
        name: "Ekino",
        date: "sept. 2024 - now",
        description: "Full-Time as Front-End Engineer Apprentice",
        image: "/compagnies_logo/ekino.png",
        alt: "ekino",
      },
      fr: {
        name: "Ekino",
        date: "sept. 2024 - maintenant",
        description: "Temps plein en tant qu'apprenti ingénieur Front-End",
        image: "/compagnies_logo/ekino.png",
        alt: "ekino",
      },
      es: {
        name: "Ekino",
        date: "sept. 2024 - ahora",
        description: "Tiempo completo como Ingeniero Front-End en prácticas",
        image: "/compagnies_logo/ekino.png",
        alt: "ekino",
      },
      ge: {
        name: "Ekino",
        date: "Sept. 2024 - jetzt",
        description: "Vollzeit als Front-End Ingenieur Auszubildender",
        image: "/compagnies_logo/ekino.png",
        alt: "ekino",
      },

    }
  ];
  const { t } = useTranslation();

  return (
    <div id="StudiesAndExperiencesBlock">
      <h2>{t("StudiesAndExperiences_Title")}</h2>
      <div>
        <img src={timeline} alt="timeline" />

        {list.map((item, index) => (
          <div key={index} className="logo">
            <div>
              <div>
                <img src={item.en.image} alt={item.alt} />
              </div>
            </div>
          </div>
        ))}

        {list.map((item, index) => (
          <div key={index} className="description">
            <h3>{item.en.name}</h3>
            <span>{item.en.date}</span>
            <p>{item.en.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudiesAndExperiencesBlock;
