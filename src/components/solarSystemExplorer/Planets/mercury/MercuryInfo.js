import React from 'react';

const MercuryInfo = () => {
    return (
        <div className="planet mercury">
            <div className="planet_description mercury">
                <h2>Planet</h2>
                <h1>Mercury</h1>
                <p>The closest planet to the sun. It circles the sun faster than all the other planets, which is why Romans named it after their swift-footed messenger god.</p>
                <label htmlFor="readMercury">
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

export default MercuryInfo;
