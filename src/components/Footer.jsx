import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-8 text-center text-md-start mb-4 mb-md-0">
            <h3 className="h4">Stay up to date with the latest news and projects</h3>
            <p className="text-gray-400 mt-2">
              Subscribe to our newsletter to receive updates on new projects and important announcements.
            </p>
          </div>
          <div className="col-md-4">
            <form className="d-flex flex-column flex-md-row align-items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control me-2 mb-2 mb-md-0"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-top border-gray-700 mt-4 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="text-gray-400 mb-2 mb-md-0">
            &copy; {new Date().getFullYear()} Tech Yuva. All rights reserved.
          </p>
          <div className="d-flex">
            <a href=" " className="text-gray-400 me-3">
              FAQ
            </a>
            <a href=" " className="text-gray-400 me-3">
              Privacy Policy
            </a>
            <a href=" " className="text-gray-400 me-3">
              Terms of Use
            </a>
            <a href=" " className="text-gray-400">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
