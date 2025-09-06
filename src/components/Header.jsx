import React from 'react'
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <div id='header-wrapper'>
      <h3>EmmaSCH.</h3>
      <div className='header-btn'>
        <Link to="/"><button>Home</button></Link>
        <a href="/resumePdf/Emma_Schonbeck_CV.pdf" target='_blank' rel='noopener noreferrer' className='resume-link'>
          <button>Resume</button>
             <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className='resume-icon'
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
        </a>
        <Link to="/ProjectsPage"><button>Projects</button></Link>
        <Link to="/Contactpage"><button>Contact</button></Link>
      </div>
      <div className='mobile-menu'>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Header