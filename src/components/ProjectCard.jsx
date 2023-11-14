import React from 'react'
import { fadeIn, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { github } from '../assets'

const ProjectCard = ({ idx, name, description, tags, image, github_link, site_link }) => {

    return (
        <motion.div variants={fadeIn('up', 'spring', idx * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px] cursor-pointer' onClick={() => window.open(site_link, '_blank')}>
                    <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            title='github link'
                            onClick={() => window.open(github_link, '_blank')}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                            <img src={github} alt="github"
                                className=' w-1/2 h-1/2 object-contain' />

                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>

    )
}

export default ProjectCard