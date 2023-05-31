import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../utils/styles';
import { fadeIn, staggerContainer } from '../../utils/motion';


const style = {
  innerDiv:  'py-[8%] px-[9%] flex-col',
  line: 'h-0.5 w-[90px]  bg-indigo-600 mb-5',
  textCont: 'w-full rounded-xl flex-col md:px-[15%] px-2',
  header: 'gt text-center md:text-6xl text-5xl font-bold mb-4',
};


const Contact = ({ darkMode }) => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={styles.container1(darkMode)} 
    >
      <motion.div 
        variants={fadeIn('right', 'spring', 0.3, 1)}
        className={`${styles.flexCenter} ${style.innerDiv}`}
      >
        <div className={style.line}></div>
        <div className={`${style.textCont} ${styles.flexCenter}`}>
          <h1 className={`${styles.darkText1(darkMode)} ${style.header}`}>
            Lets Work Together
          </h1>
          <p className="text-xl text-center gt">
            The technological revolution is changing aspects of our 
            lives and the society itself. Here at Fem-Dev, am ready 
            to give you the best and make you happy.
          </p>
          <a href="https://wa.me/08149118596" 
            target="_blank" rel="noopener noreferrer">
            <button className={`${styles.flexCenter} ${styles.contactBtn}`}>
              Contact Me
            </button>
          </a>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Contact