import React from "react"
import Navbar from "./main/Navbar"
import Main from "./main/main"

export default function App()
{
    const [darkMode, setDarkMode] = React.useState(true)
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
    return(
        <div className="container">
            <Navbar  darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}  