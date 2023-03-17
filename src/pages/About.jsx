import React, { useContext } from 'react';
import { ToggleContext } from '../context/context';
import Body from '../components/About/Body';
import Values from '../components/About/Values';
import Contact from '../components/About/Contact';
import Footer from '../components/Home/Footer'

const About = () => {
    const {  darkMode } = useContext(ToggleContext);

  return (
    <div className='h-screen m-0'>
        <Body />
        <Values darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer />
    </div>
  )
}

export default About