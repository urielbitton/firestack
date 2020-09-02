import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { MovieContext } from './MovieContext'
import Feature from './Feature'

 
function Tvs(props) {

  const {tvs} = useContext(MovieContext)

  function addToWatchlist() {
    window.scrollTo(0, 0)
    tvs.map((movie) => {
        if (movie.id === props.movie.id) {
            props.movie.watchlist = true;
        }    
        return    
    })              
  }

  return (  
    <div className="page watchlistpage">
      <Feature title={tvs[1].title} cover={tvs[1].cover} rating={tvs[1].ratings} genre={tvs[1].genre} year={tvs[1].year} descript={tvs[1].descript} trailer={tvs[1].trailer}/>
      <div className="grid">
        <h1>Tv Shows</h1>
        <div className="spacer"></div> 
        {
          tvs.map(tv => {
            return (
              <div className="box">
                <div className="item"> 
                    <img src={tv.image} alt="movie"/>
                    <div className="boxcover">
                        <div className="boxinfo">
                            <h4>{tv.title}</h4>
                            <h5>{tv.year}</h5>   
                            <i class="fas fa-plus" onClick={addToWatchlist}></i> 
                            <i className="far fa-heart"></i>
                            <small><i className="fas fa-clock"></i>{tv.runtime}</small>  
                        </div>
                        <Link to="/MovieItem"><i className="far fa-play-circle playbtn" onClick={() => props.openmovie(tv.title, tv.year, tv.image, tv.cover, tv.descript, tv.rating, tv.genre, tv.runtime, tv.starring, tv.director, tv.trailer, tv.pictures, tv.imdblink)}></i></Link>
                    </div>     
                </div>   
                </div> 
            )
          })
        }
        <div className="spacer"></div>
      </div> 
    </div>   
  )  
}

export default Tvs