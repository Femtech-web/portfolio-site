import React, { useContext } from 'react';
import { ToggleContext } from '../../context/context';
import { Link } from 'react-router-dom';
import { MdOutlineDarkMode } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { BsGithub, BsFacebook,
BsInstagram, BsArrowLeft,
BsWhatsapp, BsSun,
BsTwitter } from 'react-icons/bs'


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
                    <p className='gt text-gray-200 text-xl md:text-lg '>My Name is Akolade Oluwafemi Adeyemi. I am a Fullstack Developer.
                    My Journey into Web Development started in January 2022 and since then I have never been the same.
                    I have been through many improvement phases and since this is a Passion, I have been able to come out
                    out of them all. I have undertaken many projects and have been able to successfully complete them all.
                    I am a Determined professional with planning and implementing high quality websites and web apps. 
                    Skilled in frontend and backend web technologies. Proven abilities to quickly understand requirements, 
                    create innovative solutions and complete projects within provided deadlines.</p>
                </div>
                <div  className='flex w-full justify-center md:justify-start absolute bottom-0 md:bottom-6 z-10'>
                    <a href="https://github.com/Femtech-web" target="_blank" rel="noopener noreferrer">
                        <Overlay icon={ <BsGithub fontSize={27} className='text-gray-200 cursor-pointer'/> }/>
                    </a>
                    <a href="https://web.facebook.com/profile.php?id=100007274899219" target="_blank" rel="noopener noreferrer">
                        <Overlay icon={ <BsFacebook fontSize={27} className='text-gray-200 cursor-pointer'/> }/>
                    </a>
                    <a href="https://www.instagram.com/bossfemzy" target="_blank" rel="noopener noreferrer">
                        <Overlay icon={ <BsInstagram fontSize={27} className='text-gray-200 cursor-pointer'/> }/>
                    </a>
                    <a href="https://twitter.com/Fem_webDev" target="_blank" rel="noopener noreferrer">
                        <Overlay icon={ <BsTwitter fontSize={27} className='text-gray-200 cursor-pointer'/> }/>
                    </a>
                    <a href="https://wa.me/08149118596" target="_blank" rel="noopener noreferrer">
                        <Overlay icon={ <BsWhatsapp fontSize={27} className='text-gray-200 cursor-pointer'/> }/>
                    </a>
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