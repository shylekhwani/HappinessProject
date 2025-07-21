import {Route, Routes } from "react-router-dom";;
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Home from "./components/Home";
import Explore from "./components/Explore";


function App() {


  return (
    <>
      <Navbar/>
      <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Services/>} />
      </Routes>

    </>
  )
}

export default App
