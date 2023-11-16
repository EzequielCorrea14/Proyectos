import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './images/logo.png'

const NavBar = () => {

  
  return (
    <nav >
        <a  href="./index.html">
            <img src={logo} alt="logo"/>   
        </a>
        <h2>RC MOTORS</h2>
        <ul className='navbar-link'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/registerProduct'}>Register Products</NavLink></li>
            <li><NavLink to={'/models'}>Models</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>

        </ul>
    </nav>
  )
}

export default NavBar