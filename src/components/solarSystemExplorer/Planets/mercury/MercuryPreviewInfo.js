import React from 'react';

const MercuryPreviewInfo = () => {
    return (
        <label className="menu mercury" htmlFor="mercury">
            <div className="preview" />
            <div className="info">
                <h2>
                    <div className="pip" />
                    Mercury
                </h2>
                <h3>0.39 AU</h3>
            </div>
        </label>
    )
}

export default MercuryPreviewInfo;
