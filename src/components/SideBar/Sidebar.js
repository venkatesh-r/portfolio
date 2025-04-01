import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { NavLink } from "react-router-dom"
import "./Sidebar.scss"
import {
  faCogs,
  faEnvelope,
  faHome,
  faUser,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink to="/">
          <FontAwesomeIcon className="active" icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faCogs} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="norereffer"
            href="https://www.linkedin.com/in/venkatesh156/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            rel="norereffer"
            href="https://github.com/venkatesh-r"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
