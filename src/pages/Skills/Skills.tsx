import { contentSkills, skillsInProgress } from "../../information/contentSkills";
import { v4 as uuidv4 } from "uuid";
import "./Skills.css";

const Skills = () => {
  return (
    <main>
      <div className="container-page-skills">
        <h3>Skills</h3>
        <ul className="card-skills">
          {contentSkills.map((skill) => (
            <li className="card-skill" key={uuidv4()}>
              {skill}
              <img src="/check.png" alt="icon check" />
            </li>
          ))}
        </ul>
      </div>
      <div className="container-page-skills">
        <h3>Skills in Progress</h3>
        <ul className="card-skills">
          {skillsInProgress.map((skill) => (
            <li className="card-skill" key={uuidv4()}>
              {skill}
              <img src="/loading.png" alt="icon loading" />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Skills;
