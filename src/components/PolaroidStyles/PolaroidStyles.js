import React from 'react';
import './PolaroidStyles.css';

const PolaroidStyles = () => {
    return (
    <div>
    {/*NAVIGATION */}
    {/*<nav>
        <div className="nav2">
        <h1 className="logo-text">ZOO Polaroid</h1>
        <ul>
            <li><a href="#" className="nav2-links">Home</a></li>
            <li><a href="#" className="nav2-links">About</a></li>
            <li><a href="#" className="nav2-links">Tickets</a></li>
            <li><a href="#" className="nav2-links">Shop</a></li>
            <li><a href="#" className="nav2-links">Contact</a></li>
        </ul>
        </div>
    </nav>*/}
    <section className="container">
        <div className="div1">
            <img className="long-img" src={require("./img/pexels-photo-2295744.jpeg")} alt="" />
            <h2 className="title">Foxy Polaroid</h2>
        </div>
        <div className="div2">
            <img className="small-img" src={require("./img/pexels-photo-2220336.jpeg")} alt="" />
            <h2 className="title">Rawr Polaroid</h2>
        </div>
        <div className="div3">
            <img className="long-img" src={require("./img/pexels-photo-247431.jpeg")} alt="" />
            <h2 className="title">Big Polaroid</h2>
        </div>
        <div className="div4">
            <img className="small-img" src={require("./img/pexels-photo-1822603.jpeg")} alt="" />
            <h2 className="title">Little Polaroid</h2>
        </div>
        <div className="div5">
            <img className="small-img" src={require("./img/pexels-photo-1059823.jpeg")} alt="" />
            <h2 className="title">Birdy Polaroid</h2>
        </div>
        <div className="div6">
            <img className="small-img" src={require("./img/pexels-photo-752035.jpeg")} alt="" />
            <h2 className="title">Grumpy Polaroid</h2>
        </div>
        <div className="div7">
            <img className="small-img" src={require("./img/pexels-photo-802112.jpeg")} alt="" />
            <h2 className="title">Tall Polaroid</h2>
        </div>
        <div className="div8">
            <img className="small-img" src={require("./img/pexels-photo-145911.jpeg")}  alt="" />
            <h2 className="title">Panda Polaroid</h2>
        </div>
        <div className="div9">
            <img className="long-img" src={require("./img/gorilla-silverback-ape-animal-39338.jpeg")} alt="" />
            <h2 className="title">Gorilla Polaroid</h2>
        </div>
        <div className="div10">
            <img className="long-img" src={require("./img/pexels-photo-1181181.jpeg")} alt="" />
            <h2 className="title">Pink Polaroid</h2>
        </div>
        <div className="div11">
            <img className="small-img" src={require("./img/sumatran-tiger-tiger-big-cat-stripes-46251.jpeg")} alt="" />
            <h2 className="title">Growly Polaroid</h2>
        </div>
        <div className="div12">
            <img className="small-img" src={require("./img/pexels-photo-257558.jpeg")} alt="" />
            <h2 className="title">Deer Polaroid</h2>
        </div>
    </section>
    {/*<footer className="bottom" />*/}
    </div>

    )
}

export default PolaroidStyles;
