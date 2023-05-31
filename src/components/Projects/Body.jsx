import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { styles } from '../../utils/styles';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import  IndProject  from '../Home/IndProject';
import { projectData } from '../../dummy';


const style = {
    container: 'flex flex-col pb-[5%] md:px-[7%] px-[5%] pt-12 bg-darkMain',
    anime: 'animate__animated animate__fadeInDown',
};


const Body = () => {
    const features = ['Great User Interface', 'Amazing User Experience', 'Perfect Backend Logics'];
    
  return (
    <>
    <div className={style.container}>
        <Navbar project={true}/>
        <div className={`${styles.flexMobile2} ${styles.flexCenter} ${style.anime} `}>
            <div className={`${styles.headingCont} my-[5rem]`}>
                <h1 className={`${styles.headingH1} text-7xl`}>Recent Projects</h1>
                <div className={styles.line}></div>
            </div>
            <div className='flex flex-1 ml-[10%]'>
                <TypewriterComponent 
                    options={{
                        strings: features,
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