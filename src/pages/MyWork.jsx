import styles from "../css/MyWork.module.css";
import Project from "../components/Project";
import { projects } from "../data";

export default function MyWork() {
  const allProjects = projects.map((project, index) => <Project key={index} project={project} />)
  return (
    <section id="work" className={`section ${styles["portfolio"]}`}>
      <h1 className={`title ${styles["portfolio-page-title"]}`}>My work</h1>
      {allProjects}
    </section>
  );
}
