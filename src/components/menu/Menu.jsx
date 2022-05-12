import React from 'react'
import "./menu.scss"

function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={'menu '+ (menuOpen && "active")}>
        <ul>
            <li>
                <a href="#intro">Home</a>
            </li>
            <li>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li>
                <a href="#works">Projects</a>
            </li>
            <li>
                <a href="#reference">References</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu