import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div id='Footer'>
      <div className='footer'>
        <div className='link'>
          <ul>
            <h2>About Links</h2>
            <li><a href="#Navbar">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#Footer">Contact</a></li>
          </ul>
        </div>
        <div>
        <h2 className='contact'>Contact Us</h2>
          <input type="text" placeholder="Search" className="input" /><br/>
          <input type="email" placeholder="Email" className="input" /><br/>
          <input type="submit" value="Subscribe" className="submit-button" />
        </div>
      </div>
      <div className='copyright'>
        <p>© 2024 Your Name. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
