import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div>
      <nav>
        <li className="name">MU</li>
        <ul>
          <li className="projects">Projects</li>
          <li className="about">About</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
