import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AidUser.css';

const AidUser = ({ user }) => {
    const navigate = useNavigate();

    // handle volunteer
    const handleVolunteer = () => {
        navigate(`/register-volunteer/${user.title}`);
    };
    return (
        <div className="aid-user" onClick={handleVolunteer}>
            <img src={user.img} alt="" />
            <div className="aid-user-text">
                <h3>{user.title}</h3>
            </div>
        </div>
    );
};

export default AidUser;