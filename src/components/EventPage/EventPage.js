import React from 'react';
import cake from '../img/cake.png';
import './EventPage.scss';

const EventPage = () => {
    return (
        <div className='event-wrapper'>
            <div>
                <h3>Birthday Bash</h3>
                <p>Hosted by Elysia</p>
                <div>
                    <h5>🗓️ 18 August 6PM</h5>
                    <h5>📍 Sky Venu</h5>
                </div>

            </div>
            <img src={cake} alt='BR cake'/>
        </div>
    );
};

export default EventPage;