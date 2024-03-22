import { useState } from "react";
import "./ButtonFilter.css";

interface ButtonFilterProps {
  title: string;
}

const ButtonFilter = ({ title }: ButtonFilterProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    
    const elements = document.querySelectorAll(".button-filter");

    // console.log(elements)

    if (elements !== null) {
      elements.forEach((element) => element.classList.remove("clicked"));
    }

    setClicked(!clicked);
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
