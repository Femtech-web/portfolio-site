import React, { useContext } from 'react';
import { ToggleContext } from './context/context';
import {HashRouter as Router, Route, Routes } from "react-router-dom";
import { motion, useScroll, useSpring } from 'framer-motion';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import ScrollBar from './components/elements/ScrollBar';


function App() {
  const { darkMode } = useContext(ToggleContext);
  const progress = 'bg-indigo-600 origin-[0%] w-full h-[3px] fixed z-50 top-0 left-0';

  const { scrollYProgress } = useScroll(useSpring({
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
}));

  return (
    <div className='relative'>
    {darkMode 
          ? <motion.div  style={{scaleX: scrollYProgress}} className={progress} /> 
          : <motion.div  style={{scaleX: scrollYProgress}} className={progress}/>
          }
      <Router basename='/'>
          <ScrollBar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/Aboutme" element={<About />}/>
            <Route exact path="/projects" element={<Projects />}/>
            <Route exact path="/Resume" element={<Resume />}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
