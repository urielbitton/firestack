import React, {useEffect} from 'react'


function Navbar() {
  
  useEffect(() => {
    const menulink = document.querySelectorAll('nav h6')
    for(let item of menulink) {
      item.onclick = () => {
        for(let i=0;i<menulink.length;i++) {
          menulink[i].querySelector('hr').style.opacity = '0' 
          menulink[i].style.color = ''      
          menulink[i].classList.remove('activemenu') 
        }
        item.querySelector('hr').style.opacity = '1'
        item.classList.add('activemenu')
      } 
    }
    const darkmode = document.querySelector('.darkmode')
    darkmode.onclick = () => {
      darkMode();
    }

  },[])
   
  function darkMode() {
    document.querySelector('nav').style.background = '#111'
    document.querySelector('body').style.background = '#111'

  }

  return (
    <>
    <nav>
      <div className="grid">
      <i className="fas fa-bars sidebtn"></i>

      <div className="menu">
        <h6 className="activemenu" re-router="home"><i className="fas fa-home"></i>Home<hr/></h6>
        <h6 re-router="movies"><i className="fas fa-film"></i>Movies<hr/></h6>
        <h6 re-router="tvshows"><i className="fas fa-tv"></i>TV Shows<hr/></h6>
        <h6 re-router="favorites"><i className="fas fa-heart"></i>Favorites<hr/></h6>
        <h6 re-router="watchlist"><i className="fas fa-list"></i>Watchlist<hr/></h6>
      </div>
      <div className="profile">
        <img src="https://i.imgur.com/lUQll3N.png" alt="prof" />
      </div>
      
      <label>
      <input placeholder="Search"/>
      </label>
      <i class="fas fa-adjust darkmode"></i>
    </div>
    </nav>
    <div style={{height:'65px'}}></div>
    </>
  )
}

export default Navbar