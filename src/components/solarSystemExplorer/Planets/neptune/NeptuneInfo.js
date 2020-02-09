import React from 'react';

const NeptuneInfo = () => {
    return (
        <div className="planet neptune">
        <div className="moon triton">
            <h3>Moon</h3>
            <h2>Triton</h2>
        </div>
        <div className="moon proteus">
            <h3>Moon</h3>
            <h2>Proteus</h2>
        </div>
        <div className="moon nereid">
            <h3>Moon</h3>
            <h2>Nereid</h2>
        </div>
        <div className="trajectory tri" />
        <div className="trajectory pro" />
        <div className="trajectory ner" />
        <div className="planet_description neptune">
            <h2>Planet</h2>
            <h1>Neptune</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <label htmlFor="readNeptune">
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
export default NeptuneInfo;
