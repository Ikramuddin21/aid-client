import React from 'react';
import { useParams } from 'react-router-dom';
import './RegisterVolunteer.css';

const RegisterVolunteer = () => {
    const { title } = useParams();
    return (
        <div className="register-volunteer">
            <div>
                <h2>Register as a Volunteer</h2>
                <form >
                    <input type="text" />
                    <input type="email" />
                    <input type="date" />
                    <input type="text" placeholder="Description" />
                    <input type="text" value={title} />
                    <button type="submit">Registration</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterVolunteer;