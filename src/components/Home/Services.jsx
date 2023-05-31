import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { servicesData } from '../../dummy';
import { SectionWrapper } from '../../hoc';
import { fadeIn, textVariant } from '../../utils/motion';
import { styles } from '../../utils/styles';


const style = {
  container: 'flex-col md:pr-[7%] pr-[7%] pl-[1%] overflow-hidden md:pl-[7%]  bg-darkMain md:py-[3%] py-[5%]',
  boxCont: 'text-gray-200 flex-col bg-darkMain shadow-inner shadow-indigo-500 md:p-5 m-5 p-7 md:w-[90%] w-[97%] rounded-xl cursor-pointer gt',
  icon: 'w-[100px] h-[100px] rounded-full bg-slate-500  mb-6 shadow-inner shadow-gray-200',
  title: 'mb-4 text-center font-semibold text-[1.4rem]',
  p: 'text-center text-base whitespace-normal',
  grid: 'grid md:grid-cols-3 grid-cols-1'
};


const Box = ({ index, icon, title, subtitle}) => {
  return (
    
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
    >
    <motion.div
      variants={fadeIn('right', 'tween', index * 0.5, 0.75)} 
      className={`${styles.flexCenter} ${style.boxCont}`}
    >
      <div className={`${styles.flexCenter} ${style.icon}`}>
        {icon}
      </div>
      <h3 className={style.title}>
        {title}
      </h3>
      <p className={style.p}>
        {subtitle}
      </p>
    </motion.div>
  </Tilt>
    
  )
}

const Services = () => {
  return (
    <div className={`${styles.flexCenter} ${style.container}`}>
      <motion.div 
        variants={textVariant(0.2)}
        className={styles.headingCont}>
          <h1 className={styles.headingH1}>Services I Offer</h1>
          <div className={styles.line}></div>
      </motion.div>

      <div className={style.grid}>
        {servicesData.map((item, index) => (
          <Box  
          key={index}
          index={index}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
    
  )
}

export default SectionWrapper(Services)