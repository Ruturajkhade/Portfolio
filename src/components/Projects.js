import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
          <a href="https://project-link.com" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
          <a href="https://project-link.com" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
          <h3>Project 3</h3>
          <p>Description of project 3.</p>
          <a href="https://project-link.com" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
