import React from 'react';

const UranusInfo = () => {
    return (
        <div className="planet uranus">
            <div className="moon miranda">
                <h3>Moon</h3>
                <h2>Miranda</h2>
            </div>
            <div className="moon ariel">
                <h3>Moon</h3>
                <h2>Ariel</h2>
            </div>
            <div className="moon umbriel">
                <h3>Moon</h3>
                <h2>Umbriel</h2>
            </div>
            <div className="trajectory mir" />
            <div className="trajectory ari" />
            <div className="trajectory umb" />
            <div className="planet_description uranus">
                <h2>Planet</h2>
                <h1>Uranus</h1>
                <p>The first planet to be discovered by scientists. The planet is notable for its dramatic tilt, which causes its axis to point nearly directly at the sun.</p>
                <label htmlFor="readUranus">
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

export default UranusInfo;
