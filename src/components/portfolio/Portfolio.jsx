import './portfolio.scss'
import React from 'react'

function Portfolio() {
  return (
      <div className='portfolio' id='portfolio'>
          <h1>Portfolio</h1>
          <ul>
            <li className='active'>Featured</li>
            <li>Web App</li>
            <li>Collab Projects</li>
            <li>SQL Projects</li>
            <li>Featured</li>
          </ul>
          <div className="container">
            <div className="item">
              <img src="imageedit_2_5611496995.png" alt="" />
              <h3> Collab</h3>
            </div>
          </div>
      </div>

  )
}

export default Portfolio