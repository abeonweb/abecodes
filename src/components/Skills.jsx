import { NavLink } from "react-router-dom"
import { skills } from "../data"
// import myPhoto from "../images/dev-at-desk.png"
import "../css/Skills.css"
export default function Skills() {

    const skillsList = skills.map((skill, index) => (
        <li key={index} className="tech-stack-list-item">
            <div className="stack-image-container">
                <img src={require("../images/" + skill.image + ".svg")}  loading="lazy" alt={`${skill.name} icon`} className="stack-image" />
            </div>
            <div className="skill-name">{skill.name}</div>
        </li>
    ))
    return (
        <section className="section skills">
            <h1 className="title page-title">My specific set of skills</h1>
            <div className="about-me-container">
                {/* <img src={myPhoto} alt="" className="profile-image" /> */}
                <div className="about-me-info">
                    <h3>Brief history</h3>
                    <p className="about-me-body">I like picking up and learning new things, finding better
                        ways to do things. Simplifying a task whenever possible. Problem solving and helping people
                        are strong motivators. I also enjoy instrumental music and beautiful landscapes.

                        <NavLink to="about" className="about-me-link">
                            Read more about me
                        </NavLink>
                    </p>
                    <div>
                        <h3>Some things I have learnt along the way</h3>
                        <ul className="stack-container">{skillsList}</ul>
                    </div>
                </div>
            </div>
        </section>
    )
}