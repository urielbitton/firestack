import React from 'react'

function MovieRow(props) {
    return (
        <>
        <h5 className="sectiontitle">{props.rowtitle}<hr/></h5>
         <div className="movierow">   
            <div className="innerrow">
                
                {props.films}
            </div>   
        </div>
        </>
    ) 
}   

export default MovieRow