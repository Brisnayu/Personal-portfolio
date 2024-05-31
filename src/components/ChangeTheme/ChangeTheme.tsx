import { useState } from "react";
import "./ChangeTheme.css";

const ChangeTheme = () => {
    const [light, setLight] = useState<boolean>(false);
  
    console.log(light);
  
    const hancleChangeStyle = () => {
      setLight(!light);
  
      if(light === false) {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
      }
      
    };
  return (
    <div className="container-theme">
      <p>
        By the way, if you've made it this far, I must confess that I generally
        prefer the 'light mode' over the 'dark mode,' so feel free to use this
        button to make the switch!
      </p>
      <button className="button-theme" onClick={hancleChangeStyle}>
        CLICK ME!
      </button>
    </div>
  );
};

export default ChangeTheme;
