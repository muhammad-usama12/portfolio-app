import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoU from '../../assets/images/logo-u3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Header(props) {
  return (
    <div className="sidebar">
      <Link className="logo" to="/">
        <img src={LogoU} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHouse} color="#6d6d6d" className="home" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/about">
          <FontAwesomeIcon icon={faUser} color="#6d6d6d" className="about" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact">
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#6d6d6d"
            className="contact"
          />
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
