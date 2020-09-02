import React, { useEffect } from "react";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function MenuSlide() {
   
  useEffect(() => {
    const menuslide = document.querySelector('.menuslide')
    const menubox = document.querySelectorAll('.menubox')
  
    const sidebtn = document.querySelector('.sidebtn')
    let menuclick = false
    menubox.forEach(el => {
      el.onclick = () => {
        menuslide.style.top = ""
        menuclick = false
      }
    })
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
    <div className="menuslide">
      <Link to="/">
      <div className="menubox">
        <i className="fas fa-home"></i>
        <h4>Home</h4>
      </div>
      </Link>
      <Link to="/Movies">
      <div className="menubox">
        <i className="fas fa-film"></i>
        <h4>Movies</h4>
      </div>
      </Link>
      <Link to="/Tvs">
      <div className="menubox">
        <i className="fas fa-tv"></i>
        <h4>TV Shows</h4>
      </div>
      </Link>
      <Link to="/Favorites">
      <div className="menubox">
        <i className="fas fa-heart"></i>
        <h4>Favorites</h4>
      </div>
      </Link>
      <Link to="/Watchlist">
      <div className="menubox">
        <i className="fas fa-list"></i>
        <h4>Watchlist</h4>
      </div>
      </Link>
      <Link to="/Settings">
      <div className="menubox">
        <i className="fas fa-cog"></i>
        <h4>Settings</h4> 
      </div>
      </Link>
    </div>
  )
}

export default MenuSlide;
