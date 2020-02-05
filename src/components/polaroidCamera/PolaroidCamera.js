import React from 'react';
import './PolaroidCamera.css';

const PolaroidCamera = () => {
    return (
    <div>
    {/* fossheim.io */}
    {/* Tutorial: https://fossheim.io/writing/posts/css-polaroid-camera/ */}
    <title>Polaroid</title>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/style.css" />
    <div className="camera">
        <div className="top">
        <div className="flash" />
        <div className="timer" />
        <div className="sensor" />
        <div className="lens"><div className="glass" /></div>
        <div className="shutter" />
        <div className="viewfinder"><div className="glass"><div className="back" /></div></div>
        <div className="toggle-container"><div className="toggle" /></div>
        <div className="power" />
        <div className="title" />
        </div>
        <div className="bottom">
        <div className="toggle-container"><div className="toggle"><div className="handle" /></div></div>
        <div className="printer" />
        <div className="labels">
            <div className="rainbow" />
            <div className="logo">Polaroid</div>
            <div className="type" />
        </div>
        </div>
    </div>
    </div>

    )
}

export default PolaroidCamera;
