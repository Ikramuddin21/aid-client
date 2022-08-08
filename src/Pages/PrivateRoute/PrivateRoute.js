import React from 'react';
import useAuth from '../../hooks/useAuth';
import {Navigate, useLocation} from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();
    
    if(loading) return <h1>Loading...</h1>
    return user?.email ? children :
    <Navigate to="/login" state={{from: location}} />
};

export default PrivateRoute;