import React from 'react'
import { motion } from 'framer-motion'

const textParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const textItem = {
  hidden: { opacity: 0, y: 24 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
}

const iconsParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const iconItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const Hero = () => {
  return (
    <div id='hero-wrapper' className='section'>
      <motion.div
        className='hero-text'
        variants={textParent}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={textItem}>Hello, I'm Emma Schönbeck</motion.h2>

        <motion.h1 className="hero-title" variants={textItem}>
          <span className="highlight">Full</span>stack<br />
          Developer
        </motion.h1>

        <motion.p variants={textItem}>
          I’m a fullstack web development student based in Sweden, looking to grow my skills through real projects and collaborations.
        </motion.p>
      </motion.div>

      <motion.div
        className='hero-right'
        variants={imageVariant}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className='hero-img'>
          <img src="/images/hero-img.jpg" alt="Emma" />
        </div>

        <motion.div
          className='social-icons'
          variants={iconsParent}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.a
            variants={iconItem}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            target='_blank'
            href="https://www.linkedin.com/in/emma-sch%C3%B6nbeck-06348a221/"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </motion.a>

          <motion.a
            variants={iconItem}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            target='_blank'
            href="https://github.com/emmaschonbeck"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </motion.a>

          <motion.a
            variants={iconItem}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:emma@example.com"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
