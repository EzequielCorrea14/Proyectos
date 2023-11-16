import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { FaCartShopping, FaTrashCan } from "react-icons/fa6";
import { CartContext } from "../Pages/Models/context/CartContext";
import cc from "./images/motor.svg"
import vel from "./images/tacometro.svg"
import km from "./images/consumo.svg"

const ProductCard = ({ product, fetchProductsData }) => {
  const { addToCart } = useContext(CartContext)
 

  
  return (
    <div className="product-card">
      
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <article className="artMasVendido">
            
            <section className="masVendido">
                <div id="slidershow-container" >
                    <div className="mySlides fade">
                        
                        <img className="imgSlider" src={product.image1} />
                        
                    </div>
                    <div className="mySlides fade">
                        
                        <img className="imgSlider" src={product.image2} />
                        
                    </div>
                    <div className="mySlides fade">
                        
                        <img className="imgSlider" src={product.image3} />
                        
                    </div>
                    <a className="previo" onclick="plusSlides(-1)">&#10094</a>
                    <a className="proximo" onclick="plusSlides(1)">&#10095</a>
                            
                </div>
                <div className="divColores">
                    <span className="colores" onClick={() => currentSlides(1)} style={{ backgroundColor: product.color1 }}></span>
                  <span className="colores" onClick={() => currentSlides(2)} style={{ backgroundColor: product.color2 }}></span>
                  <span className="colores" onClick={() => currentSlides(3)} style={{ backgroundColor: product.color3 }}></span>
                </div>
                <div id="infoMoto">
                    <div id="infoIconos">
                        <ul id="ListaIconos">
                            <li id="cc">
                                <img id="imgcc" src={cc} alt="" />
                                <p>{product.cc}</p>
                                <p>cc.</p>
                            </li>
                            <li id="tacometro">

                                <img id="imgTacometro" src={vel} alt="velocidad"/>
                                <p> 0-100 </p>
                                <p> {product.vel} </p>
                                <p>s</p>
                            </li>
                            <li id="consumo">

                                <img id="imgConsumo" src={km} alt="consumo"/>
                                <p> 1/</p>
                                <p>{product.km}</p>
                                <p>km</p>
                            </li>
                        </ul>                    
                    </div>
                    <div id="descripcion">
                        <h1>{product.name}</h1>
                        <h2>{product.price}</h2>
                        <p>{product.description}</p>
                        
                    </div>
                                      
                </div>
            </section>
        </article>
          <div className="product-card__button-container">
            <button onClick={() => addToCart(product)}>
              {" "}
              <FaCartShopping />
              Agregar
            </button>
            
          </div>
        </>
      
    </div>
  );
};

export default ProductCard;

