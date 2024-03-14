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

      <div>
        <CardProjects />
      </div>
      
    </main>
  )
};

export default Projects;
