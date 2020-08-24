import React from 'react'

function Feature(props) {
  return (
    <> 
    <div className="feature">
      <div className="featurebg">
        <img className="featurecover" src={props.featimg} alt="featimg"/>
      </div>
      <div className="grid">
      <h1>{props.movietitle}</h1>
      <small>
        <i className="fas fa-star"></i> 
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i> 
        <i className="far fa-star"></i>
        <span>{props.ratings} ratings</span>
        <span>•</span>
        <span>{props.genre}</span>
        <span>•</span>
        <span>{props.year}</span>
      </small>
      <p>{props.descript}</p>
      <button><i className="far fa-play-circle"></i>Watch Now</button>
      <button>Add To Watchlist</button>
      </div> 
    </div>
    <div className="spacer"></div>
    </>
  )
}

export default Feature