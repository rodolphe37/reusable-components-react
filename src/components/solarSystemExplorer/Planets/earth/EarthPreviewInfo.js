import React from 'react';

const EarthPreviewInfo = () => {
    return (
        <label className="menu earth" htmlFor="earth">
            <div className="preview" />
            <div className="info">
                <h2>
                    <div className="pip" />
                    Earth
                </h2>
                <h3>1 AU</h3>
            </div>
        </label>
    )
}

export default EarthPreviewInfo;
