import React from 'react'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Achievements from './Achievements';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Footer/>
    </div>
  )
}

export default Home;
