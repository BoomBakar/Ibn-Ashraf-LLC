import React, { useState } from 'react';
import NavbarMenu from './NavbarMenu';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="logo-section">
                <img src="/ibnlogo.png" alt="ibn-e-ashraf logo" className="logo" />
                <h1 className="company-title">Ibn Ashraf Technical Services LLC</h1>
            </div>

            <div
                className={`burger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>

            <NavbarMenu isOpen={menuOpen} />
        </header>
    );
}

export default Header;
