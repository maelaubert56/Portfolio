import "./ProjectsBlock.css";
import { useTranslation } from "react-i18next";

function Tile(props) {
  const technos = props.techs.map((tech) => {
    return <li key={tech}>{tech}</li>;
  });
  const links = props.links.map((link) => {
    return (
      <li key={link.name}>
        <a href={link.url}>{link.name}</a>
      </li>
    );
  });

  return (
    // indicate if the id is pair or impair in the class name
    <div className={"tile " + (props.type === 0 ? "tile_0" : "tile_1")}>
      <img src={props.image} alt={props.alt} />
      <div className="tile-hover">
        <h1>{props.title}</h1>
        <p>{props.describe}</p>
        <ul className="technos">{technos}</ul>
        <ul className="links">{links}</ul>
      </div>
    </div>
  );
}

function ProjectsBlock() {
  const { t, i18n } = useTranslation();

  const projectsDatas = {
    en: [
      {
        id: 1,
        type: 0,
        title: "Taromaster",
        describe:
          "A Tarot point counter app with synchronized games to play with friends and compare your scores",
        techs: ["React", "NodeJS", "MongoDB"],
        links: [
          {
            name: "Github",
            url: "https://github.com/maelaubert56/taromaster",
          },
          {
            name: "Website",
            url: "https://taromaster.maelaubert.fr/",
          },
        ],
        image: "/projects_images/taromaster_phone.png",
        alt: "placeholder",
      },
      {
        id: 2,
        type: 1,
        title: "TerraQuiz",
        describe: "A website for geography quizzes",
        techs: ["VueJs", "NodeJS", "MySQL"],
        links: [
          {
            name: "Github",
            url: "https://github.com/maelaubert56/terraquiz",
          },
          {
            name: "Website",
            url: "https://terraquiz.maelaubert.fr/",
          },
        ],
        image: "/projects_images/project_terraquiz_pc.png",
        alt: "placeholder",
      },
      {
        id: 3,
        type: 1,
        title: "EasyDae",
        describe:
          "A website to automate signature process of some files bewteen clubs and the administration of the school",
        techs: ["React", "Bootstrap", "NodeJS", "MySQL"],
        links: [
          {
            name: "Website",
            url: "https://docs.bds-efrei.fr",
          },
        ],
        image: "/projects_images/project_easydae_pc.png",
        alt: "placeholder",
      },
      {
        id: 4,
        type: 0,
        title: "Kéroguic",
        describe: "A website for Keroguic",
        techs: ["HTML", "CSS", "JS"],
        links: [
          {
            name: "Github",
            url: "https://www.github.com",
          },
          {
            name: "Website",
            url: "https://www.keroguic.fr",
          },
        ],
        image: "/projects_images/project_keroguic_phone.png",
        alt: "placeholder",
      },
    ],
    fr: [
      {
        id: 1,
        type: 0,
        title: "Taromaster",
        describe:
          "Une application de comptage de points de Tarot avec des parties synchronisées pour jouer avec ses amis et comparer ses scores",
        techs: ["React", "NodeJS", "MongoDB"],
        links: [
          {
            name: "Github",
            url: "https://github.com/maelaubert56/taromaster",
          },
          {
            name: "Site web",
            url: "https://taromaster.maelaubert.fr/",
          },
        ],
        image: "/projects_images/taromaster_phone.png",
        alt: "placeholder",
      },
      {
        id: 2,
        type: 1,
        title: "TerraQuiz",
        describe: "Un site de quiz de géographie",
        techs: ["VueJs", "NodeJS", "MySQL"],
        links: [
          {
            name: "Github",
            url: "https://github.com/maelaubert56/terraquiz",
          },
          {
            name: "Site web",
            url: "https://terraquiz.maelaubert.fr/",
          },
        ],
        image: "/projects_images/project_terraquiz_pc.png",
        alt: "placeholder",
      },
      {
        id: 3,
        type: 1,
        title: "EasyDae",
        describe:
          "Un site pour automatiser la demande et signature de fichiers entre associations et l'administration de l'école",
        techs: ["React", "NodeJS", "MongoDB"],
        links: [
          {
            name: "Site web",
            url: "https://docs.bds-efrei.fr",
          },
        ],
        image: "/projects_images/project_easydae_pc.png",
        alt: "placeholder",
      },
      {
        id: 4,
        type: 0,
        title: "Kéroguic",
        describe: "Un site pour Keroguic",
        techs: ["HTML", "CSS", "JS"],
        links: [
          {
            name: "Github",
            url: "https://github.com/maelaubert56/Keroguic",
          },
          {
            name: "Site web",
            url: "https://www.keroguic.fr",
          },
        ],
        image: "/projects_images/project_keroguic_phone.png",
        alt: "placeholder",
      },
    ],
    ge: [
      {
        id: 1,
        type: 0,
        title: "Taromaster",
        describe:
          "Eine Anwendung zum Zählen von Tarotpunkten mit synchronisierten Spielen, um mit Freunden zu spielen und Punkte zu vergleichen",
        techs: ["React", "NodeJS", "MongoDB"],
        links: [
          {
            name: "Github",
            url: "https://github.com/maelaubert56/taromaster",
          },
          {
            name: "Webseite",
            url: "https://taromaster.maelaubert.fr/",
          },
        ],
        image: "/projects_images/taromaster_phone.png",
        alt: "placeholder",
      },
      {
        id: 2,
        type: 1,
        title: "TerraQuiz",
        describe: "Eine Geographie-Quiz-Website",
        techs: ["VueJs", "NodeJS", "MySQL"],
        links: [
          {
            name: "Github",
            url: "https://www.github.com/maelaubert56/terraquiz",
          },
          {
            name: "Webseite",
            url: "https://terraquiz.maelaubert.fr/",
          },
        ],
        image: "/projects_images/project_terraquiz_pc.png",
        alt: "placeholder",
      },
      {
        id: 3,
        type: 1,
        title: "EasyDae",
        describe:
          "Eine Website zur Automatisierung des Signaturprozesses einiger Dateien zwischen Vereinen und der Schulverwaltung",
        techs: ["React", "Bootstrap", "NodeJS", "MySQL"],
        links: [
          {
            name: "Webseite",
            url: "https://docs.bds-efrei.fr",
          },
        ],
        image: "/projects_images/project_easydae_pc.png",
        alt: "placeholder",
      },
      {
        id: 4,
        type: 0,
        title: "Kéroguic",
        describe: "Eine Website für Keroguic",
        techs: ["HTML", "CSS", "JS"],
        links: [
          {
            name: "Github",
            url: "https://www.github.com/maelaubert56/Keroguic",
          },
          {
            name: "Webseite",
            url: "https://www.keroguic.fr",
          },
        ],
        image: "/projects_images/project_keroguic_phone.png",
        alt: "placeholder",
      },
    ],
    sp: [
      {
        id: 1,
        type: 0,
        title: "Taromaster",
        describe:
          "Una aplicación para contar puntos de tarot con juegos sincronizados para jugar con amigos y comparar puntos",
        techs: ["React", "NodeJS", "MongoDB"],
        links: [
          {
            name: "Github",
            url: "https://github.com/maelaubert56/taromaster",
          },
          {
            name: "Sitio web",
            url: "https://taromaster.maelaubert.fr/",
          },
        ],
        image: "/projects_images/taromaster_phone.png",
        alt: "placeholder",
      },
      {
        id: 2,
        type: 1,
        title: "TerraQuiz",
        describe: "Un sitio de preguntas de geografía",
        techs: ["VueJs", "NodeJS", "MySQL"],
        links: [
          {
            name: "Github",
            url: "https://www.github.com/maelaubert56/terraquiz",
          },
          {
            name: "Sitio web",
            url: "https://terraquiz.maelaubert.fr/",
          },
        ],
        image: "/projects_images/project_terraquiz_pc.png",
        alt: "placeholder",
      },
      {
        id: 3,
        type: 1,
        title: "EasyDae",
        describe:
          "Un sitio para automatizar el proceso de firma de algunos archivos entre clubes y la administración de la escuela",
        techs: ["React", "Bootstrap", "NodeJS", "MySQL"],
        links: [
          {
            name: "Sitio web",
            url: "https://docs.bds-efrei.fr",
          },
        ],
        image: "/projects_images/project_easydae_pc.png",
        alt: "placeholder",
      },
      {
        id: 4,
        type: 0,
        title: "Kéroguic",
        describe: "Un sitio para Keroguic",
        techs: ["HTML", "CSS", "JS"],
        links: [
          {
            name: "Github",
            url: "https://www.github.com/maelaubert56/Keroguic",
          },
          {
            name: "Sitio web",
            url: "https://www.keroguic.fr",
          },
        ],
        image: "/projects_images/project_keroguic_phone.png",
        alt: "placeholder",
      },
    ],
  };

  const projects = projectsDatas[i18n.language];
  console.log(projects);

  return (
    <div id="ProjectsBlock">
      <div className="banner top-banner"></div>
      <div className="banner bottom-banner"></div>
      <div className="content">
        <h2>{t("Projects_Title")}</h2>
        <div className="projectsContainer">
          <div>
            {projects.map((project) => {
              return (
                <Tile
                  key={project.id}
                  id={project.id}
                  type={project.type}
                  title={project.title}
                  describe={project.describe}
                  techs={project.techs}
                  links={project.links}
                  image={project.image}
                  alt={project.alt}
                />
              );
            })}
          </div>
          {/*<a href="#">
            {t("Projects_More")}
            <span>→</span>
          </a>*/}
        </div>
      </div>
    </div>
  );
}

export default ProjectsBlock;
