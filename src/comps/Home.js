import React from 'react'
//import Content from './Content'
import { PopularMovies, TrendingMovies, ClassicMovies } from './MoviesApi'
import MovieItem from './MovieItem'
import MovieRow from './MovieRow'
import Feature from './Feature'

function Home() {

  const populars = PopularMovies.map(movie => {
    return (
      <div className="box">
        <MovieItem title={movie.title} year={movie.year} image={movie.image} key={movie.id}  />
      </div>
    )
  }) 

  const classics = ClassicMovies.map(movie => {
      return (
        <div className="box">
          <MovieItem title={movie.title} year={movie.year} image={movie.image} key={movie.id}  />
        </div>
      )
  })  

  const trending = TrendingMovies.map(movie => {
    return ( 
      <div className="box">
        <MovieItem title={movie.title} year={movie.year} image={movie.image} key={movie.id}  />
      </div>
    ) 
}) 

const randnum = Math.floor(Math.random() * 8) + 0; 

  return ( 
    <div className="home" re-route="home"> 

      <Feature movietitle={TrendingMovies[randnum].title} featimg={TrendingMovies[randnum].cover} ratings={TrendingMovies[randnum].rating} descript={TrendingMovies[randnum].descript} genre={TrendingMovies[randnum].genre} year={TrendingMovies[randnum].year}/>
      <div className="grid">
 
        <MovieRow films={trending} rowtitle="Trending Movies"/>
          <div className="clear"></div>
        <MovieRow films={populars} rowtitle="Popular Movies"/>
          <div className="clear"></div>
        <MovieRow films={classics} rowtitle="Classics"/>
          <div className="clear"></div>
        
      </div> 
    </div>
  )
}

export default Home