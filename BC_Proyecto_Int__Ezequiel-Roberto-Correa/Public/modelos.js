//funcion menu responsive
function openMenu(){
    let links = document.getElementById('links')
    if (links.style.display == 'flex'){

    
    links.style.display = 'none';
}
 else{
    links.style.display = 'flex';
    links.style.backgroundColor = 'rgba(0, 0, 0, 0.600)';
    links.style.position= ' absolute';
    links.style.top= '48px';
    links.style.alignItems= 'center';
    links.style.width= '100%'
    links.style.flexDirection = 'column'
    links.style.right = '0%'
    
    }
}



//Modelos Cards
class moto {
    constructor(fotoMoto1,fotoMoto2,fotoMoto3,color1,color2,color3,cilindrada,segundos,consumo,precio,nombre,descripcion)
    {
        this.fotoMoto1 = fotoMoto1;
        this.fotoMoto2 = fotoMoto2;
        this.fotoMoto3 = fotoMoto3;
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.cilindrada = cilindrada;
        this.segundos = segundos;
        this.consumo = consumo;
        this.precio = precio;
        this.nombre= nombre;
        this.descripcion= descripcion;
 
    
    }
      getHtmlArticle(){
        return `
        <article class="artMasVendido">
            
            <section class="masVendido">
                <div id="slidershow-container" >
                    <div class="mySlides fade">
                        
                        <img class="imgSlider" src="../images/Modelos/${this.fotoMoto1}.jpg" >
                        
                    </div>
                    <div class="mySlides fade">
                        
                        <img class="imgSlider" src="../images/Modelos/${this.fotoMoto2}.jpg" >
                        
                    </div>
                    <div class="mySlides fade">
                        
                        <img class="imgSlider" src="../images/Modelos/${this.fotoMoto3}.jpg" >
                        
                    </div>
                    <a class="previo" onclick="plusSlides(-1)">&#10094</a>
                    <a class="proximo" onclick="plusSlides(1)">&#10095</a>
                            
                </div>
                <div class="divColores">
                    <span class="colores" onclick="currentSlides(1)" style="background-color: ${this.color1};"></span>
                    <span class="colores" onclick="currentSlides(2)" style="background-color: ${this.color2};"></span>
                    <span class="colores" onclick="currentSlides(3)" style="background-color: ${this.color3};"></span>
                </div>
                <div id="infoMoto">
                    <div id="infoIconos">
                        <ul id="ListaIconos">
                            <li id="cc">
                                <img id="imgcc" src="../images/icons/motor.svg" alt="">
                                <p>${this.cilindrada}</p>
                                <p>cc.</p>
                            </li>
                            <li id="tacometro">

                                <img id="imgTacometro" src="../images/icons/tacometro.svg" alt="velocidad">
                                <p> 0-100 </p>
                                <p> ${this.segundos} </p>
                                <p>s</p>
                            </li>
                            <li id="consumo">

                                <img id="imgConsumo" src="../images/icons/consumo.svg"alt="consumo">
                                <p> 1/</p>
                                <p>${this.consumo}</p>
                                <p>km</p>
                            </li>
                        </ul>                    
                    </div>
                    <div id="descripcion">
                        <h1>${this.nombre}</h1>
                        <h2>${this.precio}</h2>
                        <p>${this.descripcion}<p>
                        
                    </div>
                    <a class="button" style="--crl:#gray" href=""><span>Agregar al carrito</span></a>

                </div>
            </section>
        </article>`;
      }
      
    
    
    }
    
    
    
    
    let moto1 = new moto(
      'sport1',
      'sport2',
      'sport3',
      'black',
      'lightgoldenrodyellow',
      'green',
      '800',
      '9',
      '10',
      '$2.500.000',
      'Sportster™ S',
      'La Sportster™ S es el primer capítulo de un libro completamente nuevo de la saga Sportster. Un legado que nació en 1957 superando a la competencia y que ahora toma una nueva forma para superar una vez más los estándares actuales.'
 
      ) 
      
       
    
    
    let moto2 = new moto(
       'Motard',
       'Motard1',
       'Motard2',
       'black',
       'grey',
       'lightgrey',
       '750',
       '10',
       '9',
       '$1.500.000',
       'Fat Bob™',
       'Hecha para la calle, con ansias de poder. Diseñada con rendimiento y estilo poderoso.'
  )  
    
    let moto3 = new moto(
       'ruta',
       'ruta1',
       'ruta2',
       'black',
       'brown',
       'blue',
       '800',
       '9',
       '10',
       '$3.500.000',
       'Ultra Limited',
       'Rendimiento touring prémium sin riesgos para la conducción.'
  
    )
    let moto4 = new moto(
       'classic',
       'classic1',
       'classic2',
       'blue',
       'red',
       'white',
       '1200',
       '7',
       '8',
       '$4.500.000',
       'Road King™ Special',
       'Estilo bagger oscurecido y personalizado con potencia de gama alta y presencia en la conducción.'
   )
    let moto5 = new moto(
      'iron1',
      'iron2',
      'iron3',
      'black',
      'grey',
      'red',
      '1100',
      '7',
      '11',
      '$5.500.000',
      'Street Bob™',
      'Una bobber tenaz y despojada, envuelta en negro.'
 )
    
    
    let elementMotosContainer = document.getElementById('sectionCards');
    
    let htmlNuevasMotos =  moto1.getHtmlArticle() +
                           moto2.getHtmlArticle() +
                           moto3.getHtmlArticle() +
                           moto4.getHtmlArticle() +
                           moto5.getHtmlArticle();
    
    elementMotosContainer.innerHTML += htmlNuevasMotos;


    //slider moto


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);

}
function currentSlides(n){
    showSlides(slideIndex = n);
    
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {slideIndex = 1 }
    if (n < 1) {slideIndex = slides.length}
    for ( i = 0 ; i < slides.length; i++){
        slides[i].style.display="none";
    }
    
    slides[slideIndex - 1].style.display="block";
    
}