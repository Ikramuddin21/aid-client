import React from 'react';
import googleIcon from '../../images/google.svg';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <div>
                <h2>Login With</h2>
                <button className="google-login-btn">
                    <img className="google-icon" src={googleIcon} alt="" />
                    <span>Continue With Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;