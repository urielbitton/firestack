import React, { useEffect, useState } from 'react'

function Notifs(props) {

  useEffect(() => {
    const close = document.querySelector('.notifcont .close')
    const notifcont = document.querySelector('.notifcont')
    
    close.onclick = () => {
      notifcont.style.opacity = "0"
      notifcont.style.transform = "scale(0.9)"
      setTimeout(() => {
        notifcont.style.display = "none"
      }, 100);
    }      
  },[])   

  return (
    <div class="notifcont">
      <i class="fas fa-circle-notch"></i>
      <p></p>
      <i className="close"></i>
    </div>
  )
}

export default Notifs