import React, {useContext, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Feature from './Feature'
import { MovieContext } from './MovieContext'

function Watchlist(props) {  
   
  const {populars, trendings, classics, tvs,general} = useContext(MovieContext)
 
  function remFromWatchlist() {
    trendings.map((movie) => {
        movie.watchlist = false;    
        return    
    })     
    populars.map((movie) => {
        movie.watchlist = false;  
        return  
    })
    general.map((movie) => {
      movie.watchlist = false; 
      return  
    }) 
    tvs.map((movie) => {
      movie.watchlist = false;  
      return   
  })
    classics.map((movie) => {
        movie.watchlist = false;  
        return  
    })         
}
   
  return (  
    <div className="page watchlistpage">
      <Feature title={trendings[9].title} cover={trendings[9].cover} rating={trendings[9].ratings} genre={trendings[9].genre} year={trendings[9].year} descript={trendings[9].descript} trailer={trendings[9].trailer}/>
      <div className="grid">
        <h1>Watchlist</h1>
        <div className="spacer"></div> 
        {       
          trendings.map(movie => {  
            return (     
              movie.watchlist? (  
                <div className="box">
                <div className="item"> 
                    <img src={movie.image} alt="movie"/>
                    <div className="boxcover">
                        <div className="boxinfo">
                            <h4>{movie.title}</h4>
                            <h5>{movie.year}</h5>   
                            <i class="fas fa-plus" style={{color:"var(--color)"}} onClick={remFromWatchlist}></i> 
                            <i className="far fa-heart"></i>
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
        {  
          populars.map(movie => { 
            return (     
              movie.watchlist? (  
                <div className="box">
                <div className="item"> 
                    <img src={movie.image} alt="movie"/>
                    <div className="boxcover">
                        <div className="boxinfo">
                            <h4>{movie.title}</h4>
                            <h5>{movie.year}</h5>   
                            <i class="fas fa-times" onClick={remFromWatchlist}></i>  
                            <i className="far fa-heart"></i>
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
        {  
          general.map(movie => { 
            return (     
              movie.watchlist? (  
                <div className="box">
                <div className="item"> 
                    <img src={movie.image} alt="movie"/>
                    <div className="boxcover">
                        <div className="boxinfo">
                            <h4>{movie.title}</h4>
                            <h5>{movie.year}</h5>   
                            <i class="fas fa-times" onClick={remFromWatchlist}></i>  
                            <i className="far fa-heart"></i>
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
        {  
          classics.map(movie => { 
            return (     
              movie.watchlist? (  
                <div className="box">
                <div className="item"> 
                    <img src={movie.image} alt="movie"/>
                    <div className="boxcover">
                        <div className="boxinfo">
                            <h4>{movie.title}</h4>
                            <h5>{movie.year}</h5>   
                            <i class="fas fa-times" onClick={remFromWatchlist}></i>  
                            <i className="far fa-heart"></i>
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

export default Watchlist