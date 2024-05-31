import "./Footer.css";
import Contact from "../Contact/Contact.js";

const Footer = () => {
  return (
    <footer>
      <Contact />
      <p>
        Created with love by{" "}
        <span>
          <a
            href="https://www.linkedin.com/in/brisna-a-paez-m-283934154/"
            target="_blank"
          >
            Brisna A. Paez M.
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
