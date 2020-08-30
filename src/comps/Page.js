import React from 'react'
import Feature from './Feature'

function Page(props) {
  return (
    <div className="page" re-route={props.router}>
      <Feature title={props.title} cover={props.image} ratings={props.ratings} genre={props.genre} year={props.year} descript={props.descript}/>
      <div className="grid">
        <h1>{props.pagetitle}</h1>
      </div> 
    </div>   
  ) 
} 

export default Page