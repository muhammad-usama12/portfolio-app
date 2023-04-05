import React from "react";
import "./Header.scss";

function Header() {
  return (
    <nav>
      <ul>
        <li href="/" className="contact">
          Contact
        </li>
        <li href="/" className="projects">
          Projects
        </li>
        <li href="/" className="about">
          About
        </li>
        <a href="/" className="name">
          MU
        </a>
      </ul>
    </nav>
  );
}

export default Header;
