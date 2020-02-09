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
import SaturnPanel from './Planets/saturn/SaturnPanel';
import UranusPanel from './Planets/uranus/UranusPanel';
import NeptunePanel from './Planets/neptune/NeptunePanel';
import PlutoPanel from './Planets/pluto/PlutoPanel';

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
            <SaturnPanel />
        <input className="read" id="readUranus" name="uranusRead" type="radio" />
        <label className="closeBig" htmlFor="closeUranus" />
        <input className="read" id="closeUranus" name="uranusRead" type="radio" />
            <UranusPanel />
        <input className="read" id="readNeptune" name="neptuneRead" type="radio" />
        <label className="closeBig" htmlFor="closeNeptune" />
        <input className="read" id="closeNeptune" name="neptuneRead" type="radio" />
            <NeptunePanel />
        <input className="read" id="readPluto" name="plutoRead" type="radio" />
        <label className="closeBig" htmlFor="closePluto" />
        <input className="read" id="closePluto" name="plutoRead" type="radio" />
            <PlutoPanel />
    </div>

    )
}

export default SolarSystemExplorer;
