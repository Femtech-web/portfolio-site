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
import { styles } from '../../utils/styles';


const style = {
  container: (darkMode, project) => `py-7 px-[3%] ${darkMode || project ? 'bg-darkMain text-gray-200 fixed z-20 top-0 w-full md:px-0 left-0': 'bg-[#fff]'}`,
  navCont: 'md:flex items-center hidden',
  ul: 'md:flex  justify-center items-center',
  fadeDown: 'animate__animated animate__fadeInDown',
  iconCont: 'w-[30%] md:flex hidden justify-start items-center',
  icon1: 'mx-[5rem] cursor-pointer hover:scale-75 transition-all',
  btn: 'transition-all bg-blue-400 rounded-md px-4 py-2 text-white gt hover:bg-blue-500 tracking-widest cursor-pointer',
  toggleBtn: (darkMode, project) => `${darkMode || project ? 'text-gray-200' : 'text-black'} md:hidden cursor-pointer mr-3`
};

const Navbar = ({ handleClick, darkMode, project }) => {
  const navigations = ['Home','About me','Projects','Resume'];
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={`${styles.flexBtw3} ${style.container(darkMode, project)}`}>
      <div className={`${styles.flexBtw3} w-[70%]`}>
        <div className='ml-4 md:ml-0'>
          <Link to={'/'}>
            <Logo />
          </Link>
        </div>

        <div className={style.navCont}>
          <ul className={style.ul}>
            {navigations.map((item, i) => {
              return item === 'Home' 
              ? <Link to={'/'}>
                  <NavItem 
                    key={i} 
                    title={item}
                    animation={style.fadeDown} 
                  />
                </Link>
              : <Link to={`/${item.split(' ').join('')}`}>
                  <NavItem 
                    key={i} 
                    title={item}
                    animation={style.fadeDown} 
                  />
                </Link> 
            })}
          </ul>   
        </div>
      </div>

      <div className={style.iconCont}>
        {darkMode 
        ? <BsSun 
            fontSize={30} 
            className={style.icon1} 
            onClick={handleClick}
          /> 
        : <MdOutlineDarkMode 
            fontSize={30} 
            className={style.icon1}  
            onClick={handleClick}
          />
        }
        <a href="https://wa.me/08149118596" target="_blank" rel="noopener noreferrer">
          <button className={`${styles.flexCenter} ${style.btn}`}
          >
            Hire me
          </button>
        </a>
      </div>

      <div className="flex relative">
        {toggleMenu 
        ? <AiOutlineClose fontSize={28} 
          className={style.toggleBtn(darkMode, project)}
          onClick={(e) => setToggleMenu(false)} />
        : <HiMenuAlt4 fontSize={28} 
          className={style.toggleBtn(darkMode, project)}
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