import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import Container from "../Container";
import Header from "../Header";

function AppRoutes() {
  const location = useLocation();
  const showNavbar = location.pathname === "/";
  return (
    <>
      {showNavbar && (
        <Header about={"About"} projects={"Projects"} contact={"Contact"} />
      )}
      <Routes>
        <Route exact path="/" element={<Container />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
