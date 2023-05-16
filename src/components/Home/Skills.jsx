import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer } from '../../utils/motion';
import { skillsData, skillsData2 } from '../../dummy';


const Box = ({ icon, title}) => {
    return (
        <div className="flex flex-col justify-between 
            items-center shadow-md bg-gray-200 mx-4 px-6 py-4 rounded-xl">
            { icon }
            <p className="text-3xl acumin text-slate-400 tracking-widest"
            >
                { title }
            </p>
        </div>
    )
}
const Skills = ({ darkMode }) => {
  return (
    <motion.div
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }} 
        className={`${darkMode ? 'bg-darkMain' : 'bg-[#fff]' } py-[5%] `}>
        <div className="flex flex-col justify-center items-start w-full overflow-hidden">
            <motion.div 
                variants={textVariant(0.2)}
                className="flex flex-col w-full justify-center items-center mb-[4rem]">
                <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-800' } futura font-bold 
                tracking-widest text-4xl inline-block  
                pb-2 `}>Tools I Use</h1>
                <div className="h-0.5 w-[120px] bg-indigo-600 mt-2"></div>
            </motion.div>
            <div className="flex flex-col ">
                <div className="flex swipe mb-10">
                    {skillsData.map((item, index) => (
                    <Box key={index} icon={item.icon} title={item.title } />
                    ))}
                </div>
                <div className="flex swipe-back ">
                    {skillsData2.map((item, index) => (
                    <Box key={index} icon={item.icon} title={item.title } />
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Skills