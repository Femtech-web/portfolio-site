import React, { useContext } from 'react';
import { ToggleContext } from '../../context/context';
import { Link } from 'react-router-dom';
import { MdOutlineDarkMode } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { socialData } from '../../dummy';
import { BsArrowLeft,BsSun } from 'react-icons/bs'
import { aboutMe } from '../../dummy';
    


const Overlay = ({ icon }) => {
    return (
        <div className='flex justify-center hover:-translate-y-4 transition-all items-center p-4 
        rounded-full bg-slate-700 w-[50px] h-[50px] mr-3'>{ icon }</div>
    )
}

const body = () => {
    const { handleClick, darkMode } = useContext(ToggleContext);

  return (
    <div className='flex flex-col py-[15%] px-[7%] md:py-[5%] bg-[#0F1724]'>
            <div className='flex justify-between w-full items-center md:mb-[3%] mb-[15%]'>
                <div className="flex justify-start items-center mb-[3%]">
                    <Link to={'/'}><AiFillHome fontSize={28} className='text-gray-200  
                        hover:scale-75 transition-all' /></Link>
                    <BsArrowLeft fontSize={28} className='text-gray-200 ml-2' />
                </div>
                {darkMode ? <BsSun fontSize={30} className=' mr-3
                cursor-pointer text-white hover:scale-75 transition-all' onClick={handleClick}/> 
                : <MdOutlineDarkMode fontSize={30} className=' mr-3
                cursor-pointer text-white hover:scale-75 transition-all' onClick={handleClick}/>}
            </div>
        <div className="flex md:flex-row flex-col md:static relative ">
            <div className="flex-col flex flex-1 md:pr-9 pr:0 md:relative static">
                <div className="flex justify-center items-center ">
                    <h1 className='futura text-gray-200 text-7xl'>About Me</h1>
                    <div className='h-1 w-[100px] bg-indigo-600 ml-2'></div>
                </div>
                <div className='mt-[10%] md:mb-0 mb-[10%]'>
                    <p className='gt text-gray-200 text-xl md:text-lg '>{aboutMe.text}</p>
                </div>
                <div  className='flex w-full justify-center
                    md:justify-start absolute bottom-0 md:bottom-6 z-10'>
                        {socialData.map((item, index) => (
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <Overlay icon={item.icon} key={index}/>
                            </a>
                        ))}
                </div>
            </div>
            <div className='flex-1'>
                <img src="images/pic.jpg" alt="my-picture" className='grayscale'/>
            </div>
        </div>
    </div>
  )
}

export default body