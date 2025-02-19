import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
       <nav id="navbar">
      <div className="nav-container">
        <h3 className="nav-logo">Nashit Ahmad</h3>
        <ul className="nav-links">
          <li>
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
