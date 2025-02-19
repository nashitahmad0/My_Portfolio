import React from 'react'
import "./Projects.css"

const projects = [
  {
    id: 1,
    title: "Clone Zomato Landing Page",
    description: "A responsive clone of the Zomato landing page showcasing restaurant listings, food categories, and restaurant-specific details. Built using HTML, CSS, and JavaScript for a seamless user experience.",
    imageUrl: "/src/assets/zomato landing.PNG" 
  },
  {
    id: 2,
    title: "Health Care",
    description: "A user-friendly web platform for managing health records, appointments, and medication schedules. Designed to provide healthcare professionals and patients with a smooth and intuitive experience.",
    imageUrl: "/src/assets/healthcare.PNG" 
  },
  {
    id: 3,
    title: "Employee Record System",
    description: "A web application for managing employee records, including details such as personal information, job role, and salary.",
    imageUrl: "/src/assets/Todo.PNG" 
  },
  {
    id: 4,
    title: "To Do",
    description: "A simple yet effective task management application where users can create, edit, and delete tasks. Built with React, allowing users to stay organized and track their daily activities. ",
    imageUrl: "/src/assets/TodoApp.PNG"  
  },
  
];

const Projects = () => {
  return (
    <>
    <h1 className='projects-title'>My Projects</h1>
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.imageUrl} alt={project.title} className="project-image" />
          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};


export default Projects
