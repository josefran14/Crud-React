import {useState} from 'react'

export const useModeDark = () => {

  const [darkMode, setDarkMode] = useState(false)

  const darkStyle = {
    backgroundColor: darkMode ? "#1e1e1e" : "#fff",
    color: darkMode ? "#fff" : "black"
  }

  const borderDarkStyle ={
    backgroundColor: darkMode ? "#E9EBEC" : "white"
  }

  const handleDarkMode = () =>{
    setDarkMode(!darkMode)
  }

  return{
    darkMode,
    darkStyle,
    handleDarkMode,
    borderDarkStyle
  }

}
