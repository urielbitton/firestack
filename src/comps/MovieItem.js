import React, {useContext, useEffect} from 'react'
import { MovieContext, MovieContextProvider } from './MovieContext'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
 
function MovieItem(props) {
 
    const {populars, trendings, classics, general, tvs, superheros} = useContext(MovieContext)
    const notifcont = document.createElement('DIV')
    notifcont.classList.add('notifcont')
 
    function watchListFuncs(e) {
        trendings.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""})  
        populars.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""}) 
        classics.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""}) 
        general.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""})     
        tvs.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""})
        superheros.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""}) 
        //drop notifications 
        notifcont.remove()
        notifcont.innerHTML = `<i class='fas fa-circle-notch'></i><p>${props.title} has been added to your watchlist.</p><i className='close'></i>`
        document.body.appendChild(notifcont)
        notifcont.style.display = "block"  
        setTimeout(() => {
            notifcont.style.cssText += "opacity:1;transform:scale(1);bottom:20px"         
        }, 100)
        setTimeout(() => {
            notifcont.style.cssText += "opacity:0;transform:scale(0.9);bottom:5px" 
            setTimeout(() => {
                notifcont.style.display = "block" 
                notifcont.remove()           
            }, 100) 
        }, 5000); 
        notifcont.onclick = () => {
            document.querySelector('.watchlistlink').click()
        } 
        e.target.classList.remove("fas", "fa-plus")
        e.target.classList.add("fas", "fa-check") 
        if(window.location.pathname === "/Watchlist") {
            document.querySelector('.homelink').click()
            setTimeout(() => {document.querySelector('.watchlistlink').click()}, 1);
        } 
    }    
    function removeWatchlist(e) {
        trendings.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = false):""})  
        populars.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = false):""}) 
        classics.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = false):""}) 
        general.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = false):""})     
        tvs.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = false):""})
        superheros.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = false):""}) 
        //drop notifications 
        notifcont.remove()
        notifcont.innerHTML = `<i class='fas fa-circle-notch'></i><p>${props.title} has been removed from your watchlist.</p><i className='close'></i>`
        document.body.appendChild(notifcont)
        notifcont.style.display = "block"  
        setTimeout(() => {
            notifcont.style.cssText += "opacity:1;transform:scale(1);bottom:20px"            
        }, 100) 
        setTimeout(() => {
            notifcont.style.cssText += "opacity:0;transform:scale(0.9);bottom:5px"    
            setTimeout(() => {
                notifcont.style.display = "block" 
                notifcont.remove()           
            }, 100)  
        }, 5000);
        notifcont.onclick = () => {
            document.querySelector('.watchlistlink').click()
        }   
        e.target.classList.remove("fas", "fa-check") 
        e.target.classList.add("fas", "fa-plus")
        if(window.location.pathname === "/Watchlist") {
            document.querySelector('.homelink').click()
            setTimeout(() => {document.querySelector('.watchlistlink').click()}, 1);
        }
    }  
    function favoritesFuncs(e) { 
        trendings.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = true):""}) 
        populars.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = true):""}) 
        classics.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = true):""}) 
        general.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = true):""}) 
        tvs.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = true):""}) 
        superheros.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = true):""})          
        //drop notifications
        notifcont.remove()
        notifcont.innerHTML = `<i class='fas fa-circle-notch'></i><p>${props.title} has been added to favorites.</p><i className='close'></i>`
        document.body.appendChild(notifcont)
        notifcont.style.display = "block"
        setTimeout(() => {
            notifcont.style.cssText += "opacity:1;transform:scale(1);bottom:20px"           
        }, 100)
        setTimeout(() => {
            notifcont.style.cssText += "opacity:0;transform:scale(0.9);bottom:5px" 
            setTimeout(() => {
                notifcont.style.display = "block"
                notifcont.remove()           
            }, 100)   
        }, 5000);
        notifcont.onclick = () => {
            document.querySelector('.favoriteslink').click()
        }
        e.target.classList.remove("far")
        e.target.classList.add("fas")
    }  
    function removeFavorites(e) { 
        trendings.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = false):""}) 
        populars.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = false):""}) 
        classics.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = false):""}) 
        general.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = false):""}) 
        tvs.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = false):""}) 
        superheros.map((movie) => { return(movie.id === props.movie.id)?(props.movie.favorite = false):""})          
        //drop notifications
        notifcont.remove()
        notifcont.innerHTML = `<i class='fas fa-circle-notch'></i><p>${props.title} has been removed from your favorites.</p><i className='close'></i>`
        document.body.appendChild(notifcont)
        notifcont.style.display = "block"
        setTimeout(() => {
            notifcont.style.cssText += "opacity:1;transform:scale(1);bottom:20px"         
        }, 100)
        setTimeout(() => {
            notifcont.style.cssText += "opacity:0;transform:scale(0.9);bottom:5px" 
            setTimeout(() => {
                notifcont.style.display = "block"
                notifcont.remove()           
            }, 100)   
        }, 5000);
        notifcont.onclick = () => {
            document.querySelector('.favoriteslink').click()
        }
        e.target.classList.remove("fas")
        e.target.classList.add("far")
        if(window.location.pathname === "/Favorites") {
            document.querySelector('.homelink').click()
            setTimeout(() => {document.querySelector('.favoriteslink').click()}, 0);
        }
        
    }    
     
    return (    
        <div className="item"> 
            <img src={props.image} alt="movie"/>
            <div className="boxcover"> 
            <Link to="/MoviePage"><i className="far fa-play-circle playbtn" onClick={() => props.openmovie(props.title, props.year, props.image, props.cover, props.descript, props.rating, props.genre, props.runtime, props.starring, props.director, props.trailer, props.pictures, props.imdblink, props.watchlist)}></i></Link>
                <div className="boxinfo">
                    <h4>{props.title}</h4>
                    <h5>{props.year}</h5>   
                    <i className={props.watchlist?"fas fa-check":"fas fa-plus"}
                    onClick={!props.watchlist?watchListFuncs:removeWatchlist}></i> 
                    <i className={props.favorite?"fas fa-heart":"far fa-heart"} 
                    onClick={!props.favorite?favoritesFuncs:removeFavorites}></i>
                    <small><i className="fas fa-clock"></i><span>{props.runtime}</span></small>  
                    <small><i class="fab fa-imdb"></i><span>{props.rate}</span></small>
                </div>   
            </div>     
        </div>   
    )   
}       
 
export default MovieItem 