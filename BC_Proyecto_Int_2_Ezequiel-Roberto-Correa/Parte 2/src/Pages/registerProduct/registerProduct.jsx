import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../components/Header";

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


  return (
    <>
      
        <Header fetchProductsData={fetchProductsData}/>
        
        <ToastContainer />
  
    </>
  );
};

export default App;