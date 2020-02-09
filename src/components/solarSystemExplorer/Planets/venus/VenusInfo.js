import React from 'react';

const VenusInfo = () => {
    return (
        <div className="planet venus">
            <div className="planet_description venus">
            <h2>Planet</h2>
            <h1>Venus</h1>
            <p>Named for the Roman goddess of love and beauty. In ancient times, Venus was often thought to be two different stars, the evening star and the morning star.</p>
            <label htmlFor="readVenus">
                <a>
                Read Mor
                <span>e</span>
                </a>
            </label>
            </div>
            <div className="overlay" />
        </div>
    )
}

export default VenusInfo;
