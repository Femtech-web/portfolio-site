import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { MdEmail } from 'react-icons/md';
import { BsPhoneLandscape } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';


const Box = ({ id, icon, title, subtitle, darkMode}) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', id * 0.5, 0.8)} 
            className='flex flex-col md:mr-5 min-w-[300px] mr-0 
            md:mb-0 mb-[15%] px-[2%] py-5 items-center shadow-xl 
            white-glassmorphism rounded-xl'>
            <div className=' flex justify-center items-center mb-5
                w-[140px] h-[140px] border-2 border-indigo-500 rounded-full'
            >
                { icon }
            </div>
            <h3 className=' gt md:text-3xl text-4xl mb-3 tracking-widest font-medium'>{title}</h3>
            <p className={`${darkMode ? 'text-gray-200' :  'text-slate-600'} 
            gt px-[20%] text-center md:text-md text-xl`}>{subtitle}</p>
        </motion.div>
    )
};
const Contact = ({ darkMode }) => {
  return (
    <motion.section
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${darkMode ? 'bg-[#0F1724] text-gray-200' 
        : 'text-slate-900'}`}
    >
        <div className='flex md:flex-row flex-col md:px-[10%] px-[2%] justify-center 
            items-center md:py-[5%] py-[10%]'>
            <Box icon={ <MdEmail fontSize={40} className='cursor-pointer '/>}
                title='Email' subtitle='BossFemzy10@gmail.com' darkMode={darkMode} id={1}/>
            <Box icon={ <BsPhoneLandscape fontSize={40} className='cursor-pointer' id={2}/>}
            title='Phone' subtitle='+234 8149118596' darkMode={darkMode}/>
            <Box icon={ <ImLocation2 fontSize={40} className='cursor-pointer ' />}
                title='Location' subtitle='Lagos Nigeria' darkMode={darkMode} id={3}/>
        </div>
    </motion.section>
  )
}

export default Contact