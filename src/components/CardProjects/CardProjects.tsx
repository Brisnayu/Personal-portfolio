import "./CardProjects.css";

const CardProjects = () => {
  return (
    <div className="style-card">
      <img
        src="https://i.pinimg.com/564x/11/7d/fc/117dfcdfb7429f0d95963abe92080e18.jpg"
        alt="image-project"
      />
      <h2>Title Project</h2>
      <p>
        Esto es una breve descripción del proyecto, puede tener diferentes
        párrafos. Donde tienes más o menos lo que es y cómo es. Es importante
        que sea muy breve, para que no ocupe tanto espacio.
      </p>
      <button>Link despliegue</button>
      <button>Link Github</button>
    </div>
  );
};

export default CardProjects;
