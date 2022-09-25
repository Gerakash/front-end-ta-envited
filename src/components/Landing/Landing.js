import React, { useState } from 'react';
import './Landing.scss';
import landing  from '../img/landing-img.svg';

const Landing = ({navigateToCreate}) => {
    return (
        <div className='landing-wrapper'>
            <img src={landing} alt='Movie Night' className='landing-img'/>
            <div className='landing-offer'>
                <h1>Imagine if <br/>
                <span>Snapchat</span> <br/>
                had events.</h1>
                <p>Easily host and share events with your friends <br/> across any social media.</p>
            </div>
                <button className='landing-btn' onClick={navigateToCreate}>🎉 Create my event</button>
        </div>
    );
};

export default Landing;