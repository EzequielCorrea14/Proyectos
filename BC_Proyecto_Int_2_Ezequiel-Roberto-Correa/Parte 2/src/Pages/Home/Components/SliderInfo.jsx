import React from 'react'

import { IoTimeOutline, IoCard, IoLocationOutline } from "react-icons/io5";

const SliderInfo = () => {
  return (
    
    <div class="contenedor">
            <ul class="slider">
                <li id="slider1">
                    
                <IoCard />Aceptamos todos los medios de pago</li>
                <li id="slider2">
                    
                <IoTimeOutline />Lu. a Vie. 9hs a 20hs</li>
                <li id="slider3">
                    
                <IoLocationOutline />Calle 1354,Caba,Argentina</li>
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