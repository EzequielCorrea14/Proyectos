import { useState } from "react";
import { productFormDictionary } from "../../utils/productFormDictionary";
import { toast } from "react-toastify";
// import BasicModal from "./BasicModal";


const ProductForm = ({fetchData}) => {
  const [productFormValues, setProductFormValues] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false) 
  const handleUpdateProductFormValues = (value, inputReference) => {
    if (inputReference === productFormDictionary.NAME) {
      setProductFormValues((prevState) => ({ ...prevState,name: value }));
    }
    if (inputReference === productFormDictionary.PRICE) {
      setProductFormValues((prevState) => ({...prevState,price: value,
      }));
    }
    if (inputReference === productFormDictionary.CC) {
      setProductFormValues((prevState) => ({ ...prevState, cc: value }));
    }
    if (inputReference === productFormDictionary.VEL) {
        setProductFormValues((prevState) => ({ ...prevState, vel: value }));
      }
    if (inputReference === productFormDictionary.KM) {
        setProductFormValues((prevState) => ({ ...prevState, km: value }));
      }
    if (inputReference === productFormDictionary.COLOR1) {
        setProductFormValues((prevState) => ({ ...prevState, color1: value }));
      }
    if (inputReference === productFormDictionary.COLOR2) {
        setProductFormValues((prevState) => ({ ...prevState, color2: value }));
      }
    if (inputReference === productFormDictionary.COLOR3) {
        setProductFormValues((prevState) => ({ ...prevState, color3: value }));
      }
    if (inputReference === productFormDictionary.IMAGE1) {
        setProductFormValues((prevState) => ({ ...prevState, IMAGE2: value }));
      }
    if (inputReference === productFormDictionary.IMAGE2) {
        setProductFormValues((prevState) => ({ ...prevState, image2: value }));
      }
    if (inputReference === productFormDictionary.DESCRIPTION) {
        setProductFormValues((prevState) => ({ ...prevState, description: value }));
      }
    if (inputReference === productFormDictionary.STOCK) {
        setProductFormValues((prevState) => ({ ...prevState, stock: value }));
      }
    };

  const handleSubmitForm = async () => {
    try {
      const response = await fetch(
        "https://653ad68f2e42fd0d54d47f1b.mockapi.io/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productFormValues),
        }
      );

      if (!response.ok) {
        throw new Error('Error al agregar un producto.')
      }
      try {
        await fetchData()
      } catch (error) {
        toast.error('Error al actualizar los datos.')
      }
      toast.success('Producto Agregado con éxito.')
    } catch (error) {
        toast.error('Error al agregar un producto.')
      
    }
  };

  return (
    <>
    <div>
        <h1>Alta de Modelo</h1>
        <label for="">Nombre Modelo:</label>
        <input
            type="text"
        
            onChange={(e) =>
              handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.NAME
          )
        }
        />
        <p className="error" id="errorName"></p>
        <label for="">Precio:</label>
        <input
            type="number"
            
            onChange={(e) =>
            handleUpdateProductFormValues(
                e.target.value,
                productFormDictionary.PRICE
            )
            }
        />
        <h2>Info</h2>
        <div className="divInfoAlta">
            <div className="divCaracteristicas">
                <label for="">Cilindrada:</label>
                    <div>
                        <input  type="number" 
                            name="" 
                                id="infoMoto" 
                                onChange={(e) =>
                                handleUpdateProductFormValues(
                                e.target.value,
                                productFormDictionary.CC
                                        )
                                    }    
                                    
                        required/>
                        <p>CC.</p>
                        </div>
                    </div>
                    <div className="divInfoAlta" >
                        <div className="divCaracteristicas">
                            <label for="">Aceleracion:</label>
                            <div >
                                <p>0-100</p>
                                <input type="number" 
                                        name="" 
                                        id="infoMoto"
                                        onChange={(e) =>
                                            handleUpdateProductFormValues(
                                            e.target.value,
                                            productFormDictionary.VEL
                                            )
                                        }    
                                        
                                        required/>
                                <p>s</p>
                            </div>
                        </div>
                    </div>
                    <div className="divInfoAlta">
                        <div className="divCaracteristicas" >
                            <label for="">Consumo:</label>
                            <div >
                                <p>1L/</p>
                                <input type="number" 
                                    name=""
                                    id="infoMoto" 
                                    onChange={(e) =>
                                        handleUpdateProductFormValues(
                                        e.target.value,
                                        productFormDictionary.KM
                                        )
                                    }
                                    
                                    required/>
                                <p>km</p>
                            </div>
                        </div>
                    </div>
                </div>
                <label for="">Colores:</label>
            <div className="divColoresAlta">
                <select name="colores" id=""
                onChange={(e) =>
                    handleUpdateProductFormValues(
                    e.target.value,
                    productFormDictionary.COLOR1
                    )
                }  >
                    <option value="Negro">Negro</option>
                    <option value="gris">Gris</option>
                    <option value="blanco">Blanco</option>
                    <option value="verde">Verde</option>
                    <option value="azul">Azul</option>
                    
                </select>
                <select name="colores" id=""
                onChange={(e) =>
                    handleUpdateProductFormValues(
                    e.target.value,
                    productFormDictionary.COLOR2
                    )
                }  >
                    <option value="Negro">Negro</option>
                    <option value="gris">Gris</option>
                    <option value="blanco">Blanco</option>
                    <option value="verde">Verde</option>
                    <option value="azul">Azul</option>
                    
                </select>
                <select name="colores" id="" 
                onChange={(e) =>
                    handleUpdateProductFormValues(
                    e.target.value,
                    productFormDictionary.COLOR3
                    )
                }  >
                    <option value="Negro">Negro</option>
                    <option value="gris">Gris</option>
                    <option value="blanco">Blanco</option>
                    <option value="verde">Verde</option>
                    <option value="azul">Azul</option>
                    
                </select>
            </div>
                <label for="">Fotos</label>
                
                <input className="subirFoto" 
                       type="file" 
                       accept="image/png, .jpeg, .jpg"
                       onChange={(e) =>
                        handleUpdateProductFormValues(
                        e.target.value,
                        productFormDictionary.IMAGE1
                        )
                    }  
                       required />
                <input className="subirFoto" 
                       type="file" 
                       accept="image/png, .jpeg, .jpg" 
                       onChange={(e) =>
                        handleUpdateProductFormValues(
                        e.target.value,
                        productFormDictionary.IMAGE2
                        )
                    }  
                       required />
                <input className="subirFoto" 
                       type="file" 
                       accept="image/png, .jpeg, .jpg" 
                       onChange={(e) =>
                        handleUpdateProductFormValues(
                        e.target.value,
                        productFormDictionary.IMAGE3
                        )
                    }  
                       required />
            
            <label for="">Descripción:</label>
            <textarea id="descripcion" 
                      className="textAreaAlta"
                      name="message"
                      cols="30" 
                      rows="10" 
                      placeholder="Descripción"
                      onChange={(e) =>
                        handleUpdateProductFormValues(
                        e.target.value,
                        productFormDictionary.DESCRIPTION
                        )
                    }  ></textarea>
            <p className="error" id="errorDescripcion"></p>
            <label For="">Stock:</label>
            <input type="number" 
                   name="" 
                   id=""
                   onChange={(e) =>
                    handleUpdateProductFormValues(
                    e.target.value,
                    productFormDictionary.STOCK
                    )
                }   />
      <button onClick={handleSubmitForm}>Agregar Producto</button>
        <button onClick={ () => setIsModalOpen(true)}>Abrir modal</button>
    </div>
    <BasicModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
};

export default ProductForm;