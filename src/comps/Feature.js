import React, {useContext, useEffect, useState} from 'react'
import Lightbox from './Lightbox'
import { MovieContext } from './MovieContext'
     

function Feature(props) {  

  const {populars, trendings, classics, general, tvs} = useContext(MovieContext)
  const notifcont = document.createElement('DIV')
  notifcont.classList.add('notifcont')
  useEffect(() => {
    const lightboxcont = document.querySelector('.lightboxcont')
    const lightbox = document.querySelector('.lightbox')
    const watchnowbtn = document.querySelector('.watchnowbtn')
    const watchlist = document.querySelector('.watchlist')
 
    watchnowbtn.onclick = () => {  
      lightboxcont.style.display = "flex"
      setTimeout(() => { 
        lightboxcont.style.opacity = "1"
        lightbox.style.transform = "scale(1)"
      }, 100);
    }  
      
  },[])     
  function addToWatchlist(e) { 
    window.scrollTo(0, 0)   
 
    trendings.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""})  
    populars.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""}) 
    classics.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""}) 
    general.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""})     
    tvs.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = true):""})   
    
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
    }, 5000)
    notifcont.onclick = () => {
        document.querySelector('.watchlistlink').click()
    } 
    e.target.querySelector('i').classList.remove("fas", "fa-plus")
    e.target.querySelector('i').classList.add("fas", "fa-check") 
    if(window.location.pathname === "/Watchlist") {
      document.querySelector('.homelink').click()
      setTimeout(() => {document.querySelector('.watchlistlink').click()}, 1);
    }
  }  
  function removeFromWatchlist(e) {  
    window.scrollTo(0, 0)  
    trendings.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = false):""})  
    populars.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = false):""}) 
    classics.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = false):""}) 
    general.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = false):""})     
    tvs.map((movie) => { return(movie.id === props.movie.id)?(props.movie.watchlist = false):""})       

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
    }, 5000)
    notifcont.onclick = () => {
        document.querySelector('.watchlistlink').click()
    } 
    e.target.querySelector('i').classList.remove("fas", "fa-check")
    e.target.querySelector('i').classList.add("fas", "fa-plus")
    if(window.location.pathname === "/Watchlist") {
      document.querySelector('.homelink').click()
      setTimeout(() => {document.querySelector('.watchlistlink').click()}, 1);
    }
  }   


  return ( 
    <>  
    <div className="feature">
      <div className="featurebg">
        <img className="featurecover" src={props.cover} alt="featimg"/>
      </div>
      <div className="grid">
        <i className="far fa-play-circle featureplaybtn"></i>
        <h1>{props.title}</h1>
        <small>
          { 
            Array.apply(null, { length: props.stars }).map((e, i) => (
              <i className="fas fa-star" key={i}></i>
            ))
          }
          {
            Array.apply(null, { length: 5-props.stars }).map((e, i) => (
              <i className="far fa-star" key={i}></i>
            ))
          }
          <span>{props.rating} ratings</span>
          <span>•</span>
          <span>{props.genre}</span>  
          <span>•</span> 
          <span>{props.year}</span>   
        </small> 
        <p className="featdescript">{props.descript}</p>
        <p className="starring">
          <span>Starring</span>
          { props.starring?(props.starring[0]):"" }, { props.starring?(props.starring[1]):"" }, { props.starring?(props.starring[2]):"" }
        </p>   
        <button className="watchnowbtn"><i className="far fa-play-circle"></i>Watch Now</button>
        <button className="watchlist" onClick={props.watchlist?removeFromWatchlist:addToWatchlist}><i className={props.watchlist?"fas fa-check":"fas fa-plus"}></i>{props.watchlist?"Added To Watchlist":"Add To Watchlist"}</button>
      </div>    
    </div>   
    <div className="spacer"></div>  
 
    <Lightbox trailer={props.trailer}/> 
  
    </>  
  ) 
}  

export default Feature