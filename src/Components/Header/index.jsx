import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoU from '../../assets/images/logo-u3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faUser,
  faEnvelope,
  faFile,
  faGears,
  faRectangleList,
  faRectangleTimes,
  faRecordVinyl,
  faUsersRectangle,
  faProcedures,
  faWindowRestore,
  faLaptop,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedinIn,
  faGithub,
  faRProject,
  faInternetExplorer,
  faArtstation,
} from '@fortawesome/free-brands-svg-icons'

function Header(props) {
  return (
    <div className="sidebar">
      <Link className="logo" to="/">
        <img src={LogoU} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHouse} color="#6d6d6d" className="home" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/about">
          <FontAwesomeIcon icon={faUser} color="#6d6d6d" className="about" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/skills">
          <FontAwesomeIcon icon={faGears} color="#6d6d6d" className="skills" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/projects">
          <FontAwesomeIcon
            icon={faLaptopCode}
            color="#6d6d6d"
            className="projects"
          />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact">
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#6d6d6d"
            className="contact"
          />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            className="linkedin"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/muhammadusama12/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} color="#6d6d6d" />
          </a>
        </li>
        <li>
          <a
            className="github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/muhammad-usama12"
          >
            <FontAwesomeIcon
              className="github"
              icon={faGithub}
              color="#6d6d6d"
            />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="/">
            <FontAwesomeIcon icon={faFile} color="#6d6d6d" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header
