import React from 'react'
import './About.css'
import assets from '../assets/Asset1-1641910145.svg'

const About = () => {
  return (
    <>
       <section id="about">
      <div className="about-img-container">
        <img 
          src={assets} 
          alt="About" 
          className="about-img" 
        />
      </div>
      <div className="about-text-container">
        <div>
          <h2 className="about-title">
            About Me
          </h2>
        </div>
        <p className="about-description">
          Hi! I’m Nashit Ahmad, a Frontend Developer and a recent graduate with a BTech in Computer Science. I specialize in creating websites using HTML, CSS, JavaScript, React, and Bootstrap. I also have basic knowledge of SQL to work with databases.

          As a fresher, I’m excited to start my career and grow my skills. I’m eager to learn, take on new challenges, and build websites that are both functional and easy to use. I’m passionate about web development and ready to contribute to any team I join.
        </p>
      </div>
    </section>
    </>
  )
}

export default About
