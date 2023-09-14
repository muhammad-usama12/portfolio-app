import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoU from '../../assets/images/logo-u4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faEnvelope,
  faFile,
  faGears,
  faLaptopCode,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="sidebar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoU} alt="logo" />
      </Link>

      <nav className={`mobile${showNav ? '-show' : '-hide'}`}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHouse} color="#736c5f" className="home" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#736c5f" className="about" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/skills"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faGears} color="#736c5f" className="skills" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/projects"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon
            icon={faLaptopCode}
            color="#736c5f"
            className="projects"
          />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#736c5f"
            className="contact"
          />
        </NavLink>
      </nav>
      <ul>
        <div className={`social${showNav ? '-show' : '-hide'}`}>
          <li>
            <a
              className="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/muhammadusama12/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} color="#736c5f" />
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
                color="#736c5f"
              />
            </a>
          </li>
          <li>
            <a href="/resume/Muhammad Usama Resume.pdf" download>
              <FontAwesomeIcon icon={faFile} color="#736c5f" />
            </a>
          </li>
        </div>
      </ul>
      <FontAwesomeIcon
        onClick={toggleNav}
        icon={faBars}
        color="#736c5f"
        className="stack"
      />
    </div>
  );
}

export default Header;
