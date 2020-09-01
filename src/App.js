import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import "./App.css";
import Navbar from './comps/Navbar'
import MenuSlide from "./comps/MenuSlide";
import HomeCont from './comps/HomeCont'
import MovieContextProvider from "./comps/MovieContext";

function App() {
    
  useEffect(() => {
    const menuslide = document.querySelector('.menuslide')
 
    const sidebtn = document.querySelector('.sidebtn')
    let menuclick = false
    sidebtn.onclick = () => {
      if(menuclick === false) {
        menuslide.style.top = '65px'
        menuclick = true 
      }
      else {
        menuslide.style.top = ''
        menuclick = false
      }
    }    

  },[])  
   
  return (  
      <> 
      <Router>
        <Navbar />
        <MenuSlide />
        <MovieContextProvider>  
        <HomeCont />  
        </MovieContextProvider>
      </Router>  
      </>  
    ) 

}  

export default App