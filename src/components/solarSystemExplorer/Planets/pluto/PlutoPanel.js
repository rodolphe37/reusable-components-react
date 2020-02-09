import React from 'react';

const PlutoPanel = () => {
    return (
        <div className="panel">
            <h1>Pluto</h1>
            <p>Pluto, once considered the ninth and most distant planet from the sun, is now the largest known dwarf planet in the solar systm. It is also one of the largest known members of the Kuiper Belt, a shadowy zone beyond the orbit of Neptune thought to be populated by hundreds of thousands of rocky, icy bodies each larger than 62 miles (100 kilometers) across, along with 1 trillion or more comets.</p>
            <p>In 2006, Pluto was reclassified as a dwarf planet, a change widely thought of as a demotion. The question of Pluto's planet status has attracted controversy and stirred debate in the scientific community, and among the general public, since then. In 2017, a science group (including members of the New Horizon mission) proposed a new definition of planethood based on "round objects in space smaller than stars," which would make the number of planets in our solar systm expand from 8 to roughly 100.</p>
            <img src={require("../../img/asd.jpeg")} alt="pluto landscape"/>
            <h2>Pluto is named after the Greek god of the underworld.</h2>
            <p>This is a later name for the more well known Hades and was proposed by Venetia Burney an eleven year old schoolgirl from Oxford, England.</p>
            <h2>Pluto was reclassified from a planet to a dwarf planet in 2006.</h2>
            <p>This is when the IAU formalised the definition of a planet as “A planet is a celestial body that (a) is in orbit around the Sun, (b) has sufficient mass for its self-gravity to overcome rigid body forces so that it assumes a hydrostatic equilibrium (nearly round) shape, and (c) has cleared the neighbourhood around its orbit.”</p>
            <h2>Pluto was discovered on February 18th, 1930 by the Lowell Observatory.</h2>
            <p>For the 76 years between Pluto being discovered and the time it was reclassified as a dwarf planet it completed under a third of its orbit around the Sun.</p>
            <h2>Pluto has five known moons.</h2>
            <p>The moons are Charon (discovered in 1978,), Hydra and Nix (both discovered in 2005), Kerberos originally P4 (discovered 2011) and Styx originally P5 (discovered 2012) official designations S/2011 (134340) 1 and  S/2012 (134340) 1.</p>
        </div>
    )
}

export default PlutoPanel;
