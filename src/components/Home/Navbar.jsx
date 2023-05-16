import React, { useState } from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import MobileNavbar from './MobileNavbar';
import { MdOutlineDarkMode } from 'react-icons/md';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSun } from 'react-icons/bs'
import Logo from './Logo';


const Navbar = ({ handleClick, darkMode, project }) => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={`flex align-center md:justify-evenly justify-between py-7 px-[3%] 
      ${darkMode || project ? 'bg-darkMain text-gray-200 fixed z-20 top-0 w-full md:px-0 left-0'
       : 'bg-[#fff]' } `}>
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
                <Link to={'/'}><NavItem key={i} title={item}
                  animation='animate__animated animate__fadeInDown' />
                </Link>
                : 
                <Link to={`/${item.split(' ').join('')}`}><NavItem key={i} title={item}
                  animation='animate__animated animate__fadeInDown' />
                </Link> 
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
          bg-blue-400 rounded-md px-4 py-2 text-white gt 
          hover:bg-blue-500 tracking-widest cursor-pointer'
          >
            Hire me
          </button>
        </a>
      </div>

      <div className="flex relative">
        {toggleMenu 
        ? <AiOutlineClose fontSize={28} 
          className={`${darkMode || project ? 'text-gray-200' 
          : 'text-black'} md:hidden cursor-pointer mr-3`}
          onClick={(e) => setToggleMenu(false)} />
        : <HiMenuAlt4 fontSize={28} 
          className={`${darkMode || project ? 'text-gray-200' 
          : 'text-black'}  md:hidden cursor-pointer mr-3`}
          onClick={(e) => setToggleMenu(true)}/>}
      </div>
      {toggleMenu && 
        <MobileNavbar 
          setToggleMenu={setToggleMenu} 
          handleClick={handleClick} 
          darkMode={darkMode}
        />
      } 
    </nav>
        
  )
}

export default Navbar