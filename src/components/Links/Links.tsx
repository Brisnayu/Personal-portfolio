import "./Links.css";
import { NavLink } from "react-router-dom"

const Links = () => {
  return (
    <div className="container-links">
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Links