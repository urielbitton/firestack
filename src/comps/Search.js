import React, {useEffect, useContext} from 'react' 
import { MovieContext } from './MovieContext'
import MovieItem from './MovieItem'

function Search(props) {  
   
  const {populars, trendings, classics, tvs, general, superheros} = useContext(MovieContext)

  const rowtrendings = trendings.map(movie => {
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} watchlist={movie.watchlist} favorite={movie.favorite} rate={movie.rate?movie.rate.toFixed(1):""} key={movie.id} />
      </div>  
    )
  })
  const rowpopulars = populars.map(movie => {
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} watchlist={movie.watchlist} favorite={movie.favorite} rate={movie.rate?movie.rate.toFixed(1):""} key={movie.id} />
      </div>  
    )
  })
  const rowclassics = classics.map(movie => {
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} watchlist={movie.watchlist} favorite={movie.favorite} rate={movie.rate?movie.rate.toFixed(1):""} key={movie.id} />
      </div>  
    )
  })
  const rowgeneral = general.map(movie => {
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} watchlist={movie.watchlist} favorite={movie.favorite} rate={movie.rate?movie.rate.toFixed(1):""} key={movie.id} />
      </div>  
    )
  })
  const rowtvs = tvs.map(movie => {
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} watchlist={movie.watchlist} favorite={movie.favorite} rate={movie.rate?movie.rate.toFixed(1):""} key={movie.id} />
      </div>  
    )
  })
  const rowsuperheros = superheros.map(movie => {
    return (  
      <div className="box">
        <MovieItem movie={movie} openmovie={props.openmovie} title={movie.title} year={movie.year} image={movie.image} cover={movie.cover} descript={movie.descript} rating={movie.rating} genre={movie.genre} runtime={movie.runtime} starring={movie.starring} director={movie.director} trailer={movie.trailer} pictures={movie.pictures} imdblink={movie.imdblink} watchlist={movie.watchlist} favorite={movie.favorite} rate={movie.rate?movie.rate.toFixed(1):""} key={movie.id} />
      </div>  
    )
  })
  
  useEffect(() => {
    document.querySelector('.searchcont .close').addEventListener("click", closeSearch)
    function closeSearch() {
        document.querySelector('.searchcont').style.opacity = "0"
        document.querySelector('.searchcont').style.transform = "scale(0.9)"
        setTimeout(() => {
          document.querySelector('.searchcont').style.display = "none"
        }, 100);
        setTimeout(() => {
          document.body.style.overflowY = "scroll"
        }, 200);
    }
    const item = document.querySelectorAll('.box .playbtn')
    item.forEach(el => {
      el.onclick = () => {
        setTimeout(() => {
          document.querySelector('.searchcont .close').click()
        }, 100);
      }
    })
    //global search filter    
    const mainsearch = document.querySelector('.mainsearch')
    const box = document.querySelectorAll('.searchgrid .box')
    mainsearch.addEventListener('keyup', searchMovies)
 
    function searchMovies() {
      let filter, title, txtValue
      filter = mainsearch.value.toUpperCase()
      
      for (let i = 0; i < box.length; i++) {
        title = box[i].getElementsByTagName("h4")[0]
        txtValue = title.textContent || title.innerText
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          box[i].style.display = "block"
          setTimeout(() => {
            box[i].style.opacity = "1"
            box[i].style.transform = "scale(1)"
          }, 150);
          document.querySelector(".emptymsg").style.display = "none"
        }  
        else { 
          box[i].style.opacity = ""
          box[i].style.transform = ""
          setTimeout(() => {
            box[i].style.display = "" 
          }, 150);
        }
      }    
      if(filter === null || filter === "") {
        box.forEach(el => {
          el.style.opacity = ""
          el.style.transform = ""
          setTimeout(() => {
            el.style.display = ""
          }, 150);
        }) 
        document.querySelector(".emptymsg").style.display = "block"
      }
        
    }     
    

  },[])  
  
  return (
    <div className="searchcont">
      <i className="close"></i>
      <input type="text" className="mainsearch" placeholder="Find a title..."/>
      <div className="spacer"></div>
      <div className="searchgrid">
        <h4 className="emptymsg">No titles have been found.</h4>
        {rowtrendings}
        {rowpopulars}
        {rowclassics}
        {rowgeneral}
        {rowtvs} 
        {rowsuperheros}
      </div>
    </div>
  ) 
}
 
export default Search 