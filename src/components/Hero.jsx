import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div id='hero-wrapper' className='section'>
      <div className='hero-text'>
            <h2>Hey, I'm Emma</h2>
            <h1 class="hero-title">
                  <span class="highlight">Full</span>stack<br />
                  Developer
            </h1>
            <p>I’m a fullstack developer based in Sweden, I’ll help you build a <br /> beautiful website your users will love.</p>
      </div>
      <div className='hero-right'>
            <div className='hero-img'>
                  <img src="/images/hero-img.jpg" alt="" />
            </div>
            <div className='social-icons'>
                  <a target='_blank' href="https://www.linkedin.com/in/emma-sch%C3%B6nbeck-06348a221/">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffffff"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                        <path d="M8 11l0 5" />
                        <path d="M8 8l0 .01" />
                        <path d="M12 16l0 -5" />
                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                  </a>
                  <a target='_blank' href="https://github.com/emmaschonbeck">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffffff"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                  </a>
                  <a href="">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffffff"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                        </svg>
                  </a>
            </div>
      </div>
    </div>
  )
}

export default Hero