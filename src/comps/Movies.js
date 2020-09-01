import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'
import Page from './Page'

function Movies() {

  const {populars, trendings, classics, superheros, moviePage} = useContext(MovieContext)

  return (
    <>
      <Page pagetitle="Movies" title={trendings[6].title} ratings={trendings[6].rating} image={trendings[6].cover} genre={trendings[6].genre} year={trendings[6].year} descript={trendings[6].descript}/>
    </>
  )
}

export default Movies 