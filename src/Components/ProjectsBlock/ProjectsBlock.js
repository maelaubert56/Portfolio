import './ProjectsBlock.css'

function Tile(props) {
    console.log(props)
    const technos = props.techs.map((tech) => {
        return <li key={tech}>{tech}</li>;
    });
    const links = props.links.map((link) => {
        return <li key={link.name}><a href={link.url}>{link.name}</a></li>;
    });

    return (
        // indicate if the id is pair or impair in the class name
        <div className={"tile " + (props.id % 2 === 0 ? "tile_pair" : "tile_impair")}>
            <img src={props.image} alt={props.alt} />
            <div className="tile-hover">
                <h1>{props.title}</h1>
                <p>{props.describe}</p>
                <ul>
                    {technos}
                </ul>
                <ul>
                    {links}
                </ul>
            </div>
        </div>
    );
}

function ProjectsBlock() {

    const projects = [
        {
            id: 1,
            title: "Kéroguic",
            describe: "A website for a local business",
            techs: ["React", "NodeJS", "MongoDB"],
            links: [
                {
                    name: "Github",
                    url: "www.github.com"
                },
                {
                    name: "Website",
                    url: "www.keroguic.fr"
                }
            ],
            image: "https://via.placeholder.com/150",
            alt: "placeholder"
        },
        {
            id: 2,
            title: "Kéroguic",
            describe: "A website for a local business",
            techs: ["React", "NodeJS", "MongoDB"],
            links: [
                {
                    name: "Github",
                    url: "www.github.com"
                },
                {
                    name: "Website",
                    url: "www.keroguic.fr"
                }
            ],
            image: "https://via.placeholder.com/150",
            alt: "placeholder"
        },
        {
            id: 3,
            title: "Kéroguic",
            describe: "A website for a local business",
            techs: ["React", "NodeJS", "MongoDB"],
            links: [
                {
                    name: "Github",
                    url: "www.github.com"
                },
                {
                    name: "Website",
                    url: "www.keroguic.fr"
                }
            ],
            image: "https://via.placeholder.com/150",
            alt: "placeholder"
        },
        {
            id: 4,
            title: "Kéroguic",
            describe: "A website for a local business",
            techs: ["React", "NodeJS", "MongoDB"],
            links: [
                {
                    name: "Github",
                    url: "www.github.com"
                },
                {
                    name: "Website",
                    url: "www.keroguic.fr"
                }
            ],
            image: "https://via.placeholder.com/150",
            alt: "placeholder"
        }
    ];
    return (
        <div id="ProjectsBlock">
            <h2>Some of my projects 🧑‍💻</h2>
            <div>
                <div>
                    {projects.map((project) => {
                        return <Tile
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            describe={project.describe}
                            techs={project.techs}
                            links={project.links}
                            image={project.image}
                            alt={project.alt}
                        />;
                    })}
                </div>
                <div><h2>More Projects →</h2></div>
            </div>
        </div>
    );
}

export default ProjectsBlock;