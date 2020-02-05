import React from 'react';
import './StatBars3d.scss';


const StatBars3d = () => {
    return (
    <div className="charts">
    <div className="charts_inner">
        <div className="title">
        <h1>3D Stat Bars</h1>
        <h2>Using CSS only</h2>
        </div>
        <div className="charts_inner__options">
        <input defaultChecked="checked" id="c-1" name="option" type="radio" />
        <label htmlFor="c-1">
            <i className="ion-person" />
            Active Users
        </label>
        <input id="c-2" name="option" no="no" type="radio" />
        <label htmlFor="c-2">
            <i className="ion-ios-analytics" />
            Data Useage
        </label>
        <input id="c-3" name="option" no="no" type="radio" />
        <label htmlFor="c-3">
            <i className="ion-compose" />
            Posts Made
        </label>
        <input id="c-4" name="option" no="no" type="radio" />
        <label htmlFor="c-4">
            <i className="ion-ios-videocam" />
            Video Count
        </label>
        <div className="chart">
            <div className="c-1 chart_item">
            <div className="cube">
                <div className="cube_inner">
                <div className="cube_front" />
                <div className="cube_back" />
                <div className="cube_left" />
                <div className="cube_right" />
                <div className="cube_top" />
                <div className="cube_bottom" />
                </div>
                <div className="cube_shadow" />
            </div>
            </div>
            <div className="c-2 chart_item">
            <div className="cube">
                <div className="cube_inner">
                <div className="cube_front" />
                <div className="cube_back" />
                <div className="cube_left" />
                <div className="cube_right" />
                <div className="cube_top" />
                <div className="cube_bottom" />
                </div>
                <div className="cube_shadow" />
            </div>
            </div>
            <div className="c-3 chart_item">
            <div className="cube">
                <div className="cube_inner">
                <div className="cube_front" />
                <div className="cube_back" />
                <div className="cube_left" />
                <div className="cube_right" />
                <div className="cube_top" />
                <div className="cube_bottom" />
                </div>
                <div className="cube_shadow" />
            </div>
            </div>
            <div className="c-4 chart_item">
            <div className="cube">
                <div className="cube_inner">
                <div className="cube_front" />
                <div className="cube_back" />
                <div className="cube_left" />
                <div className="cube_right" />
                <div className="cube_top" />
                <div className="cube_bottom" />
                </div>
                <div className="cube_shadow" />
            </div>
            </div>
            <div className="stat_block">
            <div className="cube_details" id="one">
                <div className="cube_details__icon">
                <i className="ion-social-octocat" />
                </div>
                <div className="cube_details__stat">
                <h2>Github</h2>
                <span>233,231</span>
                </div>
            </div>
            <div className="cube_details" id="one">
                <div className="cube_details__icon">
                <i className="ion-social-whatsapp" />
                </div>
                <div className="cube_details__stat">
                <h2>Whatsapp</h2>
                <span>129,123</span>
                </div>
            </div>
            <div className="cube_details" id="one">
                <div className="cube_details__icon">
                <i className="ion-social-skype" />
                </div>
                <div className="cube_details__stat">
                <h2>Skype</h2>
                <span>123,938</span>
                </div>
            </div>
            <div className="cube_details" id="one">
                <div className="cube_details__icon">
                <i className="ion-social-youtube" />
                </div>
                <div className="cube_details__stat">
                <h2>Youtube</h2>
                <span>382,238</span>
                </div>
            </div>
            </div>
            <div className="stat_block">
            <div className="cube_details" id="two">
                <div className="cube_details__icon">
                <i className="ion-social-octocat" />
                </div>
                <div className="cube_details__stat">
                <h2>Github</h2>
                <span>24,382 Gb</span>
                </div>
            </div>
            <div className="cube_details" id="two">
                <div className="cube_details__icon">
                <i className="ion-social-whatsapp" />
                </div>
                <div className="cube_details__stat">
                <h2>Whatsapp</h2>
                <span>89,293 Gb</span>
                </div>
            </div>
            <div className="cube_details" id="two">
                <div className="cube_details__icon">
                <i className="ion-social-skype" />
                </div>
                <div className="cube_details__stat">
                <h2>Skype</h2>
                <span>293,382 Gb</span>
                </div>
            </div>
            <div className="cube_details" id="two">
                <div className="cube_details__icon">
                <i className="ion-social-youtube" />
                </div>
                <div className="cube_details__stat">
                <h2>Youtube</h2>
                <span>38,273 Gb</span>
                </div>
            </div>
            </div>
            <div className="stat_block">
            <div className="cube_details" id="three">
                <div className="cube_details__icon">
                <i className="ion-social-octocat" />
                </div>
                <div className="cube_details__stat">
                <h2>Github</h2>
                <span>1,232,453</span>
                </div>
            </div>
            <div className="cube_details" id="three">
                <div className="cube_details__icon">
                <i className="ion-social-whatsapp" />
                </div>
                <div className="cube_details__stat">
                <h2>Whatsapp</h2>
                <span>9,293,341</span>
                </div>
            </div>
            <div className="cube_details" id="three">
                <div className="cube_details__icon">
                <i className="ion-social-skype" />
                </div>
                <div className="cube_details__stat">
                <h2>Skype</h2>
                <span>98,298,231</span>
                </div>
            </div>
            <div className="cube_details" id="three">
                <div className="cube_details__icon">
                <i className="ion-social-youtube" />
                </div>
                <div className="cube_details__stat">
                <h2>Youtube</h2>
                <span>88,823,281</span>
                </div>
            </div>
            </div>
            <div className="stat_block">
            <div className="cube_details" id="four">
                <div className="cube_details__icon">
                <i className="ion-social-octocat" />
                </div>
                <div className="cube_details__stat">
                <h2>Github</h2>
                <span>12,324,565</span>
                </div>
            </div>
            <div className="cube_details" id="four">
                <div className="cube_details__icon">
                <i className="ion-social-whatsapp" />
                </div>
                <div className="cube_details__stat">
                <h2>Whatsapp</h2>
                <span>15,533,425</span>
                </div>
            </div>
            <div className="cube_details" id="four">
                <div className="cube_details__icon">
                <i className="ion-social-skype" />
                </div>
                <div className="cube_details__stat">
                <h2>Skype</h2>
                <span>19,293,204</span>
                </div>
            </div>
            <div className="cube_details" id="four">
                <div className="cube_details__icon">
                <i className="ion-social-youtube" />
                </div>
                <div className="cube_details__stat">
                <h2>Youtube</h2>
                <span>22,132,425</span>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>

    )
}

export default StatBars3d;
