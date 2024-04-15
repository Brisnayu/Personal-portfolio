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
          {techsData.map((tech) => (
            <div key={uuidv4()}>
              <img src={tech.photo} alt={tech.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="container-image flex-center">
        <img
          className="flex-center"
          src="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1698489629/avatars/Captura_de_pantalla_2023-10-28_123954_rqc8tw.png"
          alt="avatar image"
        />
        {/* <ul>
          <li><img src="/icons/email.png" alt="icon email" /></li>
          <li><img src="/icons/linkedin.png" alt="icon email" /></li>
          <li><img src="/icons/phone.png" alt="icon email" /></li>
          <li><img src="/icons/ubication.png" alt="icon email" /></li>
        </ul> */}
      </div>
    </main>
  );
};

export default Home;
