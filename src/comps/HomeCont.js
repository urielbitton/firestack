import React from 'react'
import Home from './Home'
import Page from './Page'
import {TrendingMovies, TrendingTv, Superhero} from './MoviesApi'


function HomeCont() {
  return (  
    <div className="homecont"> 
      <Home />
      <Page router="movies" pagetitle="Movies" movietitle={TrendingMovies[6].title} ratings={TrendingMovies[6].rating} featimg={TrendingMovies[6].cover} genre={TrendingMovies[6].genre} year={TrendingMovies[6].year} descript={TrendingMovies[6].descript}/>
      <Page router="tvshows" pagetitle="TV Shows" movietitle={TrendingTv[0].title} ratings={TrendingTv[0].rating} featimg={TrendingTv[0].cover} genre={TrendingTv[0].genre} year={TrendingTv[0].year} descript={TrendingTv[0].descript}/>
      <Page router="favorites" pagetitle="Favorites" movietitle={Superhero[0].title} ratings={Superhero[0].rating} featimg={Superhero[0].cover} genre={Superhero[0].genre} year={Superhero[0].year} descript={TrendingTv[0].descript}/> 
      <Page router="watchlist" pagetitle="Watchlist" movietitle={TrendingMovies[0].title} ratings={TrendingMovies[0].rating} featimg={TrendingMovies[0].cover} genre={TrendingMovies[0].genre} year={TrendingMovies[0].year} descript={TrendingMovies[0].descript}/>
      <Page router="settings" pagetitle="settings"/> 
    </div> 
  )
} 

export default HomeCont