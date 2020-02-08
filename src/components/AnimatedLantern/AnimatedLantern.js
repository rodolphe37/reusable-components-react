import React from 'react';
import './AnimatedLantern.css';

const AnimatedLantern = () => {
    return (
    <div className="stage">
    <div className="scene">
        <div className="halo">
            <i />
            <span className="halo-star" />
            <span className="halo-star" />
            <span className="halo-star" />
            <i />
            <i />
            <i />
        </div>
        <div className="lantern">
        <div className="lantern-handle" />
        <div className="lantern-inner">
            <div className="lantern-chain" />
            <div className="lantern-head" />
            <div className="lantern-body">
            <div className="lantern-spark" />
            <div className="lantern-spark" />
            <div className="lantern-spark" />
            <div className="lantern-flame" />
            </div>
            <div className="lantern-base" />
        </div>
        </div>
        <div className="planets">
        <div className="planet" />
        <div className="planet" />
        <div className="planet" />
        <div className="planet" />
        <div className="planet" />
        <div className="planet" />
        </div>
    </div>
    </div>

    )
}

export default AnimatedLantern;
