import React, {useContext} from 'react'
import Lightbox from './Lightbox'
import { MovieContext } from './MovieContext'

function Feature(props) {

  const {populars, trendings, classics} = useContext(MovieContext)

  return (
    <>  
    <div className="feature">
      <div className="featurebg">
        <img className="featurecover" src={props.cover} alt="featimg"/>
      </div>
      <div className="grid">
        <i class="far fa-play-circle featureplaybtn"></i>
        <h1>{props.title}</h1>
        <small>
          <i className="fas fa-star"></i> 
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i> 
          <i className="far fa-star"></i>
          <span>{props.rating} ratings</span>
          <span>•</span>
          <span>{props.genre}</span>
          <span>•</span>
          <span>{props.year}</span>
        </small>
        <p className="featdescript">{props.descript}</p>
        <p className="starring">
          <span>Starring</span>
          {props.starring} 
        </p>
        <button><i className="far fa-play-circle"></i>Watch Now</button>
        <button>Add To Watchlist</button>
      </div> 
    </div>
    <div className="spacer"></div>

    <Lightbox trailer={props.trailer}/>
    </>
  )
} 

export default Feature