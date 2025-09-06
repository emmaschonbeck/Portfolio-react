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
        <>
          <section className="section section--bg1">
              <div className="container">
                <Header />
              </div>
            </section>
            <section className="section section--bg2">
              <div className="container">
                <Hero />
              </div>
            </section>
            <section className="section section--bg1">
              <div className="container">
                <Skills />
              </div>
            </section>
            <section className="section section--bg2">
              <div className="container">
                <Experience />
              </div>
            </section>
            <section className="section section--bg1">
              <div className="container">
                <ProjectsShowcase />
              </div>
            </section>
            <section className="section section--bg2">
              <div className="container">
                <About />
              </div>
            </section>
            <section className="section section--bg2">
              <div className="container">
                <Linkedin />
              </div>
            </section>
            <section className="section section--bg1">
              <div className="container">
                <Footer />
              </div>
            </section>
        </>
  )
}

export default LandingPage