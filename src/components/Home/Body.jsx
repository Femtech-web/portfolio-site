import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, zoomIn } from '../../utils/motion';
import { styles } from '../../utils/styles';
import { homeSocialIcons } from '../../dummy';
import { ToggleContext } from '../../context/context';
import 'animate.css';
import { BsCursorFill, BsDownload } from 'react-icons/bs';

const Body = ({ darkMode}) => {
    const { mobile } = useContext(ToggleContext);

  return (
    <div className={`${darkMode ? 'bg-darkMain md:pt-[15%] pt-[40%]' 
        : 'md:pt-0 pt-[20%]'} flex items-center w-full md:h-[89vh]`}
    >
        <div className={`flex  md:flex-row flex-col justify-evenly animate__animated animate__fadeIn 
            items-start md:items-center pl-4 py-[10%] md:pl-[9%]
            text-left ${darkMode ? 'bg-darkMain text-gray-200' : 'bg-white' }`}
        >
            <div className='flex flex-col md:w-[50%] w-full md:h-auto h-[70vh] '>
                <h1 className={`${styles.gradient} futura font-black text-5xl mb-3`}
                >
                    Hello,
                </h1>
                <p className={`${styles.gradient} futura font-black text-5xl mb-3`}
                >
                    I'm Adeyemi Oluwafemi
                </p>
                <p className={`${darkMode ? 'text-gray-200' 
                    : 'text-gray-800'} futura font-black 
                    md:text-4xl text-3xl  tracking-wider mb-4`}
                >
                    Fullstack Developer
                </p>
                <p className={`${darkMode ? 'text-gray-200' 
                    : 'text-gray-600 mr-2'} gt md:text-xl text-base`}
                >
                    Skillful Frontend and backend Web Developer. specialize in competent 
                    web development skills with focus on collaboration communication and passion.
                </p>
                <div className='flex mt-4 pr-4'>
                    <a href="https://wa.me/08149118596" 
                        target="_blank" rel="noopener noreferrer"
                    >
                        <button className='flex items-center gt md:text-xl
                         text-md mr-3 shadow-md transition-all bg-indigo-500 
                         px-3 shadow-indigo-400 py-2 rounded-md
                        hover:bg-indigo-400 text-white'
                        >
                            Get in touch
                            <BsCursorFill className='ml-2'/>
                        </button>
                    </a>
                    <a href="https://drive.google.com/file/d/140w2V_tmiIN09DSuxN7JSwdRUCgEBRMM/view?usp=drivesdk" 
                        target="_blank" rel="noopener noreferrer"
                    >
                        <button className='flex gt  items-center md:text-xl 
                            text-md border-2 px-3 py-2 hover:text-white transition-all
                            rounded-md shadow-md border-indigo-500 hover:bg-blue-400
                             hover:border-blue-400 '
                        >
                            Download cv
                            <BsDownload className='ml-2'/>
                        </button>
                    </a>
                </div>
            </div>

           {!mobile ? 
            <div  
                className=' w-full md:w-[40%] relative h-[50vh] md:my-0 my-[11%] left-0'>
                <div className="border-2  shadow-indigo-500 shadow-sm w-[330px] h-[330px]
                     border-indigo-200 rounded-full absolute md:left-0 
                     md:-top-[5%]  top-[10%] md:right-[10%] right-[4%] md:h-[400px] md:w-[400px] animate-spin"
                >
                </div>
                <motion.img 
                    src="/images/pic.jpg" 
                    alt="profile image" 
                    className='grayscale h-100 w-[40%] rounded-full 
                    absolute md:-top-[10%] top-[7%] md:left-[1%] left-[15%]'
                />
                <div className="animate-spin bg-gradient-to-r from-[#9060DA] to-[rgb(40,162,207)] w-[130px]
                 h-[130px] rounded-full absolute  md:-bottom-[20%] -bottom-[10%] md:right-[25%] 
                 right-[10%] md:h-[150px] md:w-[150px]"
                ></div>
            </div> :
            <motion.div
                variants={staggerContainer} 
                initial="hidden"
                whileInView="show"
                className=' flex justify-center items-center pt-[15%] py-[10%] px-[5%]'>
                <div className={`w-[100%] rounded-full relative 
                    ${darkMode ? 'border-slate-700' : 'border-indigo-500'} 
                    border-[10px] h-[100%] flex items-center justify-center`}
                >
                    <motion.img 
                        variants={zoomIn(0.1, 0.7)} 
                        src="/images/pic.jpg" 
                        alt="profile image" 
                        className='grayscale h-100 w-[100%] rounded-full'
                    />
                </div>
            </motion.div>}

            <div className="md:flex hidden  flex-col justify-evenly">
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