import ButtonFilter from "../../components/ButtonFilter/ButtonFilter";
import CardProjects from "../../components/CardProjects/CardProjects";
import { filterProjects } from "../../information/filterProjects";
import { v4 as uuidv4 } from "uuid";
import { projectsData } from "../../utils/projects-data.tsx";
import "./Projects.css";
import { useEffect, useState } from "react";

const Projects = () => {
  const [pintArray, setPintArray] = useState(projectsData);
  const [currentTech, setCurrentTech] = useState<string>();
  // const [selectedButton, setSelectedButton] = useState<string>();

  useEffect(() => {
    if (currentTech) {
      changedProjects();
    }
  }, [currentTech]);

  const changedProjects = () => {
    console.log("HOLA! Desde Projects");
    console.log("ESTA ES LA TECNOLOGÍA", currentTech);

    if (currentTech === "ALL") {
      return setPintArray(projectsData);
    }

    if (currentTech !== undefined) {
      const filteredProjects = projectsData.filter((project) =>
        project.tech.includes(currentTech)
      );

      // console.log(filteredProjects)

      setPintArray(filteredProjects);
    }
  };

  const changedProjectsFront = () => {
    const filteredProjects = projectsData.filter(
      (project) => project.type === "frontend"
    );
    setPintArray(filteredProjects);
    // setSelectedButton("selectedButton")
  };

  const changedProjectsBack = () => {
    const filteredProjects = projectsData.filter(
      (project) => project.type === "backend"
    );
    setPintArray(filteredProjects);
  };

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
          <ButtonFilter
            title={tech}
            key={uuidv4()}
            onClick={() => setCurrentTech(tech)}
          />
        ))}
      </div>

      <div className="container-buttons">
        <button className="button-type" onClick={changedProjectsFront}>
          Front-end
        </button>
        <button className="button-type" onClick={changedProjectsBack}>
          Back-end
        </button>
      </div>

      <h1>{currentTech}</h1>

      <div className="container-projects">
        {pintArray.map((project) => (
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
