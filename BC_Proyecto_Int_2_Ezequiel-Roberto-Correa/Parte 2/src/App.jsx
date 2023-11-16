import './App.css'
import { Route,Routes, Link, NavLink } from 'react-router-dom'
import Home from './pages/home/home'
import About from './Pages/About/About'
import Contacts from './Pages/Contact/contact'
import Page404 from './Pages/Page404/Page404'
import Models from './Pages/models/models'
import NavBar from './components/navbar'
import Background from './components/Background'
import Footer from './components/Footer'




function App() {

  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/models" element={<Models/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contacts/>} />
      <Route path="*" element={<Page404/>} />
    </Routes>
    <NavBar/>
    <Home/>
    <Background/>
    <Footer/>
    

    
    </>
  )
}

export default App
