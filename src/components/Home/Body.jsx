import React from 'react';
import 'animate.css';
import { BsCursorFill, 
BsDownload, 
BsFacebook,
BsInstagram,
BsWhatsapp,
BsTwitter  } from 'react-icons/bs';

const Body = ({ darkMode}) => {
  return (
    <div className={`${darkMode && 'bg-[#0F1724]'} flex items-start w-full md:h-[89vh] md:py-0 md:pt-0 pt-[15%]`}>
        <div className={`flex  md:flex-row flex-col justify-evenly animate__animated animate__fadeIn
            items-start md:items-center pl-4 py-[10%] md:pl-[9%]
            text-left ${darkMode ? 'bg-[#0F1724] text-gray-200' : 'bg-[#fff]' }`}>
            <div className='flex flex-col md:w-[50%] w-full md:pt:0 '>
                <h1 className='futura font-black md:text-5xl text-6xl 
                    bg-gradient-to-r from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent mb-3'>Hello,</h1>
                <p className='futura font-black md:text-5xl text-6xl
                    bg-gradient-to-r from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent mb-3'>I'm Adeyemi Oluwafemi</p>
                <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} futura font-black 
                    text-5xl tracking-wider mb-4`}>Fullstack Developer
                </p>
                <p className={`${darkMode ? 'text-gray-200' : 'text-gray-600 mr-2'} 
                    gt md:text-xl text-[1.4rem]`}>Skillful Frontend and backend Web Developer. specialize in competent 
                    web development skills with focus on collaboration communication and passion.
                </p>
                <div className='flex mt-4 pr-4'>
                    <a href="https://wa.me/08149118596" target="_blank" rel="noopener noreferrer">
                        <button className='flex items-center gt md:text-xl text-md mr-3 shadow-md transition-all
                            bg-indigo-500 px-3 shadow-indigo-400 py-2 rounded-md hover:bg-indigo-400 text-white'>Get in touch
                            <BsCursorFill className='ml-2'/>
                        </button>
                    </a>
                    <a href="https://drive.google.com/file/d/1N1iolHmVkJUhUczOkIi2-ODEtAU9eHCw/view?usp=share_link" target="_blank" rel="noopener noreferrer">
                        <button className='flex gt  items-center md:text-xl text-md border-2 px-3 py-2 hover:text-white transition-all
                            rounded-md shadow-md border-indigo-500 hover:bg-blue-400 hover:border-blue-400 '>Download cv
                            <BsDownload className='ml-2'/>
                        </button>
                    </a>
                </div>
            </div>
            <div className=' w-full md:w-[40%] relative h-[50vh] md:my-0 my-[11%] left-0'>
                <div className="border-2  shadow-indigo-500 shadow-sm w-[330px] h-[330px]
                     border-indigo-200 rounded-full absolute md:left-0 
                     md:-top-[5%]  top-[10%] md:right-[10%] right-[4%] md:h-[400px] md:w-[400px]"></div>
                <img src="/images/pic.jpg" alt="" className='grayscale 
                    h-100 w-[40%] rounded-full absolute md:-top-[10%] top-[7%] md:left-[1%] left-[15%]'/>
                <div className=" bg-gradient-to-r from-[#9060DA] to-[rgb(40,162,207)] w-[130px] h-[130px]
                    rounded-full absolute  md:-bottom-[20%] -bottom-[10%] md:right-[25%] right-[10%] md:h-[150px] md:w-[150px]"></div>
            </div>
            <div className="md:flex hidden  flex-col justify-evenly ">
                <a href="https://web.facebook.com/profile.php?id=100007274899219" target="_blank" rel="noopener noreferrer">
                    <BsFacebook className='mb-6 hover:scale-75 transition-all cursor-pointer' fontSize={24}/>
                </a>
                <a href="https://www.instagram.com/bossfemzy" target="_blank" rel="noopener noreferrer"> 
                    <BsInstagram className='mb-6 hover:scale-75 transition-all cursor-pointer' fontSize={24}/>
                </a>
                <a href="https://twitter.com/Fem_webDev" target="_blank" rel="noopener noreferrer">
                    <BsTwitter className='mb-6 hover:scale-75 transition-all cursor-pointer' fontSize={24}/>
                </a>
                <a href="https://wa.me/08149118596" target="_blank" rel="noopener noreferrer">
                    <BsWhatsapp className='mb-6 hover:scale-75 transition-all cursor-pointer' fontSize={24}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Body