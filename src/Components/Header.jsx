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
      </nav>
    </div>
  );
}

export default Header;
