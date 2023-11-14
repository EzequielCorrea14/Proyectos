import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  const date = new date().getDay()
  return (
    <nav className='navbar'>
        <a class="aLogo" href="./index.html">
            <img src="./images/logo.png" alt="logo"/>   
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