import React from 'react'
import sport1 from "./images/sport.jpg"
import sport2 from "./images/sport1.jpg"
import sport3 from "./images/sport2.jpg"
import { PiEngineBold } from "react-icons/pi";
import { LiaTachometerAltSolid } from "react-icons/lia";
import { BsFuelPump } from "react-icons/bs";

const CardHome = () => {
  return (
    <div>
        <article className="artMasVendido">
            <h1 className="h1mas">Mas Vendida</h1>
            <section className="masVendido">
                <div id="slidershow-container" >
                    <div className="mySlides fade">
                        
                        <img className="imgSlider" src={sport1} />
                        
                    </div>
                    <div className="mySlides fade">
                        
                        <img className="imgSlider" src={sport2} />
                        
                    </div>
                    <div className="mySlides fade">
                        
                        <img className="imgSlider" src={sport3} />
                        
                    </div>
                    <a className="previo" onclick="plusSlides(-1)">&#10094</a>
                    <a className="proximo" onclick="plusSlides(1)">&#10095</a>
                            
                </div>
                <div className="divColores">
                    <span className="colores" onclick="currentSlides(1)" style="background-color: black;"></span>
                    <span className="colores" onclick="currentSlides(2)" style="background-color: bisque;"></span>
                    <span className="colores" onclick="currentSlides(3)" style="background-color: green;"></span>
                </div>
                <div id="infoMoto">
                    <div id="infoIconos">
                        <ul id="ListaIconos">
                            <li id="cc">
                                <PiEngineBold />
                                <p>800cc.</p>
                            </li>
                            <li id="tacometro">

                            <LiaTachometerAltSolid />
                                <p> 0-100 9s</p>
                            </li>
                            <li id="consumo">

                            <BsFuelPump />
                                <p> 1/10km</p>
                            </li>
                        </ul>                    
                    </div>
                    <div id="descripcion">
                        <h1>Sportster™ S</h1>
                        <h2>$2.500.000</h2>
                        <p>
                            La Sportster™ S es el primer capítulo de un libro completamente nuevo de la saga Sportster. Un legado que nació en 1957 superando a la competencia y que ahora toma una nueva forma para superar una vez más los estándares actuales.
                        </p>
                    </div>
                    <a className="button" style="--crl:#gray" href="./Models"><span>Conoce mas</span></a>

                </div>
            </section>
        </article>
    </div>
  )
}

export default CardHome