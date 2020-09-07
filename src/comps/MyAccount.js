import React, { useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function MyAccount() {

  useEffect(() => {
    const taber = document.querySelectorAll('[re-taber]')
    const tab = document.querySelectorAll('[re-tab]')
    const activetab = document.querySelector('.activetab')

    taber.forEach(el1 => {
      el1.onclick = () => {
        let tabselector = el1.getAttribute('re-taber')
        tab.forEach(el2 => {
          el2.style.display = 'none' 
          setTimeout(() => {
            el2.style.opacity = '0'
          }, 50); 
        }) 
        taber.forEach(el3 => el3.classList.remove('activetab'))
        document.querySelector(`[re-tab="${tabselector}"]`).style.display = 'block'
        el1.classList.add('activetab')
        setTimeout(() => {
          document.querySelector(`[re-tab="${tabselector}"]`).style.opacity = '1'
        }, 50);
      }
    })   
    document.querySelectorAll('.accountinfo .forms input').forEach(el => el.setAttribute('autocomplete','new-password') )
     
  },[])  

  const notifcont = document.createElement('DIV')
  notifcont.classList.add('notifcont')

  function dropNotif() {
    notifcont.remove()
        notifcont.innerHTML = `<i class="fas fa-sliders-h"></i><p>Your account settings have been saved successfully.</p><i className='close'></i>`
        document.body.appendChild(notifcont)
        notifcont.style.display = "block"  
        setTimeout(() => {
            notifcont.style.cssText += "opacity:1;transform:scale(1);bottom:20px"         
        }, 100)
        setTimeout(() => {
            notifcont.style.cssText += "opacity:0;transform:scale(0.9);bottom:5px" 
            setTimeout(() => {
                notifcont.style.display = "block" 
                notifcont.remove()           
            }, 100) 
        }, 5000); 
  }
 
  return (
    <div className="accountpage">
      <div className="spacer"></div>
      <div className="grid">
        <div className="accountcont">
          <div className="accountsidebar">
            <h4>My Account</h4>
            <div className="accountnav">
              <h6 re-taber="account" className="activetab"><i class="far fa-user"></i>Account</h6>
              <h6 re-taber="preferences"><i class="fas fa-sliders-h"></i>Preferences</h6>
              <h6 re-taber="about"><i class="far fa-question-circle"></i>About Firestack</h6>
              <h6 re-taber="connects"><i class="fas fa-plug"></i>Connects</h6>
            </div>
            <small>Firestack app<span>&copy; <a href="https://flexrweb.com" target="_blank" rel="noopener noreferrer">Helix Designs</a></span></small>
          </div> 
          <div className="accountinfo">
            <div re-tab="account">
              <h4>Account</h4>
              <div className="imgcont">
                <img src="https://i.imgur.com/t9EHxct.png" alt="prof" />
                <i class="fas fa-camera"></i>
              </div>
              <h5>John Slader<small>Montreal, Canada</small></h5>
              <div className="clear"></div>
              <div className="spacerl"></div>
              <div className="forms">
                <label><small>First Name</small><input type="text"/></label>
                <label><small>Last Name</small><input type="text"/></label>
                <label><small>Email</small><input type="email"/></label>
                <label><small>City</small><input type="text"/></label>
                <label><small>Country</small><input type="text"/></label>
                <label><small>Age</small><input type="number" min="1" max="120"/></label>
              </div> 
              <button onClick={dropNotif}>Save</button> 
            </div> 
            <div re-tab="preferences">
              <h4>Preferences</h4>
              <div className="clear"></div>
              <h6>Theme</h6>
              <div className="forms">
                <label><small>Theme Style</small>
                  <select>
                    <option selected>Firestack Red (Default)</option>
                    <option>Blue Surge</option>
                    <option>Green Haze</option>
                    <option>Purple Dip</option> 
                  </select>
                </label>
                <label><small>App Color</small>
                  <select>
                    <option selected>Fire Red (Default)</option>
                    <option>Lilac Purple</option>
                    <option>Leaf Green</option> 
                    <option>Electric Blue</option> 
                  </select>
                </label>
              </div>
              <h6>System</h6>
                <div className="clear"></div>
                <div className="forms">
                  <label class="form-switch">
                    <small>Enable Notifications</small>
                      <input type="checkbox"/><i></i>
                  </label>
                  <label class="form-switch">
                    <small>Enable Darkmode</small>
                      <input type="checkbox"/><i></i>
                  </label>
                </div>
              <h6>Email</h6>
              <div className="forms">
                  <label class="form-switch">
                    <small>Notify New Releases</small>
                      <input type="checkbox"/><i></i>
                  </label>
                </div> 
                <button onClick={dropNotif}>Save</button>
            </div>
            <div re-tab="about">
              <h4>About Firestack</h4>
              <h6><i class="fas fa-video"></i>A Movie entertainment App - Made with React JS</h6>
              <img className="aboutlogo" src="https://img.icons8.com/cute-clipart/64/000000/video-message.png" alt="logo"/>
              <p>Firestack is a passionate project developed and designed by Software Developer Uriel Bitton. Firestack allows users
                to browse the latest and trending movies, add titles to your watchlist to watch them later, save titles to your favorites and create new titles
                easily in a modern design interface. <br/><br/>
                The latest version of Firestack only supports single user features, however the next version is in development and will feature some exciting new social/multi user features.
                <br/><br/>So stay tuned by email and enjoy Firestack until then!
                <br/><br/>
                <small style={{fontWeight:'600'}}>Developer/Creator: Uriel Bitton (Helix Designs)</small>
                <div className="clear"></div>
               <h6><i class="fas fa-headset"></i>Support</h6> 
               <a href="https://firestack.com" target="_blank" rel="noopener noreferrer">Get support here</a>
               <h6><i class="fab fa-github"></i>Github</h6>
               <p>Want to submit a pull request for a new feature? You can do so easily through our github project</p><br/>
               <a href="https://github.com/urielbitton/firestack" target="_blank" rel="noopener noreferrer">Firestack Repository</a>
              </p>
            </div> 
            <div re-tab="connects">
              <h4>Connects</h4> 
              <h6><i class="fab fa-facebook"></i>Facebook</h6>
              <h6><i class="fab fa-twitter"></i>Twitter</h6>
              <h6><i class="fab fa-github"></i>Github</h6>

              <h6>More Connects Features coming soon...</h6>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default MyAccount