import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import { ToggleContext } from '../../context/context';
import { Link } from 'react-router-dom';
import { MdOutlineDarkMode } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { socialData } from '../../dummy';
import { BsArrowLeft,BsSun } from 'react-icons/bs'
import { aboutMe } from '../../dummy';
import { styles } from '../../utils/styles';
    
const style = { 
    container: 'py-[15%] px-[7%] md:py-[5%] bg-darkMain overflow-hidden',
    overlay: 'hover:-translate-y-4 transition-all p-4 rounded-full bg-slate-700 w-[50px] h-[50px] mr-3',
    iconsCont: 'w-full md:mb-[3%] mb-[15%]',
    iconsCont2: 'mb-[3%] text-gray-200',
    toggleBtn: 'mr-3 cursor-pointer hover:scale-75 transition-all text-white',
    bodyCont: 'flex-col flex flex-1 md:pr-9 pr:0',
    heading: 'futura text-gray-200 text-7xl',
    line: 'h-1 w-[100px] bg-indigo-600 ml-2',
    p: 'gt text-gray-200 text-xl md:text-lg ',
    social: 'flex w-full justify-center md:justify-start absolute bottom-0 md:bottom-6 z-20',
}

const Overlay = ({ icon }) => {
    return (
        <div className={`${style.overlay} ${styles.flexCenter}`}>
            { icon }
        </div>
    )
}

const body = () => {
  const { handleClick, darkMode } = useContext(ToggleContext);

  return (
    <div className={`${styles.flexY} ${style.container}`}>
        <div className={`${styles.flexBtw} ${style.iconsCont}`}>
            <div className={`${styles.flexStart2} ${style.iconsCont2}`}>
                <Link to={'/'}>
                    <AiFillHome fontSize={28} 
                        className='hover:scale-75 transition-all' 
                    />
                </Link>
                <BsArrowLeft fontSize={28} className='ml-2' />
            </div>

            {darkMode 
            ? <BsSun fontSize={30} className={style.toggleBtn} onClick={handleClick}/> 
            : <MdOutlineDarkMode fontSize={30} className={style.toggleBtn} onClick={handleClick}/>}
        </div>

        <div className={`${styles.flexMobile2} relative`}>
            <motion.div
                variants={slideIn('left', 'spring', 0.2, 0.7)} 
                className={style.bodyCont}
            >
                <div
                    className={styles.flexCenter}>
                    <h1 className={style.heading}>About Me</h1>
                    <div className={style.line}></div>
                </div>
                <div className='mt-[10%] md:mb-0 mb-[15%]'>
                    <p className={style.p}>{aboutMe.text}</p>
                </div>
                <div  className={style.social}>
                        {socialData.map((item, index) => (
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <Overlay icon={item.icon} key={index}/>
                            </a>
                        ))}
                </div>
            </motion.div>
            <motion.div
             variants={slideIn('right', 'spring', 0.2, 0.7)}      
                className='flex-1 z-0'>
                <img src="images/pic.jpg" alt="my-picture" className='grayscale'/>
            </motion.div>
        </div>
    </div>
  )
}

export default SectionWrapper(body)