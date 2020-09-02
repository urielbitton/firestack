import React, { useContext, useState, useEffect } from 'react'
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
    let file = document.querySelector('.uploadimg')[0].files
    let reader = new FileReader()
    reader.onloadend = () => {
      setImage(reader.result)
    }
    if(file) {
      reader.readAsDataURL(file);
    } 
  } 
  function uploadCover() {
    let file = document.querySelector('.uploadcover')[0].files
    let reader = new FileReader()
    reader.onloadend = () => {
      setCover(reader.result)
    }
    if(file) {
      reader.readAsDataURL(file);
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
  function addAMovie() {
    setGeneral(prevGeneral => [...prevGeneral,{title: title, year: year,  genre: genre, image:image, cover:cover, runtime:runtime, descript:descript, watchlist:watchlist}])
  }   
  
  useEffect(() => {
    const addmoviecont = document.querySelector('.addmoviecont')
    const closeaddmovie = document.querySelector('.closeaddmovie')
    const addmovie = document.querySelector('.addmovie')
    closeaddmovie.onclick = () => {
      addmoviecont.style.opacity = ""
      addmovie.style.transform = ""
      setTimeout(() => {
        addmoviecont.style.display = ""
      }, 100);
    }
    const addtolibbtn = document.querySelector('.addtolibbtn')
    addtolibbtn.onclick = () => {
      closeaddmovie.click() 
    } 
  
  },[])   
 
  return ( 
    <div className="addmoviecont">
      <div className="closeaddmovie"></div>
      <div className="addmovie">
        <h4>Add A Movie or Tv Show</h4>
        <div className="addmoviegrid">
          <label><i class="fas fa-font"></i><input placeholder="Title" name="title" value={title} onChange={updateTitle}/></label>
          <label><i class="fab fa-500px"></i><input placeholder="Year" name="year" value={year} onChange={updateYear}/></label>
          <label><i class="fas fa-dna"></i><input placeholder="Genre" name="genre" value={genre} onChange={updateGenre}/></label>
          <label><i class="fas fa-file-image"></i><input class="uploadimg" type="file" placeholder="Image" onChange={uploadImg}/></label>
          <label><i class="fas fa-image"></i><input class="uploadcover" type="file" placeholder="Cover" onChange={uploadCover}/></label>
          <label><i class="far fa-clock"></i><input placeholder="Runtime" name="runtime" value={runtime} onChange={updateRuntime}/></label>
          <label><i class="fas fa-quote-left"></i><input placeholder="Plot" name="plot" value={descript} onChange={updatePlot}/></label>
          <label><i class="fas fa-list"></i><input type="checkbox" name="watchlist" value={watchlist} onChange={updateWatchlist}/><small>Add To Watchlist</small></label>
        </div>
        <button onClick={addAMovie} className="addtolibbtn"><i className="fas fa-plus"></i>Add To Library</button>
      </div>
    </div>
  )
}

export default AddMovie