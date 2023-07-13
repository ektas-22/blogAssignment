import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/navbar.css'
import logo from '../../asset/images/images.jpg'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
      <img src={logo} alt='' width="60px" height="60px" className='nav-left'></img>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className="nav-link" activeClassName="active">Blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>

  )
}

export default Navbar
