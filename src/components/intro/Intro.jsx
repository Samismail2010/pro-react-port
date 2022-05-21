import './intro.scss'
import { useEffect, useRef } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {init} from 'ityped';
import { GitHub, LinkedIn } from '@material-ui/icons';

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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia iusto nostrum repellat laudantium possimus. 
              Exercitationem minima nihil error deserunt obcaecati ex nobis adipisci, quod quisquam doloribus aspernatur quia pariatur.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia iusto nostrum repellat laudantium possimus. 
              Exercitationem minima nihil error deserunt obcaecati ex nobis adipisci, quod quisquam doloribus aspernatur quia pariatur.</p>
           <div className="icons">
             <LinkedIn className='icon' onMouseOver={({target})=>target.style.color="navy"} 
             onMouseOut={({target})=>target.style.color="gray"} />
             <GitHub className='icon' onMouseOver={({target})=>target.style.color="indigo"}
             onMouseOut={({target})=>target.style.color="gray"} />
          </div> 
          
          </div>
        </div>
        
      </div>
    
  )
}

export default Intro