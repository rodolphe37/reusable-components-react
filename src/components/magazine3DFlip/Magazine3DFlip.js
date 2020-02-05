import React from 'react';
import './magazine3DFlip.scss'

const Magazine3DFlip = () => {
    return (
    <div className="box">
    <div className="pink">
        Latest edition
    </div>
    <div className="button">
        Read now
    </div>
    <div className="holder">
        <div className="big">
        <h1>In this weeks edition</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae dui lobortis, rhoncus neque id, lacinia leo. Cras vitae tempus nulla, at lacinia metus.</p>
        </div>
    </div>
    <div className="description">
        <h1>An awesome magazine for you</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae dui lobortis, rhoncus neque id, lacinia leo. Cras vitae tempus nulla, at lacinia metus. Suspendisse urna lorem.</p>
    </div>
    <div className="cube">
        <div className="cube_inner">
        <div className="cube_front" />
        <div className="page_left" />
        <div className="page_right" />
        <div className="cube_back" />
        <div className="cube_left" />
        <div className="cube_right" />
        <div className="cube_top" />
        <div className="cube_bottom" />
        </div>
    </div>
    </div>

    )
}
export default Magazine3DFlip;
