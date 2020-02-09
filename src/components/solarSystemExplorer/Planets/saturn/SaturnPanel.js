import React from 'react';

const SaturnPanel = () => {
    return (
        <div className="panel">
            <h1>Saturn</h1>
            <p>Saturn is the sixth planet from the sun and the second largest planet in the solar systm. Saturn was the Roman name for Cronus, the lord of the Titans in Greek mythology. Saturn is the root of the English word "Saturday."</p>
            <p>Saturn is the farthest planet from Earth visible to the naked human eye, but it is through a telescope that the planet's most outstanding features can be seen: Saturn's rings. Although the other gas giants in the solar systm — Jupiter, Uranus and Neptune — also have rings, those of Saturn are without a doubt the most extraordinary.</p>
            <img src={require("../../img/1.jpg")}  alt="Saturn Landscape"/>
            <h2>Saturn can be seen with the naked eye.</h2>
            <p>It is the fifth brightest object in the solar systm and is also easily studied through binoculars or a small telescope.</p>
            <h2>Saturn was known to the ancients, including the Babylonians and Far Eastern observers.</h2>
            <p>It is named for the Roman god Saturnus, and was known to the Greeks as Cronus.</p>
            <h2>Saturn is the flattest planet.</h2>
            <p>Its polar diameter is 90% of its equatorial diameter, this is due to its low density and fast rotation. Saturn turns on its axis once every 10 hours and 34 minutes giving it the second-shortest day of any of the solar systm’s planets.</p>
            <h2>Saturn orbits the Sun once every 29.4 Earth years.</h2>
            <p>Its slow movement against the backdrop of stars earned it the nickname of “Lubadsagush” from the ancient Assyrians. The name means “oldest of the old”.</p>
            <br />
        </div>
    )
}

export default SaturnPanel;
