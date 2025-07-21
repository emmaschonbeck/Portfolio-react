import React from 'react'

const Experience = () => {
  return (
    <div id='experience-wrapper' className='section'> 
      <h1 className='section-header'>
            <span className='highlight2'>Experience</span>
      </h1>
      <div className='experience-group'>
            <div className='experience-timeline'>
                  <div class="experience-timeline-dot dot1"></div>
                  <div class="experience-timeline-line"></div>
                  <div class="experience-timeline-dot dot2"></div>
            </div>
            <div className='experience-item-container'>
            <div className='experience-item'>
                  <h3>EC Utbildning (Higher Vocational Education)</h3>
                  <h4>.NET Web Developer Student</h4>
                  <span>2024 - 2026</span>
            </div>
            <div className='experience-item item2'>
                  <h3>Teleperformance</h3>
                  <h4>Customer Support Agent</h4>
                  <span>2021 - 2022</span>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Experience