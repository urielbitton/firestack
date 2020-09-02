import React, {useContext, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Feature from './Feature'
import { MovieContext } from './MovieContext'

function Favorites(props) {  
   
  const {populars, trendings, classics} = useContext(MovieContext)

  function addToWatchlist() {
    window.scrollTo(0, 0)
    trendings.map((movie) => {
        if (movie.id === props.movie.id) {
            props.movie.watchlist = true;
        }   
        return    
    })             
  }
   
  return (  
    <div className="page">
      <Feature title={populars[4].title} cover={populars[4].cover} rating={populars[4].ratings} genre={populars[4].genre} year={populars[4].year} descript={populars[4].descript} trailer={populars[4].trailer}/>
      <div className="grid">
        <h1>{props.pagetitle}</h1>
        <div className="spacer"></div>
        {       
          trendings.map(movie => {  
            return (     
              movie.favorite? (  
                <div className="box">
                <div className="item"> 
                    <img src={movie.image} alt="movie"/>
                    <div className="boxcover">
                        <div className="boxinfo">
                            <h4>{movie.title}</h4>
                            <h5>{movie.year}</h5>   
                            <Link to="/Watchlist"><i className="fas fa-plus"
                            onClick={addToWatchlist}></i>
                            </Link> 
                            <i className="fas fa-heart" style={{color:"var(--color)"}}></i>
                            <small><i className="fas fa-clock"></i>{movie.runtime}</small>  
                        </div>
                        <Link to="/MovieItem"><i className="far fa-play-circle playbtn" onClick={() => props.openmovie(movie.title, movie.year, movie.image, movie.cover, movie.descript, movie.rating, movie.genre, movie.runtime, movie.starring, movie.director, movie.trailer, movie.pictures, movie.imdblink)}></i></Link>
                    </div>     
                </div>    
                </div> 
              ): "" 
            ) 
          })
        } 
        <div className="spacer"></div>
      </div> 
    </div>   
  ) 
}  

export default Favorites