import React, { useState, createContext } from "react";


export const ToggleContext = createContext();

export const ToggleProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
            setDarkMode((prev) => !prev)
    }

    return (<ToggleContext.Provider value={{handleClick, darkMode}} >
     {children}
    </ToggleContext.Provider>)
}