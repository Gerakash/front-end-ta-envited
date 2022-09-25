import React from 'react';
import celebration from '../img/party.svg';
import './CreateEvent.scss';

const CreateEvent = ({navigateToEvent}) => {
    return (
        <div className='create-wrapper'>
            <img src={celebration} alt='Man in party mood'/>
                <div>
                    <h2>Create your event</h2>
                    <p>🎉Event</p>
                    <input/>
                    <p>🗓️ Date</p>
                    <input/>
                    <p>📍Location</p>
                    <input/>
                    <p>🔗 More Info</p>
                    <input/>
                    <button onClick={navigateToEvent}>Create your event</button>
                </div>
        </div>
    );
};

export default CreateEvent;