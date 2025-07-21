import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id='header-wrapper'>
      <h3>EmmaSCH.</h3>
      <div className='header-btn'>
        <Link to="/"><button>Home</button></Link>
        <Link to="/ResumePage"><button>Resume</button></Link>
        <Link to="/ProjectsPage"><button>Projects</button></Link>
        <Link to="/Contactpage"><button>Contact</button></Link>
      </div>
    </div>
  )
}

export default Header