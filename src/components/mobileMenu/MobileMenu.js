import React from 'react';
import './MobileMenu.css'

const MobileMenu = () => {
    return (
        <div className="container">
            <input type="checkbox" className="toggle" id="toggle" defaultChecked="checked" /><label className="toggle" htmlFor="toggle"> Toggle tilt</label>
            <div className="menu">
                <div className="top">
                    <span className="search">
                        <input type="text" />
                    </span>
                    <a className="exit" href="#" tabIndex={0} />
                </div>
                <ul className="middle">
                    <li tabIndex={0}><i className="fa fa-calendar" />Calendar</li>
                    <li tabIndex={0}><i className="fa fa-camera" />Photos</li>
                    <li tabIndex={0}><i className="fa fa-check-square-o" />Tasks</li>
                    <li tabIndex={0}><i className="fa fa-map-marker" />Places</li>
                    <li tabIndex={0}><i className="fa fa-codepen" />Codepen</li>
                    <li tabIndex={0}><i className="fa fa-dribbble" />Dribbble</li>
                    <li tabIndex={0}><i className="fa fa-user" />User account</li>
                    <li tabIndex={0}><i className="fa fa-cogs" />Settings</li>
                </ul>
                <div className="bottom" />
                <div className="menu-back" />
                <div className="glass-reflection" />
            </div>
        </div>

    )
}

export default MobileMenu;
