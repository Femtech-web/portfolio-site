import React from 'react';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '../../utils/motion';
import { AiFillHome } from 'react-icons/ai';
import { BsArrowLeft, BsSun } from 'react-icons/bs';
import { MdOutlineDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { styles } from '../../utils/styles';


const style = {
  container: 'relative flex flex-col overflow-hidden',
  subCont: 'w-[98%] absolute top-[3%] left-5 z-30',
  icon: 'mr-5 cursor-pointer text-white hover:scale-75 transition-all',
  imgCont: 'flex md:flex-row flex-col md:h-[50vh] h-[100vh]',
  textCont: 'w-full mt-[18%] md:mt-0   flex-col md:w-[50%]',
  text: 'text-5xl md:text-7xl futura mb-3',
  homeIcon: 'text-gray-200 hover:scale-75 transition-all',
  img: 'grayscale w-[100%] md:h-auto h-full md:mt-0 mt-[10%]  md:w-[25%] ml-0 md:ml-[19%]',
  overlay: "absolute top-0 left-0 w-full h-full bg-black/40 z-10"
};


const Showcase = ({ handleClick, darkMode }) => {
  return (
    <motion.div 
      variants={staggerContainer(0.3, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={style.container}>
      
      <motion.div
        variants={slideIn("left", "spring", 0.5, 0.75)} 
        className={`${styles.flexCenter} ${style.subCont}`}
      >
        <div className={`${styles.flexStart2} mt-[1%] w-full`}>
          <Link to={'/'}>
            <AiFillHome fontSize={28} 
              className={style.homeIcon}
            />
          </Link>
          <BsArrowLeft fontSize={28} className='text-gray-200 ml-2' />
        </div>

        {darkMode 
        ? <BsSun fontSize={30} className={style.icon} onClick={handleClick}/> 
        : <MdOutlineDarkMode fontSize={30} className={style.icon} onClick={handleClick}/>
        }
      </motion.div>

      <motion.div 
        variants={slideIn('right', 'spring', 0.5, 0.75)}
        className={style.imgCont}>
          <div className={`${styles.flexCenter} ${style.textCont}`}>
            <h1 className={style.text}>Adeyemi Femi</h1>
            <h3 className=' text-4xl futura'>Fullstack Developer</h3>
            <div className={styles.line}></div>
          </div>
          <img src="/images/pic.jpg" alt="" className={style.img} />
      </motion.div>

      <div className={style.overlay}></div>
    </motion.div>
  )
}

export default Showcase