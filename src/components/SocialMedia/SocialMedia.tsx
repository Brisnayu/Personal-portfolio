import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="container-SocialMedia">
      <div className="container-principal">
        <h3>LinkedIn</h3>
        <ul>
          <li>Contenido dinámico</li>
          <li>Publicación de proyectos</li>
          <li>Trayectoria profesional</li>
          <li>logros profesionales</li>
        </ul>
      </div>

      <div className="container-link">
        <a href="https://www.linkedin.com/in/brisna-a-paez-m-283934154/" target="_blank">
          <img src="/aboutMe/profileLinkedin.png" alt="icon profile linkedin" />
        </a>
        
      </div>
    </div>
  );
};

export default SocialMedia;
