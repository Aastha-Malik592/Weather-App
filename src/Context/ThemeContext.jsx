import React from 'react'
import { createContext,useState} from 'react';

export const ThemeContext = createContext();
const ThemeProvider=({children})=>{
const [darkMode,setDarkmode]=useState(false)
const toggleTheme=()=>{
setDarkmode(!darkMode)
};



  return (
    <div>
       <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  

    </div>
  )
}


export default ThemeProvider
