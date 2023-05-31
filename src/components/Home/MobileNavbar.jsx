import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import { MdOutlineDarkMode } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSun } from 'react-icons/bs'
import { homeSocialIcons } from '../../dummy';
import { styles } from '../../utils/styles';


const style = {
  container: 'z-10 fixed top-0 -right-2 p-3 md:w-[70vw] w-[80vw] h-screen shadow-2xl list-none md:hidden flex-col rounded-md bg-darkMain text-white animate-slide',
  btn: 'mx-[5rem] cursor-pointer hover:scale-75 transition-all', 
  fadeUp: 'animate__animated animate__fadeInUp',
  icons: 'w-full absolute bottom-[10%] pl-10'
};


const MobileNavbar = ({ setToggleMenu, handleClick, darkMode }) => {
  const navigations = ['Home','About me','Projects','Resume'];

  return (
    <ul className={`${styles.flexEnd1} ${style.container}`}>
      <div className={`${styles.flexBtw} mb-8`}>
        <li className='text-xl  my-4'>
          <AiOutlineClose 
            onClick={(e) => setToggleMenu(false)}
              className='cursor-pointer'
          />
        </li>
        {darkMode 
        ? <BsSun fontSize={30} 
            className={style.btn}
            onClick={handleClick}
          /> 
        : <MdOutlineDarkMode fontSize={30} 
           className={style.btn}
            onClick={handleClick}
          />
        }
      </div>
      {navigations.map((item, index) => { 
        return item === 'Home' 
        ? <Link to={'/'}>
            <NavItem 
              key={index} 
              title={item} 
              size='my-6' 
              animation={style.fadeUp}
            />
          </Link>
        : <Link to={`/${item.split(' ').join('')}`}>
            <NavItem 
              key={index} 
              title={item} 
              size='my-6'
              animation={style.fadeUp}
            />
          </Link>
      })}
      <div className={`${styles.flexCenter} ${style.icons}`}>
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