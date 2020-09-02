import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
 
function MovieItem(props) {

    const {populars, trendings, classics} = useContext(MovieContext)

    function addToWatchlist() {
        window.scrollTo(0, 0)
        trendings.map((movie) => {
            if (movie.id === props.movie.id) {
                props.movie.watchlist = true;
            }   
            return    
        })             
    } 
    function addToFav() {
        window.scrollTo(0, 0)
        trendings.map((movie) => {
            if (movie.id === props.movie.id) {
                props.movie.favorite = true;
            }   
            return   
        })            
    }
      
    return (  
        <div className="item"> 
            <img src={props.image} alt="movie"/>
            <div className="boxcover"> 
            <Link to="/MovieItem"><i className="far fa-play-circle playbtn" onClick={() => props.openmovie(props.title, props.year, props.image, props.cover, props.descript, props.rating, props.genre, props.runtime, props.starring, props.director, props.trailer, props.pictures, props.imdblink)}></i></Link>
                <div className="boxinfo">
                    <h4>{props.title}</h4>
                    <h5>{props.year}</h5>   
                    <Link to="/Watchlist"><i className="fas fa-plus"
                    onClick={addToWatchlist} 
                    ></i>
                    </Link> 
                    <Link to="/Favorites"><i className="far fa-heart" 
                    onClick={addToFav}></i>
                    </Link>
                    <small><i className="fas fa-clock"></i>{props.runtime}</small>  
                </div>
            </div>     
        </div>   
    )   
}       
 
export default MovieItem 