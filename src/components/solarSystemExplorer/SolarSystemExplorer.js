import React from 'react';
import './SolarSystemExplorer.scss'
import PlutoPreviewInfo from './Planets/pluto/PlutoPreviewInfo';
import NeptunePreviewInfo from './Planets/neptune/NeptunePreviewInfo';
import NeptuneInfo from './Planets/neptune/NeptuneInfo';
import UranusPreviewInfo from './Planets/uranus/UranusPreviwInfo';
import SaturnPreviewInfo from './Planets/saturn/SaturnPreviewInfo';
import JupiterPreviewInfo from './Planets/jupiter/JupiterPreviewInfo';
import MarsPreviewInfo from './Planets/mars/MarsPreviewInfo';
import EarthPreviewInfo from './Planets/earth/EarthPreviewInfo';
import VenusPreviewInfo from './Planets/venus/VenusPreviewInfo';
import MercuryPreviewInfo from './Planets/mercury/MercuryPreviewInfo';
import MercuryInfo from './Planets/mercury/MercuryInfo';
import VenusInfo from './Planets/venus/VenusInfo';
import EarthInfo from './Planets/earth/EarthInfo';
import MarsInfo from './Planets/mars/MarsInfo';
import JupiterInfo from './Planets/jupiter/JupiterInfo';
import SaturnInfo from './Planets/saturn/SaturnInfo';
import UranusInfo from './Planets/uranus/UranusInfo';
import PlutoInfo from './Planets/pluto/PlutoInfo';
import MercuryPanel from './Planets/mercury/MercuryPanel';
import VenusPanel from './Planets/venus/VenusPanel';
import EarthPanel from './Planets/earth/EarthPanel';
import MarsPanel from './Planets/mars/MarsPanel';
import JupiterPanel from './Planets/jupiter/JupiterPanel';

