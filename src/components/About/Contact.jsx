import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { styles } from '../../utils/styles';


const style = {
  container: 'flex-col md:px-[7%] px-[4%] py-[5%] gt',
  line: 'h-0.5 w-[90px]  bg-indigo-600 mb-5',
  subCont: 'w-full rounded-xl flex-col md:px-[15%] px-2',
  h1: 'text-center md:text-6xl text-5xl font-bold mb-4',
  subText: 'text-xl text-center md:px-[15%] px-[5%]',
};


const Contact = ({ darkMode}) => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={styles.container1(darkMode)}
    >
    <motion.div 
      variants={fadeIn('right', 'spring', 0.5, 0.75)}
      className={`${styles.flexCenter} ${style.container}`}>
      <div className={style.line}></div>
      <div className={`${styles.flexCenter} ${style.subCont}`}>
        <h1 className={style.h1}
        >
          Lets Connect For Business
        </h1>
        <p className={`${styles.darkText2(darkMode)} ${style.subText}`}
        >
          The technological revolution is changing aspects of our lives 
          and the society itself. Here at Fem-Dev, I have got you fully Covered.
        </p>
        <a href="https://wa.me/08149118596" target="_blank" rel="noopener noreferrer">
          <button className={styles.contactBtn}>
              Contact Me
          </button>
        </a>
      </div>
    </motion.div>
    </motion.section>
  )
}

export default Contact