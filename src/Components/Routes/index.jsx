import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Contact from '../Contact/index'
import Projects from '../Projects/index'
import About from '../About/index'
import Home from '../Home/index'
import Header from '../Header/index'

function AppRoutes() {
  const location = useLocation()
  const showNavbar = location.pathname === '/'
  return (
    <>
      {showNavbar && (
        <Header about={'About'} projects={'Projects'} contact={'Contact'} />
      )}

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default AppRoutes
