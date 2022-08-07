import React from 'react';
import './Hero.css';

const Hero = () => {

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="hero">
            <h1>I Grow By Helping People In Need.</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </form>
        </div>
    );
};

export default Hero;