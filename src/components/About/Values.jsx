import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { values } from '../../dummy';

const Box = ({ index, icon, title, subtitle, darkMode}) => {
    return (
        <motion.div 
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className='flex flex-col md:mr-5 mr-0 md:mb-0 mb-[15%] px-[1%] py-3 items-center shadow-xl 
            white-glassmorphism rounded-xl'>
                <div className=' flex justify-center items-center mb-5
                    w-[140px] h-[140px] border-2 border-indigo-500 rounded-full'>{ icon }
                </div>
                <h3 className=' gt md:text-3xl text-4xl mb-3 tracking-widest font-bold'>{title}</h3>
                <p className={`${darkMode ? ' text-gray-200' : 'text-slate-600' } 
                    gt md:px-[20%] px-[10%] text-center md:text-lg text-xl`}>{subtitle}</p>
        </motion.div>
    )
};

const Values = ({ darkMode }) => {
  return (
    <motion.section
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${darkMode ? 'bg-darkMain text-gray-200' 
        : 'bg-white'} overflow-hidden`}
    >
    <div className='px-[7%] md:py-[5%] py-[15%] flex flex-col overflow-hidden'>
        <div className="flex justify-center items-center md:mb-[5%] mb-[15%]">
            <div className='h-1 w-[100px] bg-indigo-600 mr-2'></div>
            <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-800' } futura text-7xl`}>Values</h1>
        </div>
        <div className='flex md:flex-row flex-col justify-center items-center'>
            {values.map((item, index) => (
                <Box 
                    darkMode={darkMode} 
                    icon={item.icon} 
                    key={index} 
                    index={index}
                    title={item.title}  
                    subtitle={item.subtitle} 
                />
            ))}
        </div>
    </div>
    </motion.section>
  )
}

export default Values