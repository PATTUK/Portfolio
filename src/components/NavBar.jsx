import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="me-2 fw-bolder">Your Brand</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-teal-200" smooth to="/#about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-teal-200" smooth to="/#projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-teal-200" smooth to="/#overview">Overview</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-teal-200" smooth to="/#skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-teal-200" smooth to="/#blogs">Blogs</Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link className="btn btn-outline-light me-2" to="#">Sign In</Link>
            <Link className="btn btn-outline-light" to="#">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