const SolarSystemExplorer = () => {
    return (
    <div>
        <h1 className="logo">
            Solar explorer
            <span>in only CSS</span>
        </h1>
        <input className="planet9" id="pluto" name="planet" type="radio" />
            <PlutoPreviewInfo />
        <input className="planet8" id="neptune" name="planet" type="radio" />
            <NeptunePreviewInfo />
        <input className="planet7" id="uranus" name="planet" type="radio" />
            <UranusPreviewInfo />
        <input className="planet6" id="saturn" name="planet" type="radio" />
            <SaturnPreviewInfo />
        <input className="planet5" id="jupiter" name="planet" type="radio" />
            <JupiterPreviewInfo />
        <input defaultChecked="checked" className="planet4" id="mars" name="planet" type="radio" />
            <MarsPreviewInfo />
        <input defaultChecked="checked" className="planet3" id="earth" name="planet" type="radio" />
            <EarthPreviewInfo />
        <input defaultChecked="checked" className="planet2" id="venus" name="planet" type="radio" />
            <VenusPreviewInfo />
        <input defaultChecked="checked" className="planet1" id="mercury" name="planet" type="radio" />
            <MercuryPreviewInfo />
        <div className="solar">
            <div className="solar_systm">
                <MercuryInfo />
            </div>
            <div className="solar_systm">
                <VenusInfo />
            </div>
            <div className="solar_systm">
                <EarthInfo />
            </div>
            <div className="solar_systm">
                <MarsInfo />
            </div>
            <div className="solar_systm">
                <JupiterInfo />
            </div>
            <div className="solar_systm">
                <SaturnInfo />
            </div>
            <div className="solar_systm">
                <UranusInfo />
            </div>
            <div className="solar_systm">
            <NeptuneInfo />
            </div>
            <div className="solar_systm">
                <PlutoInfo />
            </div>
        </div>
        <input className="read" id="readMercury" name="mercuryRead" type="radio" />
        <label className="closeBig" htmlFor="closeMercury" />
        <input className="read" id="closeMercury" name="mercuryRead" type="radio" />
            <MercuryPanel />
        <input className="read" id="readVenus" name="venusRead" type="radio" />
        <label className="closeBig" htmlFor="closeVenus" />
        <input className="read" id="closeVenus" name="venusRead" type="radio" />
            <VenusPanel />
        <input className="read" id="readEarth" name="earthRead" type="radio" />
        <label className="closeBig" htmlFor="closeEarth" />
        <input className="read" id="closeEarth" name="earthRead" type="radio" />
            <EarthPanel />
        <input className="read" id="readMars" name="marsRead" type="radio" />
        <label className="closeBig" htmlFor="closeMars" />
        <input className="read" id="closeMars" name="marsRead" type="radio" />
            <MarsPanel />
        <input className="read" id="readJupiter" name="jupiterRead" type="radio" />
        <label className="closeBig" htmlFor="closeJupiter" />
        <input className="read" id="closeJupiter" name="jupiterRead" type="radio" />
            <JupiterPanel />
        <input className="read" id="readSaturn" name="saturnRead" type="radio" />
        <label className="closeBig" htmlFor="closeSaturn" />
        <input className="read" id="closeSaturn" name="saturnRead" type="radio" />
        <div className="panel">
            <h1>Saturn</h1>
            <p>Saturn is the sixth planet from the sun and the second largest planet in the solar systm. Saturn was the Roman name for Cronus, the lord of the Titans in Greek mythology. Saturn is the root of the English word "Saturday."</p>
            <p>Saturn is the farthest planet from Earth visible to the naked human eye, but it is through a telescope that the planet's most outstanding features can be seen: Saturn's rings. Although the other gas giants in the solar systm — Jupiter, Uranus and Neptune — also have rings, those of Saturn are without a doubt the most extraordinary.</p>
            <img src="http://ak0.picdn.net/shutterstock/videos/4049260/thumb/1.jpg" />
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
        <input className="read" id="readUranus" name="uranusRead" type="radio" />
        <label className="closeBig" htmlFor="closeUranus" />
        <input className="read" id="closeUranus" name="uranusRead" type="radio" />
        <div className="panel">
            <h1>Uranus</h1>
            <p>Uranus is the seventh planet from the sun and the first to be discovered by scientists. Although Uranus is visible to the naked eye, it was long mistaken as a star because of the planet's dimness and slow orbit. The planet is also notable for its dramatic tilt, which causes its axis to point nearly directly at the sun.</p>
            <p>British astronomer William Herschel discovered Uranus accidentally on March 13, 1781, with his telescope while surveying all stars down to those about 10 times dimmer than can be seen by the naked eye. One "star" seemed different, and within a year Uranus was shown to follow a planetary orbit.</p>
            <img src="http://www.cosmosup.com/wp-content/uploads/2016/02/Uranus-Facts-About-the-Planet-Uranus-700x325.jpg" />
            <h2>Uranus was officially discovered by Sir William Herschel in 1781.</h2>
            <p>It is too dim to have been seen by the ancients. At first Herschel thought it was a comet, but several years later it was confirmed as a planet. Herscal tried to have his discovery named “Georgian Sidus” after King George III. The name Uranus was suggested by astronomer Johann Bode. The name comes from the ancient Greek deity Ouranos.</p>
            <h2>Uranus turns on its axis once every 17 hours, 14 minutes.</h2>
            <p>The planet rotates in a retrograde direction, opposite to the way Earth and most other planets turn.</p>
            <h2>Uranus makes one trip around the Sun every 84 Earth years.</h2>
            <p>During some parts of its orbit one or the other of its poles point directly at the Sun and get about 42 years of direct sunlight. The rest of the time they are in darkness.</p>
            <h2>Uranus is often referred to as an “ice giant” planet.</h2>
            <p>Like the other gas giants, it has a hydrogen upper layer, which has helium mixed in. Below that is an icy “mantle, which surrounds a rock and ice core. The upper atmosphere is made of water, ammonia and the methane ice crystals that give the planet its pale blue colour.</p>
            <br />
        </div>
        <input className="read" id="readNeptune" name="neptuneRead" type="radio" />
        <label className="closeBig" htmlFor="closeNeptune" />
        <input className="read" id="closeNeptune" name="neptuneRead" type="radio" />
        <div className="panel">
            <h1>Neptune</h1>
            <p>Neptune is the eighth planet from the sun. It was the first planet to get its existence predicted by mathematical calculations before it was actually seen through a telescope on Sept. 23, 1846. Irregularities in the orbit of Uranus led French astronomer Alexis Bouvard to suggest that the gravitational pull from another celestial body might be responsible. German astronomer Johann Galle then relied on subsequent calculations to help spot Neptune via telescope. Previously, astronomer Galileo Galilei sketched the planet, but he mistook it for a star due to its slow motion. In accordance with all the other planets seen in the sky, this new world was given a name from Greek and Roman mythology — Neptune, the Roman god of the sea.</p>
            <p>Only one mission has flown by Neptune – Voyager 2 in 1989 – meaning that astronomers have done most studies using ground-based telescopes. Today, there are still many mysteries about the cool, blue planet, such as why its winds are so speedy and why its magnetic field is offset.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8Dd14tbXAzh1iz-EJl9tulRwH7Bb-SxX6sXpKFDbqb-NKwpE" />
            <h2>Neptune was not known to the ancients.</h2>
            <p>It is not visible to the naked eye and was first observed in 1846. Its position was determined using mathematical predictions. It was named after the Roman god of the sea.</p>
            <h2>Neptune spins on its axis very rapidly.</h2>
            <p>Its equatorial clouds take 18 hours to make one rotation. This is because Neptune is not solid body.</p>
            <h2>Neptune is the smallest of the ice giants.</h2>
            <p>Despite being smaller than Uranus, Neptune has a greater mass. Below its heavy atmosphere, Uranus is made of layers of hydrogen, helium, and methane gases. They enclose a layer of water, ammonia and methane ice. The inner core of the planet is made of rock.</p>
            <h2>The atmosphere of Neptune is made of hydrogen and helium, with some methane.</h2>
            <p>The methane absorbs red light, which makes the planet appear a lovely blue. High, thin clouds drift in the upper atmosphere.</p>
        </div>
        <input className="read" id="readPluto" name="plutoRead" type="radio" />
        <label className="closeBig" htmlFor="closePluto" />
        <input className="read" id="closePluto" name="plutoRead" type="radio" />
        <div className="panel">
            <h1>Pluto</h1>
            <p>Pluto, once considered the ninth and most distant planet from the sun, is now the largest known dwarf planet in the solar systm. It is also one of the largest known members of the Kuiper Belt, a shadowy zone beyond the orbit of Neptune thought to be populated by hundreds of thousands of rocky, icy bodies each larger than 62 miles (100 kilometers) across, along with 1 trillion or more comets.</p>
            <p>In 2006, Pluto was reclassified as a dwarf planet, a change widely thought of as a demotion. The question of Pluto's planet status has attracted controversy and stirred debate in the scientific community, and among the general public, since then. In 2017, a science group (including members of the New Horizon mission) proposed a new definition of planethood based on "round objects in space smaller than stars," which would make the number of planets in our solar systm expand from 8 to roughly 100.</p>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/asd.jpeg" />
            <h2>Pluto is named after the Greek god of the underworld.</h2>
            <p>This is a later name for the more well known Hades and was proposed by Venetia Burney an eleven year old schoolgirl from Oxford, England.</p>
            <h2>Pluto was reclassified from a planet to a dwarf planet in 2006.</h2>
            <p>This is when the IAU formalised the definition of a planet as “A planet is a celestial body that (a) is in orbit around the Sun, (b) has sufficient mass for its self-gravity to overcome rigid body forces so that it assumes a hydrostatic equilibrium (nearly round) shape, and (c) has cleared the neighbourhood around its orbit.”</p>
            <h2>Pluto was discovered on February 18th, 1930 by the Lowell Observatory.</h2>
            <p>For the 76 years between Pluto being discovered and the time it was reclassified as a dwarf planet it completed under a third of its orbit around the Sun.</p>
            <h2>Pluto has five known moons.</h2>
            <p>The moons are Charon (discovered in 1978,), Hydra and Nix (both discovered in 2005), Kerberos originally P4 (discovered 2011) and Styx originally P5 (discovered 2012) official designations S/2011 (134340) 1 and  S/2012 (134340) 1.</p>
        </div>
    </div>

    )
}

export default SolarSystemExplorer;
