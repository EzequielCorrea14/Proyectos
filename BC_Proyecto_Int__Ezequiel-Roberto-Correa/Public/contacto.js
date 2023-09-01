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

//formulario contacto


const form = document.getElementsByClassName('formContacto');
form[0].addEventListener('submit',(e)=> {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const nombreValue = nombre.value.trim();
    
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{3,10}/.test(nombreValue)) {
      document.getElementById("errorNombre").textContent = " Formato incorrecto ";
        return;
    } else{
      document.getElementById("errorNombre").textContent = "  ";
    }

    const apellido = document.getElementById('apellido');
    const apellidoValue = apellido.value.trim();
    if (!/^[a-zA-Zá-úÁ-Ú']{2,20}$/.test(apellidoValue)){
      document.getElementById("errorApellido").textContent = " Formato incorrecto ";
      return;
    } else{
      document.getElementById("errorApellido").textContent = " ";
    }

    const email = document.getElementById('email');
    const emailValue = email.value.trim();
    
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
      document.getElementById("errorEmail").textContent = " Formato de email incorrecto. Ej:'ventas@rcmotors.com' ";
        return;
    } else {
      document.getElementById("errorEmail").textContent = " ";
    }


    const textArea = document.getElementsByClassName('textareaContacto');
    const textAreaValue = commentInput.value.trim();
    
    if (textAreaValue.length > 2000) {
      document.getElementsByClassName("textAreaError").textContent = " Formato de email incorrecto. Ej:'ventas@rcmotors.com' ";
        return;
    } else{
      document.getElementsByClassName("textAreaError").textContent = "ñ";
    }

    alert('Contacto enviado!');
    form.reset();
});

