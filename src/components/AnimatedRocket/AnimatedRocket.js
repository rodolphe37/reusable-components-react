import React from 'react';
import './AnimatedRocket.scss';

const AnimatedRocket = () => {
    return (
    <div className="rocket">
    <div className="rocket-body">
        <div className="body" />
        <div className="fin fin-left" />
        <div className="fin fin-right" />
        <div className="window" />
    </div>
    <div className="exhaust-flame" />
    <ul className="exhaust-fumes">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
    </ul>
    <ul className="star">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
    </ul>
    </div>

    )
}

export default AnimatedRocket;
