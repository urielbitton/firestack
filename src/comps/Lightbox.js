import React from 'react'

function Lightbox(props) {
  return (
    <div className="lightbox">
      <iframe src={props.trailer} title="trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}
 
export default Lightbox