import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div>
      <nav>
        <a href="/" className="projects">
          Projects
        </a>
        <a href="/" className="name">
          MU
        </a>
        <a href="/" className="about">
          About
        </a>
        <a href="/" className="contact">
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Header;
