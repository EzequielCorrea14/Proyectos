import ProductCard from "./ProductCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = ({ products, fetchProductsData }) => {
  toast.info('Renderizando')
  return (
    <>
      <h2>Lista de productos:</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            fetchProductsData={fetchProductsData}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;