import React from 'react';
import pic from '../assets/hero.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={pic}
            alt="Avatar"
            className="rounded-circle shadow-lg img-fluid"
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        <div className="col-md-8 text-center text-md-left">
          <h3 className="text-3xl font-semibold mb-3">About Me</h3>
          <p className="text-muted mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
            faucibus arcu condimentum sed.
          </p>
          <a href="/path-to-cv.pdf" download className="btn btn-primary btn-lg">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
