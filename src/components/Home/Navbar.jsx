import React, { useState } from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';
import { MdOutlineDarkMode } from 'react-icons/md';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSun , 
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsTwitter  } from 'react-icons/bs'
import Logo from './Logo';

const NavItem = ({title, size, animation }) => {
    return <li className={`${size} ${animation} text-2xl md:my-0 md:text-xl gt 
    cursor-pointer px-4 hover:text-3xl hover:md:text-2xl transition-all`}>{title}</li>
}

const Navbar = ({ handleClick, darkMode, project }) => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={`flex align-center md:justify-evenly justify-between py-7  
        ${darkMode || project ? 'bg-[#0F1724] text-gray-200' : 'bg-[#fff]' } `}>
        <div className='flex items-center justify-between md:justify-evenly w-[70%]'>
            <div className=" 
                flex-initial justify-center items-center ml-4 md:ml-0">
                <Link to={'/'}>
                <Logo />
                </Link>
            </div>

            <div className='md:flex items-center hidden'>
                <ul className='md:flex  justify-center items-center'>
                {['Home','About me','Projects','Resume'].map((item, i) => {
                    return item === 'Home' ?
                    <Link to={'/'}><NavItem key={i} title={item}/></Link>
                    : <Link to={`/${item.split(' ').join('')}`}><NavItem key={i} title={item}/></Link> 
                })}
                </ul>   
            </div>
        </div>
        <div className='w-[30%] md:flex hidden justify-start items-center'>
            {darkMode ? <BsSun fontSize={30} className='mx-[5rem]
            cursor-pointer hover:scale-75 transition-all' onClick={handleClick}/> 
            : <MdOutlineDarkMode fontSize={30} className='mx-[5rem]
            cursor-pointer hover:scale-75 transition-all' onClick={handleClick}/>}
            <a href="https://wa.me/08149118596" target="_blank" rel="noopener noreferrer">
              <button className=' justify-center items-center transition-all flex
              bg-blue-400 rounded-md px-4 py-2 text-white gt hover:bg-blue-500 tracking-widest cursor-pointer'>Hire me
              </button>
            </a>
        </div>

        <div className="flex relative">
          {toggleMenu 
          ? <AiOutlineClose fontSize={28} 
          className={`${darkMode || project ? 'text-gray-200' : 'text-black'} md:hidden cursor-pointer mr-3`}
          onClick={(e) => setToggleMenu(false)} />
           : <HiMenuAlt4 fontSize={28} 
           className={`${darkMode || project ? 'text-gray-200' : 'text-black'}  md:hidden cursor-pointer mr-3`}
            onClick={(e) => setToggleMenu(true)}/>}
      </div>
      {toggleMenu && 
      <ul
      className='z-10 fixed top-0 -right-2 p-3 md:w-[70vw] w-[80vw] h-screen shadow-2xl list-none md:hidden
      flex flex-col justify-start items-end rounded-md bg-[#0F1724] text-white animate-slide
      '
      >
      <div className="flex justify-between items-center mb-8">
        <li className='text-xl  my-4'>
            <AiOutlineClose onClick={(e) => setToggleMenu(false)}/>
        </li>
        {darkMode ? <BsSun fontSize={30} className='mx-[5rem]
            cursor-pointer text-white hover:scale-75 transition-all' onClick={handleClick}/> 
            : <MdOutlineDarkMode fontSize={30} className='mx-[5rem]
            cursor-pointer text-white hover:scale-75 transition-all' onClick={handleClick}/>}
      </div>
        {['Home','About me','Projects','Resume'].map((item, index) => { 
          return item === 'Home' ?
              <Link to={'/'}><NavItem key={index} title={item} size='my-6' 
                animation='animate__animated animate__fadeInUp'/></Link>
              : <Link to={`/${item.split(' ').join('')}`}><NavItem key={index} title={item} size='my-6'
                animation='animate__animated animate__fadeInUp'
              /></Link>
           }
           
          )}
          <div className="flex justify-center w-full items-center 
          absolute bottom-[10%]  pl-10">
            <a href="https://web.facebook.com/profile.php?id=100007274899219" 
              target="_blank" rel="noopener noreferrer">
             <BsFacebook className='hover:scale-75 transition-all mr-6 cursor-pointer text-white' fontSize={24}/>
            </a>
            <a href="https://www.instagram.com/bossfemzy" target="_blank" rel="noopener noreferrer">
             <BsInstagram className=' hover:scale-75 transition-all mr-6 cursor-pointer text-white' fontSize={24}/>
            </a>
            <a href="https://twitter.com/Fem_webDev" target="_blank" rel="noopener noreferrer">
              <BsTwitter className=' hover:scale-75 transition-all mr-6  cursor-pointer text-white' fontSize={24}/>
            </a>
            <a href="https://wa.me/08149118596" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp className=' hover:scale-75 transition-all mr-6 cursor-pointer text-white' fontSize={24}/>
            </a>
          </div>
      </ul>
      } 
    </nav>
        
  )
}

export default Navbar