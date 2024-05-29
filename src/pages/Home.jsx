import React from 'react'
import Overview from './Overview'
import Projects from './Projects'
import Skills from './Skills'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import About from './About'
import Blog from './Blog'
// import Hero from './Hero'


const Home = () => {
  return (
    <>
      <NavBar/>
      <Overview/>
      <About/>
      {/* <Hero/> */}
      <Skills/>
      <Projects />
      <Blog/>
      <Footer/>
    </>
  )
}

export default Home;