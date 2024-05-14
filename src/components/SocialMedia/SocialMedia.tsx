import "./SocialMedia.css";
import { v4 as uuidv4 } from "uuid";

interface SocialMediaProps {
  title: string;
  list: string[];
  link: string;
  image: string;
  alt: string;
}

const SocialMedia = ({ title, list, link, image, alt }: SocialMediaProps) => {
  return (
    <div className="container-SocialMedia">
      <div className="container-principal">
        <h3>{title}</h3>
        <ul>
          {list.map((item) => (
            <li key={uuidv4()}>
              <img src="/aboutMe/point.png" alt="icon point" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="container-link">
        <a href={link} target="_blank">
          <img src={image} alt={alt} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
