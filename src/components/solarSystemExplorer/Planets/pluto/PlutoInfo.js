import React from 'react';

const PlutoInfo = () => {
    return (
        <div className="planet pluto">
            <div className="planet_description pluto">
                <h2>Dwarf planet</h2>
                <h1>Pluto</h1>
                <p>Pluto, once considered the ninth and most distant planet from the sun, is now the largest known dwarf planet in the solar systm.</p>
                <label htmlFor="readPluto">
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

export default PlutoInfo;
