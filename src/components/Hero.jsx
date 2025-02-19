import React from 'react'
import './Hero.css';
import image from '../assets/heroPic.png'


const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h4 className="hero-subtitle">
                Hi and welcome to
            </h4>
            <h2 className="hero-title">
              My Portfolio Website
            </h2>
          </div>
          <p className="hero-description">
            I'm a Front-End Developer <br /> 
          
            Creative frontend developer crafting responsive, visually stunning web experiences.
          </p>
          
        </div>
        <div className="hero-image-container">
          <img 
            src={image} 
            alt="My-Photo" 
            className="hero-image"
          />
        </div>
      </section>
    </>
  )
}

export default Hero

