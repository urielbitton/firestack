import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'
import Page from './Page'


function Tvs() {

  const {tvs} = useContext(MovieContext)

  return (
    <>
      <Page pagetitle="TV Shows" title={tvs[0].title} ratings={tvs[0].rating} image={tvs[0].cover} genre={tvs[0].genre} year={tvs[0].year} descript={tvs[0].descript}/>
    </>
  )
}

export default Tvs