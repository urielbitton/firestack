import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { MovieContext } from './MovieContext'
import Feature from './Feature'
import MovieItem from './MovieItem'

 
function Tvs(props) {

  const {tvs} = useContext(MovieContext)

  const rowtvs = tvs.map(movie => {  
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  })   
   
  return (  
    <div className="page tvspage">
      <Feature movie={tvs[1]} title={tvs[1].title} cover={tvs[1].cover} rating={tvs[1].rating} genre={tvs[1].genre} year={tvs[1].year} descript={tvs[1].descript} trailer={tvs[1].trailer} watchlist={tvs[1].watchlist}/>
      <div className="grid">
        <h1>Tv Shows</h1>
        <div className="spacer"></div> 
        {rowtvs}
        <div className="spacer"></div>
      </div>   
    </div>   
  )  
} 

export default Tvs