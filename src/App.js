import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from './comps/Navbar'
import MenuSlide from "./comps/MenuSlide";
import HomeCont from './comps/HomeCont'
import MoviePage from './comps/MoviePage'
import {MovieProvider} from './comps/MovieContext' 

function App() {
   
  useEffect(() => {
    //re-router 
    const router = document.querySelectorAll('[re-router]')
    const menuslide = document.querySelector('.menuslide')
    for(let item of router) {
        item.onclick = function() {
            let thisattr = this.getAttribute('re-router')
            let app = document.querySelectorAll('[re-route]')
            for (item of app) {
              item.style.display = 'none' 
              menuslide.style.top = '-100vh'
              menuclick = false 
            }
            document.querySelector('[re-route="'+thisattr+'"]').style.display = 'block';   
        }
    }

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
      <MovieProvider>
        <Navbar />
        <MenuSlide />
        <HomeCont />  
        <MoviePage />
      </MovieProvider> 
      </>  
    ) 

}  

export default App