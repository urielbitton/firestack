import React, {useState, useContext} from 'react'
import Feature from './Feature'
import { MovieContext } from './MovieContext'

function MoviePage(props) {  

  const {populars, trendings, classics} = useContext(MovieContext)
  const randnum = Math.round(Math.random() * 10000) + 1

  return ( 
    <div className="moviepage" re-route="moviepage">
      <Feature title={props.title} year={props.year} cover={props.cover} rating={props.rating} genre={props.genre} descript={props.descript} starring={props.starring.join(", ")} director={props.director} trailer={props.trailer}/>
      <div className="grid"> 
        <div className="onemoviegrid">
          <div className="oneimage">
            <img src={props.image} alt="movieimg"/>
            <small>IMDB: {props.title}</small>
            <small>Views: {randnum}</small>
          </div>
          <div className="onemovieinfo">
            <h5>Synopsis<hr/></h5>
            <p>{props.descript}</p>
            <h5>Starring<hr/></h5>
            { 
              props.starring.map(el => {
                return <h6><img src="https://i.imgur.com/t9EHxct.png" alt="actor"/>{el}</h6>
              })
            }
            <div className="clear"></div>
            <div className="spacer"></div>
            <h5>Director</h5>
            <h6><img src={props.director.pic} alt="director" />{props.director.name}</h6>
          </div>
          <div className="onemoviemedia">
            <h5>Videos</h5>
            <iframe src={props.trailer} title="trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      <br/>    
        
        
      </div>
    </div>  
  )
}

export default MoviePage