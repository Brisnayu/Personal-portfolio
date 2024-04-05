import { useState } from "react";
import "./ButtonFilter.css";

interface ButtonFilterProps {
  title: string;
  onClick: () => void;
}

const ButtonFilter = ({ title, onClick }: ButtonFilterProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    
    const elements = document.querySelectorAll(".button-filter");

    console.log(clicked)

    if (elements !== null) {
      elements.forEach((element) => element.classList.remove("clicked"));
    }

    setClicked(!clicked);
    onClick();
  };

  return (
    <button
      className={`button-filter ${clicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default ButtonFilter;
