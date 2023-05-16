import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoU from '../../assets/images/logo-u1.png';
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
          <FontAwesomeIcon icon={faHouse} color="#bebcc4" className="home" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#bebcc4" className="about" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/skills"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faGears} color="#bebcc4" className="skills" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/projects"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon
            icon={faLaptopCode}
            color="#bebcc4"
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
            color="#bebcc4"
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
              <FontAwesomeIcon icon={faLinkedinIn} color="#bebcc4" />
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
                color="#bebcc4"
              />
            </a>
          </li>
          <li>
            <a href="/resume/Muhammad Usama(Resume).pdf" download>
              <FontAwesomeIcon icon={faFile} color="#bebcc4" />
            </a>
          </li>
        </div>
      </ul>
      <FontAwesomeIcon
        onClick={toggleNav}
        icon={faBars}
        color="#b8a0c1"
        className="stack"
      />
    </div>
  );
}

export default Header;
