import React, {useState, useContext, useEffect} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from './Home'
import MoviePage from './MoviePage'
import { MovieContext } from './MovieContext'
import Movies from './Movies'
import Tvs from './Tvs'
import Favorites from './Favorites'
import Watchlist from './Watchlist'
import Settings from './Settings'
import Navbar from './Navbar'
import MenuSlide from "./MenuSlide";
import MyAccount from './MyAccount'
       
function HomeCont() {

  const {populars, trendings, classics, superheros, tvs, general, moviePage} = useContext(MovieContext)
  const [title, setTitle] = useState("")
  const [year, setYear] = useState(1900)
  const [image, setImage] = useState("")
  const [cover, setCover] = useState("") 
  const [descript, setDescript] = useState("")
  const [rating, setRating] = useState(0)
  const [genre, setGenre] = useState("") 
  const [runtime, setRuntime] = useState("")
  const [starring, setStarring] = useState(["","",""])
  const [director, setDirector] = useState(["",""])
  const [trailer, setTrailer] = useState("")
  const [pictures, setPictures] = useState(["","",""])
  const [imdblink, setImdblink] = useState("")
  const [watchlist, setWatchlist] = useState(false)
  const [stars, setStars] = useState(0)
 
  //set movie page func 
  function openMovie(title, year, image, cover, descript, rating, genre, runtime, starring, director, trailer, pictures, imdblink, watchlist, stars) {
    setTitle(title)
    setYear(year)
    setImage(image)
    setCover(cover)
    setDescript(descript)
    setRating(rating)
    setGenre(genre)
    setRuntime(runtime)
    setStarring(starring)
    setDirector(director) 
    setTrailer(trailer)
    setPictures(pictures)
    setImdblink(imdblink)
    setWatchlist(watchlist)
    setStars(stars)
    window.scrollTo(0, 0)
  }
 
   
  return (  
    <div className="homecont">  
      <Navbar openmovie={openMovie}/>
      <MenuSlide /> 
      <Switch>
        <Route exact path="/">
          <Home openmovie={openMovie} trailer={trailer} />
        </Route> 
        <Route path="/Movies">
          <Movies openmovie={openMovie} trailer={trailer} />
        </Route>          
        <Route path="/Tvs">
          <Tvs openmovie={openMovie} trailer={trailer}/> 
        </Route> 
        <Route path="/Favorites">
          <Favorites openmovie={openMovie} trailer={trailer} />
        </Route> 
        <Route path="/Watchlist">
          <Watchlist openmovie={openMovie} trailer={trailer} />
        </Route>  
        <Route path="/Settings"> 
          <Settings />
        </Route> 
        <Route path="/MoviePage">
          <MoviePage title={title} year={year} image={image} cover={cover} descript={descript} rating={rating} genre={genre} runtime={runtime} starring={starring} director={director} pictures={pictures} trailer={trailer} imdblink={imdblink} watchlist={watchlist} stars={stars} />
        </Route> 
        <Route path="/MyAccount">
          <MyAccount />
        </Route>
      </Switch> 
      
 
    </div> 
  )  
}  

export default HomeCont