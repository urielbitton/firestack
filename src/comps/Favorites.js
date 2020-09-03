import React, {useContext, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Feature from './Feature'
import { MovieContext } from './MovieContext'
import MovieItem from './MovieItem'

function Favorites(props) {  
   
  const {populars, trendings, classics, tvs, general, superheros} = useContext(MovieContext)

  const rowtrendings = trendings.map(movie => { 
    if(movie.favorite) 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} key={movie.id} />
      </div>  
      ) 
      return  
  }) 
  const rowpopulars = populars.map(movie => { 
    if(movie.favorite) 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} key={movie.id} />
      </div>  
      ) 
      return  
  })
  const rowclassics = classics.map(movie => { 
    if(movie.favorite) 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} key={movie.id} />
      </div>  
      ) 
      return  
  })
  const rowgeneral = general.map(movie => { 
    if(movie.favorite) 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} key={movie.id} />
      </div>  
      ) 
      return  
  })
  const rowtvs = tvs.map(movie => { 
    if(movie.favorite) 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} key={movie.id} />
      </div>  
      ) 
      return  
  })
   
  return (   
    <div className="page">
      <Feature title={populars[4].title} cover={populars[4].cover} rating={populars[4].ratings} genre={populars[4].genre} year={populars[4].year} descript={populars[4].descript} trailer={populars[4].trailer}/>
      <div className="grid">
        <h1>Favorites</h1>
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

export default Favorites