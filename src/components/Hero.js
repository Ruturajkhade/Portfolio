import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2>Welcome to My Portfolio</h2>
        <p>I'm a passionate [Your Profession]. Explore my work and projects!</p>
        <a href="#projects" className="btn">View Projects</a>
      </div>
    </section>
  );
};

export default Hero;
