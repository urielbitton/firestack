import React from 'react'
import Feature from './Feature'

function MoviePage() {
  return (
    <div className="moviepage" re-route="moviepage">
      <Feature />
      <div className="grid">
        <h1>Single Movie Page</h1>
      </div>
    </div> 
  )
}

export default MoviePage