import "./Home.css";

const Home = () => {
  return (
    <main className="flex-center">
      <div className="flex-column container-text">
        <h1>{"< Brisna A. Paez M. />"}</h1>
        <h2>Full Stack Developer Junior.</h2>
        <p>
          Hello there! I am a passionate developer with a love for design and
          creativity. Explore my portfolio to see how I turn ideas into
          impactful experiences.
        </p>

        <div className="container-skills">
          <h2>Skills</h2>
          <img src="/techs/HTML5.png" alt="icon html5" />
          <img src="/techs/CSS3.png" alt="icon css3" />
          <img src="/techs/JS.png" alt="icon JavaScript" />
          <img src="/techs/TYPESCRIPT.png" alt="icon TypeScript" />
          <img src="/techs/REACT.png" alt="icon React" />
          <img src="/techs/NODEJS.png" alt="icon Node.js" />
          <img src="/techs/EXPRESSJS.png" alt="icon Express.js" />
          <img src="/techs/MONGODB1.png" alt="icon MongoDB" />
          <img src="/techs/NoSQL.png" alt="icon NoSQL" />
        </div>

      </div>
      <div className="container-image flex-center">
        <img
          className="flex-center"
          src="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1698489629/avatars/Captura_de_pantalla_2023-10-28_123954_rqc8tw.png"
          alt="avatar image"
        />
        {/* <ul>
          <li><img src="/icons/email.png" alt="icon email" /></li>
          <li><img src="/icons/linkedin.png" alt="icon email" /></li>
          <li><img src="/icons/phone.png" alt="icon email" /></li>
          <li><img src="/icons/ubication.png" alt="icon email" /></li>
        </ul> */}
      </div>
    </main>
  );
};

export default Home;
