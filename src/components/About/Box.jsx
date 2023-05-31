import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../utils/styles'
import { fadeIn } from '../../utils/motion';



const style = {
    container: 'gt flex flex-col md:mr-5 mr-0 md:mb-0 mb-[15%] px-[1%] py-3 items-center shadow-xl white-glassmorphism rounded-xl',
    icon: 'mb-5 w-[140px] h-[140px] border-2 border-indigo-500 rounded-full',
    title: 'md:text-3xl text-4xl mb-3 tracking-widest font-bold',
    subtitle: 'md:px-[20%] px-[10%] text-center md:text-lg text-xl',
};


const Box = ({ index, icon, title, subtitle, darkMode}) => {
    return (
        <motion.div 
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className={style.container}>
            <div className={ `${styles.flexCenter} ${style.icon}`}>
                { icon }
            </div>
            <h3 className={style.title}>{title}</h3>
            <p className={`${styles.darkText2(darkMode)} ${style.subtitle}`}>{subtitle}</p>
        </motion.div>
    )
};

export default Box