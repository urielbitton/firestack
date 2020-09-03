import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'
import Feature from './Feature'
import MovieItem from './MovieItem'


function Movies(props) {

  const {populars, trendings, classics, general, superheros} = useContext(MovieContext)

  const rowpopulars = populars.map(movie => { 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  }) 
  const rowtrendings = trendings.map(movie => { 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  })
  const rowgeneral = general.map(movie => { 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  }) 
  const rowclassics = classics.map(movie => { 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  }) 
  const rowsuperheros = superheros.map(movie => { 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  })  

  const allmovies = [shuffle(rowtrendings),shuffle(rowpopulars),shuffle(rowclassics),shuffle(rowgeneral),shuffle(rowsuperheros)]

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
 
  return (   
    <div className="page watchlistpage">
      <Feature movie={trendings[6]} title={trendings[6].title} cover={trendings[6].cover} rating={trendings[6].rating} genre={trendings[6].genre} year={trendings[6].year} descript={trendings[6].descript} trailer={trendings[6].trailer} watchlist={trendings[6].watchlist}/>
      <div className="grid">
        <h1>Movies</h1>
        <div className="spacer"></div> 
        <div className="pagegrid">
          {shuffle(allmovies)}
        </div> 
        <div className="spacer"></div>
      </div> 
    </div>   
  ) 
}

export default Movies