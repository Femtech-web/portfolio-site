import React, { useState, createContext, useEffect } from "react";


export const ToggleContext = createContext();

const getMode = () => {
    if(localStorage.getItem('backMode')){
        return localStorage.getItem('backMode')
    } else{
        return 'false'
    }
}

export const ToggleProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(getMode());
    const [screenSize, setScreenSize] = useState(null);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
  
        return () => window.removeEventListener('resize', handleResize);
      }, []);
  
      useEffect(() => {
        if(screenSize <= 480){
          setMobile(true);
        } else{
          setMobile(false);
        }
      }, [screenSize])

    const handleClick = () => {
            setDarkMode((prev) => !prev)

            localStorage.setItem('backMode', darkMode);
    }

    return (<ToggleContext.Provider value={{handleClick, darkMode, mobile, }} >
     {children}
    </ToggleContext.Provider>)
}