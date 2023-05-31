import React from 'react';
import { motion } from 'framer-motion';
import { slideIn, fadeIn, staggerContainer } from '../../utils/motion';
import { footerSocials } from '../../dummy';
import Logo from './Logo';
import { styles } from '../../utils/styles';


const style = {
  container: 'flex items-center py-10 px-[5%] bg-darkMain w-full',
  text: 'gt text-md hidden md:block text-gray-200',
};


const Footer = () => {
  return (
    <motion.div 
      variants={staggerContainer(0.3, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={style.container}
    >
      <div className={`${styles.flexBtw} w-full`}>
        <motion.span
          variants={slideIn('right', 'spring',  0.4, 0.7)}
        >
          <Logo  color={'text-gray-200'} mobile={true}/>
        </motion.span>
        <motion.p
          variants={fadeIn('up', 'spring', 0.4, 0.7)} 
          className={style.text}
        >
          @2023 Bossfemzy10@gmail.com.All Rights reserved
        </motion.p>
        <motion.div 
          variants={slideIn('left', 'spring', 0.4, 0.7)}
          className={styles.flexBtw}>
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