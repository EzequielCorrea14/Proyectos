import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './images/logo.png'
import Home from '../pages/home/home'
import '../production/styles.css'
import { CartProvider } from '../context/CartContext'

import CartButton from '../components/CartButton'



const NavBar = () => {

  
  return (
    <nav >
      <CartProvider> 
        <a  href={Home}>
            <img className='navbarImage' src={logo} alt="logo"/>   
        </a>
        <h2 className='h2-navbar'>RC MOTORS</h2>
        <ul className='navbar-link'>
          
            <li><NavLink className='activate' to={'/'}>Home</NavLink></li>
            <li><NavLink className='activate' to={'/registerProduct'}>Register Products</NavLink></li>
            <li><NavLink className='activate' to={'/models'}>Models</NavLink></li>
            <li><NavLink className='activate' to={'/about'}>About</NavLink></li>
            <li><NavLink className='activate' to={'/contact'}>Contact</NavLink></li>

        </ul>
        <CartButton/>
        </CartProvider>

        

        
        
    
    </nav>
  )
}

export default NavBar