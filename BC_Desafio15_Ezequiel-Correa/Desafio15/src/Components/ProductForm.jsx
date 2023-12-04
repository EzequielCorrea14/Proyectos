import { useForm } from "react-hook-form";
import { useState } from "react";
import * as React from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const productForm = () => {

    const { register,setError, formState: { errors }, handleSubmit } = useForm({
        
    });
    
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const onSubmit = async (data,e) => {
      e.target.reset();
      try {
        const response = await fetch(
          "https://653ad68f2e42fd0d54d47f1b.mockapi.io/api/products",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
          );
          console.log(data)
  
        if (!response.ok) {
          throw new Error('Error al agregar un producto.')
          toast.error('Error al agregar un producto.')
        }else{toast.success('Producto Agregado con éxito.')}
        // try {
        //   await fetchData()
        //   toast.success('Producto Agregado con éxito.')
        // } catch (error) {
          
        // }
        // toast.success('Producto Agregado con éxito.')
      } catch (error) {
        toast.error('Error al agregar un producto.')
        
      }
    }



    

    return <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Alta de Modelo</h1>
        <label for="">Nombre Modelo:</label>
        <input
            type="text" {...register('name', {
              required: true,
              minLength: 3,
              maxLength: 30,
              pattern: /^[A-Z][ A-Za-z 0-9.']{1,30}$/i,
            })}/>
            
            {errors?.name?.type === 'required' && <p className="errors">El nombre es requerido.</p>}
            {errors?.name?.type === 'minLength' && <p className="errors">El nombre debe tener al menos 3 caracteres.</p>}
            {errors?.name?.type === 'maxLength' && <p className="errors">El nombre debe tener menos de 30 caracteres.</p>}
            {errors?.name?.type === 'pattern' && <p className="errors">El nombre debe comenzar con mayúscula.</p>}
        
        <label for="">Precio:</label>
        <input type="number" {...register('price', {
              required: true,
              minLength: 1,
              maxLength: 30,
              pattern: /^(\d*([.](?=\d{3}))?\d+)+((?!\2)[.]\d\d)?$/gm,
            })}/>
            {errors.price?.type === 'required' && <p className="errors">El precio es requerido.</p>}
            {errors.price?.type === 'minLength' && <p className="errors">El precio debe tener al menos 1 caracteres.</p>}
            {errors.price?.type === 'maxLength' && <p className="errors">El precio debe tener menos de 30 caracteres.</p>}
            {errors.price?.type === 'pattern' && <p className="errors">El precio debe ser un número y no admite comas.</p>}

           
      <button className="button-register" >Agregar Producto</button>

    </form>

    </>
}

export default productForm;