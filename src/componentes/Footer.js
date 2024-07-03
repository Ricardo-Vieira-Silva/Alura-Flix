import React from 'react';
import logo from '../assets/LogoMain.png';

function Footer() {
    return (
        <footer className="footer" >
           <img src={logo} alt='Logo' className="footer-logo" />
        </footer>
   );
}

export default Footer;