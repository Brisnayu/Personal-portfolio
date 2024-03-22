import ButtonFilter from "../../components/ButtonFilter/ButtonFilter";
import CardProjects from "../../components/CardProjects/CardProjects";
import { filterProjects } from "../../information/filterProjects";
import { v4 as uuidv4 } from "uuid";
import "./Projects.css";

const Projects = () => {
  return (
    <main>
      <div className="container-title-projects">
        <h2>PORTFOLIO</h2>
        <h3>
          my <span>projects</span>
        </h3>
      </div>

      <div>
        {filterProjects.map((tech) => (
          <ButtonFilter title={tech} key={uuidv4()} />
        ))}
      </div>

      <div className="container-projects">
        <CardProjects />
        <CardProjects />
        <CardProjects />

        <CardProjects />
        <CardProjects />
        <CardProjects />
      </div>
    </main>
  );
};

export default Projects;
