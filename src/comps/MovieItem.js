import React from 'react'

function MovieItem(props) {
    
    return (
        <div className="item">
            <img src={props.image} alt="movie"/>
            <div className="boxcover">
                <div className="boxinfo">
                    <h4>{props.title}</h4>
                    <h5>{props.year}</h5>   
                    <i className="fas fa-plus"></i>  
                    <i className="far fa-heart"></i>
                    <small><i className="fas fa-clock"></i>{props.runtime}</small>  
                </div>
                <i className="far fa-play-circle playbtn" re-router="moviepage"></i>
            </div>     
        </div> 
    ) 
} 

export default MovieItem 