import React from 'react';
import {HashRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import ScrollBar from './components/elements/ScrollBar';


function App() {

  return (
    <>
      <Router basename='/'>
          <ScrollBar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/Aboutme" element={<About />}/>
            <Route exact path="/projects" element={<Projects />}/>
            <Route exact path="/Resume" element={<Resume />}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
