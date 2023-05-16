import React from 'react';
import { motion } from 'framer-motion';
import { slideIn, fadeIn, staggerContainer } from '../../utils/motion';
import { footerSocials } from '../../dummy';
import Logo from './Logo';

const Footer = () => {
  return (
    <motion.div 
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      className='flex items-center py-10 px-[5%] bg-darkMain w-full'>
      <div className='justify-between  flex items-center w-full '>
        <motion.span
          variants={slideIn('right', 'spring',  0.4, 0.7)}
        >
          <Logo  color={'text-gray-200'} mobile={true}/>
        </motion.span>
        <motion.p
          variants={fadeIn('up', 'spring', 0.4, 0.7)} 
          className="gt text-md hidden md:block text-gray-200"
        >
          @2023 Bossfemzy10@gmail.com.All Rights reserved
        </motion.p>
        <motion.div 
          variants={slideIn('left', 'spring', 0.4, 0.7)}
          className='flex justify-center items-center'>
          {footerSocials.map((item) => (
            <a href={item.url} 
              target="_blank" rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Footer