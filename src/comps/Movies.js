import React, {useContext, useState} from 'react'
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

  const allmovies = rowtrendings.concat(rowpopulars, rowclassics.concat(rowgeneral, rowsuperheros))
  let themovies = allmovies
 
  function filterYear() {
    themovies = allmovies.map(el => {
      if(el.props.children.props.year > 2019)
        return el
    })
  }
  
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
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
        <div className="filterdiv">
          <h5><i class="fas fa-sliders-h"></i>Filters</h5>
          <small>Sort By:</small>
          <h6>Title<i class="fas fa-angle-down"></i></h6>
          <h6 onClick={filterYear}>Year<i class="fas fa-angle-down"></i></h6> 
          <h6>Duration<i class="fas fa-angle-down"></i></h6>
          <h6>Rating<i class="fas fa-angle-down"></i></h6> 
          <h6>Genre<i class="fas fa-angle-down"></i></h6>  
          <small>Search :</small>
          <input type="text" placeholder="Search Movies..."/>
        </div>
        <div className="spacers"></div> 
        <div className="pagegrid">
          {shuffle(themovies)}
        </div>  
        <div className="spacer"></div>
      </div> 
    </div>   
  ) 
}

export default Movies