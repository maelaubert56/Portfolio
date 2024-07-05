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
  const { t } = useTranslation();

  const projects = [
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
          url: "https://taromaster.matteobonnet.fr/",
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
          url: "https://www.github.com",
        },
        {
          name: "Website",
          url: "#",
        },
      ],
      image: "/projects_images/project_terraquiz_pc.png",
      alt: "placeholder",
    },
    {
      id: 3,
      type: 1,
      title: "Kéroguic",
      describe: "A website for a local business",
      techs: ["React", "NodeJS", "MongoDB"],
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
      image: "/projects_images/project_keroguic_pc.png",
      alt: "placeholder",
    },
    {
      id: 4,
      type: 0,
      title: "Kéroguic",
      describe: "A website for a local business",
      techs: ["React", "NodeJS", "MongoDB"],
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
  ];
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
          <a href="#">
            {t("Projects_More")}
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsBlock;
