import { techsData } from "../../utils/techs-data";
import { v4 as uuidv4 } from "uuid";
import "./Home.css";

const Home = () => {
  return (
    <main className="flex-center">
      <div className="flex-column container-text">
        <h1>{"< Brisna A. Paez M. />"}</h1>
        <h2>Full Stack Developer Junior.</h2>
        <p>
          Hello there! I am a passionate developer with a love for design and
          creativity. Explore my portfolio to see how I turn ideas into
          impactful experiences.
        </p>

        <div className="container-skills">
          <h2>Skills</h2>
          <div>
            {techsData.map((tech) => (
              <img key={uuidv4()} src={tech.photo} alt={tech.alt} />
            ))}
          </div>
        </div>
      </div>
      <div className="container-image flex-center">
        <img
          className="flex-center"
          src="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1698489629/avatars/Captura_de_pantalla_2023-10-28_123954_rqc8tw.png"
          alt="avatar image"
        />
      </div>
    </main>
  );
};

export default Home;
