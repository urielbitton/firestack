import React, { useEffect } from "react";

function MenuSlide() {
  

  return (
    <div className="menuslide">
      <div className="menubox" re-router="home">
        <i class="fas fa-home"></i>
      </div>
      <div className="menubox" re-router="movies">
        <i class="fas fa-film"></i>
      </div>
      <div className="menubox" re-router="tvshows">
        <i class="fas fa-tv"></i>
      </div>
      <div className="menubox" re-router="favorites">
        <i class="fas fa-heart"></i>
      </div>
      <div className="menubox" re-router="watchlist">
        <i class="fas fa-list"></i>
      </div>
      <div className="menubox" re-router="settings">
        <i class="fas fa-cog"></i>
      </div>
    </div>
  );
}

export default MenuSlide;
