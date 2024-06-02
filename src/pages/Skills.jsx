import React from 'react';
import './Skills.css';

// Sample data for technologies. Replace with your actual data.
const technologies = [
  { name: 'React', logo: 'https://reactjs.org/logo-og.png' },
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'Node.js', logo: 'https://nodejs.org/static/images/logo.svg' },
  { name: 'CSS3', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
  { name: 'HTML5', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  // Add more technologies as needed
];

const Skills = () => {
  return (
    <div className="showcase-container">
      <h2>Technologies I Use</h2>
      <div className="technologies-grid">
        {technologies.map((tech, index) => (
          <div className="technology-item" key={index}>
            <img src={tech.logo} alt={tech.name} className="technology-logo" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
