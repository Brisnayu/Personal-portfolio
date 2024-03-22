import CardProjects from "../../components/CardProjects/CardProjects";
import "./Projects.css";

const Projects = () => {
  return (
    <main>
      <h2>Projects</h2>
      <div>
        <p>filtros</p>
        <button>1</button>
        <button>2</button>
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
  )
};

export default Projects;
