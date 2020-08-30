import React, {useState, useContext} from 'react'
import Home from './Home'
import Page from './Page'
import MoviePage from './MoviePage'
import { MovieContext } from './MovieContext'

 
function HomeCont() {

  const {populars, trendings, classics, superheros, tvs, moviePage} = useContext(MovieContext)
  const [title, setTitle] = useState("")
  const [year, setYear] = useState(1900)
  const [image, setImage] = useState("")
  const [cover, setCover] = useState("")
  const [descript, setDescript] = useState("")
  const [rating, setRating] = useState(0)
  const [genre, setGenre] = useState("") 
  const [runtime, setRuntime] = useState("")
  const [starring, setStarring] = useState([])
  const [director, setDirector] = useState("")
  const [trailer, setTrailer] = useState("")

  //set movie page func 
  function openMovie(title, year, image, cover, descript, rating, genre, runtime, starring, director, trailer) {
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
  }   

  return (  
    <div className="homecont">  
      <Home openmovie={openMovie} trailer={trailer}/>
      <Page router="movies" pagetitle="Movies" title={trendings[6].title} ratings={trendings[6].rating} image={trendings[6].cover} genre={trendings[6].genre} year={trendings[6].year} descript={trendings[6].descript}/>
      <Page router="tvshows" pagetitle="TV Shows" title={tvs[0].title} ratings={tvs[0].rating} image={tvs[0].cover} genre={tvs[0].genre} year={tvs[0].year} descript={tvs[0].descript}/>
      <Page router="favorites" pagetitle="Favorites" title={superheros[0].title} ratings={superheros[0].rating} image={superheros[0].cover} genre={superheros[0].genre} year={superheros[0].year} descript={superheros[0].descript}/> 
      <Page router="watchlist" pagetitle="Watchlist" title={trendings[0].title} ratings={trendings[0].rating} image={trendings[0].cover} genre={trendings[0].genre} year={trendings[0].year} descript={trendings[0].descript}/>
      <Page router="settings" pagetitle="settings"/> 
      <MoviePage title={title} year={year} image={image} cover={cover} descript={descript} rating={rating} genre={genre} runtime={runtime} starring={starring} director={director} trailer={trailer}/>
    </div> 
  ) 
} 

export default HomeCont