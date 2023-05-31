import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../utils/styles';
import { staggerContainer, zoomIn } from '../../utils/motion';
import { homeSocialIcons } from '../../dummy';
import { ToggleContext } from '../../context/context';
import 'animate.css';
import Bio from './Bio';


const style = {
    container: (darkMode) => `${darkMode ? 'bg-darkMain md:pt-[15%] pt-[40%]' : 'md:pt-0 pt-[20%]'} flex items-center w-full md:h-[89vh]`,
    nameCont: (darkMode) => `justify-evenly animate__animated animate__fadeIn items-start md:items-center pl-4 py-[10%] md:pl-[9%] text-left ${darkMode ? 'bg-darkMain text-gray-200' : 'bg-white' }`,
    webProfile: 'w-full md:w-[40%] relative h-[50vh] md:my-0 my-[11%] left-0',
    circleBig: 'border-2 shadow-indigo-500 shadow-sm w-[330px] h-[330px] border-indigo-200 rounded-full absolute md:left-0 md:-top-[5%] top-[10%] md:right-[10%] right-[4%] md:h-[400px] md:w-[400px] animate-spin',
    img: 'grayscale h-100 w-[40%] rounded-full absolute md:-top-[10%] top-[7%] md:left-[1%] left-[15%]',
    img2: 'grayscale h-100 w-[100%] rounded-full',
    circleSmall: 'animate-spin bg-gradient-to-r from-[#9060DA] to-[rgb(40,162,207)] w-[130px] h-[130px] rounded-full absolute  md:-bottom-[20%] -bottom-[10%] md:right-[25%] right-[10%] md:h-[150px] md:w-[150px]',
    mobileProfile:  'pt-[15%] py-[10%] px-[5%]',
    border: (darkMode) => `w-[100%] rounded-full relative ${darkMode ? 'border-slate-700' : 'border-indigo-500'} border-[10px] h-[100%] flex items-center justify-center`,
    icons: 'md:flex hidden  flex-col justify-evenly'
};


const Body = ({ darkMode}) => {
    const { mobile } = useContext(ToggleContext);

  return (
    <div className={style.container(darkMode)}>
        <div className={`${style.nameCont(darkMode)} ${styles.flexMobile2}`}>
            <Bio darkMode={darkMode} />
           {!mobile  
           ? <div  
                className={style.webProfile}>
                <div className={style.circleBig}>
                </div>
                <motion.img 
                    src="/images/pic.jpg" 
                    alt="profile image" 
                    className={style.img}
                />
                <div className={style.circleSmall}></div>
            </div> 
            : <motion.div
                variants={staggerContainer} 
                initial="hidden"
                whileInView="show"
                className={`${styles.flexCenter} ${style.mobileProfile}`}>
                <div className={style.border}
                >
                    <motion.img 
                        variants={zoomIn(0.1, 0.7)} 
                        src="/images/pic.jpg" 
                        alt="profile image" 
                        className={style.img2}
                    />
                </div>
                </motion.div>
            }

            <div className={style.icons}>
                {homeSocialIcons.map((item) => (

                    <a href={item.url} target="_blank" rel="noopener noreferrer"
                        style={{marginBottom: '1.5rem'}}>
                        {item.icon}
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Body