//slide moto


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
    // 
}


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






