export default function Project(props) {

    const techStack = props.project.stack.map((tech, index) => (
        <li key={index} className="project-stack">
            {tech}
        </li>
    ))
    return (
        <article key={props.project.id} className="project">
            <h2 className="project-title">{props.project.title}</h2>
            <div className="project-flex-container">
                <div className="project-info-container">
                    <ul className="stack-container">
                        {techStack}
                    </ul>
                    <p className="project-description">{props.project.description}</p>
                    <div className="project-links-container">
                        {props.project.showSite && <a href={props.project.site} target="_blank" rel="noopener noreferrer" className="project-links">Site</a>}
                        {props.project.showGithub && <a href={props.project.github} target="_blank" rel="noopener noreferrer" className="project-links">Github</a>}
                    </div>
                </div>
                <div className="project-image-container">
                    <img src={require("../images/" + props.project.image + ".webp")} alt={props.project.alt} loading="lazy" className="project-image" />
                </div>
            </div>
        </article>
    )
}