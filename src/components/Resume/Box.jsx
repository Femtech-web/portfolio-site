import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../../utils/styles';
import { fadeIn } from '../../utils/motion';


const style = {
    container: 'gt flex flex-col md:mr-5 min-w-[300px] mr-0 md:mb-0 mb-[15%] px-[2%] py-5 items-center shadow-xl white-glassmorphism rounded-xl',
    subCont: 'mb-5 w-[140px] h-[140px] border-2 border-indigo-500 rounded-full',
    title: 'md:text-3xl text-4xl mb-3 tracking-widest font-medium',
    subtitle:  'px-[20%] text-center md:text-md text-xl',
};


const Box = ({ id, icon, title, subtitle, darkMode}) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', id * 0.5, 0.8)} 
            className={style.container}>
            <div className={`${styles.flexCenter} ${style.subCont}`}>
                { icon }
            </div>
            <h3 className={style.title}>{title}</h3>
            <p className={`${styles.darkText2(darkMode)} ${style.subtitle}`}>{subtitle}</p>
        </motion.div>
    )
};

export default Box