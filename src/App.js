import React from "react";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import "./App.css";
import HomeCont from './comps/HomeCont'
import MovieContextProvider from "./comps/MovieContext";

function App() { 
   
  return (  
      <> 
      <Router>
        <MovieContextProvider>   
          <HomeCont />    
        </MovieContextProvider>
      </Router>   
      </>  
    ) 

}  

export default App