import React from 'react';
import useAuth from '../../hooks/useAuth';
import googleIcon from '../../images/google.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || "/";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(() => {
                navigate(redirect_uri);
            })
    };

    return (
        <div className="login">
            <div>
                <h2>Login With</h2>
                <button onClick={handleGoogleSignIn} className="google-login-btn">
                    <img className="google-icon" src={googleIcon} alt="" />
                    <span>Continue With Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;