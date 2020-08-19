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
                    <i class="far fa-heart"></i>
                    <small><i class="fas fa-clock"></i>1:25</small>  
                </div>
                <i className="far fa-play-circle playbtn"></i>
            </div>     
        </div> 
    ) 
} 

export default MovieItem 