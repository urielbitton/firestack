import React, {useContext, useEffect, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Lightbox from './Lightbox'
import { MovieContext } from './MovieContext'
import Notifs from './Notifs'
     

function Feature(props) {

  const {populars, trendings, classics, general, tvs} = useContext(MovieContext)

  useEffect(() => {
    const lightboxcont = document.querySelector('.lightboxcont')
    const lightbox = document.querySelector('.lightbox')
    const watchnowbtn = document.querySelector('.watchnowbtn')
    const watchlist = document.querySelector('.watchlist')
 
    watchnowbtn.onclick = () => {  
      lightboxcont.style.display = "flex"
      setTimeout(() => { 
        lightboxcont.style.opacity = "1"
        lightbox.style.transform = "scale(1)"
      }, 100);
    }  
    
  },[])  
        
  function addToWatchlist() { 
    window.scrollTo(0, 0)  

    trendings.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""})  
    populars.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""}) 
    classics.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""}) 
    general.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""})     
    tvs.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""})       
  } 

  return ( 
    <>  
    <div className="feature">
      <div className="featurebg">
        <img className="featurecover" src={props.cover} alt="featimg"/>
      </div>
      <div className="grid">
        <i class="far fa-play-circle featureplaybtn"></i>
        <h1>{props.title}</h1>
        <small>
          <i className="fas fa-star"></i> 
          <i className="fas fa-star"></i> 
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i> 
          <i className="far fa-star"></i>
          <span>{props.rating} ratings</span>
          <span>•</span>
          <span>{props.genre}</span>  
          <span>•</span> 
          <span>{props.year}</span>   
        </small>
        <p className="featdescript">{props.descript}</p>
        <p className="starring">
          <span>Starring</span>
          { props.starring?(props.starring[0]):"" }, { props.starring?(props.starring[1]):"" }, { props.starring?(props.starring[2]):"" }
        </p>   
        <button className="watchnowbtn"><i className="far fa-play-circle"></i>Watch Now</button>
        <Link to="/Watchlist"><button className="watchlist" onClick={addToWatchlist}><i className={props.watchlist?"fas fa-check":"fas fa-plus"}></i>{props.watchlist?"Added To Watchlist":"Add To Watchlist"}</button></Link>
      </div>    
    </div>  
    <div className="spacer"></div> 
 
    <Lightbox trailer={props.trailer}/> 
    <Notifs />
  
    </>  
  ) 
}  

export default Feature