import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-logo-area">
                    <h1><a href="#">Aid</a></h1>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Donation</a></li>
                    <li><a href="#">Events</a></li>
                </ul>
                <div className="header-btn">
                    <button className="btn-blue button">Register</button>
                    <button className="btn-admin button">Admin</button>
                </div>
            </div>
        </header>
    );
};

export default Header;