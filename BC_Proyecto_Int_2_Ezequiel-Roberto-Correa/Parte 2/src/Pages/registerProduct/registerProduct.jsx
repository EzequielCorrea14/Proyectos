import React from 'react'

const registerProduct = () => {
  return (
    <div>
      <h1>Alta de modelo</h1>
            <label for="">Nombre Modelo:</label>
            <input id="nombreModelo" type="text" required />
            <p class="error" id="errorNombreModelo"></p>
            <label for="">Precio:</label>
            <input id="precio" type="text" name=""  required />
            <p class="error" id="errorPrecio"></p>
            <h2>Info</h2>
            <div class="divInfoAlta">
                <div class="divCaracteristicas">
                    <label for="">Cilindrada:</label>
                    <div>
                        <input  type="number" name="" id="infoMoto" required />
                        <p>CC.</p>
                    </div>
                </div>
                <div class="divInfoAlta" >
                    <div class="divCaracteristicas">
                        <label for="">Aceleracion:</label>
                        <div >
                            <p>0-100</p>
                            <input type="number" name="" id="infoMoto" required />
                            <p>s</p>
                        </div>
                    </div>
                </div>
                <div class="divInfoAlta">
                    <div class="divCaracteristicas" >
                        <label for="">Consumo:</label>
                        <div >
                            <p>1L/</p>
                            <input type="number" name="" id="infoMoto" required />
                            <p>km</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <label for="">Colores:</label>
            <div class="divColoresAlta">
                <select name="colores" id="">
                    <option value="Negro">Negro</option>
                    <option value="gris">Gris</option>
                    <option value="blanco">Blanco</option>
                    <option value="verde">Verde</option>
                    <option value="azul">Azul</option>
                    
                </select>
                <select name="colores" id="">
                    <option value="Negro">Negro</option>
                    <option value="gris">Gris</option>
                    <option value="blanco">Blanco</option>
                    <option value="verde">Verde</option>
                    <option value="azul">Azul</option>
                    
                </select>
                <select name="colores" id="" >
                    <option value="Negro">Negro</option>
                    <option value="gris">Gris</option>
                    <option value="blanco">Blanco</option>
                    <option value="verde">Verde</option>
                    <option value="azul">Azul</option>
                    
                </select>
            </div>
                <label for="">Fotos</label>
                
                <input class="subirFoto" type="file" accept="image/png, .jpeg, .jpg" required />
                <input class="subirFoto" type="file" accept="image/png, .jpeg, .jpg" required />
                <input class="subirFoto" type="file" accept="image/png, .jpeg, .jpg" required />
            
            <label for="">Descripción:</label>
            <textarea id="descripcion" class="textAreaAlta" name="message" cols="30" rows="10" placeholder="Descripción"></textarea>
            <p class="error" id="errorDescripcion"></p>  
            <button class="buttonAlta" type="submit">Generar Alta</button>
    </div>
  )
}

export default registerProduct