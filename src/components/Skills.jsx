import React from 'react'

const Skills = () => {
  return (
    <div id='skills-wrapper' className='section'>
      <h1 className='section-header'>
            <span className='highlight2'>Skills</span>
      </h1>
      <div className='skills-columns'>
            <div className='skills-categories visible'>
                  <h3>Frontend</h3>
                  <div className='skills'>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Javascript</p>
                        <p>ReactJS</p>
                  </div>
            </div>
            <div className='skills-categories visible'>
                  <h3>Backend</h3>
                  <div className='skills'>
                        <p>C#</p>
                        <p>ASP.NET Core</p>
                        <p>SQL Server</p>
                        <p>Azure</p>
                  </div>
            </div>
            <div className='skills-categories visible'>
                  <h3>Others</h3>
                  <div className='skills'>
                        <p>GIT</p>
                        <p>Figma</p>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Skills