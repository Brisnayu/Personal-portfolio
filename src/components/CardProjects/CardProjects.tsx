import "./CardProjects.css";

interface CardProjectProps {
  img: string;
  alt: string;
  title: string;
  description: string;
  link?: string;
  github: string;
}

const CardProjects = ({img, alt, title, description, link, github}: CardProjectProps) => {
  return (
    <div className="style-card">
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <button>{link}</button>
      <button>{github}</button>
    </div>
  );
};

export default CardProjects;
