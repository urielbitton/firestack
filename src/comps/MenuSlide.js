import React, { useEffect } from "react";

function MenuSlide() {
  

  return (
    <div className="menuslide">
      <div className="menubox" re-router="home">
        <i className="fas fa-home"></i>
        <h4>Home</h4>
      </div>
      <div className="menubox" re-router="movies">
        <i className="fas fa-film"></i>
        <h4>Movies</h4>
      </div>
      <div className="menubox" re-router="tvshows">
        <i className="fas fa-tv"></i>
        <h4>TV Shows</h4>
      </div>
      <div className="menubox" re-router="favorites">
        <i className="fas fa-heart"></i>
        <h4>Favorites</h4>
      </div>
      <div className="menubox" re-router="watchlist">
        <i className="fas fa-list"></i>
        <h4>Watchlist</h4>
      </div>
      <div className="menubox" re-router="settings">
        <i className="fas fa-cog"></i>
        <h4>Settings</h4> 
      </div>
    </div>
  )
}

export default MenuSlide;
