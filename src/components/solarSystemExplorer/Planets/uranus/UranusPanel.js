import React from 'react';

const UranusPanel = () => {
    return (
        <div className="panel">
            <h1>Uranus</h1>
            <p>Uranus is the seventh planet from the sun and the first to be discovered by scientists. Although Uranus is visible to the naked eye, it was long mistaken as a star because of the planet's dimness and slow orbit. The planet is also notable for its dramatic tilt, which causes its axis to point nearly directly at the sun.</p>
            <p>British astronomer William Herschel discovered Uranus accidentally on March 13, 1781, with his telescope while surveying all stars down to those about 10 times dimmer than can be seen by the naked eye. One "star" seemed different, and within a year Uranus was shown to follow a planetary orbit.</p>
            <img src={require("../../img/Uranus-Facts-About-the-Planet-Uranus-700x325.jpg")} alt="Uranus landscape"/>
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
    )
}

export default UranusPanel;
