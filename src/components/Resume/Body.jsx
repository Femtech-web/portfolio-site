import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { textVariant, fadeIn, staggerContainer } from '../../utils/motion';
import { VerticalTimeline }
from 'react-vertical-timeline-component/dist-modules';
import 'react-vertical-timeline-component/style.min.css';
import { Experiences, softSkill, stats } from "../../dummy";


const Body = ({ darkMode }) => {
  return (
    <motion.section
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${darkMode ? 'bg-darkMain text-gray-200' 
        : 'bg-[#fff]' }`}
    >
    <div className='flex flex-col px-[10%] py-[5%]'>
        <div 
            className="flex md:flex-row flex-col justify-center  
            items-center md:mb-6 mb-5">
            <div className='flex flex-col max-w-[300px] md:mb-[5rem] 
                mb-8 items-center justify-center mr-4'>
                <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-800'} 
                    futura font-bold tracking-widest text-4xl  pb-2 `}
                >
                    Career Objective
                </h1>
                <div className="h-0.5 w-[170px] -translate-x-4  bg-indigo-600 mt-2"></div>
            </div>
            <p className={`${darkMode ? 'text-gray-200' : 'text-slate-600' } 
                p-7 gt text-xl white-glassmorphism italic`}
            >
              Determined professional with planning and implementing 
              high quality websites and web apps.
              Skilled in frontend and backend web technologies.
              Proven abilities to quickly understand
              requirements, create innovative solutions and complete 
              projects within provided deadlines.
            </p>
        </div>
        <div className="flex flex-col ">
            <div 
                className="w-full flex items-center justify-center"
            >
                <div className='flex flex-col max-w-[300px] md:mb-[5rem] 
                    mb-8 w-full items-center justify-center mr-4'>
                    <h1 className={`${darkMode ? ' text-gray-200' 
                        : 'text-slate-800' } futura font-bold 
                        tracking-widest text-4xl pb-2 `}
                    >
                        Experiences
                    </h1>
                    <div className="h-0.5 w-[170px] -translate-x-4 
                    bg-indigo-600 mt-2"></div>
                </div>
            </div>
            
            <div className='my-10 flex flex-col'>
                <VerticalTimeline>
                {Experiences.map((experience, index) => (
                    <ExperienceCard 
                    key={index}
                    experience={experience}
                    darkMode={darkMode}
                    />
                ))}
                </VerticalTimeline>
            </div>
            <div className="flex">
                <div className="w-full flex items-center justify-center ">
                    <div className='flex flex-col max-w-[300px] mb-[3rem] 
                        w-full items-center justify-center mr-4'>
                        <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-800'} 
                        futura font-bold tracking-widest text-4xl  pb-2 `}
                        >
                            Education
                        </h1>
                        <div className="h-0.5 w-[170px] -translate-x-4  
                            bg-indigo-600 mt-2"></div>
                    </div>
                </div>
            </div>

            <h3 className={`${darkMode ? ' text-gray-200' : 'text-slate-800'} 
                gt md:text-3xl text-2xl md:mb-4 mb-8`}
            >
                National Diploma in computer science 
                OGITECH (Ogun state institute of Technology), Igbesa, Ogun State.
            </h3>

            <div className="flex flex-col mb-5 md:ml-0 ml-1">
                <h3 className={`${darkMode ? ' text-gray-200' : 'text-slate-800'} 
                    gt text-3xl mb-2 font-medium`}>Soft Skills</h3>
                <ul className={`${darkMode ? ' text-gray-200'
                    : 'text-slate-600' } list-disc`}
                >
                    {softSkill.map((text, index) => (
                    <li className='gt text-xl'>{text}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className='flex md:flex-row flex-col glassmorphism shadow-2xl 
            mt-5 justify-center items-center py-[7%]'>
            {stats.map((item, index) => (
                <>
                    {index === 0 || 2 && <div className="h-0.5 w-[170px] -translate-x-4  
                    bg-indigo-600 ml-6"></div>}
                    <div 
                        className="flex justify-center items-center flex-col border-2 
                        md:w-[180px] w-[200px] md:h-[180px] h-[200px] p-9 
                        rounded-full border-indigo-600 md:my-0 my-[10%]"
                    >
                        <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-900'} 
                            text-6xl futura font-bold mb-2`}
                        >
                            {item.title}
                        </h1>
                        <p className='text-xl futura text-indigo-400'>{item.subtitle}</p>
                    </div>
                </>
            ))}
        </div>
    </div>
    </motion.section>
  )
}

export default Body