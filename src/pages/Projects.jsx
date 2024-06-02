import React from 'react';
import Slider from 'react-slick';
import './Projects.css'; // Import the CSS file for styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const projects = [
    {
      name: 'Awesome Project 1',
      image: 'data:image/jpeg;base64,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',
      technologies: 'React, Node.js, MongoDB',
      description: 'An amazing project that does awesome things.',
      liveLink: 'https://example.com/live-project1',
    },
    {
      name: 'Awesome Project 2',
      image: 'https://example.com/project-image2.jpg',
      technologies: 'React, Node.js, MongoDB',
      description: 'Another amazing project that does awesome things.',
      liveLink: 'https://example.com/live-project2',
    },
    // Add more projects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="projects-container" id='projects'>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Slider>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${project.image})` }}>
      <div className="project-content">
        <h3>{project.name}</h3>
        <p><strong>Technologies:</strong> {project.technologies}</p>
        <p>{project.description}</p>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Live</a>
      </div>
    </div>
  );
};

export default Projects;