import React from 'react'
import "./menu.scss"
import {Link} from 'react-router-dom'

function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={'menu '+ (menuOpen && "active")}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href="/">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <Link to='/resume'>Resume</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu