import React, {useContext, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Feature from './Feature'
import { MovieContext } from './MovieContext'
import MovieItem from './MovieItem'

function Page(props) {  
   
  const {populars, trendings, classics} = useContext(MovieContext)
    
  return (  
    <div className="page">
      <Feature title={props.title} cover={props.image} rating={props.ratings} genre={props.genre} year={props.year} descript={props.descript} trailer={props.trailer}/>
      <div className="grid">
        <h1>{props.pagetitle}</h1>
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
                            <i className="fas fa-plus"></i>  
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
                            <i className="fas fa-plus"></i>  
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
                            <i className="fas fa-plus"></i>  
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

export default Page