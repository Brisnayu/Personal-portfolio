import "./Contact.css";

const Contact = () => {
  return (
    <div className="card-principal">
      <h3>Contact me!</h3>
      <div className="card">
        <a className="socialContainer containerOne" href="tel:+34615472802">
          <img className="socialImg" src="/icons/phone.png" alt="icon phone" />
        </a>

        <a
          className="socialContainer containerTwo"
          href="mailto:brisnapaez25@gmail.com"
        >
          <img className="socialImg" src="/icons/email.png" alt="icon email" />
        </a>

        <a
          className="socialContainer containerThree"
          href="https://www.linkedin.com/in/brisna-a-paez-m-283934154/"
          target="_blank"
        >
          <img
            className="socialImg"
            src="/icons/linkedin.png"
            alt="icon linkedin"
          />
        </a>

        <a
          className="socialContainer containerFour"
          href="https://www.google.es/maps/place/Barcelona/@41.3927673,2.0577887,12z/data=!3m1!4b1!4m6!3m5!1s0x12a49816718e30e5:0x44b0fb3d4f47660a!8m2!3d41.3873974!4d2.168568!16zL20vMDFmNjI?entry=ttu"
          target="_blank"
        >
          <img
            className="socialImg"
            src="/icons/ubication.png"
            alt="icon email"
          />
        </a>

        <a
          className="socialContainer containerFive"
          href="https://github.com/Brisnayu"
          target="_blank"
        >
          <img
            className="socialImg"
            src="/icons/githubFooter.png"
            alt="icon email"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
