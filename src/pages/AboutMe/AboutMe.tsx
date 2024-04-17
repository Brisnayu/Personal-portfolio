import CardInformation from "../../components/CardInformation/CardInformation";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import { aspirationsData, motivationData, valuesData } from "../../utils/aboutMe-data";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <main>
      <h2>About me</h2>
      <div>
        <p>
          Hello! I'm Brisna, a passionate Full Stack Developer with a love for
          design. Since January 2023, I've fully immersed myself in the world of
          programming, completely transforming my career path. From a young age,
          I've been captivated by design, and my journey reflects my steadfast
          commitment to excellence in this field.
        </p>
        <p>
          My focus lies in meticulous attention to detail and crafting
          exceptional user experiences. I've had the privilege of shining in
          each of my projects, always striving to exceed expectations and
          elevate the quality of my work.
        </p>
        <p>
          My goal is to fully integrate myself into the professional world as a
          developer, and I'm constantly pushing myself to improve and grow in
          this dynamic field. I firmly believe that with dedication and
          perseverance, anything is possible, and I'm committed to continuously
          challenging myself.
        </p>

        <p>
          When I'm not engrossed in professional projects, I enjoy spending time
          with my cat Hera and exploring outdoor activities. To me, maintaining
          a balance between work and personal life is essential for nurturing
          creativity and fostering overall well-being.
        </p>

        <p>
          I'm excited to share my work and eager to collaborate on future
          projects filled with excitement and challenge. Don't hesitate to reach
          out to discuss how I can contribute to your next endeavor! Thank you
          for visiting my portfolio!
        </p>
      </div>

      <div className="container-cards">
        <CardInformation
          title="Motivation"
          subtitle="Motivation"
          content={motivationData}
        />
        <CardInformation
          title="Aspirations"
          subtitle="Aspirations"
          content={aspirationsData}
        />
        <CardInformation
          title="Values"
          subtitle="Values"
          content={valuesData}
        />
      </div>

      <div className="container-socialMedia">
        <h2>Let's Connect</h2>
        <SocialMedia />
      </div>
    </main>
  );
};

export default AboutMe;
