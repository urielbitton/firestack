import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'
import Page from './Page'

function Watchlist(props) {

  const {populars, trendings, classics, superheros, tvs, moviePage} = useContext(MovieContext)
  
  return (
    <>
      <Page openmovie={props.openMovie} router="watchlist" pagetitle="Watchlist" title={trendings[0].title} ratings={trendings[0].rating} image={trendings[0].cover} genre={trendings[0].genre} year={trendings[0].year} descript={trendings[0].descript}/>
    </>
  )  
}

export default Watchlist