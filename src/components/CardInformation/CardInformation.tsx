import "./CardInformation.css";
import { v4 as uuidv4 } from "uuid";

interface CardInformationProps {
  title: string;
  subtitle: string;
  content: string[];
}

const CardInformation = ({
  title,
  subtitle,
  content,
}: CardInformationProps) => {
  return (
    <div className="card-information-container">
      <div className="card-information">
        <div className="front-content">
          <p>{title}</p>
        </div>
        <div className="content">
          <p className="heading">{subtitle}</p>
          {content.map((contentCard) => (
            <p key={uuidv4()}>{contentCard}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardInformation;
