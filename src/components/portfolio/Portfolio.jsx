import './portfolio.scss'
import React,{useState} from 'react'
import PortfolioList from '../portfoliolist/PortfolioList';

function Portfolio() {

  const [selected, setSelected] = useState()
  const list = [
    {
      id: "collab",
      title: "Collab Project",
    },
    {
      id: "restful",
      title: "RESTful Project",
    },
    {
      id: "html",
      title: "Basic HTML/CSS Project",
    },
    {
      id: "react",
      title: "React Project",
    },
    {
      id: "ux/ui",
      title: "UX/UI Project",
    },
    {
      id: "github",
      title: "More Repo on Github",
    },
  ];
  return (
      <div className='portfolio' id='portfolio'>
          <h1>Portfolio</h1>
          <ul>
            {list.map((item) => (
              <PortfolioList
               title={item.title}
               active={selected === item.id}
               setSelected={setSelected}
               id={item.id}
               />
            ))}
          </ul>
          <div className="container">
            <div className="item">
              <img src="assets/port1.png" alt="" />
              <h3> Collab</h3>
            </div>
            <div className="item">
              <img src="assets/port2.png" alt="" />
              <h3> Collab</h3>
            </div>
            <div className="item">
              <img src="assets/port3.png" alt="" />
              <h3> Collab</h3>
            </div>
            <div className="item">
              <img src="assets/porrt4.png" alt="" />
              <h3> Collab</h3>
            </div>
            <div className="item">
              <img src="assets/port5.png" alt="" />
              <h3> Collab</h3>
            </div>
            <div className="item">
              <img src="assets/port6.png" alt="" />
              <h3> Collab</h3>
            </div>
          </div>
      </div>

  )
}

export default Portfolio