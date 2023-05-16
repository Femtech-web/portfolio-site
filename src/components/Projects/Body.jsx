import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { styles } from '../../utils/styles';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import { IndProject } from '../Home/Projects';
import { projectData } from '../../dummy';

const Body = () => {
  return (
    <>
    <div className='flex flex-col pb-[5%] md:px-[7%] px-[5%] pt-12 bg-darkMain'>
        <Navbar project={true}/>
        <div className="flex md:flex-row flex-col justify-center items-center 
            animate__animated animate__fadeInDown">
            <div className='flex flex-col max-w-[300px] my-[5rem] items-center justify-center flex-1'>
                <h1 className="futura font-bold tracking-widest text-7xl inline-block text-gray-200
                pb-2">Recent Projects</h1>
                <div className="h-0.5 w-[170px] -translate-x-4  bg-indigo-600 mt-2"></div>
            </div>
            <div className='flex flex-1 ml-[10%]'>
                <TypewriterComponent 
                    options={{
                        strings: ['Great User Interface', 'Amazing User Experience', 'Perfect Backend Logics'],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: styles.writer
                    }}
                />
            </div>
        </div>
        <div className="flex mt-8 flex-col">
            {projectData.map((item, index) => (
                <IndProject 
                    key={index} 
                    {...item} 
                    glass={true} 
                    index={index} 
                />
            ))}
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Body;