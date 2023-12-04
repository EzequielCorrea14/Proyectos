import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./Context/CartContext";
import Header from "./Components/Header";

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchProductsData = async () => {
    const url = "https://653ad68f2e42fd0d54d47f1b.mockapi.io/api/products";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  if (error) return <p>Hubo un error al cargar los productos.</p>;

  if (isLoading) return <p>Cargando...</p>;

  return (
    <>
      <CartProvider>
        <Header fetchProductsData={fetchProductsData}/>
        {products.length > 0 ? (
          <ProductList
            products={products}
            fetchProductsData={fetchProductsData}
          />
        ) : (
          <p>No hay productos para mostrar</p>
        )}
        <ToastContainer />
      </CartProvider>
    </>
  );
};

export default App;