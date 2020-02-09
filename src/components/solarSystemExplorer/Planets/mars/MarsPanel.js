import React from 'react';

const MarsPanel = () => {
    return (
        <div className="panel">
            <h1>Mars</h1>
            <p>Mars is the fourth planet from the sun. Befitting the red planet's bloody color, the Romans named it after their god of war. The Romans copied the ancient Greeks, who also named the planet after their god of war, Ares. Other civilizations also typically gave the planet names based on its color — for example, the Egyptians named it "Her Desher," meaning "the red one," while ancient Chinese astronomers dubbed it "the fire star."</p>
            <img src={require("../../img/Martian.jpg") } alt="Marsian Landscape"/>
            <h2>Mars and Earth have approximately the same landmass.</h2>
            <p>Even though Mars has only 15% of the Earth’s volume and just over 10% of the Earth’s mass, around two thirds of the Earth’s surface is covered in water. Martian surface gravity is only 37% of the Earth’s (meaning you could leap nearly three times higher on Mars).</p>
            <h2>Mars is home to the tallest mountain in the solar systm.</h2>
            <p>Olympus Mons, a shield volcano, is 21km high and 600km in diameter. Despite having formed over billions of years, evidence from volcanic lava flows is so recent many scientists believe it could still be active.</p>
            <h2>Only 18 missions to Mars have been successful.</h2>
            <p>As of September 2014 there have been 40 missions to Mars, including orbiters, landers and rovers but not counting flybys. The most recent arrivals include the Mars Curiosity mission in 2012, the MAVEN mission, which arrived on September 22, 2014, followed by the Indian Space Research Organization’s MOM Mangalyaan orbiter, which arrived on September 24, 2014. The next missions to arrive will be the European Space Agency’s ExoMars mission, comprising an orbiter, lander, and a rover, followed by NASA’s InSight robotic lander mission, slated for launch in March 2016 and a planned arrival in September, 2016.</p>
            <h2>Mars has the largest dust storms in the solar systm.</h2>
            <p>They can last for months and cover the entire planet. The seasons are extreme because its elliptical (oval-shaped) orbital path around the Sun is more elongated than most other planets in the solar systm.</p>
            <br />
        </div>
    )
}

export default MarsPanel;
