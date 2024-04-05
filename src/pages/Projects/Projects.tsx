import ButtonFilter from "../../components/ButtonFilter/ButtonFilter";
import CardProjects from "../../components/CardProjects/CardProjects";
import { filterProjects } from "../../information/filterProjects";
import { v4 as uuidv4 } from "uuid";
import { projectsData } from "../../utils/projects-data.tsx";
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
        {projectsData.map((project) => (
          <CardProjects
            img={project.img}
            alt={project.goal}
            title={project.title}
            description={project.description}
            link={project.link}
            github={project.github}
            key={uuidv4()}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
