import React from "react"
import img1 from './Pics/full.png'

export default function Navbar(props)
{
    return(
        <nav className={props.darkMode ? "dark": ""}>
            <img src={img1} className="nav-icon" />
            <h3 className="nav-logo">ReactFacts</h3>
            <div className="toggler">
                <p className="toggler-light">Light</p>
                <div 
                   className="toggler-slider" 
                   onClick={props.toggleDarkMode}>
                </div>
                <div className="toggler-slider-circle"></div>
                <p className="toggler-dark">Dark</p>
            </div>
           
        </nav>
    )
}