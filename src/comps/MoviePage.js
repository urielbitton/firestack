import React, {useContext, useState} from 'react'
import Feature from './Feature'
import {MovieContext} from './MovieContext'

function MoviePage(props) {

  const [movies, setMovies] = useContext(MovieContext)  

  return (
    <div className="moviepage" re-route="moviepage">
      <Feature />
      <div className="grid">
        Single Movie  
      </div>
    </div> 
  )
}

export default MoviePage