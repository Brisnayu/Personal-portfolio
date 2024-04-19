import "./SocialMedia.css";

interface SocialMediaProps {
  list: string[];
  link: string;
  image: string;
  alt: string;
}

const SocialMedia = ({ list, link, image, alt }: SocialMediaProps) => {
  return (
    <div className="container-SocialMedia">
      <div className="container-principal">
        <h3>LinkedIn</h3>
        <ul>
          {list.map((item) => (
            <li>
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

{
  /* <div className="container-SocialMedia">
<div className="container-principal">
  <h3>LinkedIn</h3>
  <ul>
    <li><img src="/aboutMe/point.png" alt="icon point" />Contenido dinámico</li>
    <li><img src="/aboutMe/point.png" alt="icon point" />Publicación de proyectos</li>
    <li><img src="/aboutMe/point.png" alt="icon point" />Trayectoria profesional</li>
    <li><img src="/aboutMe/point.png" alt="icon point" />logros profesionales</li>
  </ul>
</div>

<div className="container-link">
  <a href="https://www.linkedin.com/in/brisna-a-paez-m-283934154/" target="_blank">
    <img src="/aboutMe/profileLinkedin.png" alt="icon profile linkedin" />
  </a>
</div>
</div> */
}
