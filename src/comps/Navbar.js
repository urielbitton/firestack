import React, {useEffect} from 'react'


function Navbar() {
   
  useEffect(() => {
    const menulink = document.querySelectorAll('nav h6')
    const menuslide = document.querySelector('.menuslide')
    const menuclick = false
    for(let item of menulink) {
      item.onclick = () => {
        for(let i=0;i<menulink.length;i++) {
          menulink[i].querySelector('hr').style.opacity = '0' 
          menulink[i].style.color = ''      
          menulink[i].classList.remove('activemenu') 
          menuslide.style.top = '65px'
          menuclick = true 
        }
        item.querySelector('hr').style.opacity = '1'
        item.classList.add('activemenu')
      } 
    }

    const darkmode = document.querySelector('.darkmode')
    let darkclick = false

    darkmode.onclick = () => {
      if(darkclick === false) {
        darkMode()
        darkclick = true
      }
      else {
        undarkMode()
        darkclick = false
      }
       
    }

  },[]) 
   
  function darkMode() {
    document.querySelector('nav').style.background = '#111'
    document.querySelector('body').style.background = '#111'
    document.querySelectorAll('h6,p').forEach(el => el.style.color = "#aaa")
    document.querySelectorAll('h5').forEach(el => el.style.color = "#eee")
    document.querySelectorAll('small').forEach(el => el.style.color = "#777")
    document.querySelector('.sidebtn').style.color = '#aaa'
    document.querySelector('.menuslide').style.background = '#181818'
    document.querySelectorAll('h6 hr').forEach(el => el.style.background = "#aaa")
  }
  function undarkMode() {
    document.querySelector('nav').style.background = ''
    document.querySelector('body').style.background = ''
    document.querySelectorAll('h6,p').forEach(el => el.style.color = "")
    document.querySelectorAll('h5').forEach(el => el.style.color = "")
    document.querySelectorAll('small').forEach(el => el.style.color = "")
    document.querySelector('.sidebtn').style.color = ''
    document.querySelectorAll('h6 hr').forEach(el => el.style.background = "")
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
        <img src="https://i.imgur.com/t9EHxct.png" alt="prof" />
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