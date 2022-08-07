import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-logo-area">
                    <h1><Link to="/">Aid</Link></h1>
                </div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/">Donation</Link></li>
                    <li><Link to="/events">Events</Link></li>
                </ul>
                <div className="header-btn">
                    <Link to="/login">
                        <button className="btn-blue button">Login</button>
                    </Link>
                    <button className="btn-admin button">Admin</button>
                </div>
            </div>
        </header>
    );
};

export default Header;