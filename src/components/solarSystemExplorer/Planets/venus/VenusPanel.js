import React from 'react';

const VenusPanel = () => {
    return (
        <div className="panel">
            <h1>Venus</h1>
            <p>Venus, the second planet from the sun, is named for the Roman goddess of love and beauty. The planet — the only planet named after a female — may have been named for the most beautiful deity of her pantheon because it shone the brightest of the five planets known to ancient astronomers.</p>
            <p>In ancient times, Venus was often thought to be two different stars, the evening star and the morning star — that is, the ones that first appeared at sunset and sunrise. In Latin, they were respectively known as Vesper and Lucifer. In Christian times, Lucifer, or "light-bringer," became known as the name of Satan before his fall. However, further observations of Venus in the space age show a very hellish environment. This makes Venus a very difficult planet to observe from up close, because spacecraft do not survive long on its surface.</p>
            <img src={require("../../img/2-whatistheave.jpg")} alt="Venus texture"/>
            <h2>A day on Venus lasts longer than a year.</h2>
            <p>It takes 243 Earth days to rotate once on its axis (sidereal day). The planet’s orbit around the Sun takes 225 Earth days, compared to the Earth’s 365. A day on the surface of Venus (solar day) takes 117 Earth days.</p>
            <h2>Venus rotates in the opposite direction to most other planets.</h2>
            <p>This means that Venus is rotating in the opposite direction to the Sun, this is also know as a retrograde rotation. A possible reason might be a collision in the past with an asteroid or other object that caused the planet to alter its rotational path. It also differs from most other planets in our solar systm by having no natural satellites.</p>
            <h2>Venus is the second brightest object in the night sky.</h2>
            <p>Only the Moon is brighter. With a magnitude of between -3.8 to -4.6 Venus is so bright it can be seen during daytime on a clear day.</p>
            <h2>Atmospheric pressure on Venus is 92 times greater than the Earth’s.</h2>
            <p>While its size and mass are similar to Earth, the small asteroids are crushed when entering its atmosphere, meaning no small craters lie on the surface of the planet. The pressure felt by a human on the surface would be equivalent to that experienced deep beneath the sea on Earth.</p>
            <br />
        </div>
    )
}

export default VenusPanel;
