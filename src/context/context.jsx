import React, { useState, createContext, useEffect } from "react";


export const ToggleContext = createContext();

export const ToggleProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);
    const [screenSize, setScreenSize] = useState(null);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
      if(screenSize <= 580){
        setMobile(true);
      } else{
        setMobile(false);
      }
    }, [screenSize]);

    useEffect(() => {
      setDarkMode(JSON.parse(localStorage.getItem('backMode')))
    }, [])

    const handleClick = () => {
            setDarkMode((prev) => !prev);

          localStorage.setItem('backMode', !darkMode);
    }

    return (<ToggleContext.Provider value={{handleClick, darkMode, mobile }} >
     {children}
    </ToggleContext.Provider>)
}