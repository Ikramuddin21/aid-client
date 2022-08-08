import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './RegisterVolunteer.css';

const RegisterVolunteer = () => {

    const [volunteer, setVolunteer] = useState({});
    const [register, setRegister] = useState(false);
    const { title } = useParams();
    const {user} = useAuth();

    // handle date
    const handleDate = e => {
        const date = e.target.value;
        const newDate = {...volunteer};
        newDate.date = date;
        setVolunteer(newDate);
    };

    // handle description
    const handleDescription = e => {
        const description = e.target.value;
        const newDescription = {...volunteer};
        newDescription.description = description;
        setVolunteer(newDescription);
    };

     // handle submit volunteer
     const handleVolunteer = e => {
        e.preventDefault();
        // console.log(volunteer);
        axios.post("https://guarded-oasis-25205.herokuapp.com/volunteers", volunteer)
        .then(res => {
            if(res.data.insertedId) {
                setRegister(true);
                e.target.reset();
            }
        })
    };

    return (
        <div className="register-volunteer">
            <div>
                <h2>Register as a Volunteer</h2>
                <form onSubmit={handleVolunteer} >
                    <input type="text" setVolunteer={volunteer.userName = user?.displayName} value={user?.displayName || ""} readOnly />
                    <input type="email" setVolunteer={volunteer.email = user?.email} value={user?.email || ""} readOnly />
                    <input type="date" onChange={handleDate} required/>
                    <input type="text" onChange={handleDescription} placeholder="Description" required />
                    <input type="text" setVolunteer={volunteer.title = title} value={title || ""} readOnly />
                    <button type="submit" className={register ? "success-register-btn" : ""}>{register ? "Successful Register" : "Registration"}</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterVolunteer;