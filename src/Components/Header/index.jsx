import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoU from '../../assets/images/logo-u3.png';
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
        <div className={`social${showNav ? '-show' : '-hide'}`}>
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
            <a
              href="../../assets/images/Muhammad Usama(Resume).pdf"
              download="Muhammad Usama(Resume).pdf"
            >
              <FontAwesomeIcon icon={faFile} color="#6d6d6d" />
            </a>
          </li>
        </div>
      </ul>
      <FontAwesomeIcon
        onClick={toggleNav}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="stack"
      />
    </div>
  );
}

export default Header;
