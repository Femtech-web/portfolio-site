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
    <div className='flex flex-col px-[3%] py-[2%] bg-darkMain relative'>
        <motion.div
            variants={textVariant(0.2)} 
            className='flex flex-col max-w-[300px] mb-[5rem] items-center justify-center'>
            <h1 className="futura font-bold tracking-widest text-4xl inline-block text-gray-200
            pb-2 ">Recent Projects</h1>
            <div className="h-0.5 w-[170px] -translate-x-4  bg-indigo-600 mt-2"></div>
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
        <div className='absolute md:top-8 md:right-8 top-4 right-4 
            text-white flex justify-center'>
            <MdSwipe fontSize={20} className='mr-2'/>
            <p className='text-sm gt'>swipe</p>
        </div>
    </div>
  )
}

export default SectionWrapper(Projects)
