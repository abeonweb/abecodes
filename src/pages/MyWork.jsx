import Project from "../components/Project";
import { projects } from "../data";

export default function MyWork() {
  const allProjects = projects.map((project, index) => <Project key={index} project={project} />)
  return (
    <section id="work" className="section portfolio">
      <h1 className="title page-title portfolio-page-title">My work</h1>
      {allProjects}
    </section>
  );
}
