import React from 'react';

const NeptunePanel = () => {
    return (
        <div className="panel">
            <h1>Neptune</h1>
            <p>Neptune is the eighth planet from the sun. It was the first planet to get its existence predicted by mathematical calculations before it was actually seen through a telescope on Sept. 23, 1846. Irregularities in the orbit of Uranus led French astronomer Alexis Bouvard to suggest that the gravitational pull from another celestial body might be responsible. German astronomer Johann Galle then relied on subsequent calculations to help spot Neptune via telescope. Previously, astronomer Galileo Galilei sketched the planet, but he mistook it for a star due to its slow motion. In accordance with all the other planets seen in the sky, this new world was given a name from Greek and Roman mythology — Neptune, the Roman god of the sea.</p>
            <p>Only one mission has flown by Neptune – Voyager 2 in 1989 – meaning that astronomers have done most studies using ground-based telescopes. Today, there are still many mysteries about the cool, blue planet, such as why its winds are so speedy and why its magnetic field is offset.</p>
            <img src={require("../../img/images.jpeg")} alt="neptune landscape"/>
            <h2>Neptune was not known to the ancients.</h2>
            <p>It is not visible to the naked eye and was first observed in 1846. Its position was determined using mathematical predictions. It was named after the Roman god of the sea.</p>
            <h2>Neptune spins on its axis very rapidly.</h2>
            <p>Its equatorial clouds take 18 hours to make one rotation. This is because Neptune is not solid body.</p>
            <h2>Neptune is the smallest of the ice giants.</h2>
            <p>Despite being smaller than Uranus, Neptune has a greater mass. Below its heavy atmosphere, Uranus is made of layers of hydrogen, helium, and methane gases. They enclose a layer of water, ammonia and methane ice. The inner core of the planet is made of rock.</p>
            <h2>The atmosphere of Neptune is made of hydrogen and helium, with some methane.</h2>
            <p>The methane absorbs red light, which makes the planet appear a lovely blue. High, thin clouds drift in the upper atmosphere.</p>
        </div>
    )
}

export default NeptunePanel;
