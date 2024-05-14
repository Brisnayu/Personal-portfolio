import { techsData } from "../../utils/techs-data";
import { v4 as uuidv4 } from "uuid";
import "./CardProjects.css";

interface CardProjectProps {
  img: string;
  alt: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github: string;
}

const CardProjects = ({
  img,
  alt,
  title,
  description,
  tech,
  link,
  github,
}: CardProjectProps) => {
  return (
    <div className="style-card">
      <img src={img} alt={alt} />
      <h2>{title}</h2>

      <div className="container-card-tech">
        {tech.map((el) => (
          <img src={techsData[el]} alt={`Icon ${el}`} key={uuidv4()} />
        ))}
      </div>

      <p>{description}</p>



      <div className="style-links">
        <a href={link} target="_blank" title={link}>
          <img src="/links/link.png" alt="link" />
          <p>Check it out</p>
        </a>

        <a href={github} target="_blank" title={github}>
          <img src="/links/github.png" alt="github" />
          <p>Check the code</p>
        </a>
      </div>
    </div>
  );
};

export default CardProjects;
