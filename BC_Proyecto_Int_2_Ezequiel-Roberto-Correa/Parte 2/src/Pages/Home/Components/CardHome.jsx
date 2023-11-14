import React from 'react'

const CardHome = () => {
  return (
    <div><article class="artMasVendido">
    <h1 class="h1mas">Mas Vendida</h1>
    <section class="masVendido">
        <div id="slidershow-container" >
            <div class="mySlides fade">
                
                <img class="imgSlider" src="./images/Modelos/sport.jpg" />
                
            </div>
            <div class="mySlides fade">
                
                <img class="imgSlider" src="./images/Modelos/sport1.jpg" />
                
            </div>
            <div class="mySlides fade">
                
                <img class="imgSlider" src="./images/Modelos/sport2.jpg" />
                
            </div>
            <a class="previo" onclick="plusSlides(-1)">&#10094</a>
            <a class="proximo" onclick="plusSlides(1)">&#10095</a>
                    
        </div>
        <div class="divColores">
            <span class="colores" onclick="currentSlides(1)" style="background-color: black;"></span>
            <span class="colores" onclick="currentSlides(2)" style="background-color: bisque;"></span>
            <span class="colores" onclick="currentSlides(3)" style="background-color: green;"></span>
        </div>
        <div id="infoMoto">
            <div id="infoIconos">
                <ul id="ListaIconos">
                    <li id="cc">
                        <img id="imgcc" src="./images/icons/motor.svg" alt=""/>
                        <p>800cc.</p>
                    </li>
                    <li id="tacometro">

                        <img id="imgTacometro" src="./images/icons/tacometro.svg" alt="velocidad"/>
                        <p> 0-100 9s</p>
                    </li>
                    <li id="consumo">

                        <img id="imgConsumo" src="./images/icons/consumo.svg"alt="consumo"/>
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
            <a class="button" style="--crl:#gray" href="./pages/modelos.html"><span>Conoce mas</span></a>

        </div>
    </section>
</article>
</div>
  )
}

export default CardHome