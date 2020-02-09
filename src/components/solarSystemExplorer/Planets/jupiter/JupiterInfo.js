import React from 'react';

const JupiterInfo = () => {
    return (
        <div className="planet jupiter">
            <div className="moon lo">
                <h3>Moon</h3>
                <h2>Io</h2>
            </div>
            <div className="moon europa">
                <h3>Moon</h3>
                <h2>Europa</h2>
            </div>
            <div className="moon ganymede">
                <h3>Moon</h3>
                <h2>Ganymede</h2>
            </div>
            <div className="trajectory lop" />
            <div className="trajectory eu" />
            <div className="trajectory ga" />
            <div className="planet_description jupiter">
                <h2>Planet</h2>
                <h1>Jupiter</h1>
                <p>Jupiter is the largest planet in the solar systm. Fittingly, it was named after the king of the gods in Roman mythology.</p>
                <label htmlFor="readJupiter">
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

export default JupiterInfo;
