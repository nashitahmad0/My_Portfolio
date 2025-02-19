import React from 'react'
import './Skills.css'
import html from '../assets/Html.png'
import css from '../assets/css.png'
import js from '../assets/JS.png'
import bootstrap from '../assets/Bootstrap.png'
import react from '../assets/React.png'
import mongo from '../assets/MongoDB.png'
import sql from '../assets/SQL.png'

const Skills = () => {

  const skills = [
    { name: "HTML", imgSrc: html },
    { name: "CSS", imgSrc: css },
    { name: "Javascript", imgSrc: js },
    { name: "Bootstrap", imgSrc: bootstrap },
    { name: "ReactJS", imgSrc: react },
    { name: "SQL", imgSrc: sql },
    { name: "MongoDB", imgSrc: mongo }
  ];

  return (
    <>
      <section id="skills">
        <h2 className="skills-title">My Skills...</h2>

        <div className="skills-container">
          {skills.map((skill, index) => {
            return (
              <div key={index} className="skill-card">
                <img src={skill.imgSrc} alt={skill.name} className="skill-image" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  )
}

export default Skills;
