import React, { useContext } from 'react';
import { ToggleContext } from '../context/context';
import Showcase from '../components/Resume/Showcase';
import Contact from '../components/Resume/Contact';
import Body from '../components/Resume/Body';
import Footer from '../components/Home/Footer';

const Resume = () => {
  const { handleClick, darkMode} = useContext(ToggleContext);

  return (
    <div className='h-screen'>
        <Showcase darkMode={darkMode} handleClick={handleClick}/>
        <Contact darkMode={darkMode}/>
        <Body darkMode={darkMode}/>
        <Footer darkMode={darkMode}/>
    </div>
  )
}

export default Resume