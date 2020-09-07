import React, {useEffect} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Search from './Search'
import AddMovie from './AddMovie';

function Navbar(props) {
   
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
    const mainsearch = document.querySelector('.mainsearch')
    function openSearch() {
      document.querySelector('.searchcont').style.display = "block"
        setTimeout(() => {
          document.querySelector('.searchcont').style.opacity = "1"
          document.querySelector('.searchcont').style.transform = "scale(1)"
        }, 100);
        setTimeout(() => {
          mainsearch.focus()
        }, 300);
        setTimeout(() => {
          document.body.style.overflowY = "hidden"
        }, 500);
    }

    const profile = document.querySelector('.profile')
    const profmenu = document.querySelector('.profmenu')
    profile.addEventListener('click', openProfile)
    function openProfile(e) {
      e.stopImmediatePropagation()
      profmenu.style.display = 'block'
      setTimeout(() => {
        profmenu.style.opacity = '1'
      }, 50);
    }  
    function closeProfile() {
      profmenu.style.opacity = '0'
      setTimeout(() => {
        profmenu.style.display = 'none'
      }, 50);
    }
    document.body.onclick = () => closeProfile()

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
    document.querySelectorAll('.page h1').forEach(el => el.style.color = "#eee")
    if(document.body.contains(document.querySelector('.accountpage'))) {
    document.querySelector('.accountcont').style.background = "#222"
    document.querySelectorAll('.accountcont input').forEach(el => el.style.cssText += "background:#333;border-color:#444;color:#ccc")
    document.querySelector('.accountsidebar').style.borderColor = "#333"
    }
    
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
    document.querySelectorAll('.page h1').forEach(el => el.style.color = "")
    if(document.body.contains(document.querySelector('.accountpage'))) {
    document.querySelector('.accountcont').style.background = ""
    document.querySelectorAll('.accountcont input').forEach(el => el.style.cssText += "background:#f7f7f7;border-color:#eee;color:#000")
    document.querySelector('.accountsidebar').style.borderColor = ""
    }
    
  }
  
  return (
    <>
    <nav>
      <div className="grid">
      <i className="fas fa-bars sidebtn"></i>

      <div className="menu">
        <Link to="/" className="homelink"><h6 className="activemenu"><i className="fas fa-home"></i>Home<hr/></h6></Link>
        <Link to="/Movies"><h6><i className="fas fa-film"></i>Movies<hr/></h6></Link>
        <Link to="/Tvs"><h6><i className="fas fa-tv"></i>TV Shows<hr/></h6></Link>
        <Link to="/Favorites" className="favoriteslink"><h6><i className="fas fa-heart"></i>Favorites<hr/></h6></Link>
        <Link to="/Watchlist" className="watchlistlink"><h6><i className="fas fa-list"></i>Watchlist<hr/></h6></Link>
      </div>
      <div className="profile">
        <img src="https://i.imgur.com/t9EHxct.png" alt="prof" />
        <i className="fas fa-angle-down"></i>
        <div className="profmenu">
          <Link to="/MyAccount"><h6><i class="far fa-user"></i>Account</h6></Link>
          <Link to="/MyAccount"><h6><i class="fas fa-sliders-h"></i>Preferences</h6></Link>
          <Link to="/MyAccount"><h6><i class="far fa-question-circle"></i>About Firestack</h6></Link>
          <Link to="/Watchlist"><h6><i class="fas fa-cog"></i>Settings</h6></Link>
        </div>
      </div>  
       
      <label>
      <input placeholder="Search" className="navsearch"/> 
      </label>
      <i className="fas fa-adjust darkmode"></i>
      <i className="fas fa-folder-plus addmoviebtn"></i>
    </div> 
    </nav>
    <div style={{height:'65px'}}></div>
    <Search openmovie={props.openmovie}/>
    <AddMovie />
    </>
  )
}

export default Navbar