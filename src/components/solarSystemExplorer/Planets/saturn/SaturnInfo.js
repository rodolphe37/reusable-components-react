import React from 'react';

const SaturnInfo = () => {
    return (
        <div className="planet saturn">
            <div className="moon titan">
                <h3>Moon</h3>
                <h2>Titan</h2>
            </div>
            <div className="moon dione">
                <h3>Moon</h3>
                <h2>Dione</h2>
            </div>
            <div className="moon enceladus">
                <h3>Moon</h3>
                <h2>Enceladus</h2>
            </div>
            <div className="trajectory ti" />
            <div className="trajectory di" />
            <div className="trajectory enc" />
            <div className="planet_description saturn">
                <h2>Planet</h2>
                <h1>Saturn</h1>
                <p>Saturn is the sixth planet from the sun and the second largest planet in the solar systm. Saturn was the Roman name for Cronus, the lord of the Titans.</p>
                <label htmlFor="readSaturn">
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
export default SaturnInfo;
