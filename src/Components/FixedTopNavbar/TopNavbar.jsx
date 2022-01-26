import React, { useState } from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';

 /* this is a responsive top fixed navbar with full width dropdown menu on smaller screens*/

const ResponsiveTopNavbar = () => {

    const [checked, setChecked] = useState(false);
    const ShowNavbar = () => {
        var uls = document.querySelector(".links");
        checked ? uls.style.bottom = "100%" : uls.style.bottom = 0;
        checked ? setChecked(false) : setChecked(true);
    }

    return ( 
        <>
        <nav>
            <div className='navbar_logo'><strong>Navbar Logo</strong></div>
                <ul className="links">
                    <li><a href="#home" className="active">homepage</a></li>
                    <li><a href="#about">home</a></li>
                    <li><a href="#work">about</a></li>
                    <li><a href="#projects">work</a></li>
                    <li><a href="#contactus">contactus</a></li>
                    <li><a href="#profile"><i className="fas fa-user-circle fa-lg"></i></a></li>
                </ul>
                <div className='burger_menu'>
                    {checked ? <i className="fas fa-times fa-lg" onClick={ShowNavbar}></i> : <i className="fas fa-bars fa-lg" onClick={ShowNavbar}></i>}
                </div>
        </nav>
        </>
     );
}
 
export default ResponsiveTopNavbar;