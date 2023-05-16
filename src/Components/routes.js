import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Contact from './Contact/index';
import Projects from './Projects/index';
import About from './About/index';
import Home from './Home/index';
import Skills from './Skills';

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/skills" element={<Skills />}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
