import React from 'react';

const JupiterPanel = () => {
    return (
        <div className="panel">
            <h1>Jupiter</h1>
            <p>Jupiter is the largest planet in the solar systm. Fittingly, it was named after the king of the gods in Roman mythology. In a similar manner, the ancient Greeks named the planet after Zeus, the king of the Greek pantheon.</p>
            <p>Jupiter helped revolutionize the way we saw the universe and ourselves in 1610, when Galileo discovered Jupiter's four large moons — Io, Europa, Ganymede and Callisto, now known as the Galilean moons. This was the first time that celestial bodies were seen circling an object other than Earth, major support of the Copernican view that Earth was not the center of the universe.</p>
            <img src={require("../../img/jupiter-landscape-1.jpg")} alt="jupiter Landscape"/>
            <h2>Jupiter is the fourth brightest object in the solar systm.</h2>
            <p>Only the Sun, Moon and Venus are brighter. It is one of five planets visible to the naked eye from Earth.</p>
            <h2>The ancient Babylonians were the first to record their sightings of Jupiter.</h2>
            <p>This was around the 7th or 8th century BC. Jupiter is named after the king of the Roman gods. To the Greeks, it represented Zeus, the god of thunder. The Mesopotamians saw Jupiter as the god Marduk and patron of the city of Babylon. Germanic tribes saw this planet as Donar, or Thor.</p>
            <h2>Jupiter has the shortest day of all the planets.</h2>
            <p>It turns on its axis once every 9 hours and 55 minutes. The rapid rotation flattens the planet slightly, giving it an oblate shape.</p>
            <h2>Jupiter orbits the Sun once every 11.8 Earth years.</h2>
            <p>From our point of view on Earth, it appears to move slowly in the sky, taking months to move from one constellation to another.</p>
            <br />
        </div>
    )
}

export default JupiterPanel;
