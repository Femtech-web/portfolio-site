import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';

const About = ({ darkMode }) => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`flex  flex-col md:flex-row py-[7%] overflow-hidden
      ${darkMode ? 'bg-darkMain text-gray-200 pt-[10%]' : 'bg-white' }`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 0.5)}
        className={`flex  flex-col md:flex-row py-[7%]`}>
        <div className='text-left md:px-[9%] px-4 max-w-[900px] border-r-2 border-indigo-600'>
            <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-800' } futura 
            font-bold tracking-widest md:max-w-300 max-w-400 text-4xl inline-block 
            pb-4 mb-9 border-b-2 border-indigo-600`}>About me</h1>
            <p className={`${darkMode ? ' text-gray-200' 
              : 'text-slate-700 '} gt md:text-xl text-base`}
            >
              Determined professional with planning and implementing high quality websites and web apps. 
              Skilled in frontend and backend web technologies. Proven abilities
              to quickly understand requirements, create innovative solutions and complete projects
              within provided deadlines.
            </p>
        </div>
        <div className="md:flex hidden justify-center items-center vibrate">
          <p className='futura text-2xl ml-10 tracking-[0.4rem] vibrate-1'>
            You need 
            <span className='text-indigo-500 text-2xl'>Me</span>
          </p>
        </div>
              
      </motion.div>
    </motion.section>
    
  )
}

export default About