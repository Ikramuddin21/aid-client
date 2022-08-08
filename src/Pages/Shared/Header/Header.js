import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
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
                    {user.email && <span className="user-name">{user.displayName}</span>}
                    {
                        user.email ?
                            <button onClick={logOut} className="btn-blue button">Logout</button> :
                            <Link to="/login">
                                <button className="btn-blue button">Login</button>
                            </Link>
                    }
                    <button className="btn-admin button">Admin</button>
                </div>
            </div>
        </header>
    );
};

export default Header;