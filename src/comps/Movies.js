import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'
import Feature from './Feature'


function Movies() {

  const {populars, trendings, classics, general} = useContext(MovieContext)

  return (  
    <div className="page watchlistpage">
      <Feature title={trendings[6].title} cover={trendings[6].cover} rating={trendings[6].ratings} genre={trendings[6].genre} year={trendings[6].year} descript={trendings[6].descript} trailer={trendings[6].trailer}/>
      <div className="grid">
        <h1>Movies</h1>
        <div className="spacer"></div> 

        <div className="spacer"></div>
      </div> 
    </div>   
  ) 
}

export default Movies