import React from "react";
import logo from "../../logo.svg"
import './Header.css'
    
    const Header = () => {
      return (
        <header className='header-class'>
            <div className='wrapper'>
            <img src = {logo} alt= "logo" className='logo'/>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
            </nav>
            </div>
        </header>
      )
    }
    
    export default Header;
