// import ButtonFilter from "../../components/ButtonFilter/ButtonFilter";
import CardProjects from "../../components/CardProjects/CardProjects";
import { filterProjects } from "../../information/filterProjects";
import { v4 as uuidv4 } from "uuid";
import { projectsData } from "../../utils/projects-data.tsx";
import "./Projects.css";
import { useState } from "react";

const Projects = () => {
  const [pintArray, setPintArray] = useState(projectsData);
  const [currentTech, setCurrentTech] = useState<string>();
  // const [selectedButton, setSelectedButton] = useState<string>();

  // useEffect(() => {
  //   if (currentTech) {
  //     changedProjects();
  //   }
  // }, [currentTech]);

  const changedProjects =  (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTech = event.target.value;
    setCurrentTech(selectedTech);

    if (selectedTech === "ALL") {
      setPintArray(projectsData);
    } else {
      const filteredProjects = projectsData.filter((project) =>
        project.tech.includes(selectedTech)
      );
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
        <select id="select-tech" onChange={changedProjects} value={currentTech}>
          <option value="" disabled>
            Filter by technology
          </option>
          {filterProjects.map((tech) => (
            <option value={tech} key={uuidv4()}>{tech}</option>
          ))}
        </select>
      </div>

      <div className="container-buttons">
        <button className="button-type" onClick={changedProjectsFront}>
          Front-end
        </button>
        <button className="button-type" onClick={changedProjectsBack}>
          Back-end
        </button>
      </div>

      <div className="container-projects">
        {pintArray.map((project) => (
          <CardProjects
            img={project.img}
            alt={project.goal}
            title={project.title}
            description={project.description}
            tech={project.tech}
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
