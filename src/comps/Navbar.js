import React, {useEffect} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Search from './Search'
import AddMovie from './AddMovie';

function Navbar() {
   
  useEffect(() => { 
    const menulink = document.querySelectorAll('nav .menu > a')
    const menuslide = document.querySelector('.menuslide')
    let menuclick = false 
    for(let item of menulink) {
      item.onclick = () => {
        for(let i=0;i<menulink.length;i++) {
          menulink[i].querySelector('hr').style.opacity = '0' 
          menulink[i].style.color = ''      
          menulink[i].classList.remove('activemenu') 
          menuslide.style.top = ''
          menuclick = false 
        }
        item.querySelector('hr').style.opacity = '1'
        item.classList.add('activemenu')
        window.scrollTo(0,0)
      } 
    }

    const addmoviebtn = document.querySelector('.addmoviebtn')
    const addmoviecont = document.querySelector('.addmoviecont')
    const addmovie = document.querySelector('.addmovie')
    addmoviebtn.onclick = () => {
      addmoviecont.style.display = "flex"
      setTimeout(() => {
        addmoviecont.style.opacity = "1"
        addmovie.style.transform = "scale(1)"
      }, 100); 
      setTimeout(() => {
        document.body.style.overflowY = "hidden"
      }, 500);
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
    document.querySelector('.navsearch').addEventListener("click", openSearch)
    function openSearch() {
      document.querySelector('.searchcont').style.display = "block"
        setTimeout(() => {
          document.querySelector('.searchcont').style.opacity = "1"
          document.querySelector('.searchcont').style.transform = "scale(1)"
        }, 100);
        setTimeout(() => {
          document.body.style.overflowY = "hidden"
        }, 500);
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
    document.querySelector('.menuslide').style.background = ''
    document.querySelectorAll('h6 hr').forEach(el => el.style.background = "")
  }

  return (
    <>
    <nav>
      <div className="grid">
      <i className="fas fa-bars sidebtn"></i>

      <div className="menu">
        <Link to="/"><h6 className="activemenu"><i className="fas fa-home"></i>Home<hr/></h6></Link>
        <Link to="/Movies"><h6><i className="fas fa-film"></i>Movies<hr/></h6></Link>
        <Link to="/Tvs"><h6><i className="fas fa-tv"></i>TV Shows<hr/></h6></Link>
        <Link to="/Favorites"><h6><i className="fas fa-heart"></i>Favorites<hr/></h6></Link>
        <Link to="/Watchlist"><h6><i className="fas fa-list"></i>Watchlist<hr/></h6></Link>
      </div>
      <div className="profile">
        <img src="https://i.imgur.com/t9EHxct.png" alt="prof" />
      </div>
      
      <label>
      <input placeholder="Search" className="navsearch"/> 
      </label>
      <i className="fas fa-adjust darkmode"></i>
      <i className="fas fa-folder-plus addmoviebtn"></i>
    </div> 
    </nav>
    <div style={{height:'65px'}}></div>
    <Search />
    <AddMovie />
    </>
  )
}

export default Navbar