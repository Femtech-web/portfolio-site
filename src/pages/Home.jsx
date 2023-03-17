import React, { useContext } from 'react';
import { ToggleContext } from '../context/context';
import Navbar from '../components/Home/Navbar';
import Body from '../components/Home/Body';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Skills from '../components/Home/Skills';
import Projects from '../components/Home/Projects';
import Contact from '../components/Home/Contact';
import Footer from '../components/Home/Footer';


const Home = () => {
    const { handleClick, darkMode } = useContext(ToggleContext);
    
  return (
    <div className='h-screen'>
        <Navbar handleClick={handleClick} darkMode={darkMode}/>
        <Body darkMode={darkMode}/>
        <About darkMode={darkMode}/>
        <Services />
        <Skills darkMode={darkMode}/>
        <Projects />
        <Contact darkMode={darkMode}/>
        <Footer />
    </div>
  )
}

export default Home