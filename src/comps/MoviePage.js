import React, {useState, useContext} from 'react'
import Feature from './Feature'
import { MovieContext } from './MovieContext'

function MoviePage(props) { 

  const {populars, trendings, classics} = useContext(MovieContext)
  const randnum = Math.round(Math.random() * 10000) + 1

  return (
    <div className="moviepage" re-route="moviepage">
      <Feature title={props.title} year={props.year} cover={props.cover} ratings={props.ratings} descript={props.descript}/>
      <div className="grid"> 
        <div className="onemoviegrid">
          <div className="oneimage">
            <img src={props.image} alt="movieimg"/>
            <small>IMDB: </small>
            <small>Views: {randnum}</small>
          </div>
          <div className="onemovieinfo">
            <h5>Synopsis<hr/></h5>
            <p>{props.descript}</p>
          </div>
          <div className="onemoviemedia">

          </div>
        </div>
      <br/>  
        
        
      </div>
    </div>  
  )
}

export default MoviePage