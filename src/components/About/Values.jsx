import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../utils/styles'
import { staggerContainer } from '../../utils/motion';
import Box from './Box';
import { values } from '../../dummy';


const style = {
    subCont: 'px-[7%] md:py-[5%] py-[15%] flex flex-col overflow-hidden',
    line: 'h-1 w-[100px] bg-indigo-600 mr-2',
};


const Values = ({ darkMode }) => {
  return (
    <motion.section
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={styles.container1(darkMode)}
    >
    <div className={style.subCont}>
        <div className={`${styles.flexCenter} md:mb-[5%] mb-[15%]`}>
            <div className={style.line}></div>
            <h1 className={`${styles.darkText1(darkMode)} futura text-7xl`}>Values</h1>
        </div>
        <div className={`${styles.flexMobile2} ${styles.flexCenter}`}>
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