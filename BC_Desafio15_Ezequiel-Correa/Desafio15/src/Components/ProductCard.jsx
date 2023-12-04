import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { FaCartShopping, FaTrashCan } from "react-icons/fa6";
import { CartContext } from "../Context/CartContext";

const ProductCard = ({ product, fetchProductsData }) => {
  const { addToCart } = useContext(CartContext)
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const handleDelete = async (id) => {
    try {
      setIsDeleteLoading(true);
      const response = await fetch(
        `https://653ad68f2e42fd0d54d47f1b.mockapi.io/api/products/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("El producto no se pudo eliminar.");
      toast.success("Producto eliminado con éxito.");
      fetchProductsData();
      setIsDeleteLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("El producto no se pudo eliminar.");
      setIsDeleteLoading(false);
    }
  };
  return (
    <div className="product-card">
      
        <>
          
          <article className="article-product-list">
            
            <section className="masVendido">
              
                
            
              
                
                <div id="infoMoto">
                    
                    <div id="descripcion">
                      <div id="div-price-name">
                        <h1 id="name-card">{product.name}</h1>
                        <h2 id="price-card">${product.price}</h2>

                      </div>
                        <p id="p-description">{product.description}</p>
                        <p>color: {product.color}</p>
                    
                        
                    </div>
                                      
                </div>
            </section>
        </article>
          <div className="product-card__button-container">
            <button id="button-product" onClick={() => addToCart(product)}>
              {" "}
              <FaCartShopping />
              Agregar
            </button>
            <button>
              <FaTrashCan
                onClick={() => handleDelete(product.id)}
                disabled={isDeleteLoading}
              />
            </button>
            
          </div>
        </>
      
    </div>
  );
};

export default ProductCard;

