import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {
  return (
    <nav>
      <ul>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <li href="/" className="contact">
            {props.contact}
          </li>
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <li href="/" className="projects">
            {props.projects}
          </li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li href="/" className="about">
            {props.about}
          </li>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li href="/" className="about">
            {props.home}
          </li>
        </Link>
        <a href="/" className="name">
          MU
        </a>
      </ul>
    </nav>
  );
}

export default Header;
