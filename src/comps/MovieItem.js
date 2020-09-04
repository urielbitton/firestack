import React, {useContext, useEffect} from 'react'
import { MovieContext, MovieContextProvider } from './MovieContext'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
 
function MovieItem(props) {
 
    const {populars, trendings, classics, general, tvs, superheros} = useContext(MovieContext)
    const movietitle = props.title
    const notifcont = document.createElement('DIV')
    notifcont.classList.add('notifcont')

    function watchListFuncs() {
        trendings.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""})  
        populars.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""}) 
        classics.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""}) 
        general.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""})     
        tvs.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""})
        superheros.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""}) 
        //drop notifications
        notifcont.remove()
        notifcont.innerHTML = "<i class='fas fa-circle-notch'></i><p>"+movietitle+" has been added to your watchlist.</p><i className='close'></i>"
        document.body.appendChild(notifcont)
        notifcont.style.display = "block" 
        setTimeout(() => {
            notifcont.style.opacity = "1"
            notifcont.style.transform = "scale(1)"         
        }, 100)
        setTimeout(() => {
            notifcont.style.opacity = ""
            notifcont.style.transform = "" 
            setTimeout(() => {
                notifcont.style.display = "block"
                notifcont.remove()           
            }, 100) 
        }, 5000); 
    }    
    function favoritesFuncs() { 
        trendings.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = true):""}) 
        populars.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = true):""}) 
        classics.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = true):""}) 
        general.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = true):""}) 
        tvs.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = true):""}) 
        superheros.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = true):""})          
        //drop notifications
        notifcont.remove()
        notifcont.innerHTML = "<i class='fas fa-circle-notch'></i><p>"+movietitle+" has been added to favorites.</p><i className='close'></i>"
        document.body.appendChild(notifcont)
        notifcont.style.display = "block"
        setTimeout(() => {
            notifcont.style.opacity = "1"
            notifcont.style.transform = "scale(1)"         
        }, 100)
        setTimeout(() => {
            notifcont.style.opacity = ""
            notifcont.style.transform = "" 
            setTimeout(() => {
                notifcont.style.display = "block"
                notifcont.remove()           
            }, 100)  
        }, 5000);
    }  
   
    return (    
        <div className="item"> 
            <img src={props.image} alt="movie"/>
            <div className="boxcover"> 
            <Link to="/MovieItem"><i className="far fa-play-circle playbtn" onClick={() => props.openmovie(props.title, props.year, props.image, props.cover, props.descript, props.rating, props.genre, props.runtime, props.starring, props.director, props.trailer, props.pictures, props.imdblink)}></i></Link>
                <div className="boxinfo">
                    <h4>{props.title}</h4>
                    <h5>{props.year}</h5>   
                    <i className={props.watchlist?"fas fa-check":"fas fa-plus"}
                    onClick={!props.watchlist?watchListFuncs:""}></i> 
                    <i className={props.favorite?"fas fa-heart":"far fa-heart"} 
                    onClick={!props.favorite?favoritesFuncs:""}></i>
                    <small><i className="fas fa-clock"></i><span>{props.runtime}</span></small>  
                    <small><i class="fab fa-imdb"></i><span>{props.rate}</span></small>
                </div>   
            </div>     
        </div>   
    )   
}       
 
export default MovieItem 