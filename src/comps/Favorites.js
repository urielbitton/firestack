import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'
import Page from './Page'

function Favorites() {
 
  const {populars, trendings, classics, superheros, tvs, moviePage} = useContext(MovieContext)

  return (
    <>
       <Page pagetitle="Favorites" title={superheros[0].title} ratings={superheros[0].rating} image={superheros[0].cover} genre={superheros[0].genre} year={superheros[0].year} descript={superheros[0].descript}/>
    </>
  )
}

export default Favorites