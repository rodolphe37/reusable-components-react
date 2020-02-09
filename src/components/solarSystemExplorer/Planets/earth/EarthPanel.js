import React from 'react';

const EarthPanel = () => {
    return (
        <div className="panel">
            <h1>Earth</h1>
            <p>Earth, our home, is the third planet from the sun. It is the only planet known to have an atmosphere containing free oxygen, oceans of liquid water on its surface, and, of course, life.</p>
            <p>Earth is the fifth largest of the planets in the solar systm — smaller than the four gas giants, Jupiter, Saturn, Uranusand Neptune, but larger than the three other rocky planets,</p>
            <img src={require("../../img/pexels-photo-414171.jpeg")} alt="earth"/>
            <h2>The Earth’s rotation is gradually slowing.</h2>
            <p>This deceleration is happening almost imperceptibly, at approximately 17 milliseconds per hundred years, although the rate at which it occurs is not perfectly uniform. This has the effect of lengthening our days, but it happens so slowly that it could be as much as 140 million years before the length of a day will have increased to 25 hours.</p>
            <h2>The Earth was once believed to be the centre of the universe.</h2>
            <p>Due to the apparent movements of the Sun and planets in relation to their viewpoint, ancient scientists insisted that the Earth remained static, whilst other celestial bodies travelled in circular orbits around it. Eventually, the view that the Sun was at the centre of the universe was postulated by Copernicus, though this is also not the case.</p>
            <h2>Earth has a powerful magnetic field.</h2>
            <p>This phenomenon is caused by the nickel-iron core of the planet, coupled with its rapid rotation. This field protects the Earth from the effects of solar wind.</p>
            <h2>There is only one natural satellite of the planet Earth.</h2>
            <p>As a percentage of the size of the body it orbits, the Moon is the largest satellite of any planet in our solar systm. In real terms, however, it is only the fifth largest natural satellite.</p>
            <br />
        </div>
    )
}

export default EarthPanel;
