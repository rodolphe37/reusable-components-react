import React from 'react';

const MarsInfo = () => {
    return (
        <div className="planet mars">
            <div className="moon deimos">
                <h3>Moon</h3>
                <h2>Deimos</h2>
            </div>
            <div className="trajectory d" />
            <div className="moon phoebos">
                <h3>Moon</h3>
                <h2>Phoebos</h2>
            </div>
            <div className="trajectory p" />
            <div className="planet_description mars">
                <h2>Planet</h2>
                <h1>Mars</h1>
                <p>Fourth planet from the Sun and the second smallest planet in the solar systm. Named after the Roman god of war often described as the “Red Planet”.</p>
                <label htmlFor="readMars">
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

export default MarsInfo;
