import React from 'react';
import './NavbarMenu.css';

function NavbarMenu({ isOpen }) {
    return (
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#footer">Contact</a>
        </nav>
    );
}

export default NavbarMenu;
