import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoU from '../../assets/images/logo-u3.png'

function Header(props) {
  return (
    <div className="nav">
      <Link className="logo" to="/">
        <img src={LogoU} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true"></NavLink>
      </nav>
    </div>
  )
}

export default Header
