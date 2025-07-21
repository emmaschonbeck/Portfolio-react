import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Linkedin from '../components/Linkedin'
import About from '../components/About'
import ProjectsShowcase from '../components/ProjectsShowcase'
import Experience from '../components/Experience'

const LandingPage = () => {
  return (
      <div id='home-wrapper'>
            <Header />
            <Hero />
            <Skills />
            <Experience />
            <ProjectsShowcase />
            <About />
            <Linkedin />
            <Footer />
      </div>
  )
}

export default LandingPage