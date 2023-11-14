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
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>

      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a junior software developer skilled in JavaScript, HTML, CSS, with hands-on experience in frameworks such as React and Node.js, including MongoDB database.
        I acquired and applied my knowledge through a comprehensive bootcamp at "Coding Academy" and through personal projects I created.
        I am passionate about creation and bringing ideas to life.
        During the bootcamp, I faced many challenges, practiced numerous coding hours, and addressed problems in stressful situations.
        Now, I'm actively seeking my first job, bringing a strong work ethic, self-learning abilities, loyalty, and a keen desire to continue learning and growing.
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