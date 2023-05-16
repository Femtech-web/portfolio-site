import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import { MdOutlineDarkMode } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSun } from 'react-icons/bs'
import { homeSocialIcons } from '../../dummy';

const MobileNavbar = ({ setToggleMenu, handleClick, darkMode }) => {
  return (
    <ul
        className='z-10 fixed top-0 -right-2 p-3 md:w-[70vw] 
        w-[80vw] h-screen shadow-2xl list-none md:hidden
        flex flex-col justify-start items-end rounded-md 
        bg-darkMain text-white animate-slide'
      >
        <div className="flex justify-between items-center mb-8">
          <li className='text-xl  my-4'>
              <AiOutlineClose onClick={(e) => setToggleMenu(false)} className='cursor-pointer'/>
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
          {homeSocialIcons.map((item) => (
            <a href={item.url}
              target="_blank" rel="noopener noreferrer"
              style={{marginRight: '1.5rem', color: 'white' }}>
              {item.icon}
            </a>
          ))}
        </div>
      </ul>
  )
}

export default MobileNavbar