import React from 'react'
import payment from './images/carduse_card_payment_5122.png'
import time from './images/clock_hour_minute_second_time_timer_watch_icon_123193.png'
import location from './images/3586361-location-map-navigation-pointer_107948.png'

const SliderInfo = () => {
  return (
    
    <div class="contenedor">
            <ul class="slider">
                <li id="slider1">
                    
                    <img src={payment} alt="tarjeta"/>Aceptamos todos los medios de pago</li>
                <li id="slider2">
                    
                    <img src={time} alt="horarios"/>Lu. a Vie. 9hs a 20hs</li>
                <li id="slider3">
                    
                    <img src={location} alt="locacion"/>Calle 1354,Caba,Argentina</li>
            </ul>
            <ul class="menuSlider">
                <li>
                    <a href="#slider1"></a>
                </li>
                <li>
                    <a href="#slider2"></a>
                </li>
                <li>
                    <a href="#slider3"></a>
                </li>
            </ul>
        </div>
  )
}

export default SliderInfo