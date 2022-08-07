import React from 'react';
import './AidUser.css';

const AidUser = ({ user }) => {
    return (
        <div className="aid-user">
            <img src={user.img} alt="" />
            <div className="aid-user-text">
                <h3>{user.title}</h3>
            </div>
        </div>
    );
};

export default AidUser;