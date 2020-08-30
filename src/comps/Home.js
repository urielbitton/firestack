import React, {useState, useContext} from 'react'
import MovieItem from './MovieItem'
import MovieRow from './MovieRow'
import Feature from './Feature'
import { MovieContext } from './MovieContext'
import MoviePage from './MoviePage'

 
function Home(props) {  
   
  const {populars, trendings, classics} = useContext(MovieContext)

  const rowtrendings = trendings.map(movie => { 
    return (  
      <div className="box">
        <MovieItem title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} key={movie.id} openmovie={props.openmovie} />
      </div>  
    )  
  }) 

  const rowpopulars = populars.map(movie => {  
    return (
      <div className="box">
         <MovieItem title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} key={movie.id} openmovie={props.openmovie} />
      </div>
    )
  }) 

  const rowclassics = classics.map(movie => {
      return (
        <div className="box">
           <MovieItem title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} key={movie.id} openmovie={props.openmovie} />
        </div>
      )
  })   

  const randnum = Math.floor(Math.random() * 9) + 0; 

  return ( 
    <div className="home" re-route="home"> 

        <Feature title={trendings[randnum].title} cover={trendings[randnum].cover} rating={trendings[randnum].rating} descript={trendings[randnum].descript} genre={trendings[randnum].genre} year={trendings[randnum].year}/>
        <div className="grid">
 
        <MovieRow films={rowtrendings} rowtitle="Trending Movies" />
          <div className="clear"></div>
        <MovieRow films={rowpopulars} rowtitle="Popular Movies" />
          <div className="clear"></div>
        <MovieRow films={rowclassics} rowtitle="Classics" />
          <div className="clear"></div>
        
      </div>  
    </div>
  )
}

export default Home 