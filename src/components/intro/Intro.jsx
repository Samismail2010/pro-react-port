import './intro.scss'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';;

function Intro() {
  return (
      <div className='intro' id='intro'>
        <div className="left">
          <div className="imgContainer">
            <img src="assets/CoolMe.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hello, I'm</h2>
            <h1>Sam Ismail</h1>
            <h3>Developer <span> Front End</span></h3>
          </div>
          <a href="#portfolio">
            <ExpandMoreIcon className='arrIcon' />
          </a>
        </div>
        
      </div>
    
  )
}

export default Intro