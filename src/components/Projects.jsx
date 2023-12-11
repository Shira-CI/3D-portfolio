import React, {useRef} from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import ProjectCard from './ProjectCard'
import useIsInViewPort from '../hooks/UseIsInViewPort'


const Projects = () => {
  return (
 <>
      <motion.div initial={false} variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>
          My projects        </p> */}
        <h2 className={styles.sectionHeadText}>
        My projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p initial={false}
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects demonstrate my abilities and expertise,
          presenting real-world responsive applications developed with a focus on scalability.
          Throughout the development process, I encountered and successfully addressed numerous challenges autonomously.
          Some of the projects include libraries, while others are crafted using fundamental web technologies such as HTML, CSS, and JavaScript.
          Accessing the project cards provides an opportunity to engage with live demonstrations, offering a comprehensive perspective on my experience and abilities.
         <br/> I invite you to explore and review my projects 🙂
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, idx) => (
          <ProjectCard key={`project-${idx}`}
            {...project}
            idx={idx}
          />
        ))}
      </div>
      </>
  )
}

export default SectionWrapper(Projects, "projects")