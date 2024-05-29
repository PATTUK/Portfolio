import React from 'react';
import pic from '../assets/hero.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Overview = () => {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center" id='overview'>
      <div className="container">
        <div className="row align-items-center justify-content-center">
        <div className="col-md-6 text-center">
            <img
              src={pic}
              alt="Placeholder"
              className="rounded-lg shadow-lg img-fluid"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>

          <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
            <h1 className="text-dark display-4 font-weight-bold">
              Hi, Tech Yuva
            </h1>
            <p className="text-primary h5 mb-4">
              My name is Yuvan and I am a Python developer. <br />
              I have a passion for building web applications and always strive to learn new technologies. On this website, you will find a collection of my projects and information about me.
              <br />
            </p>
            <p className="text-dark font-weight-bold mb-4">
              I am working on Blockchain and Cyber Security and I don't have any prior knowledge in computer education but I am studying so hard in computer programming and I love computer programming and new technology.
              I have knowledge of Java, C++, JavaScript, HTML, CSS, SQL, React, React-Native, Node.js, Express, MongoDB, Cyber Security, Blockchain, Ethers.js, and Solidity.
            </p>
            <a href="#projects" className="btn btn-warning btn-lg">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
