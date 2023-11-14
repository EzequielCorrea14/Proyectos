import React from 'react'
import { Route,Routes, Link, NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <article class="artFooter">
            <div class="divVentas">
                <h2 class="h2footer">Ventas</h2>
                <ul class="ulfooter">
                    <li class="tel">
                        <img src="./images/icons/telefono.svg" alt="telefono"/>
                        <p>Tel: +54 112222222</p>
                    </li>
                    <li class="email">
                        <img src="./images/icons/mail.svg" alt="mail"/>
                        <p>Email: Ventas@rcmotors.com</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/registerProduct'}>Register Products</NavLink></li>
                    <li><NavLink to={'/models'}>Models</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/contact'}>Contact</NavLink></li>

                </ul>
            </div>
            <div>
                <h2 class="h2footer">Nos encontramos en:</h2>
                <p> Calle 1354,Caba,Argentina</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13133.337016595504!2d-58.42875065!3d-34.620992550000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1693100472550!5m2!1ses-419!2sar" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </article>
    </>
  )
}

export default Footer