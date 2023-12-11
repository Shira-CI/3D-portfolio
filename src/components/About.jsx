import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { textVariant, fadeIn } from '../utils/motion'
import ServiceCard from './ServiceCard'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>
          Introduction
        </p> */}
        <h2 className={styles.sectionHeadText}>
        Introduction
        </h2>

      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a fullstack developer skilled in JavaScript, HTML, CSS, with hands-on experience in frameworks such as React and Node.js, including MongoDB database.
        I have acquired and applied my knowledge through a comprehensive bootcamp at "Coding Academy" and through personal projects I created.
        Throughout the bootcamp, I faced many challenges, dedicated extensive hours to coding practice, and addressed problems in high-pressure situations.
        Driven by a deep passion for turning ideas into reality, I bring a strong work ethic, dedication to self-improvement, loyalty, and a constant desire for learning and growth.
      </motion.p >
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, idx) => (
          <ServiceCard key={service.title} idx={idx} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")