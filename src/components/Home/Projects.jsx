import React from 'react';
import Slider from  "react-slick";
import { motion } from 'framer-motion';
import { MdSwipe } from 'react-icons/md';
import { textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import { projectData } from '../../dummy';
import IndProject from './IndProject';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styles } from '../../utils/styles';


const style = {
    container: 'px-[3%] py-[2%] bg-darkMain relative',
    swipe: 'absolute md:top-8 md:right-8 top-4 right-4 text-white flex justify-center'
};


const Projects = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        initialSlide: 0,
        arrows: false
    };
    
  return (
    <div className={`${styles.flexY} ${style.container}`}>
        <motion.div
            variants={textVariant(0.2)} 
            className={styles.headingCont}>
            <h1 className={styles.headingH1}>Recent Projects</h1>
            <div className={styles.line}></div>
        </motion.div>

        <div>
            <Slider {...settings}>
                {projectData.map((item, index) => (
                    <IndProject 
                        key={index} 
                        {...item} 
                        index={index}
                    />
                 ))}
            </Slider>
        </div> 
        <div className={style.swipe}>
            <MdSwipe fontSize={20} className='mr-2'/>
            <p className='text-sm gt'>swipe</p>
        </div>
    </div>
  )
}

export default SectionWrapper(Projects)
