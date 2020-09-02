import React from "react";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import "./App.css";
import Navbar from './comps/Navbar'
import MenuSlide from "./comps/MenuSlide";
import HomeCont from './comps/HomeCont'
import MovieContextProvider from "./comps/MovieContext";

function App() { 
   
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