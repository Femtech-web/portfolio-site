import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer } from '../../utils/motion';
import { skillsData, skillsData2 } from '../../dummy';
import { styles } from '../../utils/styles';


const style = {
    container: 'flex-col  w-full overflow-hidden',
    boxCont: 'flex-col shadow-md bg-gray-200 mx-4 px-6 py-4 rounded-xl',
    title: 'text-3xl acumin text-slate-400 tracking-widest',
    heading: 'flex-col w-full mb-[4rem]',
    line: 'h-0.5 w-[120px] bg-indigo-600 mt-2',
};


const Box = ({ icon, title}) => {
    return (
        <div className={`${styles.flexBtw} ${style.boxCont}`}>
            { icon }
            <p className={style.title}>
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
        className={`${styles.container2(darkMode)} py-[5%]`}
    >
        <div className={`${styles.flexCenter} ${style.container}`}>
            <motion.div 
                variants={textVariant(0.2)}
                className={`${styles.flexCenter} ${style.heading}`}>
                <h1 className={ styles.headingH1Two(darkMode)}>Tools I Use</h1>
                <div className={style.line}></div>
            </motion.div>
            <div className={styles.flexY}>
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