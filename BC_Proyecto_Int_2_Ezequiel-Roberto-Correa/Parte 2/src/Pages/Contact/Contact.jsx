import React from 'react'

const Contact = () => {
  return (
    <div>
            <label for="nombre">Nombre</label>
            <input class="inputContacto" type="text" name="nombre" placeholder="Nombre" id="nombre" required />
            <p class="error" id="errorNombre"></p>
            <label for="apellido">Apellido</label>
            <input class="inputContacto" type="text" name="apellido" placeholder="Apellido" id="apellido" required />
            <p class="error" id="errorApellido"></p>
            <label for="email">Email</label>
            <input class="inputContacto" type="text" name="email" placeholder="ventas@rcmotors.com" id="email" required />
            <p class="error" id="errorEmail"></p>
            <select class="selectContacto" name="topic">
                <option value="sell">Venta</option>
                <option value="buy">Compra</option>
                <option value="general">Otro</option>
            </select>
            <textarea class="textareaContacto" name="message" cols="30" rows="10" placeholder="Ingrese su Mensaje"></textarea>
            <p class="textAreaError"></p>
           <input type="submit"  class="buttonContacto" value="Enviar Consulta" />
        
    </div>
  )
}

export default Contact