import React, {useState} from 'react'
import Feature from './Feature'

function MoviePage(props) { 

  return (
    <div className="moviepage" re-route="moviepage">
      <Feature />
      <div className="grid">
        {props.title}<br/>{props.year}
        
      </div>
    </div>  
  )
}

export default MoviePage