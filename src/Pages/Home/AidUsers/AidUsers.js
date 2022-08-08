import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AidUser from '../AidUser/AidUser';
import './AidUsers.css';

const AidUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://guarded-oasis-25205.herokuapp.com/aidUsers")
            .then(res => setUsers(res.data))
    }, []);

    return (
        <div className="aid-users">
            <div>
                {
                    !users.length ? <h1>Loading...</h1> :
                    users.map(user => <AidUser key={user._id} user={user}/>)
                }
            </div>
        </div>
    );
};

export default AidUsers;