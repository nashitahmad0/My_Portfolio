import React from 'react'
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";


const App = () => {

  
  return (
    <>
       <Navbar/>
       <Hero/>  
       <About/>
       <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App