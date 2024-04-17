import "./CardProjects.css";

interface CardProjectProps {
  img: string;
  alt: string;
  title: string;
  description: string;
  link?: string;
  github: string;
}

const CardProjects = ({
  img,
  alt,
  title,
  description,
  link,
  github,
}: CardProjectProps) => {
  return (
    <div className="style-card">
      <img src={img} alt={alt} />
      <h2>{title}</h2>
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
