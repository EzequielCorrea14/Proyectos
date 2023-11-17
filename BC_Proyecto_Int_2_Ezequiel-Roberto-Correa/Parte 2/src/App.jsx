import './App.css'
import { Route,Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/home/home'
import About from './Pages/About/About'
import Contacts from './Pages/Contact/contact'
import Page404 from './Pages/Page404/Page404'
import Models from './Pages/Models/Models'
import NavBar from './components/navbar'
import Background from './components/Background'
import Footer from './components/Footer'
import RegisterProduct from './Pages/RegisterProduct/RegisterProduct'

import { useEffect, useState } from "react";




function App() {

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
    
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/models" element={<Models/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/registerProduct" element={<RegisterProduct/>} />
      <Route path="/contact" element={<Contacts/>} />
      <Route path="*" element={<Page404/>} />
      
    </Routes>
      <Footer/>
      <Background/>
    
    

    
    </>
  )
}

export default App
