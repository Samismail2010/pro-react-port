import './topbar.scss';
import {Person , Mail} from '@material-ui/icons';
import React from 'react'

function Topbar({menuOpen, setMenuOpen}) {
  return (
      <div className={'topbar ' + (menuOpen && "active")}>
          <div className="wrapper">
              <div className="left">
                  <a href="#intro" className='logo'>Welcome</a>
                  <div className="itemContainer">
                      <Person className='icon'/>
                      <span>469-531-8378</span>
                  </div>
                  <div className="itemContainer">
                      <Mail className='icon'/>
                      <a href="mailto:samismail2010@gmail.com"><span>samismail2010@gmail.com</span></a>
                  </div>
                  </div>
                  <div className="right">
                      <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                          <span className='line1'></span>
                          <span className='line2'></span>
                          <span className='line3'></span>
                      </div>
                  </div>
              
          </div>
      </div>
  )
}

export default Topbar