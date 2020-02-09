import React from 'react';

const EarthInfo = () => {
    return (
        <div className="planet earth">
            <div className="moon moon">
                <h3>Moon</h3>
                <h2>Moon</h2>
            </div>
            <div className="trajectory m" />
            <div className="planet_description earth">
                <h2>Planet</h2>
                <h1>Earth</h1>
                <p>Earth, our home. It is the only planet known to have an atmosphere containing free oxygen, oceans of liquid water on its surface, and, of course, life.</p>
                <label htmlFor="readEarth">
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

export default EarthInfo;
