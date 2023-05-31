import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';
import { styles } from '../../utils/styles';
import CareerObj from './CareerObj';
import Experience from './Experience';
import Stat from './Stat';



const style = {
    container: 'flex flex-col px-[10%] py-[5%] gt',
};


const Body = ({ darkMode }) => {
  return (
    <motion.section
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={styles.container1(darkMode)}
    >
    <div className={style.container}>
        <CareerObj darkMode={darkMode}/>
        <Experience  darkMode={darkMode}/>
        <Stat darkMode={darkMode}/>
    </div>
    </motion.section>
  )
}

export default Body