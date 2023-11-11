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
        <div className={"tile " + (props.type === 0 ? "tile_0" : "tile_1")}>
            <img src={props.image} alt={props.alt} />
            <div className="tile-hover">
                <h1>{props.title}</h1>
                <p>{props.describe}</p>
                <ul className='technos'>
                    {technos}
                </ul>
                <ul className='links'>
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
            type: 0,
            title: "Kéroguic",
            describe: "A website for a local business",
            techs: ["React", "NodeJS", "MongoDB"],
            links: [
                {
                    name: "Github",
                    url: "https://www.github.com"
                },
                {
                    name: "Website",
                    url: "https://www.keroguic.fr"
                }
            ],
            image: '/projects_images/project_keroguic.png',
            alt: "placeholder"
        },
        {
            id: 2,
            type: 1,
            title: "Kéroguic",
            describe: "A website for a local business",
            techs: ["React", "NodeJS", "MongoDB"],
            links: [
                {
                    name: "Github",
                    url: "https://www.github.com"
                },
                {
                    name: "Website",
                    url: "https://www.keroguic.fr"
                }
            ],
            image: "/projects_images/project_pc.png",
            alt: "placeholder"
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
                    url: "https://www.github.com"
                },
                {
                    name: "Website",
                    url: "https://www.keroguic.fr"
                }
            ],
            image: "/projects_images/project_pc.png",
            alt: "placeholder"
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
                    url: "https://www.github.com"
                },
                {
                    name: "Website",
                    url: "https://www.keroguic.fr"
                }
            ],
            image: "/projects_images/project_keroguic.png",
            alt: "placeholder"
        }
    ];
    return (
        <div id="ProjectsBlock">
            <div className='banner top-banner'></div>
            <div className='banner bottom-banner'></div>
            <div className='content'>
                <h2>Some of my projects 🧑‍💻</h2>
                <div className='projectsContainer'>
                    <div>
                        {projects.map((project) => {
                            return <Tile
                                key={project.id}
                                id={project.id}
                                type={project.type}
                                title={project.title}
                                describe={project.describe}
                                techs={project.techs}
                                links={project.links}
                                image={project.image}
                                alt={project.alt}
                            />;
                        })}
                    </div>
                    <a href="#">More Projects <span>→</span></a>
                </div>
            </div>
        </div>
    );
}

export default ProjectsBlock;