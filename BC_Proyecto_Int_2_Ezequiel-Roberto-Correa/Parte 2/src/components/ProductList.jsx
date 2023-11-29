
import ProductCard from "./ProductCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const ProductList = ({ products, fetchProductsData }) => {
  toast.info('Cargando Modelos')


  return (
    <>
      <div>
      <h3 className="h3-models">Modelos disponibles</h3>
      <div className="product-list">
        {products.map((product) => (
     
          <ProductCard
            key={product.id}
            product={product}
            fetchProductsData={fetchProductsData}
          />
        ),console.log(ProductCard)  
        )}
      </div>
      </div>
    </>
  );
};

export default ProductList;