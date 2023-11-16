import { useState } from "react";

import { toast } from "react-toastify";
import BasicModal from "./BasicModal";
import { productFormDictionary } from "../../../utils/productFormDictionary";


const ProductForm = ({fetchData}) => {
  const [productFormValues, setProductFormValues] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false) 
  const handleUpdateProductFormValues = (value, inputReference) => {
    if (inputReference === productFormDictionary.NAME) {
      setProductFormValues((prevState) => ({ ...prevState, name: value }));
    }
    if (inputReference === productFormDictionary.DESCRIPTION) {
      setProductFormValues((prevState) => ({
        ...prevState,
        description: value,
      }));
    }
    if (inputReference === productFormDictionary.PRICE) {
      setProductFormValues((prevState) => ({ ...prevState, price: value }));
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
      <input
        type="text"
        placeholder={"Name"}
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.NAME
          )
        }
      />
      <input
        type="text"
        placeholder={"Description"}
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.DESCRIPTION
          )
        }
      />
      <input
        type="number"
        placeholder={"Price"}
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.PRICE
          )
        }
      />
      <button onClick={handleSubmitForm}>Agregar Producto</button>
        <button onClick={ () => setIsModalOpen(true)}>Abrir modal</button>
    </div>
    <BasicModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
};

export default ProductForm;