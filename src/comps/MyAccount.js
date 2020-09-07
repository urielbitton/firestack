import React, { useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function MyAccount() {

  useEffect(() => {
    const taber = document.querySelectorAll('[re-taber]')
    const tab = document.querySelectorAll('[re-tab]')

    taber.forEach(el1 => {
      el1.onclick = () => {
        let tabselector = el1.getAttribute('re-taber')
        tab.forEach(el2 => {
          el2.style.display = 'none' 
          setTimeout(() => {
            el2.style.opacity = '0'
          }, 50); 
        }) 
        document.querySelector(`[re-tab="${tabselector}"]`).style.display = 'block'
        setTimeout(() => {
          document.querySelector(`[re-tab="${tabselector}"]`).style.opacity = '1'
        }, 50);
      }
    })   
    document.querySelectorAll('.accountinfo .forms input').forEach(el => el.setAttribute('autocomplete','new-password') )
     
  },[])  

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
              <h6 re-taber="settings"><i class="fas fa-cog"></i>Settings</h6>
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
              <button>Save</button> 
            </div> 
            <div re-tab="preferences">
              <h4>Preferences</h4>
            </div>
            <div re-tab="about">
              <h4>About Firestack</h4>
            </div>
            <div re-tab="settings">
              <h4>Settings</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount