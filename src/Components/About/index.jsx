import React from "react";
import Header from "../Header";
import "./index.scss";

function About() {
  return (
    <div>
      <Header
        about={"About"}
        projects={"Projects"}
        contact={"Contact"}
        home={"Home"}
      />
    </div>
  );
}

export default About;
