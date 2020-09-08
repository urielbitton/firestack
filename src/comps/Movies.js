import React, {useContext, useState, useEffect} from 'react'
import { MovieContext } from './MovieContext'
import Feature from './Feature'
import MovieItem from './MovieItem'


function Movies(props) {

  const {populars, trendings, classics, general, superheros} = useContext(MovieContext)

  const rowpopulars = populars.map(movie => { 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} rate={movie.rate?movie.rate.toFixed(1):""} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  }) 
  const rowtrendings = trendings.map(movie => { 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} rate={movie.rate?movie.rate.toFixed(1):""} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  })
  const rowgeneral = general.map(movie => { 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} rate={movie.rate?movie.rate.toFixed(1):""} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  }) 
  const rowclassics = classics.map(movie => { 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} rate={movie.rate?movie.rate.toFixed(1):""} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  }) 
  const rowsuperheros = superheros.map(movie => { 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} rate={movie.rate?movie.rate.toFixed(1):""} watchlist={movie.watchlist} favorite={movie.favorite} key={movie.id} />
      </div>  
      ) 
      return 
  })  

  const allmovies = [...rowtrendings, ...rowclassics, ...rowpopulars, ...rowsuperheros, ...rowgeneral]
  
  const [movieresult, setMovieresult] = useState(allmovies)
 
  //all filter functions
  function sortYear() {
    const yearsort = allmovies.map(el => {
      if(el.props.children.props.year > 2019)
        return el
    }) 
    setMovieresult(yearsort) 
  }
   function sortTitle() {
     const titlesort = allmovies.map(el => {
       if(el.props.children.props.title.includes("The")) 
        return el
     }) 
     setMovieresult(titlesort)
   }
  //reset sorts
  function resetSort() {
    setMovieresult(allmovies)
  }


  //shuffle allmovies
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

  useEffect(() => {
    const moviessearch = document.querySelector('.moviessearch')
    moviessearch.addEventListener('keyup', searchMovies)
    const box = document.querySelectorAll('.pagegrid .box')

    function searchMovies() { 
      let filtertitle = moviessearch.value.toUpperCase()
      let filteryear = moviessearch.value
      
      for (let i = 0; i < box.length; i++) {
        let title = box[i].getElementsByTagName("h4")[0]
        let year = box[i].getElementsByTagName("h5")[0].innerHTML
        let titlevalue = title.innerText 
        let yearvalue = parseInt(year,10)
        if (titlevalue.toUpperCase().indexOf(filtertitle) > -1 || yearvalue === filteryear) {
          box[i].style.display = "block"
          setTimeout(() => {
            box[i].style.opacity = "1"
            box[i].style.transform = "scale(1)"
          }, 150)
        }  
        else { 
          box[i].style.opacity = "0"
          box[i].style.transform = "scale(0.9)"
          setTimeout(() => {
            box[i].style.display = "none" 
          }, 150)
        }
      }     
        
    }

  },[])
     
  return (   
    <div className="page">
      <Feature movie={trendings[6]} title={trendings[6].title} cover={trendings[6].cover} rating={trendings[6].rating} genre={trendings[6].genre} year={trendings[6].year} descript={trendings[6].descript} trailer={trendings[6].trailer} watchlist={trendings[6].watchlist} stars={trendings[6].stars}/>
      <div className="grid">
        <h1>Movies</h1>
        <div className="filterdiv">
          <h5><i class="fas fa-sliders-h"></i>Filters</h5>
          <small>Sort By:</small>
          <h6 onClick={sortTitle}>Title<i class="fas fa-angle-down"></i></h6>
          <h6 onClick={sortYear}>Year<i class="fas fa-angle-down"></i></h6> 
          <h6>Duration<i class="fas fa-angle-down"></i></h6>
          <h6>Rating<i class="fas fa-angle-down"></i></h6> 
          <h6>Genre<i class="fas fa-angle-down"></i></h6> 
          <span style={{opacity:'0.2'}}>|</span> 
          <h6 onClick={resetSort}>Reset</h6>  
          <small>Search :</small>
          <input type="text" placeholder="Search Movies..." className="moviessearch"/>
        </div>
        <div className="spacers"></div> 
        <div className="pagegrid">
          {movieresult} 
        </div>  
        <div className="spacer"></div>
      </div> 
    </div>   
  ) 
}

export default Movies