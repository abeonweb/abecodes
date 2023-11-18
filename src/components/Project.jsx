import styles from "../css/Project.module.css";

export default function Project(props) {

    const techStack = props.project.stack.map((tech, index) => (
        <li key={index} className={styles["project-stack"]}>
            {tech}
        </li>
    ))
    return (
        <article key={props.project.id} className={styles["project"]}>
            <h2 className={styles["project-title"]}>{props.project.title}</h2>
            <div className={styles["project-info-image-container"]}>
                <div className={styles["project-info-container"]}>
                    <ul className={styles["stack-container"]}>
                        {techStack}
                    </ul>
                    <p className={styles["project-description"]}>{props.project.description}</p>
                    <div className={styles["project-links-container"]}>
                        {props.project.showSite && <a href={props.project.site} target="_blank" rel="noopener noreferrer" className={styles["project-links"]}>Site</a>}
                        {props.project.showGithub && <a href={props.project.github} target="_blank" rel="noopener noreferrer" className={styles["project-links"]}>Github</a>}
                    </div>
                </div>
                <div className={styles["project-image-container"]}>
                    <img src={require("../images/" + props.project.image + ".webp")} alt={props.project.alt} loading="lazy" className={styles["project-image"]} />
                </div>
            </div>
        </article>
    )
}