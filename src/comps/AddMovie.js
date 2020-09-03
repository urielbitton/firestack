import React, { useContext, useState, useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { MovieContext } from './MovieContext'

function AddMovie() {
 
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")
  const [image, setImage] = useState("")
  const [cover, setCover] = useState("")
  const [descript, setDescript] = useState("")
  const [genre, setGenre] = useState("") 
  const [runtime, setRuntime] = useState("")
  const [watchlist, setWatchlist] = useState(false)
  const [favorite, setFavorite] = useState(false)
  const [starring, setStarring] = useState([""])
  const [director, setDirector] = useState([""])
  const [rating, setRating] = useState("")
  const [trailer, setTrailer] = useState("")
  const [imdblink, setImdblink] = useState("")
  const {general, setGeneral} = useContext(MovieContext)
    
  function updateTitle(e) {
    setTitle(e.target.value) 
  } 
  function updateYear(e) { 
    setYear(e.target.value)
  }
  function updateGenre(e) {
    setGenre(e.target.value)
  } 
  function uploadImg() {
    let file = document.querySelector('.uploadimg').files[0]
    let reader = new FileReader()
    reader.onloadend = () => {
      setImage(reader.result)  
    }
    if(file) { 
      reader.readAsDataURL(file)
    } 
  } 
  function uploadCover() {
    let file = document.querySelector('.uploadcover').files[0]
    let reader = new FileReader()
    reader.onloadend = () => {
      setCover(reader.result)
    }
    if(file) {
      reader.readAsDataURL(file)
    } 
  }
  function updateRuntime(e) {
    setRuntime(e.target.value)
  }
  function updatePlot(e) {
    setDescript(e.target.value)
  }
  function updateWatchlist(e) {
    (e.target.checked ? setWatchlist(true): setWatchlist(false))
  }
  function updateStarring(e) {
    setStarring(e.target.value)
  }
  function updateDirName(e) {
    setDirector(e.target.value)
  }
  function uploadDirector() {
    let file = document.querySelector('.uploaddirector').files[0]
    let reader = new FileReader()
    reader.onloadend = () => {
      setDirector(reader.result)
    }
    if(file) {
      reader.readAsDataURL(file)
    } 
  }
  function updateRating(e) {
    setRating(e.target.value)
  }
  function updateTrailer(e) {
    setTrailer(e.target.value)
  }
  function updateImdb(e) {
    setImdblink(e.target.value)
  } 

  function addAMovie() {
    setGeneral(prevGeneral => [...prevGeneral,{title: title, year: year,  genre: genre, image:image, cover:cover, runtime:runtime, descript:descript, watchlist:watchlist,starring:starring, director:director,rating:rating,trailer:trailer,imdblink:imdblink}])
  }    
  
  useEffect(() => {
    const addmoviecont = document.querySelector('.addmoviecont')
    const inputs = document.querySelectorAll('.addmoviecont input')
    const closeaddmovie = document.querySelector('.closeaddmovie')
    const addmovie = document.querySelector('.addmovie')
    closeaddmovie.onclick = () => {
      addmoviecont.style.opacity = ""
      addmovie.style.transform = ""
      setTimeout(() => {
        addmoviecont.style.display = ""
      }, 100)
      setTimeout(() => {
        document.body.style.overflowY = "scroll"
      }, 500);
    }
    const addtolibbtn = document.querySelector('.addtolibbtn')
    addtolibbtn.onclick = () => {
      closeaddmovie.click() 
      inputs.forEach(el => {
        el.value = ""
      })
    } 
    const moredetails = document.querySelector('.addmoviegrid > h6')
    const hiddeninputs = document.querySelectorAll('.addmoviegrid .hidden')
    let moreclick = false
    moredetails.onclick = () => {
      if(moreclick === false) {
        hiddeninputs.forEach(el => {
          el.style.display = "block"
        })
        setTimeout(() => {
          document.querySelector('.lastinp').scrollIntoView()
        }, 100);
        moreclick = true
      }
      else {
        hiddeninputs.forEach(el => {
          el.style.display = "none"
        })
        moreclick = false
      }
    }

  },[])   
 
  return ( 
    <div className="addmoviecont">
      <div className="closeaddmovie"></div>
      <div className="addmovie">
        <h4>Add A Movie or Tv Show</h4>
        <div className="inneraddmovie">
        <div className="addmoviegrid">
          <label><i class="fas fa-font"></i><input placeholder="Title" name="title" value={title} onChange={updateTitle}/></label>
          <label><i class="fab fa-500px"></i><input placeholder="Year" name="year" value={year} onChange={updateYear}/></label>
          <label><i class="fas fa-dna"></i><input placeholder="Genre" name="genre" value={genre} onChange={updateGenre}/></label>
          <label><i class="fas fa-file-image"></i><input class="uploadimg" type="file" placeholder="Image" onChange={uploadImg}/></label>
          <label><i class="fas fa-image"></i><input class="uploadcover" type="file" placeholder="Cover" onChange={uploadCover}/></label>
          <label><i class="far fa-clock"></i><input placeholder="Runtime" name="runtime" value={runtime} onChange={updateRuntime}/></label>
          <label><i class="fas fa-quote-left"></i><input placeholder="Plot" name="plot" value={descript} onChange={updatePlot}/></label>
          <label><i class="fas fa-list"></i><input type="checkbox" name="watchlist" value={watchlist} onChange={updateWatchlist}/><small>Add To Watchlist</small></label>
          <h6>More Details<i className="fas fa-angle-up"></i></h6>
          <label className="hidden"><i class="fas fa-user-friends"></i><input placeholder="Starring (Seperate by commas)" name="starring" value={starring} onChange={updateStarring}/></label>
          <label className="hidden"><i class="fas fa-chair"></i><input placeholder="Director Name" name="directorName" value={director.name} onChange={updateDirName}/></label>
          <label className="hidden"><i class="fas fa-chair"></i><input className="uploaddirector" type="file" placeholder="Director Image" name="directorPic" value={director.pic} onChange={uploadDirector}/></label>
          <label className="hidden"><i class="fas fa-star-half-alt"></i><input placeholder="Ratings" name="rating" value={rating} onChange={updateRating}/></label>
          <label className="hidden"><i class="fab fa-youtube"></i><input placeholder="Videos (Youtube. e.g: j1JRih9ifUE)" name="trailer" value={trailer} onChange={updateTrailer}/></label>
          <label className="hidden lastinp"><i class="fab fa-imdb"></i><input placeholder="IMDB Link" name="imdblink" value={imdblink} onChange={updateImdb}/></label>
        </div> 
        </div>
        {
          (watchlist === false)? 
          (<Link to="/"><button onClick={addAMovie} className="addtolibbtn"><i className="fas fa-plus"></i>Add To Library</button></Link>):
          (<Link to="/Watchlist"><button onClick={addAMovie} className="addtolibbtn"><i className="fas fa-plus"></i>Add To Library</button></Link>)
        } 
      </div> 
    </div>
  ) 
} 

export default AddMovie 