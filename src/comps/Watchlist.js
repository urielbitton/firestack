import React, {useContext, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Feature from './Feature'
import { MovieContext } from './MovieContext'
import MovieItem from './MovieItem'

function Watchlist(props) {  
   
  const {populars, trendings, classics, tvs, general} = useContext(MovieContext)
 
  function remFromWatchlist() {
    trendings.map(movie => {
        movie.watchlist = false;    
        return    
    })              
  }
  const rowtrendings = trendings.map(movie => { 
    if(movie.watchlist) 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} rate={movie.rate.toFixed(1)} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  })
  const rowpopulars = populars.map(movie => { 
    if(movie.watchlist) 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} rate={movie.rate.toFixed(1)} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  })
  const rowclassics = classics.map(movie => { 
    if(movie.watchlist) 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} rate={movie.rate.toFixed(1)} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  })
  const rowgeneral = general.map(movie => { 
    if(movie.watchlist) 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} rate={movie.rate.toFixed(1)} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  }) 
  const rowtvs = tvs.map(movie => { 
    if(movie.watchlist) 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} rate={movie.rate.toFixed(1)} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      )  
      return 
  })
    
  return (  
    <div className="page watchlistpage">
      <Feature movie={trendings[9]} title={trendings[9].title} cover={trendings[9].cover} rating={trendings[9].rating} genre={trendings[9].genre} year={trendings[9].year} descript={trendings[9].descript} trailer={trendings[9].trailer} watchlist={trendings[9].watchlist} stars={trendings[9].stars}/>
      <div className="grid">
        <h1>Watchlist</h1>
        <div className="spacer"></div> 
        {rowtrendings}
        {rowpopulars}
        {rowclassics}
        {rowgeneral}
        {rowtvs}
        <div className="spacer"></div>
      </div> 
    </div>    
  ) 
} 

export default Watchlist 