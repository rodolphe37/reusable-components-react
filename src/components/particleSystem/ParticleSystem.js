import React from 'react';
import './particleSystem.scss';
import backgroundImg from '../../assets/img/photo-1562729562-679ab5311bbf.jpeg';

const ParticleSystem = () => {
    return (
    <div>
    <div className="page-bg" />
    <img src={backgroundImg} alt="background" />
    <div className="animation-wrapper">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
    </div>
    <div className="page-wrapper"> 
        <h1>CSS Particles</h1>
    </div>
    </div>

    )
}

export default ParticleSystem;
