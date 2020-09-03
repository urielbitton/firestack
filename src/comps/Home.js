import React, {useState, useContext, useEffect} from 'react'
import MovieItem from './MovieItem'
import MovieRow from './MovieRow'
import Feature from './Feature'
import { MovieContext } from './MovieContext'
import MoviePage from './MoviePage'
 
    
function Home(props) {  
    
  const {populars, trendings, classics, tvs, general, superheros} = useContext(MovieContext)

  const rowtrendings = trendings.map(movie => { 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} key={movie.id} />
      </div>  
    )  
  }) 
  const rowpopulars = populars.map(movie => {  
    return (
      <div className="box">
         <MovieItem movie={movie} openmovie={props.openmovie} addtowatch={props.addtowatch} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} key={movie.id} />
      </div>
    )
  }) 
  const rowtvs = tvs.map(movie => {
    return (
      <div className="box">
         <MovieItem movie={movie} openmovie={props.openmovie} addtowatch={props.addtowatch} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} key={movie.id} />
      </div>
    ) 
  }) 
  const rowgeneral = general.map(movie => { 
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} addtowatch={props.addtowatch} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} key={movie.id} />
      </div>  
    )  
  }) 
  const rowclassics = classics.map(movie => {
    return (
      <div className="box">
          <MovieItem movie={movie} openmovie={props.openmovie} addtowatch={props.addtowatch} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} key={movie.id} />
      </div>
    ) 
  }) 
  const rowsuperheros = superheros.map(movie => {
    return (
      <div className="box">
         <MovieItem movie={movie} openmovie={props.openmovie} addtowatch={props.addtowatch} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} key={movie.id} />
      </div>
    ) 
})    

  useEffect(() => {
    const rows = document.querySelectorAll('.innerrow') 
    rows.forEach(el => {
      const boxnum = el.querySelectorAll('.box').length
      el.style.width = setRowWidth(boxnum)
    })
    function setRowWidth(boxnum) {
      return (boxnum*270)+"px"
    }
  },[]) 
  const randnum = Math.floor(Math.random() * 9) + 0; 

  return ( 
    <div className="home">  

        <Feature movie={trendings[randnum]} title={trendings[randnum].title} cover={trendings[randnum].cover} rating={trendings[randnum].rating} descript={trendings[randnum].descript} genre={trendings[randnum].genre} year={trendings[randnum].year} trailer={trendings[randnum].trailer} watchlist={trendings[randnum].watchlist}/>
        <div className="grid">
 
        <MovieRow films={rowtrendings} rowtitle="Trending Movies" />
          <div className="clear"></div>
        <MovieRow films={rowpopulars} rowtitle="Popular Movies" />
          <div className="clear"></div>
        <MovieRow films={rowgeneral} rowtitle="Movies" />
          <div className="clear"></div>   
        <MovieRow films={rowtvs} rowtitle="Tv Shows" />
          <div className="clear"></div>   
        <MovieRow films={rowclassics} rowtitle="Classics" />
          <div className="clear"></div>
        <MovieRow films={rowsuperheros} rowtitle="Superhero" />
          <div className="clear"></div>
        
      </div> 
    </div>  
  )
} 

export default Home 