import { contentSkills } from "../../information/contentSkills";
import "./Skills.css";

const Skills = () => {
  return (
    <main>
         <div>
          <h3>Skills</h3>
          <ul>
            {contentSkills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
    </main>
  )
}

export default Skills