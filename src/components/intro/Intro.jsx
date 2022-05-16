import './intro.scss'
import { useEffect, useRef } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {init} from 'ityped';

function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef, {
      showCursor: false,
      backDelay: 1500,
      strings: ["Front-End Developer", "Back-End Developer", "Full Stack Developer"],
    });
  },[]);

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
            <h3><span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
            <ExpandMoreIcon className='arrIcon' />
          </a>
        </div>
        
      </div>
    
  )
}

export default Intro