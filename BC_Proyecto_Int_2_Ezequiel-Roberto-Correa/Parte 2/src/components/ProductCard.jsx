import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { FaCartShopping, FaTrashCan } from "react-icons/fa6";
import { CartContext } from "../Pages/Models/context/CartContext";

const ProductCard = ({ product, fetchProductsData }) => {
  const { addToCart } = useContext(CartContext)
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  
  return (
    <div className="product-card">
      {isDeleteLoading ? (
        <p>Eliminando producto...</p>
      ) : (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <div className="product-card__button-container">
            <button onClick={() => addToCart(product)}>
              {" "}
              <FaCartShopping />
              Agregar
            </button>
            
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;

