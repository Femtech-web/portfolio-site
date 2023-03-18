import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsArrowLeft, BsSun } from 'react-icons/bs';
import { MdOutlineDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Showcase = ({ handleClick, darkMode }) => {
  return (
    <div className='relative flex flex-col overflow-hidden'>
     <div className="flex justify-between w-[98%] items-center absolute top-[3%] left-5 z-30">
        <div className="flex justify-start items-center mt-[1%]">
          <Link to={'/'}><AiFillHome fontSize={28} className='text-gray-200  
            hover:scale-75 transition-all' /></Link>
            <BsArrowLeft fontSize={28} className='text-gray-200 ml-2' />
        </div>
        {darkMode ? <BsSun fontSize={30} className=' mr-5
        cursor-pointer text-white hover:scale-75 transition-all' onClick={handleClick}/> 
        : <MdOutlineDarkMode fontSize={30} className=' mr-5
        cursor-pointer text-white hover:scale-75 transition-all' onClick={handleClick}/>}
      </div>
        <div className="flex md:flex-row flex-col md:h-[50vh] h-[100vh]">
            <div className='flex justify-center w-full mt-[18%] md:mt-0  items-center flex-col md:w-[50%]'>
                <h1 className='text-5xl md:text-7xl futura mb-3'>Adeyemi Femi</h1>
                <h3 className=' text-4xl futura'>Fullstack Developer</h3>
                <div className="h-0.5 w-[170px] -translate-x-4  bg-indigo-600 mt-2"></div>
            </div>
            <img src="/images/pic.jpg" alt="" className='grayscale w-[100%] md:h-auto
             h-full md:mt-0 mt-[10%]  md:w-[25%] ml-0 md:ml-[19%]'/>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
    </div>
  )
}

export default Showcase