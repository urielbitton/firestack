import React, { useEffect } from 'react'

function Lightbox(props) { 

  useEffect(() => {
    const lightboxcont = document.querySelector('.lightboxcont')
    const lightbox = document.querySelector('.lightbox')
    const iframe = document.querySelector('iframe')

    lightboxcont.addEventListener("click", closeLightbox)
    lightbox.addEventListener("click", preventClose)
 
    function closeLightbox() {
      lightbox.style.transform = "scale(0.9)"
      setTimeout(() => {
        lightboxcont.style.opacity = "0"
      }, 50); 
      setTimeout(() => {   
        lightboxcont.style.display = "none"
        let source = iframe.src
        iframe.src = ""
        iframe.src = source
      }, 150);  
    }        
    function preventClose(e) {
      e.stopImmediatePropagation()
    }
    


  },[])  
  
  return (
    <div className="lightboxcont">
      <i className="close"></i>
      <div className="lightbox">
        <iframe src={"https://www.youtube.com/embed/"+props.trailer} title="trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div> 
  ) 
}
 
export default Lightbox