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

//formulario Alta





const form = document.getElementById('formAlta');
form[0].addEventListener('submit',(e)=> {
    e.preventDefault();
    const nombreModelo = document.getElementById('nombreModelo');
    const nombreModeloValue = nombreModelo.value.trim();
    
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]{1,10}/.test(nombreModeloValue)) {
      document.getElementById("errorNombreModelo").textContent = " Formato incorrecto ";
        return;
    } else{
      document.getElementById("errorNombreModelo").textContent = "  ";
    }

    const precio = document.getElementById('precio');
    const precioValue = precio.value.trim();
    if (!/[$]+[0-9,.]+[^.]{2,10}/.test(precioValue)){
      document.getElementById("errorPrecio").textContent = " Formato incorrecto ej: '$2.500.000' ";
      return;
    } else{
      document.getElementById("errorPrecio").textContent = " ";
    }

 

    const textArea = document.getElementsByClassName('textAreaAlta');
    const textAreaValue = textArea.value.trim();
    
    if (textAreaValue.length > 2000) {
      document.getElementById("errorDescripcion").textContent = " Formato de email incorrecto. Ej:'ventas@rcmotors.com' ";
        return;
    } else{
      document.getElementById("errorDescripcion").textContent = " ";
    }

    alert('Contacto enviado!');
    form.reset();
});










